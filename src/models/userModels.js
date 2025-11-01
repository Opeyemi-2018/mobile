import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 6 },
    profileImage: { type: String, required: true, default: "" },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
