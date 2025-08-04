import { useState, useEffect } from "react";
import { CollageSlide } from "../../components/CollageItem.tsx";
import { motion } from "motion/react";
import DriveVideo from "../../assets/images/Home/drive.webm"

const createSvgBackground = (svgContent: string): string => {
  const encodedSvg = encodeURIComponent(svgContent);
  return `url("data:image/svg+xml,${encodedSvg}")`;
};

const blurb =`        
  <svg width="100%" height="120vh" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="30" rx="95" ry="20" fill="#510087" />
    <rect width="100vw" height="120vh" x="-50" y="30" fill="#510087"/>
  </svg>`;

const Home = () => {
    const [animate, setAnimate] = useState(false)
    
    useEffect(() => {
        const title_timer = setTimeout(() => {
            setAnimate(true);
        }, 2400);
        
        return () => clearTimeout(title_timer);
    })
  return (
    <div className="w-screen h-fit bg-[#F5F0F6]">
      <div className="w-screen h-screen"> {/* photo collage */}
          <div className="w-[99.5vw] overflow-hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-[10.4vw] leading-[8vw] z-10">
            <h1 
              className={`text-[#FFD500] text-center transition-transform duration-900 ease-in-out ${animate ? 'translate-y-0' : 'translate-y-full'}`} //+ (animate ? 'translate-y-0' : 'translate-y-full')
            >
              WELCOME <br/> TO TIGER RACING.
            </h1>
          </div>
          <div className="w-[95vw] h-[87vh] absolute top-1/2 left-1/2 transform -translate-y-6/13 -translate-x-1/2 overflow-hidden">
            <video 
              className="min-w-full min-h-full w-auto h-auto object-cover"              
              autoPlay
              loop
            >
                <source src={DriveVideo} type="video/webm"/>
            </video>
            <div className="absolute inset-0 bg-[#510087] opacity-35 pointer-events-none"></div>
          </div>

      </div>

      <div 
        className="w-screen h-[175vh] overflow-hidden"
        style={{
          backgroundImage: createSvgBackground(blurb),
          backgroundRepeat: `repeat`,
          backgroundSize: "100vw 175vh"
        }}  
      >
        <div className="transform translate-y-[35vh]">
          <div className="translate-x-[8vw]">
                        <div className="text-8xl">
              <h1 className="text-[#FFD500]">LSU's Formula SAE</h1>
            </div>
            <br/>
            <div className="w-[40vw] text-2xl">
              <p className="text-[#F5F0F6]">
                Starting in 1985 as an ME capstone project, LSU TigerRacing has become a proving ground where theory meets the test of competition. 
              </p>
              <br/>
              <p className="text-[#F5F0F6]">
                Here, hands-on experience fuels innovation as we design, build, and race cutting-edge formula vehicles.
              </p>
              <br/>
              <p className="text-[#F5F0F6]">
                Our shift to electric racing in 2023 reflects both our commitment to progress and our dedication to preparing the next generation of engineers. 
              </p>
              <br/>
              <p className="text-[#F5F0F6]">
                Every season brings new challenges, new solutions, and new opportunities to push further—on the track and beyond it.
              </p>
            </div>
          </div>

          <div className="w-screen absolute text-8xl text-center transform translate-y-18">
            <h1 className="text-[#FFD500]">Powering TigerRacing</h1>
          </div>

        </div>


      </div>
      <div>
        {/* <CollageSlide imgSrc={Collage1} tagline="GEAUX FASTER."/> */}
      </div>
    </div>
  );
};

export default Home;