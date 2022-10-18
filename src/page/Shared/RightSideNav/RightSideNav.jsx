import React from "react";
import AuthenticationButtons from "../AuthenticationButtons/AuthenticationButtons";
import SocialHandles from "../SocialHandles/SocialHandles";

const RightSideNav = () => {
  return (
    <div>
      {/* ** Authentication buttons */}
      <AuthenticationButtons />
      <div className="mt-2">
        <h5>Find us on</h5>
        {/* ** Social Handles */}
        <SocialHandles />
      </div>
    </div>
  );
};

export default RightSideNav;
