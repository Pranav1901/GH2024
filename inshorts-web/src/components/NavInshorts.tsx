import React from "react";
import "./NavInshorts.css";
import HamburgerDrawer from "./HamburgerDrawer";

interface NavInshortsProps {
  setCategory: any;
}

function NavInshorts(props: NavInshortsProps) {
  return (
    <div className='nav'>
      <div className='icon'>
        <HamburgerDrawer setCategory={props.setCategory} />
      </div>
      <img
        src={require("./img.png")}
        height='40%'
        alt='logo'
        style={{ cursor: "pointer", paddingRight: 10 }}
      ></img>
      JPMC Shorts
    </div>
  );
}
export default NavInshorts;
