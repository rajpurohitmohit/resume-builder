import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

UserSchema.methods.comparePassword = function (password: string) {
  return bcrypt.compareSync(password, this.password);
};

const User = model("User", UserSchema);

export default User;
