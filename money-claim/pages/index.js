import { useRouter } from "next/router";
import React, { useState } from "react";
import Layout from "../Components/Layout";
import LoginForm from "../Components/LoginForm";
import Data from "../JSON/Login.json";

const Home = () => {
  const [data, setData] = useState(0);
  const router = useRouter();
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
          <span
            className="CreateAccount"
            onClick={() => router.push("/register")}
          >
            {Data.createAccount[`${data === 0 ? "english" : "hindi"}`]}
          </span>
        </div>
        <div className="ActiveUsers">
          -- {Data.activeuser[`${data === 0 ? "english" : "hindi"}`]}
        </div>
      </Layout>
    </main>
  );
};

export default Home;
