const HoldingModel = require("../model/HoldingModel");
const PositionModel = require("../model/PositionModel");
const OrderModel = require("../model/OrderModel");
const FundModel = require("../model/FundModel");
const TradeJournalModel = require("../model/TradeJournalModel");
// HOME
const home = (req, res) => {
  res.send("Server Running Properly!");
};

// HOLDINGS
const getAllHoldings = async (req, res) => {
  try {
    const allHoldings = await HoldingModel.find({userId: req.user.userId,});
    res.json(allHoldings);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
};

// POSITIONS
const getAllPositions = async (req, res) => {
  try {
    const allPositions = await PositionModel.find({userId: req.user.userId,});
    res.json(allPositions);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
};

// ORDERS
const getAllOrders = async (req, res) => {
  try {
    const allOrders = await OrderModel.find({ userId: req.user.userId,});
    res.json(allOrders);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
};

// NEW ORDER
const newOrder = async (req, res) => {
   console.log("NEW ORDER API HIT");
    const userId = req.user.userId; 
  const { name, qty, price, mode  } = req.body;

  try {
       const totalCost =
      Number(qty) * Number(price);
console.log("USER ID:", userId);
    const fund =
      await FundModel.findOne({
        userId,
      });
console.log("Fund:", fund);
    if (!fund) {
      return res.status(404).json({
        message:
          "Fund account not found",
      });
    }

console.log("========== NEW ORDER ==========");

console.log(req.body);
console.log("Mode:", mode);
console.log("Qty:", qty);
console.log("Price:", price);
console.log("Total Cost:", totalCost);
console.log("Fund Balance:", fund.balance);
    
const existingHolding =
  await HoldingModel.findOne({
    userId,
    name,
  });

if (mode === "BUY") {

  if (
    existingHolding &&
    existingHolding.qty < 0
  ) {
    // Closing short position
    fund.balance += totalCost;
  } else {

    if (fund.balance < totalCost) {
      return res.status(400).json({
        message:
          "Insufficient Balance",
      });
    }

    // Opening long position
    fund.balance -= totalCost;
  }
}

if (mode === "SELL") {

  if (
    existingHolding &&
    existingHolding.qty > 0
  ) {
    // Closing long position
    fund.balance += totalCost;
  } else {

    if (fund.balance < totalCost) {
      return res.status(400).json({
        message:
          "Insufficient Balance",
      });
    }

    // Opening short position
    fund.balance -= totalCost;
  }
}

await fund.save();
  
    // =====================
    // ORDER LOGIC
    // =====================

    let existingOrder = await OrderModel.findOne({userId, name });
   

    if (existingOrder) {
      if (existingOrder.mode === mode) {
        existingOrder.qty += Number(qty);
      } else {
        existingOrder.qty -= Number(qty);

        if (existingOrder.qty <= 0) {
          await OrderModel.deleteOne({ userId, name });
          existingOrder = null;
        }
      }

      if (existingOrder) {
        existingOrder.price = Number(price);
        await existingOrder.save();
      }
    } else {
 existingOrder = await OrderModel.create({
  userId,
  name,
  qty: Number(qty),
  price: Number(price),
  mode,
});

    }


    // =====================
    // HOLDING LOGIC
    // =====================

  let existingStock = await HoldingModel.findOne({ userId, name });
  console.log("HOLDING BEFORE UPDATE:", existingStock);
console.log("MODE:", mode);
console.log("QTY:", qty);

if (existingOrder) {
  if (existingStock) {

    if (mode === "BUY") {

      const oldQty = existingStock.qty;
      const buyQty = Number(qty);
      const buyPrice = Number(price);

      const totalCost =
        (existingStock.avg * oldQty) +
        (buyPrice * buyQty);

      const totalQty = oldQty + buyQty;

      existingStock.avg = totalCost / totalQty;
      existingStock.qty = totalQty;

    } else if (mode === "SELL") {

      existingStock.qty =
        existingStock.qty - Number(qty);

      if (existingStock.qty <= 0) {
        await HoldingModel.deleteOne({  userId, name });
        existingStock = null;
      }
    }

    if (existingStock) {
      existingStock.price = Number(price);

      const netPercent =
        (
          ((Number(price) - existingStock.avg) /
            existingStock.avg) *
          100
        ).toFixed(2) + "%";

      existingStock.net = netPercent;

      await existingStock.save();
    }

  } else {
    await HoldingModel.create({
      userId,
      name,
      qty:mode === "SELL"
        ? -Number(qty)
        : Number(qty),
      avg: Number(price),
      price: Number(price),
      net: "0%",
      day: "0%",
    });
  }
} else {
  await HoldingModel.deleteOne({ userId, name });
}

    // =====================
    // POSITION LOGIC
    // =====================

 let existingPosition = await PositionModel.findOne({ userId, name });
console.log("USER ID:", userId);
console.log("ORDER:", existingOrder);
console.log("POSITION BEFORE:", existingPosition);
if (existingOrder) {
 if (existingPosition) {
  const netPercent =
    (
      ((Number(price) - existingPosition.avg) /
        existingPosition.avg) *
      100
    ).toFixed(2) + "%";

  existingPosition.qty = existingOrder.qty;
  existingPosition.price = Number(price);
  existingPosition.net = netPercent;

  await existingPosition.save();
} else {
   const position =  await PositionModel.create({
      userId,
      product: "CNC",
      name,
      qty: existingOrder.qty,
      avg: Number(price),
      price: Number(price),
      net: "0%",
      day: "0%",
      isLoss: false,
    });
    console.log("POSITION CREATED:", position);
  }
} else {
  await PositionModel.deleteOne({ userId, name });
}
const totalTrades = await OrderModel.countDocuments({
  userId,
});

let unlockedAchievement = null;

if (totalTrades === 1)
  unlockedAchievement = "First Trade";
else if (totalTrades === 5)
  unlockedAchievement = "Beginner Trader";
else if (totalTrades === 10)
  unlockedAchievement = "Active Trader";
else if (totalTrades === 25)
  unlockedAchievement = "Market Expert";
else if (totalTrades === 50)
  unlockedAchievement = "Trading Master";
return res.status(200).json({
  success: true,
  message: `${mode} order successful`,
  unlockedAchievement,
});
}catch (err) {
  console.log("NEW ORDER ERROR:");
  console.log(err);
  

  res.status(500).json({
    message: err.message,
  });
}

};

// Achivements

const getAchievements = async (req, res) => {
  try {
    const totalTrades =
      await OrderModel.countDocuments({
        userId: req.user.userId,
      });

    const achievements = [
      {
        title: "First Trade",
        unlocked: totalTrades >= 1,
      },
      {
        title: "Beginner Trader",
        unlocked: totalTrades >= 5,
      },
      {
        title: "Active Trader",
        unlocked: totalTrades >= 10,
      },
      {
        title: "Market Expert",
        unlocked: totalTrades >= 25,
      },
      {
        title: "Trading Master",
        unlocked: totalTrades >= 50,
      },
    ];

    res.json({
      totalTrades,
      achievements,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};


// TRADE JOURNAL

const saveJournal = async (
  req,
  res
) => {
  try {

    const {
      stockName,
      reason,
      analysis,
      targetPrice,
      holdingPeriod,
    } = req.body;

    const journal =
      await TradeJournalModel.create({
        userId:
          req.user.userId,

        stockName,

        reason,

        analysis,

        targetPrice,

        holdingPeriod,
      });

    res.status(201).json(
      journal
    );

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};

const getJournals = async (
  req,
  res
) => {
  try {

    const journals =
      await TradeJournalModel.find({
        userId:
          req.user.userId,
      }).sort({
        createdAt: -1,
      });

    res.json(journals);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};

  
  
  
  const deleteJournal = async (req, res) => {
  try {
    await TradeJournalModel.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Journal Deleted",
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
  
  
  
  
  


module.exports = {
  home,
  getAllHoldings,
  getAllPositions,
  getAllOrders,
  newOrder,
  getAchievements,
  saveJournal,
  getJournals,
  deleteJournal,
};
  