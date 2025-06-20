"use server";

import { flattenError } from "zod/v4";
import { registerSchema } from "@/schema/userSchema";
import connectDB from "@/lib/connectDB";
import User from "@/models/user.model";

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
