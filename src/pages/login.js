import "../styles/global.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import MasterPage from "@/components/master";
import dynamic from "next/dynamic";

const UILogin = dynamic(() => import("@/components/website/UILogin"));

const login = () => {
  const login = () => {
    console.log("🚀1111---->", 1111);
  };

  const register = () => {
    console.log("🚀2222---->", 2222);
  };

  return (
    <MasterPage title="LoginPage">
      <UILogin />
    </MasterPage>
  );
};

export default login;
