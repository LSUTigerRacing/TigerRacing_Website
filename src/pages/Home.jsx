import { useState, useEffect, useRef } from "react";
import { CollageSlide } from "../components/CollageItem.tsx";
import { useLoadingComplete } from "../hooks/LoadingContext.jsx";
import { motion } from "motion/react";

import DriveVideo from "../assets/images/Home/drive.webm";

import OldAssPic from "../assets/images/Home/OldAssPic.jpeg";
import FirstClub from "../assets/images/Home/2013-car.png";
import ModernDay from "../assets/images/Home/ModernDay.png";

import BASF from "../assets/images/Home/Sponsor_Logos/BASF.png"
import Exxon from "../assets/images/Home/Sponsor_Logos/Exxon.png"
import Haas from "../assets/images/Home/Sponsor_Logos/Haas.png"
import Hoosier from "../assets/images/Home/Sponsor_Logos/Hoosier.png"
import Kenesto from "../assets/images/Home/Sponsor_Logos/Kenesto.png"
import LSUCOE from "../assets/images/Home/Sponsor_Logos/LSUCOE.png"
import Siemens from "../assets/images/Home/Sponsor_Logos/Siemens.png"
import SolidWorks from "../assets/images/Home/Sponsor_Logos/SolidWorks.png"

import GeauxFaster from "../assets/images/Home/Slides/GeauxFaster.png";
import GeauxFurther from "../assets/images/Home/Slides/GeauxFurther.png";
import GeauxTogether from "../assets/images/Home/Slides/GeauxTogether.png";

import LeftArrow from "../assets/images/General/arrow-left-white.png"
import RightArrow from "../assets/images/General/arrow-right-white.png"

const createSvgBackground = (svgContent) => {
  const encodedSvg = encodeURIComponent(svgContent);
  return `url("data:image/svg+xml,${encodedSvg}")`;
};

const blurb =`  
  <svg width="100%" height="120vh" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <ellipse cx="50" cy="15" rx="5vh" ry="10" fill="#510087" />
    <rect x="0" y="15" width="100" height="109" fill="#510087"/>
  </svg>`;

// interface ImageData {
//   id: number;
//   src: string;
//   alt: string;
// }

const SponsorsBar = () => {
  const images = [
    { id: 1, src: BASF, alt: 'BASF'},
    { id: 2, src: Exxon, alt: 'Exxon'},
    { id: 3, src: Haas, alt: 'Haas Foundation'},
    { id: 4, src: Hoosier, alt: 'Hoosier'},
    { id: 5, src: SolidWorks, alt: 'SolidWorks'},
    { id: 6, src: Kenesto, alt: 'Kenesto'},
    { id: 7, src: LSUCOE, alt: 'LSU College of Engineering'},
    { id: 8, src: Siemens, alt: 'Siemens'},
  ];

  return (
    <div className="relative w-fit h-fit !my-[5vh]">
      <div className="w-fit flex gap-[5rem] animate-scroll whitespace-nowrap">
        {images.map((image) => (
          <div
            key={`first-${image.id}`}
            className="inline-block shrink-0"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="!h-[15rem] !max-w-[40vw] w-auto object-contain"
            />
          </div>
        ))}
        {/* duped image set for looping */}
        {images.map((image) => (
          <div
            key={`first-${image.id}`}
            className="inline-block shrink-0"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="!h-[15rem] !max-w-[40vw] w-auto object-contain"
            />
          </div>
        ))}
      </div>
      {/* Custom CSS for animation (this is gpt'd) */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>

  )
}

// The carousel of different pages at the bottom
const PageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
        <CollageSlide 
          imgSrc={GeauxFaster} 
          tagline="GEAUX FASTER."
          description="Designs continue to improve every year, every car. See our predecessors and how they performed."
          buttonName="Our Cars"
          target="/cars"
        />,
        <CollageSlide 
          imgSrc={GeauxFurther} 
          tagline="GEAUX FURTHER."
          description="We started as a curriculum-integrated program. Now, we grow as our own independent team. Learn more about our history behind TigerRacing."
          buttonName="Our Story"
          target="/about"
        />,
        <CollageSlide 
          imgSrc={GeauxTogether} 
          tagline="GEAUX TOGETHER."
          description="We stress data-based engineering, documentation, and determination. Find out who is behind the design and build of our race cars."
          buttonName="Our Team"
          target="/about"
        />
  ]
  const previous = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1: currentIndex - 1)
  }

  const next = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0: currentIndex + 1)
  }

  return (
      <div className="relative w-screen">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  {slide}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={previous}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            <img 
              src={LeftArrow}
              className="w-[7rem] h-[7rem]" 
            />
          </button>
  
          <button
            onClick={next}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            <img 
              src={RightArrow}
              className="w-[7rem] h-[7rem]" 
            />        
          </button>
      </div>
  )
}

const Home = () => {
    const [animate, setAnimate] = useState(false)
    const { isFullyComplete, isLoadingComplete, isAnimationComplete } = useLoadingComplete();

    useEffect(() => {
      if (isFullyComplete && !animate) {
        console.log("Loading Done!");
        
        const title_timer = setTimeout(() => {
          setAnimate(true);
        }, 200);
        
        return () => clearTimeout(title_timer);
      }
    }, [isFullyComplete, animate]);


    return (
      <div className="w-screen h-fit bg-[#F5F0F6]">
        <div className="w-screen h-screen">
          {/* Video */}
          <div className="w-[95vw] h-[87vh] absolute top-1/2 left-1/2 transform -translate-y-6/13 -translate-x-1/2 overflow-hidden">
            <video 
              className="min-w-full min-h-full w-auto h-auto object-cover"              
              autoPlay
              loop
            >
                <source src={DriveVideo} type="video/webm"/>
            </video>
            <div className="absolute inset-0 bg-[#510087] opacity-40 pointer-events-none"></div>
          </div>

          {/* text and sumn */}
          <div className="w-screen h-fit absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <div className="w-full min-h-fit overflow-hidden text-[13rem] leading-40 z-10">
              <h1 
                className={`text-[#FFD500] text-center transition-transform duration-900 ease-in-out ${animate ? 'translate-y-0' : 'translate-y-full'}`} //+ (animate ? 'translate-y-0' : 'translate-y-full')
              >
                WELCOME <br/> TO TIGER RACING.
              </h1>
            </div>
          </div>
        </div>

        <div 
          className="w-screen h-fit overflow-hidden"
          style={{
            backgroundImage: createSvgBackground(blurb),
            backgroundRepeat: `repeat`,
            backgroundSize: "100vw 175vh"
          }}  
        >
          <div className="!mt-[18rem]">
            <div className="w-screen flex flex-col items-center">
              <div className="w-[85%]">
                <div className="text-9xl text-[#FFD500]">
                  <h1>LSU's Formula SAE</h1>
                </div>

                <div className="flex justify-between items-center !mt-[3vh]">
                  <div className="w-[40%] h-fit flex-none text-2xl text-[#F5F0F6]">
                    <p>
                      Starting in 1983 as an ME capstone project, LSU TigerRacing has become a proving ground where theory meets the test of competition. 
                    </p>
                    <br/>
                    <p>
                      Here, hands-on experience fuels innovation as we design, build, and race cutting-edge formula vehicles.
                    </p>
                    <br/>
                    <p>
                      Our shift to electric racing in 2023 reflects both our commitment to progress and our dedication to preparing the next generation of engineers. 
                    </p>
                    <br/>
                    <p>
                      Every season brings new challenges, new solutions, and new opportunities to push further—on the track and beyond it.
                    </p>
                  </div>
                  <div className="max-w-[55%]">
                    <img
                      src={ModernDay}
                      alt="2025 Team"
                      className="h-full w-full object-cov"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-8xl text-center !mt-[8vh]">
              <h1 className="text-[#FFD500]">Powering TigerRacing</h1>
            </div>
            {/* <SponsorsBar/> */}

          </div>
        </div>
        <PageCarousel/>
        <div className="w-[93%] h-[95vh] flex flex-col justify-between !mx-auto !pb-[10vh]">
          <div/> {/* empty div to shove the second div down*/}
          <div className="h-[60%] flex justify-between">
            <motion.div 
              className="w-[55%] bg-[#FFD500]"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              whileInView = {{ clipPath: 'inset(0 0 0 0)' }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <div className="w-[90%] min-h-[85%] flex flex-col justify-between !mx-[2vw] !mt-[3%] !mb-[6%]">
                <div className="text-2xl">
                  <h2>Want to keep our wheels spinning?</h2>
                  <p>Let's talk!</p>
                </div>

                <span className="text-8xl">
                  <h1>Sponsors</h1>
                </span>
              </div>
            </motion.div>
          
            <motion.div 
              className="w-[40%] bg-[#510087]"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              whileInView = {{ clipPath: 'inset(0 0 0 0)' }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <div className="w-[90%] min-h-[85%] flex flex-col justify-between text-[#F5F0F6] !mx-[2vw] !mt-[3%] !mb-[6%]">
                <div className="text-2xl">
                  <h2>No backseat engineers here.</h2>
                  <p>Grab the wheel!</p>
                </div>

                <span className="text-8xl">
                  <h1>Join us</h1>
                </span>    
              </div>  
            </motion.div>
          </div>
        </div>
      </div>
  );
};

export default Home;