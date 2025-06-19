"use server";

export async function registerUser(previousData, formData) {
  console.log({ previousData });
  console.log(formData.get("name"));

  // return { error: "User Not Registered." };
  return { message: `${formData.get("email")} Registered.` };
}
