import { Link } from "react-router-dom";

import FooterFlair from "../assets/images/Footer_Flair.png"
import Logo from "../assets/images/General/tigerracing-logo-white.png"

export const Footer = () => {
    return (
        <div className="footer">
            <img
                src={FooterFlair}
                alt="2022 Car"
                className="footer-image"
            />
            <div className="footer-responsive-section">
                {/* Links */}
                <div className="footer-links">
                    {/* Pages */}
                    <section className="footer-link-section">
                        <span className="text-[#F5F0F6] text-[1.5rem]">
                            <p>Explore</p>
                        </span>
                        <div className="footer-link-container">
                            <Link to="/">
                                <h2>Home</h2>
                            </Link>
                            <Link to="/about">
                                <h2>About</h2>
                            </Link>
                            <Link to="/team">
                                <h2>Team</h2>
                            </Link>
                            <Link to="/cars">
                                <h2>Cars</h2>
                            </Link>
                            <Link to="/join">
                                <h2>Join Us</h2>
                            </Link>
                            <Link to="/sponsors">
                                <h2>Sponsors</h2>
                            </Link>
                        </div>
                    
                    </section>
                    {/* Medias */}
                    <section className="footer-link-section">
                        <span className="text-[#F5F0F6] text-[1.5rem]">
                            <p>Media</p>
                        </span>
                        <div className="footer-link-container">
                            <a href="https://www.instagram.com/formulalsu/" target="_blank">
                                <h2>Instagram</h2>
                            </a>
                            <a href="https://www.linkedin.com/company/lsu-tiger-racing-formula-sae/posts/?feedView=all" target="_blank">
                                <h2>Linkedin</h2>
                            </a>
                            <a href="https://www.facebook.com/FormulaLSU" target="_blank">
                                <h2>Facebook</h2>
                            </a>
                        </div>
                    </section>
                </div>

                <div className="footer-email">
                    <p>Contact Us</p>
                    <h2 className="text-[2rem]!">FormulaLSU@gmail.com</h2>
                </div>
            </div>
            <div className="footer-logo-address">
                <img
                    src={Logo}
                    alt="Logo"
                    className="footer-logo"
                />
                <div className="footer-address">
                    <h3>Patrick F. Taylor Hall, S Quad Dr 3261, 3304, Baton Rouge, LA </h3>
                </div>
   
            </div>
     
        </div>
    )
}

export default Footer;