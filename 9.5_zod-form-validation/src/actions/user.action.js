"use server";

import { registerSchema } from "@/schema/userSchema";
import { flattenError } from "zod/v4";

export async function registerUser(previousData, formData) {
  console.log(formData, { previousData });

  const { success, data, error } = registerSchema.safeParse(formData);

  if (!success) {
    return { errors: flattenError(error).fieldErrors };
  }

  // return { error: "User Not Registered." };
  return { message: `${formData.email} Registered.`, data };
}
