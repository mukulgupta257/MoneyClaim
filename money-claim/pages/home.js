import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import Data from "../JSON/home.json";

export default function Home() {
  const [data, setData] = useState(0);
  const [login, setLogin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    let userData = Cookies.get("UserInfo");
    userData = userData && JSON.parse(userData);
    if (userData && userData.name !== "") {
      console.log(userData);
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
          <button onClick={handleClick} className={"LanguageButton"}>
            Change Language / भाषा बदलें
          </button>
        </div>
        <div className="ProfileHeader">
          <span>Home Page</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
        <div className="btnContainer">
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
          -- {Data.activeuser[`${data === 0 ? "english" : "hindi"}`]}
        </div>
      </Layout>
    )
  );
}
