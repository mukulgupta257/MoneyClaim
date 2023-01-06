import cookie from "cookie";
import mongoose from "mongoose";
import Users from "../../Model/UserModel";

export default function handler(req, res) {
  const data = JSON.parse(req.cookies.userData);
  if (data) {
    const user=new Users({
        name:data.name,
        email:data.email,
        password:data.password
    })
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("UserInfo", JSON.stringify(data), {
        httpOnly: false,
        path: "/",
      })
    );
    res
      .status(200)
      .json({
        message: "Account Created Sucessfully Please Login to Continue",
      });
  }
}
