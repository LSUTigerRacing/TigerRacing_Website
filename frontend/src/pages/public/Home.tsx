import { useState, useEffect } from "react";
import { CollageItem } from "../../components/CollageItem.tsx";
import { motion } from "motion/react";
import Collage1 from "../../assets/images/Home/Photo_Collage/Collage_1.jpg";
import Collage2 from "../../assets/images/Home/Photo_Collage/Collage_2.png";
import Collage3 from "../../assets/images/Home/Photo_Collage/Collage_3.png";
import Collage4 from "../../assets/images/Home/Photo_Collage/Collage_4.png";
import Collage5 from "../../assets/images/Home/Photo_Collage/Collage_5.png";
import Collage6 from "../../assets/images/Home/Photo_Collage/Collage_6.png";
import Collage7 from "../../assets/images/Home/Photo_Collage/Collage_7.png";
import Collage8 from "../../assets/images/Home/Photo_Collage/Collage_8.png";
import Collage9 from "../../assets/images/Home/Photo_Collage/Collage_9.png";
import Collage10 from "../../assets/images/Home/Photo_Collage/David_Car.png";

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
        }, 2850);
        
        return () => clearTimeout(title_timer);
    })
  return (
    <div className="w-screen h-fit bg-[#F5F0F6]">
      <div className="w-screen h-screen"> {/* photo collage */}
          <div className="w-[99.5vw] overflow-hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-[10.4vw] leading-[8vw] drop-shadow-xl z-10">
            <h1 
              className={`text-[#FFD500] text-center transition-transform duration-1000 ease-out ${animate ? 'translate-y-0' : 'translate-y-full'}`} //+ (animate ? 'translate-y-0' : 'translate-y-full')
              style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.8)'}}
            >
              WELCOME <br/> TO TIGER RACING.
            </h1>
          </div>

        {/* ORDER COLLAGE ITEM IN THE ORDER OF THEIR Z INDEX OR IT DOESNT LOAD FOR SOME REASON */}
        <CollageItem
          imgPath={Collage1}
          width="54vw"
          height="60vh"
          xPos="22.5vw"
          yPos="20vh"
          zIndex={0}
          order={-10}
        />
        <CollageItem
          imgPath={Collage2}
          width="21.5vw"
          height="31vh"
          xPos="70.5vw"
          yPos="7.3vh"
          zIndex={1}
          order={1}
        />
        <CollageItem
          imgPath={Collage3}
          width="31.25vw"
          height="53vh"
          xPos="4.7vw"
          yPos="9.7vh"
          zIndex={2}
          order={2}
        />


        <CollageItem
          imgPath={Collage7}
          width="39.9vw"
          height="49.3vh"
          xPos="35.9vw"
          yPos="18.4vh"
          zIndex={3}
          order={5}
        />
        <CollageItem
          imgPath={Collage10}
          width="33.4vw"
          height="43.6vh"
          xPos="61.9vw"
          yPos="21.6vh"
          zIndex={4}
          order={9}
        />

        <CollageItem
          imgPath={Collage8}
          width="19.1vw"
          height="31.7vh"
          xPos="77vw"
          yPos="70vh"
          zIndex={5}
          order={7}
        />
        <CollageItem
          imgPath={Collage4}
          width="19.5vw"
          height="28.3vh"
          xPos="63.8vw"
          yPos="49.5vh"
          zIndex={7}
          order={3}
        />
        <CollageItem
          imgPath={Collage6}
          width="18.75vw"
          height="30.4vh"
          xPos="7.7vw"
          yPos="61.2vh"
          zIndex={8}
          order={6}
        />
        <CollageItem
          imgPath={Collage9}
          width="23.4vw"
          height="27.8vh"
          xPos="39.3vw"
          yPos="7.3vh"
          zIndex={9}
          order={8}
        />
        <CollageItem
          imgPath={Collage5}
          width="43.1vw"
          height="42.6vh"
          xPos="23.6vw"
          yPos="60.5vh"
          zIndex={10}
          order={4}
        />


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
    </div>
    
  );
};

export default Home;