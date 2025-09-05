import { useRef, useState, useEffect } from "react";

import Car2025 from "../../assets/images/Cars/2025.png";
import Car2022 from "../../assets/images/Cars/2022.png";
import Car2021 from "../../assets/images/Cars/2021.png";
import Car2019 from "../../assets/images/Cars/2019.png";
import Car2018 from "../../assets/images/Cars/2018.png";
import Car2017 from "../../assets/images/Cars/2017.png";
import Car2016 from "../../assets/images/Cars/2016.png";
import Car2015 from "../../assets/images/Cars/2015.png";
import Car2014 from "../../assets/images/Cars/2014.png";
import Car2013 from "../../assets/images/Cars/2013.png";
import Car2012 from "../../assets/images/Cars/2012.png";
import Car2011 from "../../assets/images/Cars/2011.png";
import Car2009 from "../../assets/images/Cars/2009.png";
import Car20082007 from "../../assets/images/Cars/2007-2008.png";
import Car2006 from "../../assets/images/Cars/2006.png";
import Car1993 from "../../assets/images/Cars/1993.png";
import Car1983 from "../../assets/images/Cars/1983.png";

const Cars = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.WheelEvent) => {
    console.log('Scroll triggered', e.deltaY); // Add this line
    e.preventDefault();
    if (scrollRef.current) {
      console.log('Scrolling left', e.deltaY); // Add this line
      const container = scrollRef.current;
      console.log('scrollWidth:', container.scrollWidth);
      console.log('clientWidth:', container.clientWidth);
      console.log('current scrollLeft:', container.scrollLeft);
      container.scrollLeft += e.deltaY;
      console.log('new scrollLeft:', container.scrollLeft);
    }
  }

  return (
    <div className="h-screen w-fit">
      <span className="fixed bottom-0 left-5 text-[20vw]">
        <h1 className="text-[#510087]">
          CARS
        </h1>
      </span>

      <div 
        ref={scrollRef}
        onWheel={handleScroll}
        className="overflow-x-auto overflow-y-hidden h-screen w-max"
      >
        <CarTile
          year="2025"
          img={Car2025}
          width="50"
          height="70"
          xPos="10vw"
          yPos="20vh"
          titlePos="top-right"
        />
        <CarTile
          year="2022"
          img={Car2022}
          width="50"
          height="60"
          xPos="70vw"
          yPos="10vh"
          titlePos="top-left"
        />
        <CarTile
          year="2021"
          img={Car2021}
          width="30"
          height="40"
          xPos="125vw"
          yPos="48vh"
          titlePos="top-right"
        />
        <CarTile
          year="2019"
          img={Car2019}
          width="30"
          height="40"
          xPos="140vw"
          yPos="5vh"
          titlePos="bottom-right"
        />
        <CarTile
          year="2018"
          img={Car2018}
          width="30"
          height="40"
          xPos="160vw"
          yPos="48vh"
          titlePos="top-right"
        />
        <CarTile
          year="2017"
          img={Car2017}
          width="50"
          height="60"
          xPos="195vw"
          yPos="20vh"
          titlePos="top-left"
        />
        <CarTile
          year="2016"
          img={Car2016}
          width="35"
          height="45"
          xPos="250vw"
          yPos="48vh"
          titlePos="top-right"
        />
        <CarTile
          year="2015"
          img={Car2015}
          width="30"
          height="40"
          xPos="270vw"
          yPos="3vh"
          titlePos="bottom-left"
        />
        <CarTile
          year="2014"
          img={Car2014}
          width="30"
          height="40"
          xPos="288vw"
          yPos="48vh"
          titlePos="top-left"
        />
        <CarTile
          year="2013"
          img={Car2013}
          width="55"
          height="70"
          xPos="325vw"
          yPos="8vh"
          titlePos="top-right"
        />
        <CarTile
          year="2022"
          img={Car2012}
          width="40"
          height="45"
          xPos="385vw"
          yPos="48vh"
          titlePos="bottom-right"
        />
        <CarTile
          year="2011"
          img={Car2011}
          width="33"
          height="42"
          xPos="415vw"
          yPos="3vh"
          titlePos="top-right"
        />
        <CarTile
          year="2009"
          img={Car2009}
          width="33"
          height="42"
          xPos="430vw"
          yPos="48vh"
          titlePos="top-left"
        />
        <CarTile
          year="2008 2007"
          img={Car20082007}
          width="48"
          height="58"
          xPos="468vw"
          yPos="20vh"
          titlePos="top-left"
        />
        <CarTile
          year="2006"
          img={Car2006}
          width="30"
          height="40"
          xPos="520vw"
          yPos="48vh"
          titlePos="top-right"
        />
        <CarTile
          year="1993"
          img={Car1993}
          width="40"
          height="50"
          xPos="553vw"
          yPos="25vh"
          titlePos="bottom-left"
        />
        <CarTile
          year="1983"
          img={Car1983}
          width="50"
          height="68"
          xPos="597vw"
          yPos="18vh"
          titlePos="bottom-left"
        />
      </div>

    </div>
  );
};

const CarTile = (props) => {
  const {
    year,
    img,
    width,
    height,
    xPos,
    yPos,
    titlePos
  } = props;
  
  const [titleCorner, setTitleCorner] = useState(0);

  useEffect(() => {
    if (titlePos === "top-left") {
      setTitleCorner(0);
    } else if (titlePos === "top-right") {
      setTitleCorner(1);
    } else if (titlePos === "bottom-left") {
      setTitleCorner(2);
    } else if (titlePos === "bottom-right") {
      setTitleCorner(3);
    }
  }, [titlePos]);

  return (
    <div 
      className={`w-[${width}vw] h-[${height}vh] bg-cover bg-center overflow-hidden absolute`}
      style={{ 
          width: `${width}vw`,
          height: `${height}vh`,
          bottom: `${yPos}`,
          left: `${xPos}`,
          borderRadius:`${width/10}vw`,
          backgroundImage: `url(${img})`
      }}
    >
      <h1 
        className={`text-[#F5F0F6] absolute
          ${titleCorner === 0 ? 'top-[1%] left-[9%]' : ''}
          ${titleCorner === 1 ? 'top-[1%] right-[9%]' : ''}
          ${titleCorner === 2 ? 'bottom-[1%] left-[9%]' : ''}
          ${titleCorner === 3 ? 'bottom-[1%] right-[9%]' : ''}
          `}
        style={{
          fontSize: `${width/6}vw`
        }}
      >{year}</h1>
    </div>
  )
}

export default Cars;