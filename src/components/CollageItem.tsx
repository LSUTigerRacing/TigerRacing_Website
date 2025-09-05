import { motion, number } from "motion/react"
import { Link } from "react-router-dom";
import { 
    useState,
    forwardRef,
    useEffect
 } from "react";

export const CollageSlide = (props) => {
    return (
        <>
            <div className={`w-screen h-screen bg-cover bg-center overflow-hidden relative`}
                style={{ 
                    backgroundImage: `url(${props.imgSrc})`, 
                }}>
                <div className="absolute inset-0 bg-[#510087] opacity-20 pointer-events-none"></div>

                <div className="w-screen h-screen flex justify-center"> {/* centering div */}
                    <div className="w-[93vw] absolute bottom-[8vh] flex items-end justify-between z-10">
                        <div className="w-fit text-[9rem] leading-[9.5rem]">
                            <h1 className="text-[#F5F0F6]">
                                {props.tagline}
                            </h1>
                        </div>
                        <div className="w-[27.5%] text-[2rem] leading-[2.5rem] flex flex-col items-end gap-10">
                            <p className="text-[#F5F0F6] text-right">
                                {props.description}
                            </p>
                            <Link to={props.target} className="w-fit h-fit bg-[#FFD500] text-center rounded-[8rem] text-6xl !p-6 !pl-8 !pr-8">
                                <h3 className="text-[#000F08]">
                                {props.buttonName}
                                </h3>
                            </Link>
                        </div>
                    </div>
                    
                </div>

            </div>           
        </>
    )
}