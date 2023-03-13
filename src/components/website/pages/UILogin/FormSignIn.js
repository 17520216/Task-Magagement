import { MainContext } from "@/components/context/MainProvider";
import { api } from "@/config/api";
import { PATH_API } from "@/config/path";
import { message } from "antd";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import Social from "./Social";

const FormSignIn = () => {
  const {setUserInfo,setIsLogin,userInfo,isLogin}=useContext(MainContext)
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (ev, isLogin) => {
    const name = ev.target.name;
    const value = ev.target.value;
    if (isLogin) {
      setDataLogin({ ...dataLogin, [name]: value });
    } else {
      setForm({ ...form, [name]: value });
    }
  };
  const handleLogin = async () => {
    const dataApi = await api({
      url: PATH_API.login,
      method: "GET",
    });
    const { data } = dataApi;
    const isSuccess = data.find(
      (item) =>
        item.email == dataLogin.email && item.password == dataLogin.password
    );
    if (isSuccess) {
      message.success("Login Successfully");
      setUserInfo(isSuccess);
      setIsLogin(true);
      localStorage.setItem("userInfo", JSON.stringify(isSuccess));
      localStorage.setItem("isLogin", true);
      setDataLogin({
        name: "",
        password: "",
      });
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col gap-y-[20px] absolute h-full top-0 right-0  px-[40px] py-[35px] w-1/2  sign-in z-[-1] ">
      <h1 className="text-[45px] font-normal "> Login Hire</h1>
      <div className="flex justify-center items-center flex-col gap-y-[20px]">
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={dataLogin.email}
          onChange={(ev) => handleChange(ev, true)}
          className="text-[20px] bg-[#eee] rounded-[10px] border-none py-[12px] px-[15px] my-[8px] w-full outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={dataLogin.password}
          onChange={(ev) => handleChange(ev, true)}
          className="text-[20px] bg-[#eee] rounded-[10px] border-none py-[12px] px-[15px] my-[8px] w-full outline-none"
        />
        <div className="flex justify-between items-center w-full">
          <span>
            <input type="checkbox" name="Remember Me " className="mx-0 my-0" />
            <span className="mx-[5px]">Remember Me</span>
          </span>
          <span className=" leading-[20px] tracking-[0.5px]  ">
            Forgot Password
          </span>
        </div>
      </div>
      <button
        onClick={handleLogin}
        className="rounded-[20px] border-solid border-[1px] border-[#4bb6b7] bg-[#4bb6b7] text-[#fff] text-[16px] font-[700] mx-[10px] my-[10px] px-[80px] py-[12px] tracking-[1px] capitalize duration-300 ease-in-out   hover:tracking-[3px] hover:scale-105 "
      >
        Login{" "}
      </button>
      <span>or use your account</span>
      <Social />
    </div>
  );
};

export default FormSignIn;
