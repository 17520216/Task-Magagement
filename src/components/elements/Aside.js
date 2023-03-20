import { TimelineIcon } from "@/components/elements/Icon";
import asset from "@/plugins/assets";
import Link from "next/link";
import React from "react";

const Aside = () => {
  return (
    <aside className="flex justify-between items-center flex-col w-max h-screen px-[15px] py-[20px] fixed top-0 left-0 z-9 bg-[#fbfaff] ">
      <div>
        <Link href="/">
          <img src="/images/logo.svg" alt="" />
        </Link>
      </div>
      <i className="flex justify-between items-center flex-col gap-y-[30px]  ">
        <Link href="/dashboard">
          <img src={asset("images/dashboard-icon.png")} alt="" />
        </Link>
        <Link href="/timeline">
          <TimelineIcon />
        </Link>
        <Link href="/task">
          <img src={asset("images/task-icon.png")} alt="" />
        </Link>
        <Link href="/setting">
          <img src={asset("images/setting-icon.png")} alt="" />
        </Link>
        <img src={asset("images/message-icon.png")} alt="" />
        <img src={asset("images/files-icon.png")} alt="" />
      </i>
      <span></span>
    </aside>
  );
};

export default Aside;
