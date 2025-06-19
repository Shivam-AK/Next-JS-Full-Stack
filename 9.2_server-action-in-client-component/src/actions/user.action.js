"use server";

export async function registerUser(formData) {
  console.log(formData);
  console.log(formData.get("name"));

  return { message: "We Got The Data." };
}
