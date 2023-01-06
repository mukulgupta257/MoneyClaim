import mongoose from "mongoose";

const user = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  refferalCode: { type: String },
  isAdmin: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
});

const Users = mongoose.models.Users || mongoose.model("Users", user);

export default Users;
