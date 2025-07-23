import { useState, useEffect, useRef } from "react"
import { useLocation, useNavigation } from "react-router-dom";
import loading from "../assets/animations/Loading.webm"

export const Exit = () => {

}

export const Loading = () => {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setIsVisible(true);

        const video = videoRef.current;

        const timer = setTimeout(() => setIsVisible(false), 2000);
        
        return () => clearTimeout(timer);
    }, [location.key])

    if (!isVisible) return null;

    return (
        <div className="w-screen h-screen bg-[#48007C]">
            <video
                ref={videoRef}
                autoPlay
                muted
                classsName="flex flex-row justify-center items-center"
            >
                <source src={loading} type="video/webm"/>   
            </video>
            <div className="w-58 h-81 bg-[#360c64]"/>
        </div>
    );
}

export const Enter = () => {
    
}