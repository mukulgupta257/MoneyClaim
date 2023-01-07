import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Switch } from "antd";
import Layout from "../Components/Layout";
import Data from "../JSON/home.json";

export default function Profile() {
  const [data, setData] = useState(0);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState("");
  const router = useRouter();
  useEffect(() => {
    let userData = Cookies.get("UserInfo");
    userData = userData && JSON.parse(userData);
    if (userData && userData.name !== "") {
      console.log(userData);
      setUser(userData);
      setLogin(true);
    } else {
      router.push("/");
    }
  }, [login, router]);

  const handleClick = () => {
    setData(data === 0 ? 1 : 0);
  };
  const handleLogout = () => {
    Cookies.remove("UserInfo");
    setLogin(false);
    router.push("/");
  };
  return (
    login && (
      <Layout>
        <div className="LoginBtnContainer">
          <span>Change Language / भाषा बदलें</span>
          <Switch onChange={handleClick} />
        </div>
        <div className="ProfileHeader" onClick={() => router.push("/home")}>
          {`🔙    Back`}
        </div>
        <div className="ProfileHeader2">
          <span>Profile Page</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
        <div className="btnContainer">
          <div>{`Hello ${user.name}`}</div>
          <div className="Clickbtn">
            {Data.profile[`${data === 0 ? "english" : "hindi"}`]}
          </div>
          <div className="Clickbtn">
            {Data.startplaying[`${data === 0 ? "english" : "hindi"}`]}
          </div>
          <div className="Clickbtn">
            {Data.upcoming[`${data === 0 ? "english" : "hindi"}`]}
          </div>
          <div className="Clickbtn">
            {Data.winning[`${data === 0 ? "english" : "hindi"}`]}
          </div>
        </div>
        <div className="ActiveUsers">
          {Data.activeuser[`${data === 0 ? "english" : "hindi"}`]}
        </div>
      </Layout>
    )
  );
}
