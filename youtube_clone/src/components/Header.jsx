import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextApi";
import Loader from "../shared/loader";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, mobilemenu, setmobilemenu } = useContext(Context);

  const nevigate = useNavigate();

  const searchqueryhandler = (event) => {
    if (
      (event.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      nevigate(`/searchResult/${searchQuery}`);
    }
  };
  const mobilemenuToggle = ()=>{
    setmobilemenu(!mobilemenu)
  }   
  return <div> </div>;
};

export default Header;
