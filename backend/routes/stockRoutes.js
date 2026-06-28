const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
const {
  home,
  getAllHoldings,
  getAllPositions,
  getAllOrders,
  newOrder,
  getAchievements,
  saveJournal,
  getJournals,
  deleteJournal,
} = require("../controllers/stockController");


// HOME

router.get("/", home);


router.get("/allHoldings",authMiddleware,getAllHoldings);

router.get("/allPositions",authMiddleware,getAllPositions);

router.get("/allOrders",authMiddleware,getAllOrders);

router.post("/newOrder",authMiddleware,newOrder);
router.get("/achievements",authMiddleware,getAchievements);
router.post("/journal",authMiddleware,saveJournal);

router.get("/journal",authMiddleware,getJournals);
router.delete("/journal/:id",authMiddleware,deleteJournal);
module.exports = router;