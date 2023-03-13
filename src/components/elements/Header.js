import Navbar from "@/components/elements/Navbar";
import asset from "@/plugins/assets";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useContext } from "react";
import Search from "antd/es/transfer/search";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Space,
  Modal,
  message,
  Avatar,
} from "antd";
import { useState } from "react";
import {
  FormOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { api } from "@/config/api";
import { PATH_API } from "@/config/path";
import { MainContext } from "@/components/context/MainProvider";
import { useCookies } from "cookie";
import { Router, useRouter } from "next/router";
import Aside from "./Aside";
const avatarStyle = {
  marginRight: "15px",
};
const Header = () => {
  // Context
  const {
    isModalLogin,
    setIsModalLogin,
    userInfo,
    setUserInfo,
    isLogin,
    setIsLogin,
    handleLogout,
  } = useContext(MainContext);
  // Modal Regis and Funcs
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // UserInfo
  // const [userInfo, setUserInfo] = useState({});
  // Modal Sign In
  // const [isModalLogin, setIsModalLogin] = useState(false);
  const showModalLogin = () => {
    setIsModalLogin(true);
  };
  const handleCancelLogin = () => {
    setIsModalLogin(false);
  };
  const router = useRouter();
  const backToHomePage = () => {
    router.push("/");
  };
  return (
    <div className="relative z-20">
      <header className="fixed top-0 right-0 flex justify-between items-center bg-[#ffffff] px-[40px] py-[15px] w-[calc(100vw-79px)] ">
        <span></span>
        <Space direction="Horizontal">
          <Search
            placeholder="Search"
            allowClear
            enterButton="Search"
            size="large"
          />
          <button className="rounded-[8px] border-solid border-[1px] border-transparent bg-[#1677ff] text-[#fff] text-[12px] font-[700] mx-[10px]  px-[15px] py-[8px] tracking-[1px] capitalize transition-[0.3s] ease-in-out hover:tracking-[1.5px]  ">Search</button>
        </Space>
        <div className="flex justify-between items-center gap-x-[18px]">
          <img src={asset("images/notification-icon.png")} alt="" />

          {isLogin ? (
            <button className="btn btn-ghost" onClick={handleLogout}>
              <LogoutOutlined />
            </button>
          ) : (
            <>
              <button className="btn btn-ghost" onClick={showModal}>
                <FormOutlined />
              </button>
              <button className="btn btn-ghost" onClick={backToHomePage}>
                <LoginOutlined />
              </button>
            </>
          )}
          {/* {isLogin && (
            <button className="btn btn-ghost" onClick={handleLogout}>
              <LogoutOutlined />
            </button>
          )} */}
          <i className="flex justify-between items-center ml-[12px] ">
            {isLogin ? (
              <>
                <img
                  className="mr-[15px]"
                  src={asset("images/avatar.png")}
                  alt=""
                />
                {userInfo?.email}
              </>
            ) : (
              <Avatar
                style={avatarStyle}
                size="small"
                icon={<UserOutlined />}
              />
            )}
            <img className="mx-[8px]" src={asset("images/arrow.png")} alt="" />
          </i>
        </div>
      </header>
      <Aside />
    </div>
  );
};

export default Header;
