import { useState, useEffect, useRef } from "react"
import { useLocation, useNavigation, useNavigationType } from "react-router-dom";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";

import Lottie from "react-lottie-player";
import loading from "../assets/animations/Loading_Video.json";
import loading_last_frame from "../assets/animations/Loading_last_frame.png";
import purple_logo from "../assets/images/General/tigerracing-logo-purple.png";
import { useLoadingComplete } from "../hooks/LoadingContext";
import { clear } from "console";

export const DelayedLink = (props) => {
    const {
        to
    } = props;

    const navigate = useNavigate();
    const [isNavigating, setIsNavigating] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsNavigating(true);
    }

    return (
        <Link to={to}>
        </Link>
    )
}

export const Loading = () => {
    const { markAnimationComplete } = useLoadingComplete();

    const location = useLocation();
    const [mediaToShow, setMediaToShow] = useState<'video' | 'image'> ('video');
    const [imageToShow, setImageToShow] = useState<'white' | 'purple'> ('white');
    const [loadingFinished, setLoadingFinished] = useState(false);
    const [animate, setAnimate] = useState(false);

    const videoLength = 1200;
    const logoTransitionLength = videoLength + 320;

    useEffect(() => {
        const timer = setTimeout(() => {
            setMediaToShow('image'); 
            setAnimate(true)
        }, videoLength);

        const timerLogo = setTimeout(() => {
            setImageToShow('purple')
        }, logoTransitionLength);

        const backupAnimationCompleteTimer = setTimeout(() => {
            setLoadingFinished(true);
            markAnimationComplete();
        }, logoTransitionLength + 730)

        return () => {
            clearTimeout(timer);
            clearTimeout(timerLogo);
            clearTimeout(backupAnimationCompleteTimer);
        };
    }, [location.key]);

    const handleAnimationComplete = () => {
        setLoadingFinished(true);
        markAnimationComplete();
        console.log("animation complete");
    }


    if (loadingFinished) return null;

    return (
        <div className="w-screen h-screen fixed overflow-hidden z-60">
            {/* Purple Background of Loading */}
            <motion.div 
                animate={animate ? {y: 1080} : {y: 0}}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                <div className="w-screen h-screen bg-[#48007C] absolute flex justify-center items-center"/>
            </motion.div>


            <motion.div>
            <div className="w-screen h-screen absolute flex justify-center items-center z-[100]">
                { mediaToShow === 'video' ? (
                    <Lottie
                        className="w-1/2"
                        play
                        animationData={loading}
                    />
                ) : (
                    <motion.div 
                        initial={{height: "auto"}}
                        animate={animate ? 
                            {
                                y: "-45vh",
                                width: "20rem"
                            } 
                            : 
                            {
                                y: 0,
                            }}
                        transition={{ duration: 0.75, ease: "easeInOut" }}
                        onAnimationComplete={() => {handleAnimationComplete}}
                    >
                        {imageToShow === 'white' ? (
                            <img
                                src={loading_last_frame}
                                className="w-[50vw] h-full object-cover"
                            />
                        ) : (
                            <img
                                src={purple_logo}
                                className="w-[50vw] h-full object-cover"
                            />
                        )}
                    </motion.div>

                )}
            </div>
            </motion.div>

        </div>
    );
}


export const LoadingComponent = () => {
    const location = useLocation();
    const state = location.state;
    const isFreshLoad = state?.navigatedFromApp === false;

    if (isFreshLoad) {
        return (
            <Loading/>
        )
    }
    return (
        <Loading/>
    )
}