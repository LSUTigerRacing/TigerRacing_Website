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


const Home = () => {
  return (
    <div className="w-screen h-screen bg-[#F5F0F6]">
      <h1 className="text-[#FFD500] text-[300px]">WELCOME TO TIGER RACING.</h1>
      <a  href="./about">Button</a>

      <CollageItem
        imgPath={Collage1}
        width="54vw"
        height="60vh"
        xPos="22.5vw"
        yPos="20vh"
        zIndex={0}
        order={0}
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
        imgPath={Collage4}
        width="19.5vw"
        height="28.3vh"
        xPos="63.8vw"
        yPos="49.5vh"
        zIndex={3}
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
        zIndex={0}
        order={5}
      />
      <CollageItem
        imgPath={Collage6}
        width="18.75vw"
        height="30.4vh"
        xPos="7.7vw"
        yPos="61.2vh"
        zIndex={0}
        order={6}
      />
      <CollageItem
        imgPath={Collage8}
        width="19.1vw"
        height="31.7vh"
        xPos="77vw"
        yPos="70vh"
        zIndex={0}
        order={7}
      />
      <CollageItem
        imgPath={Collage9}
        width="23.4vw"
        height="27.8vh"
        xPos="39.3vw"
        yPos="7.3vh"
        zIndex={0}
        order={8}
      />

    </div>
  );
};

export default Home;