import { useState, useEffect, useRef } from "react"
import { useLocation, useNavigation, useNavigationType } from "react-router-dom";
import { motion } from "motion/react"
import loading from "../assets/animations/Loading.webm";
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
        <div className="w-screen h-screen fixed overflow-hidden">
        {/* purple background */}
        <motion.div 
            animate={animate ? {y: 1080} : {y: 0}}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <div className="w-screen h-screen bg-[#48007C] absolute flex justify-center items-center"/>
        </motion.div>

        <motion.div>
        <div className="w-screen h-screen absolute flex justify-center items-center z-[100]">
            { mediaToShow === 'video' ? (
                <video
                    autoPlay
                    muted
                    className="w-1/2"
                >
                    <source src={loading} type="video/webm"/>   
                </video>
            ) : (
                <motion.div 
                    animate={animate ? 
                        {
                            y: "-45vh",
                            width: "20vw"
                        } 
                        : 
                        {y: 0}}
                    transition={{ duration: 0.75, ease: "easeInOut" }}
                    onAnimationComplete={() => {setLoadingFinished(true)}}
                >
                    {imageToShow === 'white' ? (
                        <img
                            src={loading_last_frame}
                            className="w-[50vw]"
                        />
                    ) : (
                        <img
                            src={purple_logo}
                            className="w-[50vw]"
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