import { motion } from "motion/react"
import React, { 
    useState,
    useRef,
    useImperativeHandle,
    forwardRef,
    useEffect
 } from "react";

interface CollageItemProps {
    imgPath: string;
    width: string;
    height: string;
    xPos: string;
    yPos: string;
    zIndex: number;
    order: number;
}

interface ChildMethods {
    triggerUpdate: () => void
}

export const CollageItem = forwardRef<ChildMethods, CollageItemProps>(({
    imgPath,
    width,
    height,
    xPos,
    yPos,
    zIndex,
    order,
}, ref) => {
    const [animate, setAnimate] = useState(false)
    
    useEffect(() => {
        const collage_timer = setTimeout(() => {
            setAnimate(true);
        }, 1000 +  order * 500);
        
        return () => clearTimeout(collage_timer);
    }, [order])
    return (
        <motion.div
            animate={animate ? 
                {opacity: 100, zIndex: Number(zIndex)} :
                {opacity: 0, zIndex: 0}

            }
            transition={{ duration: 1.1, ease: "easeInOut" }}
        >
                <img
                    src={imgPath}
                    style={{
                        width: width,
                        height: height,
                        top: yPos,
                        left: xPos,
                    }}
                    className="absolute object-cover"
                />
        </motion.div>

    )
})