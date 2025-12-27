// import { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

import Logo from "../assets/images/General/tigerracing-logo-purple.png";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container text-[var(--standard-purple)]">
                <img src={Logo} alt="Tiger Racing Logo"/>
                <div className="w-[35%] flex flex-row justify-between">
                    <h4>About</h4>
                    <h4>Cars</h4>
                    <h4>Join Us</h4>
                    <h4>Sponsors</h4>
                </div>

                <div className="flex flex-row">
                    <div className="text-[var(--standard-purple)] border-1 border-[var(--standard-purple)] rounded-4xl px-4 py-2 ml-4">
                        <h4>Login</h4>
                    </div>
                    <div className="text-white bg-[var(--standard-purple)] rounded-4xl px-4 py-2 ml-4 justify-center items-center flex">
                        <h4>Contact Us</h4>
                    </div>
                </div>
            </div>
        </div>
    )
};

