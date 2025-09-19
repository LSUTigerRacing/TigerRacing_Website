import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react"

import purple_logo from "../assets/images/General/tigerracing-logo-purple.png";
import white_logo from "../assets/images/General/tigerracing-logo-white.png";

import Home from "../assets/images/Nav/Home.jpg"
import About from "../assets/images/Nav/About.png"
import Cars from "../assets/images/Nav/Cars.JPG"
import Team from "../assets/images/Nav/Team.jpg"
import Join from "../assets/images/Nav/Join.jpg"
import Sponsors from "../assets/images/Nav/Sponsors.png"
import Empty from "../assets/images/Nav/Purple.png"

export const Navbar = () => {
    const [animate, setAnimate] = useState(false);
    const [navMenuOpen, setNavMenuOpen] = useState(false);
    const [isNavigating, setIsNavigating] = useState(false);
    const location = useLocation();
    const fadeTime = 550

    useEffect(() => {
        setAnimate(false);
        setIsNavigating(false);
    }, [location.key]);

    useEffect(() => {
        setNavMenuOpen(false);
        setIsNavigating(false);
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
                <motion.nav
                    className="w-[95vw] h-[10vh] flex items-center justify-between z-50"
                    animate={isNavigating ? {y: -30, opacity: 0} : {y: 0, opacity: 1}}
                    transition={{ duration: 0.2, delay: 0.25, ease: "easeOut" }}
                >
                    <div className={`w-[11rem]`}>
                        <div className={`
                            h-[5.4vh] ] flex items-center justify-center rounded-4xl text-3xl
                            ${navMenuOpen ? 
                                "bg-[#FFD500] text-black" 
                                : 
                                "bg-[rgb(81,0,135)] text-[#F5F0F6]"} 
                            `}>
                            <h2 className="">Contact</h2>
                        </div>
                    </div>

                    {/*  transition-transform duration-1000 ease-in
                                        ${animate ? 'translate-y-0' : '-translate-y-[10vh]'} */}
 

                    <div className={`w-[20rem] ${animate ? 'opacity-100' : 'opacity-0'}`}>
                        {navMenuOpen
                        ?  
                        (
                            <Link to="/">
                                <img
                                    src={white_logo}
                                    alt="Home Button"
                                    className="h-full object-cover"
                                />
                            </Link>
                        )
                        :
                        (
                            <Link to="/">
                                <img
                                    src={purple_logo}
                                    alt="Home Button"
                                    className="h-full object-cover"
                                />
                            </Link>
                        )}
                    </div>

                    <div className="w-[11rem]">
                        <div
                            className={`w-full h-[5.4vh] cursor-pointer flex items-center justify-center rounded-4xl text-3xl float-right
                                                            ${navMenuOpen ? 
                                "bg-[#FFD500] text-black" 
                                : 
                                "bg-[rgb(81,0,135)] text-[#F5F0F6]"} 
                            `}
                            onClick={() => setNavMenuOpen(!navMenuOpen)}
                        >
                            <h2 className="select-none">Menu</h2>
                        </div>
                    </div>

                </motion.nav>
                <motion.div 
                    className={`absolute left-0`}
                    animate={navMenuOpen ? {y: 0, pointerEvents: 'auto'} : {y: '-100vh', pointerEvents: 'none'}}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <NavMenu
                        isNavigating = {isNavigating}
                        setIsNavigating={setIsNavigating}
                        fadeTime={fadeTime}
                    />
                </motion.div>

            </span>
        </div>
    )
};

const NavMenu = ({ isNavigating, setIsNavigating, fadeTime }) => {
    const [hoveredPage, setHoveredPage] = useState(-1);
    const navigate = useNavigate();

    const pageImages = [
        Home,
        About,
        Cars,
        Team,
        Join,
        Sponsors,
        Empty
    ]

    const handleNavigation = (pageURL) => {
        setIsNavigating(true);
        
        setTimeout(() => {
            navigate(pageURL);
        }, fadeTime);
    };

    return (
        <div className="w-screen h-screen absolute overflow-hidden bg-[#48007C]">
            <div className="w-[90%] h-[80%] !m-auto !mt-[12vh] flex">
                <motion.div 
                    className="w-full h-fit flex flex-row justify-between gap-[2rem] relative"
                    animate={isNavigating ? {y: -30, opacity: 0} : {y: 0, opacity: 1}}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {/* Pages */}
                    <div className="flex flex-col gap-[0.5rem]">
                        <span className="text-[#F5F0F6] text-[2rem]">
                            <p>Explore</p>
                        </span>
                        <div 
                            className="w-fit"
                            onMouseEnter={() => setHoveredPage(0)}
                            onMouseLeave={() => setHoveredPage(-1)}
                        >
                            <NavPage 
                                pageTitle="Home"
                                pageURL="/"
                                onNavigate={handleNavigation}
                            />
                        </div>
                        <div
                            className="w-fit"
                            onMouseEnter={() => setHoveredPage(1)}
                            onMouseLeave={() => setHoveredPage(-1)}
                        >
                            <NavPage 
                                pageTitle="About"
                                pageURL="/about"
                                onNavigate={handleNavigation}
                            />
                        </div>
                        <div
                            className="w-fit"
                            onMouseEnter={() => setHoveredPage(2)}
                            onMouseLeave={() => setHoveredPage(-1)}
                        >
                            <NavPage 
                                pageTitle="Cars"
                                pageURL="/cars"
                                onNavigate={handleNavigation}
                            />
                        </div>
                        <div
                            className="w-fit"
                            onMouseEnter={() => setHoveredPage(3)}
                            onMouseLeave={() => setHoveredPage(-1)}
                        >
                            <NavPage 
                                pageTitle="Team"
                                pageURL="/team"
                                onNavigate={handleNavigation}
                            />
                        </div>
                        <div
                            className="w-fit"
                            onMouseEnter={() => setHoveredPage(4)}
                            onMouseLeave={() => setHoveredPage(-1)}
                        >
                            <NavPage 
                                pageTitle="Join"
                                pageURL="/join"
                                onNavigate={handleNavigation}
                            />
                        </div>
                        <div
                            className="w-fit"
                            onMouseEnter={() => setHoveredPage(5)}
                            onMouseLeave={() => setHoveredPage(-1)}
                        >
                            <NavPage 
                                pageTitle="Sponsors"
                                pageURL="/Sponsors"
                                onNavigate={handleNavigation}
                            />
                        </div>
                    </div>
                    <div 
                        className="w-[55rem] h-[40rem]"
                        style={{
                            backgroundImage: `url(${pageImages[hoveredPage]})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />                
                    <div className="w-fit flex flex-col">
                    {/* Media */}
                        <div className="flex flex-col gap-[0.5rem]">
                            <span className="text-[#F5F0F6] text-[2rem]">
                                <p>Media</p>
                            </span>
                            <a href="" target="_blank">
                                <span className="text-[3rem] text-[#F5F0F6]">
                                    <h2>Instagram</h2>
                                </span>
                            </a>
                            <a href="" target="_blank">
                                <span className="text-[3rem] text-[#F5F0F6]">
                                    <h2>Facebook</h2>
                                </span>
                            </a>
                            <a href="" target="_blank">
                                <span className="text-[3rem] text-[#F5F0F6]">
                                    <h2>Linkedin</h2>
                                </span>
                            </a>
                        </div>
                        <div className="w-fit h-fit bg-[#FFD500] rounded-[4rem] !p-[1rem] !mt-[3rem] flex justify-center text-center text-[3rem] leading-[5rem]">
                            <h1 className="text-[#FFFFFFF]">Member Portal</h1>
                        </div>
                    </div>
                </motion.div>
            </div>            
        </div>
    )
};

const NavPage = ({pageTitle, pageURL, onNavigate }) => {
    const handleClick = () => {
        if (onNavigate) {
            onNavigate(pageURL);
        }
    };

    return (
        <div
            onClick={handleClick}
            className="group w-[25rem] flex flex-col justify-between select-none cursor-pointer text-[4.5rem]"
        >
            <h2 className="text-[#F5F0F6] group-hover:text-[#FFD500]">{pageTitle}</h2>
            <span className="w-full flex justify-center"> {/* i tried to use the hr tag but its not cooperating with tailwind so im doing this for now */}
                <div className="w-[93vw] h-1 bg-[#F5F0F6] group-hover:bg-[#FFD500] mx-auto"></div>
            </span>
        </div>
    )
};