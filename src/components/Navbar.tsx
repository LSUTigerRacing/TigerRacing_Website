import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import { Link } from "react-router-dom";

import MenuIcon from "../assets/images/General/icons/menu.png"

import Logo from "../assets/images/General/tigerracing-logo-purple.png";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const Navbar = () => {
    // useGSAP(() => {
	// 	gsap.from(".navbar", {
	// 		y: -60,
	// 		opacity: 0,
    //         delay: 0.5,
	// 		duration: 0.8,
    //         ease: "power1.out"
	// 	})
	// })

    return (
        <div className="navbar">
            <div className="navbar-container text-[var(--standard-purple)]!">
                <Link to="/" className="h-full">
                    <img 
                        src={Logo} 
                        alt="Tiger Racing Logo"
                        className="navbar-logo"
                    />
                </Link>
                <div className="navbar-buttons">
                    <Link to="/team">
                        <h4>Team</h4>
                    </Link>
                    <Link to="/cars">
                        <h4>Cars</h4>
                    </Link>
                    <Link to="/join">
                        <h4>Join Us</h4>
                    </Link>
                    <Link to="/sponsor">
                        <h4>Sponsors</h4>
                    </Link>
                </div>

                <div className="flex flex-row">
                    <div className="text-(--standard-purple) border-1 border-[var(--standard-purple)] rounded-4xl px-4 py-2 ml-4">
                        <h4>Login</h4>
                    </div>
                    <div className="text-white bg-(--standard-purple) rounded-4xl px-4 py-2 ml-4 justify-center items-center flex">
                        <h4>Contact Us</h4>
                    </div>
                </div>
            </div>
        </div>
    )
};

