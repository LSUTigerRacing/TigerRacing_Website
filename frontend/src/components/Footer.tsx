import { Link } from "react-router-dom";

import FooterFlair from "../assets/images/Footer_Flair.png"
import Logo from "../assets/images/General/tigerracing-logo-white.png"

export const Footer = () => {
    return (
        <div className="w-screen h-[75vh] relative bg-[#510087]">
            <img
                src={FooterFlair}
                alt="2022 Car"
                className="absolute right-0 bottom-0 z-0 select-none"
            />
            <div className="w-[93%] h-full flex justify-between !mx-auto !pt-[8vh]">
                {/* Links */}
                <div className="w-[30%] flex justify-between">
                    {/* Pages */}
                    <div className="w-[20%] h-[50%] flex flex-row gap-[2vw]">
                        <span className="text-[#F5F0F6] text-[1.5rem]">
                            <p>Explore</p>
                        </span>
                        <div className="h-full flex flex-col gap-[2vh] text-[#F5F0F6] text-[3rem] leading-[3rem]">
                            <Link to="/">
                                <h1>Home</h1>
                            </Link>
                            <Link to="/about">
                                <h1>About</h1>
                            </Link>
                            <Link to="/team">
                                <h1>Team</h1>
                            </Link>
                            <Link to="/cars">
                                <h1>Cars</h1>
                            </Link>
                            <Link to="/join">
                                <h1>Join Us</h1>
                            </Link>
                            <Link to="/sponsors">
                                <h1>Sponsors</h1>
                            </Link>
                        </div>
                    
                    </div>
                    {/* Medias */}
                    <div className="w-[20%] h-[50%] flex flex-row gap-[2vw]">
                        <span className="text-[#F5F0F6] text-[1.5rem]">
                            <p>Media</p>
                        </span>
                        <div className="h-full flex flex-col gap-[2vh] text-[#F5F0F6] text-[3rem] leading-[3rem]">
                            <a href="https://www.instagram.com/formulalsu/" target="_blank">
                                <h1>Instagram</h1>
                            </a>
                            <a href="https://www.linkedin.com/company/lsu-tiger-racing-formula-sae/posts/?feedView=all" target="_blank">
                                <h1>Linkedin</h1>
                            </a>
                            <a href="https://www.facebook.com/FormulaLSU" target="_blank">
                                <h1>Facebook</h1>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-[#F5F0F6] text-right">
                    <p>Contact Us</p>
                    <span className="text-[3rem] leading-[3rem]">
                        <h1>FormulaLSU@gmail.com</h1>
                    </span>
                </div>
            </div>
            <div className="absolute right-[4rem] bottom-[2rem] text-[#F5F0F6] text-[2.3rem] z-10">
                <h2>Patrick F. Taylor Hall, S Quad Dr 3261, 3304, Baton Rouge, LA </h2>
            </div>
            <img
                src={Logo}
                alt="Logo"
                className="w-[20%] object-cover absolute left-[4rem] bottom-[2rem] z-0 select-none"
            />
        </div>
    )
}

export default Footer;