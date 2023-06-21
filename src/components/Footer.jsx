import "./../styles/footer.css";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


function Footer() {
    return(
        <footer className ="footer-container">
            <ul>
                <li><FaFacebookF className="social-icons" /></li>
                <li><FaTwitter className="social-icons" /></li>
                <li><FaInstagram className="social-icons" /></li>
                <li><FaWhatsapp className="social-icons" /></li>
            </ul>
            <div>
                <p>Copyright © 2023 - Gula</p>
            </div>
        </footer>
    )
}

export default Footer;