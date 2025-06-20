// import z from "zod/v4";
import { email, object, string } from "zod/v4";

export const loginSchema = object({
  email: email("Please Enter a Valid Email Address."),
  password: string().min(6, "Password should be at least 6 character long."),
});

export const registerSchema = loginSchema.extend({
  name: string()
    .min(3, "Name should be at least 3 character long.")
    .max(50, "Name should be at max 50 character long."),
});
