import cookie from "cookie";
import mongoose from "mongoose";

export default function handler(req, res) {
  const data = JSON.parse(req.cookies.userData);
  if (data) {
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
