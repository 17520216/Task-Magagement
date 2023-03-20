import { MainContext } from "@/components/context/MainProvider";
import { api } from "@/config/api";
import { PATH_API } from "@/config/path";
import { message } from "antd";
import React, { useContext, useState } from "react";
import Social from "./Social";

const FormRegis = () => {
  const { setActive } = useContext(MainContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;
    setForm({ ...form, [name]: value });
  };
  const handleRegister = async () => {
    if (!form.email || !form.password) {
      message.warning("Please enter a valid email and password");
      return;
    }
    await api({
      url: PATH_API.login,
      method: "POST",
      data: form,
    });
    message.success("Register Successfully, Please Sign In");
    setForm({
      email: "",
      password: "",
    });
    setActive(true);
  };

  return (
    <div className="flex justify-center items-center flex-col gap-y-[20px] h-full w-1/2 absolute top-0 right-0 z-10 p-[35px] regis container  ">
      <h1 className="text-[45px] font-normal ">Register here</h1>
      <div className="flex justify-center items-center flex-col">
        {/* <input
          type="text"
          placeholder="Name"
          className="text-[20px] bg-[#eee] rounded-[10px] border-none py-[12px] px-[15px] my-[8px] w-full outline-none"
        /> */}
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          className="text-[20px] bg-[#eee] rounded-[10px] border-none py-[12px] px-[15px] my-[8px] w-full outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          className="text-[20px] bg-[#eee] rounded-[10px] border-none py-[12px] px-[15px] my-[8px] w-full outline-none"
        />
        <button
          onClick={handleRegister}
          className="rounded-[20px] border-solid border-[1px] border-[#4bb6b7] bg-[#4bb6b7] text-[#fff] text-[16px] font-[700] mx-[10px] my-[10px] px-[80px] py-[12px] tracking-[1px] capitalize transition-[0.3s] ease-in-out   hover:tracking-[3px]  "
        >
          Register
        </button>
      </div>
      <span>or use your account</span>
      <Social />
    </div>
  );
};

export default FormRegis;
