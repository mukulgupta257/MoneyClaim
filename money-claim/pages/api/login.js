import cookie from "cookie";
import mongoose from "mongoose";
import Users from "../../Model/UserModel";

export default async function handler(req, res) {
  mongoose
    .connect(
      "mongodb+srv://mukulgupta257:ibx_1212@cluster0.w1w5pcq.mongodb.net/test",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((_) => {
      console.log("connected to mongodb");
    })
    .catch((error) => {
      console.log(error.reason);
    });
  const data = req.body && JSON.parse(req.body);
  const existUser = await Users.findOne({
    email: data.username.toLowerCase(),
    password: data.password.toLowerCase(),
  });
  if (existUser) {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("UserInfo", JSON.stringify(existUser), {
        httpOnly: false,
        path: "/",
      })
    );
    res.status(200).json({
      message: "Sucess",
    });
  } else {
    res.status(403).json({
      message: "Invalid Email or Password",
    });
  }
}
