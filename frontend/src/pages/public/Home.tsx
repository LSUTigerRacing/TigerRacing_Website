import { CollageItem } from "../../components/CollageItem.tsx";

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


const Home = () => {
  return (
    <div className="w-screen h-fit bg-[#F5F0F6]">
      <div className="w-screen h-screen"> {/* photo collage */}
        <div className="w-[99.5vw] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-[10.4vw] leading-[8vw] drop-shadow-xl z-10">
          <h1 
            className="text-[#FFD500] text-center"
            style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.8)'}}
          >
            WELCOME <br/> TO TIGER RACING.
          </h1>
        </div>

        <CollageItem
          imgPath={Collage1}
          width="54vw"
          height="60vh"
          xPos="22.5vw"
          yPos="20vh"
          zIndex={1}
          order={0}
        />
        <CollageItem
          imgPath={Collage2}
          width="21.5vw"
          height="31vh"
          xPos="70.5vw"
          yPos="7.3vh"
          zIndex={2}
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
          imgPath={Collage4}
          width="19.5vw"
          height="28.3vh"
          xPos="63.8vw"
          yPos="49.5vh"
          zIndex={7}
          order={3}
        />
        <CollageItem
          imgPath={Collage5}
          width="43.1vw"
          height="42.6vh"
          xPos="23.6vw"
          yPos="60.5vh"
          zIndex={6}
          order={4}
        />
        <CollageItem
          imgPath={Collage7}
          width="39.9vw"
          height="49.3vh"
          xPos="35.9vw"
          yPos="18.4vh"
          zIndex={5}
          order={5}
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
          imgPath={Collage8}
          width="19.1vw"
          height="31.7vh"
          xPos="77vw"
          yPos="70vh"
          zIndex={7}
          order={7}
        />
        <CollageItem
          imgPath={Collage9}
          width="23.4vw"
          height="27.8vh"
          xPos="39.3vw"
          yPos="7.3vh"
          zIndex={8}
          order={8}
        />
        <CollageItem
          imgPath={Collage10}
          width="33.4vw"
          height="43.6vh"
          xPos="61.9vw"
          yPos="21.6vh"
          zIndex={6}
          order={9}
        />

      </div>

      <div>
        <h1>LSU's Formula SAE</h1>
        <svg className="absolute" width="100%" height="120vh" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="30" rx="95" ry="20" fill="#510087" />
          <rect width="100vw" height="120vh" x="-50" y="30" fill="#510087"/>
        </svg>
      </div>
    </div>
    
  );
};

export default Home;