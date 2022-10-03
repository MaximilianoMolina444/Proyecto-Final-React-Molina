import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <div style={{ textAlign: "center", backgroundColor: "black" }}>
      <div style={{ color: "white" }}>Encontranos en nuestras redes:</div>
      <div>
        <div >
          <a href="https://www.instagram.com/ramona_custom/" className= "navLinks" >
            Instagram <FaInstagram />{" "}
          </a>
          <a href="" className= "navLinks">
            {" "}
            Twitter <FaTwitter />{" "}
          </a>
          <a href="https://www.tiktok.com/@ramona_custom" className= "navLinks">
            {" "}
            TikTok <FaTiktok />{" "}
          </a>
        </div>
      </div>
      <p style={{ color: "white", textAlign: "right", marginRight: "10px" }}>
        Hecho por Maximiliano Molina 2022
      </p>
    </div>
  );
}
