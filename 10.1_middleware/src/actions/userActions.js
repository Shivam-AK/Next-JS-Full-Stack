"use server";

import { flattenError } from "zod/v4";
import { loginSchema, registerSchema } from "@/schema/userSchema";
import connectDB from "@/lib/connectDB";
import User from "@/models/user.model";
import Session from "@/models/session.model";
import { cookies } from "next/headers";
import { getLoggedInUser, getUserSessionId, signCookie } from "@/lib/auth";

export async function registerUser(previousData, formData) {
  try {
    const { success, data, error } = registerSchema.safeParse(formData);

    if (!success) {
      return { success: false, errors: flattenError(error).fieldErrors };
    }

    await connectDB();
    const { name, email, password } = data;

    const existedUser = await User.findOne({
      email,
    });

    if (existedUser) {
      return { success: false, error: "User with E-mail already Exists." };
    }

    const register = await User.create({ name, email, password });

    return {
      success: true,
      message: "User Registered Successfully.",
      data: {
        name: register.name,
        email: register.email,
        createdAt: register.createdAt,
      },
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function loginUser(_, formData) {
  try {
    const { success, data, error } = loginSchema.safeParse(formData);

    if (!success) {
      return { success: false, errors: flattenError(error).fieldErrors };
    }

    await connectDB();
    const { email, password } = data;
    const cookieStore = await cookies();

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return { success: false, error: "Unauthorized User. Register Now" };
    }

    // Check User Password
    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      return { success: false, error: "Invalid Credentials." };
    }

    const session = await Session.create({ userId: user.id });

    cookieStore.set("userId", signCookie(session.id), {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24,
    });

    return {
      success: true,
      message: "User Logged In Successfully.",
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function logoutUser() {
  try {
    const cookieStore = await cookies();
    const sessionId = await getUserSessionId();

    await Session.findByIdAndDelete(sessionId);
    cookieStore.delete("userId");

    return { success: true, message: "User Logged Out Successfully." };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getCurrentUser() {
  try {
    const user = await getLoggedInUser();
    if (!user.name) return user;

    return {
      success: true,
      message: "Fetched User Successfully.",
      data: {
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      },
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
