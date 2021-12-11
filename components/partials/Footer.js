import React from 'react';
import Link from 'next/link';
import Button from "./Button";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <h2 className="title">Oznoj</h2>
                <div className="footer-menu">
                    <Link href="/"><a className="menu-item">Home</a></Link>
                    <Link href="/"><a className="menu-item">About</a></Link>
                    <Link href="/"><a className="menu-item">Contact</a></Link>
                    <Link href="/"><a className="menu-item">Recipes</a></Link>
                </div>
                <Button filled="true"/>
            </div>
            <hr/>
            <div className="footer-bottom">
                <p className="copyright-text">&copy; Sweat {new Date().getFullYear()}. All rights reserved!</p>
                <div className="social-media">
                    <p className="social-media-text">Follow us:</p>
                    <div className="media-icons">
                        <FaFacebook size="20px" style={{color: "#3B5998", margin: "0 5px"}}/>
                        <FaTwitter size="20px" style={{color: "#1DA1F2", margin: "0 5px"}}/>
                        <FaInstagram size="20px" style={{color: "rgba(131, 58, 180, 1)", margin: "0 5px"}}/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;