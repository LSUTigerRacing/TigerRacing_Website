import { useState, useEffect } from "react";
import { CollageSlide } from "../../components/CollageItem.tsx";
import { motion } from "motion/react";
import DriveVideo from "../../assets/images/Home/drive.webm";
import GeauxFaster from "../../assets/images/Home/Slides/GeauxFaster.png";
import GeauxFurther from "../../assets/images/Home/Slides/GeauxFurther.png";
import GeauxTogether from "../../assets/images/Home/Slides/GeauxTogether.png";


const createSvgBackground = (svgContent: string): string => {
  const encodedSvg = encodeURIComponent(svgContent);
  return `url("data:image/svg+xml,${encodedSvg}")`;
};

const blurb =`  
  <svg width="100%" height="120vh" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <ellipse cx="50" cy="15" rx="5vh" ry="10" fill="#510087" />
    <rect x="0" y="15" width="100" height="109" fill="#510087"/>
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
          <div className="!ml-30">
            <div className="text-9xl">
              <h1 className="text-[#FFD500]">LSU's Formula SAE</h1>
            </div>
            <div className="w-[40vw] text-2xl !mt-[2vh]">
              <p className="text-[#F5F0F6]">
                Starting in 1983 as an ME capstone project, LSU TigerRacing has become a proving ground where theory meets the test of competition. 
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

          <div className="w-screen text-8xl text-center !mt-[8vh]">
            <h1 className="text-[#FFD500]">Powering TigerRacing</h1>
          </div>

        </div>
      </div>
      <div className="w-screen h-screen">
        <CollageSlide 
          imgSrc={GeauxFaster} 
          tagline="GEAUX FASTER."
          description="Designs continue to improve every year, every car. See our predecessors and how they performed."
          buttonName="Our Cars"
          target="/cars"
        />
        <CollageSlide 
          imgSrc={GeauxFurther} 
          tagline="GEAUX FURTHER."
          description="We started as a curriculum-integrated program. Now, we grow as our own independent team. Learn more about our history behind TigerRacing."
          buttonName="Our Story"
          target="/about"
        />
        <CollageSlide 
          imgSrc={GeauxTogether} 
          tagline="GEAUX TOGETHER."
          description="We stress data-based engineering, documentation, and determination. Find out who is behind the design and build of our race cars."
          buttonName="Our Story"
          target="/about"
        />
      </div>
    </div>
  );
};

export default Home;