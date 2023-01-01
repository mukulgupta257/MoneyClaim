import mongoose from "mongoose";

const user = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: string, required: true, unique: true },
  password: { type: string, required: true },
  refferalCode: { type: string, required: true, unique: true },
  isAdmin: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
});

const Users = mongoose.model.Users || mongoose.model("Users", user);

export default Users;
