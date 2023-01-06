import cookie from "cookie";

export default function handler(req, res) {
  const data = JSON.parse(req.cookies.userData);
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("UserInfo", JSON.stringify(data), {
      httpOnly: false,
      path: "/",
    })
  );
  res.status(200).json({ name: "John Doe" });
}
