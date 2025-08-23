import { useState, useEffect } from 'react';

import HeroImage1 from "../../assets/images/About/2014.jpg";
import HeroImage2 from "../../assets/images/About/2013.jpg";
import HeroImage3 from "../../assets/images/About/2023.png";
import HeroImage4 from "../../assets/images/About/2018.JPG";
import HeroImage5 from "../../assets/images/About/2019.JPG";
import HeroImage6 from "../../assets/images/About/2021.JPG";

import History from "../../assets/images/About/history.png";


const About = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [mottoIndex, setMottoIndex] = useState(0);
  const [fixedPos, setFixedPos] = useState(true);
  const [vhHeight, setVhHeight] = useState(0);
  const images = [
    HeroImage1,
    HeroImage2,
    HeroImage3,
    HeroImage4,
    HeroImage5,
    HeroImage6
  ]

  const mottos = [
    ["FORGED IN LOUISIANA HEAT." ,
    "TEMPERED IN COMPETITION."],
    ["THEORY ONLY TAKES YOU SO FAR.",
    "THE TRACK TELLS YOU BY HOW MUCH."],
    ["PROVEN COMBUSTION." ,
    "ELECTRIC AMBITION."],
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const scrollVh = (scrollPosition / windowHeight) * 100;
      setVhHeight(scrollVh)
      let imgInd; 
      let mottoInd;
      let vhSwitch = 600/images.length; //vh length that each image has before switching to next

      imgInd = Math.min(Math.floor(scrollVh / vhSwitch), images.length - 1);
      mottoInd = Math.min(Math.floor(scrollVh / (vhSwitch * 2)), mottos.length - 1);
      setImageIndex(Math.max(0, imgInd)); // set to max 0 because user can scroll up for negative ind
      setMottoIndex(Math.max(0, mottoInd));
      if (scrollVh >= ((vhSwitch * (images.length - 1)))) {
        setFixedPos(false);
      } else {
        setFixedPos(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  })

  return (
    <div className='h-fit bg-[#FFFDF0]'>
      <div className={`h-[600vh] relative flex justify-center`}>
        <div
            className={`
              w-[58vw] h-[60vh] flex flex-col gap-4
              ${fixedPos ? ` fixed !mt-[12vh]`
                : `absolute bottom-[30vh]`}`} 
        >
          <img
            src={images[imageIndex]}
          />
          <div className='w-[100%] text-center text-2xl'>
            <h1 >
              {mottos[0][0]}
            </h1>
            <h1 className='font-[Joan]'> 
              {mottos[0][1]}
              {/* {vhHeight} */}
            </h1>
          </div>

        </div>
      </div>

      <div className='w-screen h-fit relative flex flex-col justify-center items-center'>
        <div className='w-[50%] text-center text-4xl !mb-[15vh]'>
          <p>
            TigerRacing started in 1983 as a senior design project and evolved into LSU's premier Formula SAE team. We're a dedicated group of engineers turning classroom theory into championship-winning racecars, placing 2nd in Skidpad and 7th overall in 2022 before making our bold transition to electric vehicles.        
          </p>
          <br/>
          <p>
            Today, we're pioneering the future of motorsport with cutting-edge EV technology, from high-voltage systems to advanced battery design. Our team is where ambitious students gain real-world engineering experience, compete at the highest level, and build the innovations that drive tomorrow's automotive industry.
          </p>
          <br/>
          <p>
    Whether you're a student ready to push boundaries or a sponsor looking to support the next generation of automotive pioneers, TigerRacing is where serious engineering meets serious results.
          </p>
        </div>

        <img
          src={History}
          className='w-[93%] h-[93%] object-cover'
        />
      </div>




    </div> 

  );
};

export default About;