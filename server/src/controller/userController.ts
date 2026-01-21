import type { Request, Response } from "express";
import "../types/express.js";
import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Resume from "../model/resumeModel.js";

const generateToken = (userId: string) => {
  if (!userId) {
    return;
  }

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  const token = jwt.sign({ userId }, jwtSecret, { expiresIn: "7d" });

  return token;
};

// User Registration
// POST: /api/users/register
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // checking if required field are empty
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }
    const user = await User.findOne({ email });

    // checking if the user already exists
    if (user) {
      return res.status(400).json({
        message: "User already exists!",
      });
    }

    // create new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // return success message
    const token = generateToken(newUser._id.toString());
    const userResponse = { ...newUser.toObject(), password: undefined };

    return res.status(201).json({
      message: "User created Successfully",
      token,
      user: userResponse,
    });
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
};

// User Login
// POST: /api/users/login
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // checking if required field are empty
    if (!email || !password) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }
    const user = await User.findOne({ email });

    // checking if user exists
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // checking if the password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Incorrect Password",
      });
    }

    // return success message
    const token = generateToken(user._id.toString());
    const userResponse = { ...user.toObject(), password: undefined };

    return res.status(200).json({
      message: "Login Successful",
      token,
      user: userResponse,
    });
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
};

// Getting user by id
// GET: api/users/data
export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    // check if the user exists
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // return user
    const userResponse = { ...user.toObject(), password: undefined };

    return res.status(200).json({ user: userResponse });
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
};

// Getting User Resume
// GET: /api/users/resumes
export const getUserResume = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // return user resume
    const resumes = await Resume.find({ userId });
    return res.status(200).json({ resumes });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};
