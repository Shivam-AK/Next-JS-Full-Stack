import mongoose from "mongoose";

const nextAuthSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User Name is Required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "E-mail is Required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Image is Required"],
    },
  },
  { timestamps: true }
);

const nextAuth =
  mongoose.models?.nextAuth || mongoose.model("nextAuth", nextAuthSchema);

export default nextAuth;
