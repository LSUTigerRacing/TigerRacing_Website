import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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

    //     useEffect(() => {

    // }, [])

    return (
        <div className="fixed z-50">
            <span className="w-screen flex justify-center">
                <nav
                    className="w-[95vw] h-[10vh] flex items-center justify-between z-50"
                >
                    <div className="w-[11rem]">
                        <div
                            className="w-full h-[5.4vh] bg-[rgb(81,0,135)] cursor-pointer flex items-center justify-center rounded-4xl text-3xl float-right"
                            onClick={() => setNavMenuOpen(!navMenuOpen)}
                        >
                            <h2 className="text-[#F5F0F6] select-none">Menu</h2>
                        </div>
                    </div>
                    {/*  transition-transform duration-1000 ease-in
                                        ${animate ? 'translate-y-0' : '-translate-y-[10vh]'} */}
 

                    <div className={`w-[20rem] ${animate ? 'opacity-100' : 'opacity-0'}`}>
                        <Link to="/">
                            <img
                                src={purple_logo}
                                alt="Home Button"
                                className="h-full object-cover"
                            />
                        </Link>
                    </div>

                    <div className={`w-[11rem]`}>
                        <div className={`h-[5.4vh] bg-[rgb(81,0,135)] flex items-center justify-center rounded-4xl text-3xl`}>
                            <h2 className="text-[#F5F0F6]">Contact</h2>
                        </div>
                    </div>

                </nav>
                <div className={`absolute left-0 ${navMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    <NavMenu/>
                </div>

            </span>
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
            className="w-fit flex justify-between select-none cursor-pointer text-[4.5rem] transition-colors duration-300"
        >
            <h2 className="text-[#F5F0F6] hover:text-[#FFD500]">{pageTitle}</h2>
            {/* <h2 className={`${currentPage ? "opacity-100" : "opacity-0" } text-[#F5F0F6]`}>•</h2> */}
        </Link>
    )
}

const NavMenu = () => {
    const [hoveredPage, setHoveredPage] = useState(-1);
    const pageImages = [
        Home,
        About,
        Cars,
        Team,
        Join,
        Sponsors,
        Empty
    ]

    return (
        <div className="w-screen h-screen absolute overflow-hidden bg-[#510087]">
            <div className="w-[90%] h-[80%] !m-auto !mt-[15vh] flex">
                <div className="w-full h-full ">
                    <div className="flex gap-[5rem] items-end">
                                                {/* Media */}
                        <div className="flex flex-col gap-[0.5rem]">
                            <span className="text-[#F5F0F6] text-[2rem]">
                                <p>Media</p>
                            </span>
                            <NavPage 
                                pageTitle="Instagram"
                                pageURL="/"
                            />
                            <NavPage 
                                pageTitle="Linkedin"
                                pageURL="/join"
                            />
                            <NavPage 
                                pageTitle="Facebook"
                                pageURL="/Sponsors"
                            />
                        </div>
                        {/* Pages */}
                        <div className="flex flex-col gap-[0.5rem]">
                            <span className="text-[#F5F0F6] text-[2rem]">
                                <p>Explore</p>
                            </span>
                            <div
                                onMouseEnter={() => setHoveredPage(0)}
                                onMouseLeave={() => setHoveredPage(-1)}
                            >
                                <NavPage 
                                    pageTitle="Home"
                                    pageURL="/"
                                />
                            </div>
                            <div
                                onMouseEnter={() => setHoveredPage(1)}
                                onMouseLeave={() => setHoveredPage(-1)}
                            >
                            <NavPage 
                                pageTitle="About"
                                pageURL="/about"
                            />
                            </div>
                            <div
                                onMouseEnter={() => setHoveredPage(2)}
                                onMouseLeave={() => setHoveredPage(-1)}
                            >
                                <NavPage 
                                    pageTitle="Cars"
                                    pageURL="/cars"
                                />
                            </div>
                            <div
                                onMouseEnter={() => setHoveredPage(3)}
                                onMouseLeave={() => setHoveredPage(-1)}
                            >
                                <NavPage 
                                    pageTitle="Team"
                                    pageURL="/team"
                                />
                            </div>
                            <div
                                onMouseEnter={() => setHoveredPage(4)}
                                onMouseLeave={() => setHoveredPage(-1)}
                            >
                                <NavPage 
                                    pageTitle="Join"
                                    pageURL="/join"
                                />
                            </div>
                            <div
                                onMouseEnter={() => setHoveredPage(5)}
                                onMouseLeave={() => setHoveredPage(-1)}
                            >
                                <NavPage 
                                    pageTitle="Sponsors"
                                    pageURL="/Sponsors"
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <div 
                        className="w-[40vw] h-[50vh]"
                        style={{
                            backgroundImage: `url(${pageImages[hoveredPage]})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                    <div className="w-fit h-fit bg-[#FFD500] rounded-[4rem] !p-[2.5rem] !mt-[3rem] flex justify-center text-[4rem]">
                        <h1 className="text-[#FFFFFFF]">Member Portal →</h1>
                    </div>
                </div>


            </div>            
        </div>
    )
};