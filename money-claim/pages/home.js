import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import Data from "../JSON/Login.json";

export default function Home() {
  const [data, setData] = useState(0);
  const [login, setLogin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    let userData = Cookies.get("userData");
    userData = userData && JSON.parse(userData);
    if (userData && userData.name !== "") {
      setLogin(true);
    } else {
      router.push("/");
    }
  }, [login, router]);
  const labels = {
    email: Data.loginForm.email[`${data === 0 ? "english" : "hindi"}`],
    password: Data.loginForm.password[`${data === 0 ? "english" : "hindi"}`],
  };
  const handleClick = () => {
    setData(data === 0 ? 1 : 0);
  };
  const handleLogout = () => {
    Cookies.remove("userData");
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
        <h1>Home Page</h1>
        <button onClick={handleLogout}>Logout</button>
      </Layout>
    )
  );
}
