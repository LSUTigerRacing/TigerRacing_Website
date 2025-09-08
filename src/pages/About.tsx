import { useState, useEffect } from 'react';

import HeroImage1 from "../assets/images/About/Collage/2014.jpg";
import HeroImage2 from "../assets/images/About/Collage/2013.jpg";
import HeroImage3 from "../assets/images/About/Collage/firstcar.png";
import HeroImage4 from "../assets/images/About/Collage/2023.png";
import HeroImage5 from "../assets/images/About/Collage/guy_welding.jpg";
import HeroImage6 from "../assets/images/About/Collage/PCBSPREAD.jpg";
import HeroImage7 from "../assets/images/About/Collage/osha_violation.jpeg";
import HeroImage8 from "../assets/images/About/Collage/2021.JPG";

import History from "../assets/images/About/history.png";


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
    HeroImage6,
    HeroImage7,
    HeroImage8
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
      let vhSwitch = 800/images.length; //vh length that each image has before switching to next

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
    <div className='h-fit bg-[#F5F0F6]'>
      <div className={`h-[820vh] relative flex justify-center`}>
        <div
            className={`
              w-[58vw] h-[80vh] flex flex-col justify-between
              ${fixedPos ? 
                `fixed !mt-[12vh]`
                : 
                `absolute bottom-[30vh]`}`
            } 
        >
          <div className="w-full h-[90%]"
               style={{ 
                    backgroundImage: `url(${images[imageIndex]})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
            <img
              // src={images[imageIndex]}
              className='object-cover bg-amber-50'
            />
          </div>
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
        <div className='w-[50%] text-center text-[2rem] leading-[3rem] !mb-[15vh]'>
          <p>
            TigerRacing <strong>started in 1983</strong> as a senior design project and evolved into LSU's premier <strong>Formula SAE team</strong>. We're a dedicated group of engineers turning classroom theory into championship-winning racecars, placing 2nd in Skidpad and <strong>7th overall in 2022</strong> before making our bold transition to electric vehicles.        
          </p>
          <br/>
          <p>
            Today, we're pioneering the future of motorsport with cutting-edge EV technology, from high-voltage systems to advanced battery design. Our team is where ambitious students gain <strong>real-world engineering experience</strong>, compete at the highest level, and build the innovations that drive tomorrow's automotive industry.
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

      <div className='w-[85%] !mx-auto !my-[10vh] overflow-hidden '>
        <div className='w-[60%] float-left'>
          <span className='text-[#510087] text-[4rem]'>
            <h2>What is Formula SAE?</h2>
          </span>
          <span className='text-[2.25rem]'>
          <p>Formula SAE is the world's <strong>largest collegiate engineering competition</strong>, encompassing hundreds of schools from around the world. The competition calls for students to design and build an approximately <strong>two-thirds scale Formula One car</strong> from the ground up every year.  There are several annual competitions located in the US, UK, Germany, Australia  Austria, Japan, Italy, and Brazil.  </p>
          </span>
        </div>
        <div className='w-[70%] text-right float-right'>
          <span className='text-[#510087] text-[4rem]'>
            <h2>Competition</h2>
          </span>
          <span className='text-[2.25rem]'>
            <p>The students must defend their design to a panel of industry leaders through a <strong>series of static and dynamic tests</strong>.  The static events include <strong>business presentation, cost evaluation, and design evaluation</strong> in which a team can acquire 30% of competition points.  In order to proceed to the dynamic events, a car must pass a rigorous technical inspection to ensure the car is safe and follows competition regulations.  Finally, a team can back any smack talk and try to gain the remaining 70% of points through the dynamic tests: <strong>skid-pad, acceleration, autocross, and endurance.</strong></p>
          </span>
        </div>
      </div>

    </div> 

  );
};

export default About;