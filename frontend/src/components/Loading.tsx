import { useState, useEffect, useRef } from "react"
import { useLocation, useNavigation, useNavigationType } from "react-router-dom";
import { motion } from "motion/react";
import ScrollToTop from "../hooks/ScrollToTop";
import Lottie from "react-lottie-player";
import loading from "../assets/animations/Loading_Video.json";
import loading_last_frame from "../assets/animations/Loading_last_frame.png";
import purple_logo from "../assets/images/Logo_Purple.png";

const Exit = () => {

}

export const Loading = () => {
    const location = useLocation();
    const [mediaToShow, setMediaToShow] = useState<'video' | 'image'> ('video');
    const [imageToShow, setImageToShow] = useState<'white' | 'purple'> ('white');
    const [loadingFinished, setLoadingFinished] = useState(false);
    const [animate, setAnimate] = useState(false);

    const videoLength = 1200;
    const logoTransitionLength = videoLength + 320;
    const logoFinalHeight = 2;

    useEffect(() => {
        const timer = setTimeout(() => {
            setMediaToShow('image'); 
            setAnimate(true)
        }, videoLength);

        const timerLogo = setTimeout(() => {
            setImageToShow('purple')
        }, logoTransitionLength);

        return () => {
            clearTimeout(timer);
            clearTimeout(timerLogo)
        };
    }, [location.key]);

    if (loadingFinished) return null;

    return (
        <div className="w-screen h-screen fixed overflow-hidden z-60">
            <ScrollToTop/>
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
                                height: "0.1vh"
                            } 
                            : 
                            {
                                y: 0,
                                height: "auto"
                            }}
                        transition={{ duration: 0.75, ease: "easeInOut" }}
                        onAnimationComplete={() => {setLoadingFinished(true)}}
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

const Enter = () => {
    
}

export const LoadingComponent = () => {
    const navigationType = useNavigationType();

    useEffect(() => {
        if (navigationType === 'POP') { // fresh load
            
        } else if (navigationType === 'PUSH' || navigationType === 'REPLACE') {

        }
    }, [navigationType])
}