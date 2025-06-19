"use server";

export async function registerUser(previousData, formData) {
  console.log({ previousData });
  console.log(formData);

  // return { error: "User Not Registered." };
  return { message: `${formData.email} Registered.` };
}
