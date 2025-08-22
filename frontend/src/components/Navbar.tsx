import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import purple_logo from "../assets/images/Logo_Purple.png";
import { motion } from "motion/react"
import Account_Icon from "../assets/images/account_circle.png"

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
        <>
            <nav
                className="fixed h-[10vh] w-full flex z-50 items-center justify-center gap-[30vw]"
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
            <div className={`${navMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <NavMenu/>
            </div>

        </>
    )
}

export const NavMenu = () => {
    return (
        <div className="w-[25vw] fixed right-8 top-30 z-40 bg-[#510087] rounded-4xl">
            <div className="w-full h-[50vh] flex flex-col justify-between items-center">
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
    )
};

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
                className="w-[90%] flex justify-between select-none cursor-pointer text-[3vw]"
        >
            <h2 className="text-[#F5F0F6]">{pageTitle}</h2>
            <h2 className={`${currentPage ? "opacity-100" : "opacity-0" } text-[#F5F0F6]`}>•</h2>
        </Link>

    )
}