import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react"

import purple_logo from "../assets/images/Logo_Purple.png";

export const Navbar = () => {
    const [animate, setAnimate] = useState(false);
    const [navMenuOpen, setNavMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setNavMenuOpen(false);
    }, [location]);


    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 1925);
        
        return () => clearTimeout(timer);
    })

    return (
        <div className="fixed z-50">
            <span className="w-screen flex justify-center">
                <nav
                    className="w-[95vw] h-[10vh] flex items-center justify-between"
                >
                    {/*  transition-transform duration-1000 ease-in
                                        ${animate ? 'translate-y-0' : '-translate-y-[10vh]'} */}
                    <div className={`w-[11rem]`}>
                        <div className={`h-[5.4vh] bg-[rgb(81,0,135)] flex items-center justify-center rounded-4xl text-3xl`}>
                            <h2 className="text-[#F5F0F6]">Contact</h2>
                        </div>
                    </div>

                    <div className={`w-[20rem] ${animate ? 'opacity-100' : 'opacity-0'}`}>
                        <Link to="/">
                            <img
                                src={purple_logo}
                                alt="Home Button"
                                className="h-full object-cover"
                            />
                        </Link>
                    </div>
                    
                    <div className="w-[11rem]">
                        <div
                            className="w-full h-[5.4vh] bg-[rgb(81,0,135)] cursor-pointer flex items-center justify-center rounded-4xl text-3xl float-right"
                            onClick={() => setNavMenuOpen(!navMenuOpen)}
                        >
                            <h2 className="text-[#F5F0F6] select-none">Menu</h2>
                        </div>
                    </div>
                </nav>
            </span>
            <div className={`h-0 absolute right-12 overflow-hidden transition-all duration-600 ease-out
                ${navMenuOpen ? 'h-[85vh]' : 'h-0 pointer-events-none'}`}>
                <div className="w-fit h-full flex flex-col">
                    <div className="w-full h-fit bg-[#510087] rounded-4xl !p-10 !pl-15 !pr-15">
                        <div className="flex flex-col justify-between items-center">
                            <NavPage 
                                pageTitle="Home"
                                pageURL="/"
                            />
                            <NavPage 
                                pageTitle="About"
                                pageURL="/about"
                            />
                            <NavPage 
                                pageTitle="Cars"
                                pageURL="/cars"
                            />
                            <NavPage 
                                pageTitle="Team"
                                pageURL="/team"
                            />
                            <NavPage 
                                pageTitle="Join"
                                pageURL="/join"
                            />
                            <NavPage 
                                pageTitle="Sponsors"
                                pageURL="/Sponsors"
                            />
                        </div>
                    </div>

                    <div className="w-full h-fit bg-[#FFD500] rounded-4xl !p-10 !mt-[3vh] flex justify-center text-[6vh]">
                        <h1 className="text-[#FFFFFFF]">Member Portal →</h1>
                    </div>
                </div>            
            </div>

        </div>
    )
}

const NavPage = (props) => {
    const {
        pageTitle,
        pageURL
    } = props;
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(false);

    useEffect(() => {
        if (location.pathname === pageURL) {
            setCurrentPage(true);
        } else {
            setCurrentPage(false);
        }
    }, [location]);

    return (
        <Link 
            to={pageURL}
            className="w-full flex justify-between select-none cursor-pointer text-[6vh]"
        >
            <h2 className="text-[#F5F0F6]">{pageTitle}</h2>
            <h2 className={`${currentPage ? "opacity-100" : "opacity-0" } text-[#F5F0F6]`}>•</h2>
        </Link>
    )
}