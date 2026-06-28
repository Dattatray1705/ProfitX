const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const UserModel = require("../model/UserModel");
const FundModel = require("../model/FundModel");


//transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

console.log("EMAIL =", process.env.EMAIL);
console.log("EMAIL_PASSWORD =", process.env.EMAIL_PASSWORD);

transporter.verify((error, success) => {
  if (error) {
    console.log("MAIL ERROR:", error);
  } else {
    console.log("MAIL SERVER READY");
  }
});




const signup = async (req, res) => {
  try {
    const { name, email, password,mobile,pan,bank,address, } =
      req.body;

    const existingUser =
      await UserModel.findOne({
        email,
      });

    if (existingUser) {
      return res.status(400).json({
        message:
          "User already exists",
      });
    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    const dematId =
      "PFX" +
      Math.floor(
        100000 +
          Math.random() * 900000
      );

 const user = await UserModel.create({
  name,
  email,
  password: hashedPassword,
  mobile,
  pan,
  bank,
  address,
  dematId,
  isProfileComplete: true,
});

await FundModel.create({
  userId: user._id,
  balance: 0,
});
    res.status(201).json({
      message:
        "User created successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
//login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

const token = jwt.sign(
  {
    userId: user._id,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "1d",
  }
);

res.cookie("token", token, {
  httpOnly: true,
  secure: false, // localhost
  sameSite: "lax",
  maxAge: 24 * 60 * 60 * 1000,
});

res.status(200).json({
  message: "Login successful",
});
  } catch (err) {
  console.log(err);

  res.status(500).json({
    message: err.message,
  });
}
};

       //logOut
const logout = (req, res) => {
  res.clearCookie("token");

  res.status(200).json({
    message: "Logout successful",
  });
};


//me 
const getMe = async (req, res) => {
  try {
    const user = await UserModel.findById(
      req.user.userId
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      user,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
//update profile
const updateProfile = async (req,res) => {
  try {
    const {
      email,
      mobile,
      pan,
      bank,
      address,
    } = req.body;

    const user =
      await UserModel.findByIdAndUpdate(
        req.user.userId,
        {
          email,
          mobile,
          pan,
          bank,
          address,
          isProfileComplete: true,
        },
        {
          returnDocument: "after",
        }
      ).select("-password");

    res.status(200).json({
      message:
        "Profile Updated Successfully",
      user,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

//Delete

const deleteAccount = async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(
      req.user.userId
    );

    res.clearCookie("token");

    res.status(200).json({
      message: "Account Deleted Successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

//forget password
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    user.resetOtp = otp;
    user.otpExpiry = new Date(
      Date.now() + 10 * 60 * 1000
    );

    await user.save();

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "ProfitX Password Reset OTP",
      html: `
        <h2>ProfitX</h2>
        <p>Your OTP is:</p>
        <h1>${otp}</h1>
        <p>Valid for 10 minutes.</p>
      `,
    });

    res.status(200).json({
      message: "OTP Sent Successfully",
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

//  verifyOtpAndResetPassword,

const verifyOtpAndResetPassword = async (
  req,
  res
) => {
  try {
    const {
      email,
      otp,
      password,
    } = req.body;

    const user =
      await UserModel.findOne({
        email,
      });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (user.resetOtp !== otp) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    if (
      user.otpExpiry <
      Date.now()
    ) {
      return res.status(400).json({
        message: "OTP Expired",
      });
    }

    user.password =
      await bcrypt.hash(
        password,
        10
      );

    user.resetOtp = "";
    user.otpExpiry = null;

    await user.save();

    res.status(200).json({
      message:
        "Password Updated Successfully",
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const updateTheme = async (req, res) => {
  try {
    const { theme } = req.body;

    const user =
      await UserModel.findByIdAndUpdate(
        req.user.userId,
        { theme },
        {
          returnDocument: "after",
        }
      );

    res.status(200).json({
      success: true,
      theme: user.theme,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  signup,
  login,
  logout,
  getMe,
  updateProfile,
  deleteAccount,
  forgotPassword,
  verifyOtpAndResetPassword,
  updateTheme,
};