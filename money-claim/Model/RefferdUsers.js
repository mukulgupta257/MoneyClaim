import mongoose from "mongoose";

const user = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: string, required: true, unique: true },
  password: { type: string, required: true },
  refferalCode: { type: string, required: true, unique: true },
  refferedUsers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  phoneNumber: { type: Number, required: true },
});

const Users = mongoose.model.Users || mongoose.model("Users", user);

export default Users;
