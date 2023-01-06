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
  const data = req.cookies.userData && JSON.parse(req.cookies.userData);
  if (data) {
    const user = new Users({
      name: data.name,
      email: data.username,
      password: data.password,
      refferalCode: data.refferalCode ? data.refferalCode : "",
      isAdmin: false,
      phoneNumber: data.contactnumber,
    });

    const newUser = await user.save();
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("UserInfo", JSON.stringify(newUser), {
        httpOnly: false,
        path: "/",
      })
    );
    if (data.password !== data.confirmpassword) {
      res.status(403).json({
        message: "Password and confirm password should be same",
      });
    } else {
      res.status(200).json({
        message: "Account Created Sucessfully Please Login to Continue",
        user,
      });
    }
  }
}
