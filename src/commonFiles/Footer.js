import React from "react";
import { useContext } from "react";
import UserContext from "../contextApi/UserContext";
// import { LOGO_IMG } from "../utils/common";
import {
  TWITTER_URL,
  LINKEDIN_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
} from "../utils/social_links";
import { BiLogoGmail } from "react-icons/bi";
import {
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialFacebook,
} from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { loggedInUser } = useContext(UserContext);
  const navigate = useNavigate();
  return (<>
    <div className="mt-5">
    </div>
    <div className="footer mt-5">
      {/* <div className="footer-logo">
      <img width="200px" height="80px" src={LOGO_IMG} alt="food-logo" /> */}
      <p className="social p-2">
        Created by {loggedInUser} © 2023 Code Shuttle  
       
        <span className="social" onClick={() => navigate({LINKEDIN_URL})}>
          <TiSocialLinkedin />
        </span>
        
        <span className="social" onClick={() => navigate({TWITTER_URL})}>
          <TiSocialTwitter />
        </span>
        <span className="social" onClick={() => navigate({FACEBOOK_URL})}>
          <TiSocialFacebook />
        </span>
        <span className="social" onClick={() => navigate({INSTAGRAM_URL})}>
          <TiSocialInstagram />
        </span>
        
      </p>
    </div>
    </>
  );
};

export default Footer;
