import { useState, useEffect } from 'react';

import HeroImage1 from "../../assets/images/About/2014.jpg";
import HeroImage2 from "../../assets/images/About/2013.jpg";
import HeroImage3 from "../../assets/images/About/2023.png";
import HeroImage4 from "../../assets/images/About/2018.JPG";
import HeroImage5 from "../../assets/images/About/2019.JPG";
import HeroImage6 from "../../assets/images/About/2021.JPG";


const About = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [mottoIndex, setMottoIndex] = useState(0);
  const [fixedPos, setFixedPos] = useState(true);

  const images = [
    HeroImage1,
    HeroImage2,
    HeroImage3,
    HeroImage4,
    HeroImage5,
    HeroImage6
  ]

  const mottos = [
    ["THEORY ONLY TAKES YOU SO FAR.",
    "THE TRACK TELLS YOU BY HOW MUCH."],
    ["PROVEN COMBUSTION." ,
    "ELECTRIC AMBITION."],
    ["FORGED IN LOUISIANA HEAT." ,
    "TEMPERED IN COMPETITION."],
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const scrollVh = (scrollPosition / windowHeight) * 100;

      let imgInd; 
      let mottoInd;
      let vhSwitch = 75;

      imgInd = Math.min(Math.floor(scrollVh / vhSwitch), images.length - 1);
      mottoInd = Math.min(Math.floor(scrollVh / (vhSwitch * 2)), mottos.length - 1);
      setImageIndex(Math.max(0, imgInd)); // set to max 0 because user can scroll up for negative ind
      setMottoIndex(Math.max(0, mottoInd));
      if (scrollVh >= (vhSwitch * (images.length - 1)) + 20) {
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
      <div className={`h-[500vh] relative`}>
        <div
            className={fixedPos ? `w-[58vw] h-[60vh] fixed top-1/2 left-1/2 transform -translate-y-[34vh] -translate-x-1/2 flex items-center` : 
                        `w-[58vw] h-[60vh] absolute bottom-0 left-1/2 transform -translate-y-[34vh] -translate-x-1/2` 
            }
        >
          <img
            src={images[imageIndex]}
          />
        </div>
        <div className={ 
            (fixedPos ? 'fixed top-[83.5vh] left-1/2 transform -translate-x-1/2' :
            `absolute bottom-[13vh] left-1/2 transform -translate-x-1/2`)}       
        >
          <h1 className='text-center'>
            {mottos[mottoIndex][0]}
          </h1>
          <h1 className='text-center font-[Joan]'> 
            {mottos[mottoIndex][1]}
          </h1>
        </div>
      </div>

      <div className='h-screen w-[50.9vw] relative text-center flex-col left-1/2  transform -translate-x-1/2'>
        <p className='text-4xl'>
          TigerRacing started in 1983 as a senior design project and evolved into LSU's premier Formula SAE team. We're a dedicated group of engineers turning classroom theory into championship-winning racecars, placing 2nd in Skidpad and 7th overall in 2022 before making our bold transition to electric vehicles.        
        </p>
        <br/>
        <p className='text-4xl'>
          Today, we're pioneering the future of motorsport with cutting-edge EV technology, from high-voltage systems to advanced battery design. Our team is where ambitious students gain real-world engineering experience, compete at the highest level, and build the innovations that drive tomorrow's automotive industry.
        </p>
        <br/>
        <p className='text-4xl'>
  Whether you're a student ready to push boundaries or a sponsor looking to support the next generation of automotive pioneers, TigerRacing is where serious engineering meets serious results.
        </p>
      </div>


    </div>

  );
};

export default About;