import { message } from "antd";
import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [isModalLogin, setIsModalLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [active, setActive] = useState(false);
  const handleLogout = () => {
    message.success("Log Out Successfully");
    setIsLogin(false);
    setUserInfo({});
    localStorage.removeItem("isLogin");
    localStorage.removeItem("userInfo");
  };
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (ev, isLogin) => {
    const name = ev.target.name;
    const value = ev.target.value;
    if (isLogin) {
      setDataLogin({ ...dataLogin, [name]: value });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  useEffect(() => {
    const _islogin = localStorage.getItem("isLogin");
    const _userInfo = localStorage.getItem("userInfo");
    if (_islogin == "true") {
      setIsLogin(true);
      setUserInfo(JSON.parse(_userInfo));
    }
  }, []);

  return (
    <MainContext.Provider 
      value={{
        isModalLogin,
        setIsModalLogin,
        userInfo,
        setUserInfo,
        isLogin,
        setIsLogin,
        handleLogout,
        handleChange,
        active,setActive
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
