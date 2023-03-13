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

  const logOut = () => { 
    console.log('🚀333---->', 333);
   }
  return (
    <MasterPage title="LoginPage">
      <UILogin />
    </MasterPage>
  );
};

export default login;
