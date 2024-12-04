"use server";

import { User } from "@/models/user.model";
import { connectToDB } from "./db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Product } from "@/models/product.model";

export const signUpUser = async ({
  firstName,
  lastName,
  email,
  password,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  try {
    connectToDB();
    const hashedpassword = await bcrypt.hash(password, 10);
    console.log(hashedpassword);

    const res = await User.create({
      firstName,
      lastName,
      email,
      password: hashedpassword,
    });
    console.log("[res]", res);

    const token = jwt.sign(
      {
        id: res._id,
      },
      process.env.JWT_PASSWORD!
    );

    return { token };
  } catch (error) {
    console.log("[SIGNUP USER ERROR]", error);
    return false;
  }
};

export const signInUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    connectToDB();

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      const isPasswordValid = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (!isPasswordValid) {
        return false;
      }

      const token = jwt.sign(
        {
          id: existingUser._id,
        },
        process.env.JWT_PASSWORD!
      );

      return { token };
    }
    return false;
  } catch (error) {
    console.log("[SIGNIN USER ERROR]", error);
    return false;
  }
};

export const fetchUserDetails = async (token: string) => {
  try {
    connectToDB();

    if (!token) {
      throw new Error("Token is missing");
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_PASSWORD!
    ) as jwt.JwtPayload;

    const user = await User.findById(decoded.id).select("-password"); // Exclude password

    if (!user) {
      throw new Error("User not found");
    }

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.error("[FETCH USER DETAILS ERROR]", error);
    throw new Error("Failed to fetch user details");
  }
};

export const updateUserTeam = async (userId: string, team: string) => {
  try {
    connectToDB();

    await User.findByIdAndUpdate(userId, {
      team,
    });
    return true;
  } catch (error) {
    console.error("[UPDATE USER TEAM ERROR]", error);
    return false;
  }
};

export const fetchAllProducts = async () => {
  try {
    connectToDB();

    const products = await Product.find();

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.error("[FETCH ALL PRODUCTS ERROR]", error);
    throw new Error("Failed to fetch products");
  }
};
