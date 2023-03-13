import asset from "@/plugins/assets";
import React from "react";

const Social = () => {
  return (
    <div className="flex justify-center items-center gap-x-[15px]">
      <button className=" outline-0 border-0 px-0 py-0 w-[35px] h-[35px] bg-[#fff] rounded-full  ">
        <img
          src={asset("/images/facebook-logo-icon.png")}
          alt=""
        />
      </button>
      <button className=" outline-0 border-0 px-0 py-0 w-[35px] h-[35px] bg-[#fff] rounded-full  ">
        <img
          src={asset("/images/logo_google_icon.png")}
          alt=""
        />
      </button>
      <button className=" outline-0 border-0 px-0 py-0 w-[35px] h-[35px] bg-[#fff] rounded-full  ">
        <img
          src={asset("/images/github_icon.png")}
          alt=""
        />
      </button>
    </div>
  );
};

export default Social;
