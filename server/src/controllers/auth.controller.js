import bcrypt from "bcryptjs";
import prisma from "../lib/prisma.js";

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Missing required fields during signup!!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(`hashed password: ${hashedPassword}`);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      message: "User created successfully",
      username: username,
      email: email,
      password: password,
    });
  } catch (error) {
    console.error(`Signup error => ${error}`);
    res.status(500).json({ error: "Failed to create user!!" });
  }
};

const login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Missing required fields during login!!" });
    }
	
    // CHECK IF THE USER EXIST IN THE DATABASE
    const CreatedUser = await prisma.user.findUnique({
      where: { username: username },
    });

    if (!CreatedUser) {
      res
        .status(401)
        .json({ message: "Invalid Credentials,User doent exist!!" });
    }

    //CHECK IF THE PASSWORD IS CORRECT
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res
        .status(401)
        .json({ message: "Invalid Credentials,Invalid password!!" });
    }

    res.status(200).json({
      message: "User logedin successfully!!",
    });
  } catch (error) {
    console.error(`Login error => ${error}`);
    res.status(500).json({ error: "Failed to login user!!" });
  }
};

const googleAuthentication = (req, res, next) => {};

export { signup, login, googleAuthentication };
