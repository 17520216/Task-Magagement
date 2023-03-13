import  { MainContext } from "@/components/context/MainProvider";
import React, { useContext, useState } from "react";
import FormRegis from "./FormRegis";
import FormSignIn from "./FormSignIn";

const UILogin = () => {
  const { active, setActive } = useContext(MainContext);
  return (
    <div
      className={`ui-login flex justify-center items-center h-screen container ${
        active ? "active" : ""
      }`}
    >
      <div className="relative w-[775px] min-h-[550px] bg-gradient-to-r from-purple-300 to-pink-200 rounded-[30px] overflow-hidden">
        <FormSignIn />
        <FormRegis />
        <div className="absolute top-0 left-1/2  w-1/2 h-full   ">
          <div className="relative h-full  w-[200%] overlay container">
            <div className="overlay-left absolute top-0 left-0 h-full flex justify-center items-center flex-col gap-y-[25px]  bg-transparent z-[-1]">
              <h1>Start Your Journey</h1>
              <p className=" text-center max-w-[50%]">
                If you don't have an account yet, join us and start your
                journey.
              </p>
              <button
                onClick={() => setActive(false)}
                className="rounded-[20px] border-solid border-[1px] border-[#4bb6b7] bg-[#4bb6b7] text-[#fff] text-[16px] font-[700] mx-[10px] my-[10px] px-[80px] py-[12px] tracking-[1px] capitalize duration-300 ease-in-out   hover:tracking-[3px] hover:scale-105 "
              >
                Register
              </button>
            </div>
            <div className="overlay-right absolute top-0 right-0  z-10 h-full flex justify-center items-center flex-col gap-y-[25px]  min-h-[550px] px-[30px] w-1/2 pl-[40px]  ">
              <h1>Hello Friends</h1>
              <p className="text-center">
                If you already have an account, login here and have fun.
              </p>
              <button
                onClick={()=>setActive(true)}
                className="rounded-[20px] border-solid border-[1px] border-[#4bb6b7] bg-[#4bb6b7] text-[#fff] text-[16px] font-[700] mx-[10px] my-[10px] px-[80px] py-[12px] tracking-[1px] capitalize duration-300 ease-in-out   hover:tracking-[3px] hover:scale-105 "
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UILogin;
