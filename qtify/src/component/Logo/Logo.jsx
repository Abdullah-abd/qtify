import React from "react";
import LogoImage from "../../assets/Logo.png";

export default function Logo() {
  return <img src={LogoImage} alt="logo" width={67} height={34} sx={{marginBottom:10, marginTop:10}} />;
}
