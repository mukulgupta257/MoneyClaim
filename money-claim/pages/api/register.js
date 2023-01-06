import mongoose from "mongoose";
import Cookies from "js-cookie";

export default function handler(req, res) {
  const data = JSON.parse(req.body);
  
  res.status(200).json({ name: "John Doe" });
}
