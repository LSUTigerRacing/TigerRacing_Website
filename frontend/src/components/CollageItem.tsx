import { motion, number } from "motion/react"
import { Link } from "react-router-dom";
import { 
    useState,
    forwardRef,
    useEffect
 } from "react";

export const CollageSlide = (props) => {
    return (
        <div className={`w-screen h-screen bg-[url(${props.imgSrc})] bg-cover overflow-hiddenç`}>
            <h1>
                {props.tagline}
            </h1>

            <p>
                {props.description}
            </p>
            <Link to={props.target}>
                <h3>
                    {props.buttonName}
                </h3>
            </Link>
        </div>
    )
}