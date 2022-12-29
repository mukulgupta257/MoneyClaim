import { Form } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import Layout from "../Components/Layout";
import LoginForm from "../Components/LoginForm";
import Data from "../JSON/Login.json";

const Home = () => {
  const [data, setData] = useState(0);
  const labels = {
    email: Data.loginForm.email[`${data === 0 ? "english" : "hindi"}`],
    password: Data.loginForm.password[`${data === 0 ? "english" : "hindi"}`],
  };
  const handleClick = () => {
    setData(data === 0 ? 1 : 0);
  };
  return (
    <main>
      <Layout>
        <div className="LoginBtnContainer">
          <button onClick={handleClick} className={"LanguageButton"}>
            Change Language / भाषा बदलें
          </button>
        </div>
        <div className="FormContainer">
          <div className="LoginForm">
            {Data.Logintitle[`${data === 0 ? "english" : "hindi"}`]}
          </div>
          <LoginForm formlabels={labels} />
          <span className="divider">-----------OR-----------</span>
          <Link href="/register">
            <span className="CreateAccount">
              {Data.createAccount[`${data === 0 ? "english" : "hindi"}`]}
            </span>
          </Link>
        </div>
      </Layout>
    </main>
  );
};

export default Home;
