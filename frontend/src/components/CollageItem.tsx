import { motion, number } from "motion/react"
import { 
    useState,
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
        }, 1500 +  order * 150);
        
        return () => clearTimeout(collage_timer);
    }, [order])
    return (
        // <img
        //     src={imgPath}
        //     style={{
        //         width: width,
        //         height: height,
        //         top: yPos,
        //         left: xPos,
        //         zIndex: zIndex,
        //         opacity: 100
        //     }}
        //     className="absolute object-cover"
        // />
        <div style={{zIndex: zIndex}}>
            <motion.div
                animate={animate ? 
                    {opacity: 100} :
                    {opacity: 0}

                }
                transition={{ duration: 0.3, ease: "easeIn"}}
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
        </div>


    )
})