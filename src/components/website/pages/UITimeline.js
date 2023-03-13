import React, { useContext } from "react";
import { MainContext } from "@/components/context/MainProvider";
const UITimeline = () => {
  const {setIsModalLogin, userInfo, isLogin, setIsLogin,handleLogout }=useContext(MainContext)
  const showLogin = () => {
    setIsModalLogin(true)
  };
  return (
    <div className="w-full mt-[70px] ml-[94px] bg-[#f3f4f8] h-screen px-[40px] py-[30px]">
      <div className="hero  bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello {userInfo.email} </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {
              isLogin ? <button className="btn btn-primary" onClick={handleLogout}>
              Log Out
            </button> : <button className="btn btn-primary" onClick={showLogin}>
              Log In
            </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default UITimeline;
