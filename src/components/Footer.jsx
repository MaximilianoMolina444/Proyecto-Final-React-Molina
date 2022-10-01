import React from 'react'
import { FaInstagram} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaTiktok} from "react-icons/fa";

export default function Footer() {
    return (
        <div style={{textAlign: 'center'}}>
            Encontranos en nuestras redes:
            <div>
                <a href="">Instagram <FaInstagram />{" "}</a>
                <a href=""> Twitter <FaTwitter />{" "}</a>
                <a href=""> TikTok <FaTiktok />{" "}</a>
            </div>
            <p>Hecho por Maximiliano Molina 2022</p>
        </div>
    )
}
