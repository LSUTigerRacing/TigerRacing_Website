import { useState, useEffect } from 'react';

import HeroImage1 from "../../assets/images/About/2014.jpg";
import HeroImage2 from "../../assets/images/About/2013.jpg";
import HeroImage3 from "../../assets/images/About/2023.png";
import HeroImage4 from "../../assets/images/About/2018.JPG";
import HeroImage5 from "../../assets/images/About/2019.JPG";
import HeroImage6 from "../../assets/images/About/2021.JPG";


const About = () => {
  const [scrollInfo, setScrollInfo] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [mottoIndex, setMottoIndex] = useState(0);

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

      setScrollInfo(scrollVh);

      let imgInd; 
      let mottoInd;
      let vhSwitch = 75;

      imgInd = Math.floor(scrollVh / vhSwitch);
      mottoInd = Math.floor(scrollVh / (vhSwitch * 2));
      setImageIndex(Math.max(0, imgInd)); // set to max 0 because user can scroll up for negative ind
      setMottoIndex(Math.max(0, mottoInd));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  })

  return (
    <div className='h-[500vh]'>
      <h1 className="text-5xl">About Page</h1>
      <div
          className=' w-[55vw] h-[60vh] fixed top-1/2 left-1/2 transform -translate-y-[35vh] -translate-x-1/2 flex items-center'
      >
        <img
          src={images[imageIndex]}
        />
      </div>

      <p className='fixed top-4/5 left-1/2 transform -translate-x-1/2'>
        {mottos[mottoIndex][0]}
      </p>
      <p className='fixed top-[82.5vh] left-1/2 transform -translate-x-1/2'> 
        {mottos[mottoIndex][1]}
      </p>

      <a className="flex flex-row min-h-screen justify-center items-center" href="/">Button</a>
    </div>
  );
};

export default About;