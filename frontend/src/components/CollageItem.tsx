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
            <div className={`w-screen h-screen bg-cover overflow-hidden relative`}
                style={{ 
                    backgroundImage: `url(${props.imgSrc})`, 
                }}>
                <div className="absolute inset-0 bg-[#510087] opacity-20 pointer-events-none"></div>

                <div className="w-screen h-screen relative z-10">
                    <span className="absolute bottom-10 left-10 text-[8vw]">
                        <h1 className="text-[#F5F0F6]">
                            {props.tagline}
                        </h1>
                    </span>
                    <span className="w-[32vw] absolute bottom-40 right-10 text-[1.66vw] bg-amber-950">
                        <p className="text-[#F5F0F6] leading-[130%]">
                            {props.description}
                        </p>

                        <div className="w-fit h-fit bg-[#FFD500] relative text-center float-right rounded-4xl">
                        <Link to={props.target} className="text-6xl block p-10">
                            <h3 className="text-[#000F08]">
                            {props.buttonName}
                            </h3>
                        </Link>
                        </div>

                    </span>

                </div>

            </div>           
        </>
    )
}