import { useState } from "react";
import { Link } from "react-router-dom";

import ChassisPic from "../../assets/images/Join/chassis.jpg"
import PowertrainPic from "../../assets/images/Join/powertrain.png"
import BuisnessPic from "../../assets/images/Join/business.jpg"

import CareerPic from "../../assets/images/Join/career.png"
import CompetitionWin from "../../assets/images/Join/competition-win.png"
import CompetitionWinMeme from "../../assets/images/Join/competition-win-meme.png"
import CommunityHeader from "../../assets/images/Join/community-header.jpg"
import Community1 from "../../assets/images/Join/community-1.png"
import Community2 from "../../assets/images/Join/community-2.png"
import Community3 from "../../assets/images/Join/community-3.png"

import LeftArrow from "../../assets/images/General/arrow-left.png"
import RightArrow from "../../assets/images/General/arrow-right.png"

const JoinReasons = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    <div className="w-screen h-screen flex flex-col justify-center">
          {/* Career */}
          <div className="w-[93%] h-full relative flex flex-col justify-between !pb-[10vh]">
              <div className="w-full min-h-[60%] h-fit bg-[#510087] flex justify-between !p-[3vh] !pl-[5vh]">
                <div className="w-[50%] text-[#F5F0F6]">
                  <h1 className="!text-[8rem]">Career</h1>
                  <p className="!text-[1.8rem]">
                    Formula SAE isn't just a student club, it's your competitive advantage in the engineering job market.
                    <br/>
                    <br/>
                    Employers at Tesla, SpaceX, Ford, Boeing, and major tech companies actively seek and recruit FSAE members and alumni because they know these students can handle complex, multidisciplinary projects and deliver results.
                  </p>
                </div>
                <img
                  src={CareerPic}
                  alt="TigerRacing Members talking to professionals"
                  className="w-[45%] h-fit object-cover"
                />
              </div>
              {/* stats */}
              <div className="w-full h-[35%] flex flex-row justify-between gap-[2%]">
                <div className="w-full bg-[#510087] flex flex-col justify-center text-center text-[#F5F0F6]">
                  <h1 className="!text-[8rem] leading-[9rem]">40%</h1>
                  <p className="text-[2rem]">
                    of members interned in tech/engineering in 2025
                  </p>
                </div>
                <div className="w-full bg-[#510087] text-[#F5F0F6] flex flex-col justify-center items-center">
                  <div className="w-[93%]">
                    <h2 className="!text-[2.1rem]">Where our members and alum are working:</h2>
                    <div className="flex justify-around text-[2rem]">
                      <ul>
                        <li><p>• Tesla</p></li>
                        <li><p>• SpaceX</p></li>
                        <li><p>• NASA</p></li>
                        <li><p>• GM</p></li>
                      </ul>
                      <ul>
                        <li><p>• NOC</p></li>
                        <li><p>• Chevron</p></li>
                        <li><p>• Exxon</p></li>
                        <li><p>• Mosaic</p></li>
                      </ul>
                    </div>
                  </div>

                </div>
                <div className="w-full bg-[#510087] text-[#F5F0F6] flex flex-col justify-center items-center ">

                </div>
              </div>
          </div>
    </div>,
    <div className="w-screen h-screen flex flex-col justify-center">
          {/* Competition */}
          <div className="w-[93%] h-full relative flex flex-col justify-between !pb-[10vh]">
              <div className="w-full min-h-[60%] h-fit bg-[#510087] flex justify-between !p-[3vh] !pl-[5vh]">
                <div className="w-[50%] text-[#F5F0F6]">
                  <h1 className="!text-[8rem]">Competition</h1>
                  <p className="!text-[1.8rem]">
                  Design and construct a complete race car that will compete at 60+ mph against teams from MIT, Stanford, and other top engineering schools!
                  <br/>
                  <br/>
                  Experience the adrenaline rush of watching your design decisions perform under real competitive conditions, where your calculations directly impact vehicle performance at high speeds on an actual racetrack.                
                  </p>
                </div>

                <div className="w-[45%] object-cover relative overflow-hidden shadow-lg group">
                  <img
                    src={CompetitionWin}
                    alt="Car with trophy on it"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-0 ease-in-out group-hover:opacity-0"
                  />
                  <img
                    src={CompetitionWinMeme}
                    alt="Car with trophy on it with red circle thumbnail meme"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-0 ease-in-out group-hover:opacity-100"
                  />
                </div>
              </div>
              {/* stats */}
              <div className="w-full h-[35%] flex flex-row justify-between gap-[2vh] !mt-[2vh]">
                <div className="w-full bg-[#510087] text-center text-[#F5F0F6] !pt-[3%] !pb-[3%]">
                  <h1 className="!text-[8rem] leading-[9rem]">7th/89</h1>
                  <p className="text-[2rem]">
                    Peak overall placement at FSAE Michigan
                  </p>
                </div>
                <div className="w-full bg-[#510087] text-[#F5F0F6] flex flex-col justify-center items-center">
                  <div className="w-[93%]">
                    <h2 className="!text-[2.1rem]">Where our members and alum are working:</h2>
                    <div className="flex justify-around text-[2rem]">
                      <ul>
                        <li><p>• Tesla</p></li>
                        <li><p>• SpaceX</p></li>
                        <li><p>• NASA</p></li>
                        <li><p>• GM</p></li>
                      </ul>
                      <ul>
                        <li><p>• NOC</p></li>
                        <li><p>• Chevron</p></li>
                        <li><p>• Exxon</p></li>
                        <li><p>• Mosaic</p></li>
                      </ul>
                    </div>
                  </div>

                </div>
                <div className="w-full bg-[#510087] text-[#F5F0F6] flex flex-col justify-center items-center ">

                </div>
              </div>
          </div>
    </div>,
    <div className="w-screen h-[95vh] flex flex-col justify-center">
        {/* Community */}
        <div className="w-[93%] h-full relative flex flex-col justify-between">
            <div className="w-full min-h-[60%] h-fit bg-[#510087] flex justify-between !p-[3vh] !pl-[5vh]">
              <div className="w-[50%] text-[#F5F0F6]">
                <h1 className="!text-[8rem]">Community</h1>
                <p className="!text-[1.8rem]">
                  Meet friendly, approachable students who love talking about technical challenges and are excited to share their knowledge and passion for engineering with newcomers at any experience level!
                <br/>
                <br/>
                  Join a team that values every member's contributions, welcomes all backgrounds, and creates an environment where everyone feels welcome to learn, grow, and belong.                  
                </p>
              </div>

              <img
                src={CommunityHeader}
                alt="2021 Team"
                className="w-[45%] h-fit object-cover"
              />
            </div>
            {/* pics */}
            <div className="w-full max-h-[35%] h-fit flex flex-row justify-between !mb-[2vh]">
                  <img
                    src={Community1}
                    alt="Guy in a car"
                    className="w-[32%] h-full object-cover"
                  />
                  <img
                    src={Community2}
                    alt="three guys"
                    className="w-[32%] h-full object-cover"
                  />
                  <img
                    src={Community3}
                    alt="Team BBQ"
                    className="w-[32%] h-full object-cover"
                  />
            </div>
        </div>
    </div>
  ]

  const previous = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1: currentIndex - 1)
  }

  const next = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0: currentIndex + 1)
  }

  return (
    <div className="relative w-screen !mt-[10vh]">
      <div className="w-[93%] !mx-auto">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                {slide}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={previous}
          className="absolute top-1/2 left-[-1vw] -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <img 
            src={LeftArrow}
            className="w-[6rem] h-[6rem]" 
          />
        </button>

        <button
          onClick={next}
          className="absolute top-1/2 right-[-1vw] -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <img 
            src={RightArrow}
            className="w-[6rem] h-[6rem]" 
          />        
        </button>
      </div>
    </div>
   
  )
}

const Join = () => {
  return (
    <div className="w-screen h-fit bg-[#F5F0F6]">
      <span className="w-screen text-center text-[#510087] inline-block !mt-[12vh] !mb-[4vh]">
        <span className="text-[10rem] leading-50">
          <h1 >Want to Join?</h1>
        </span>
        <span className="text-[3.5rem]">
          <p>All Majors Welcome!</p>
        </span>
      </span>

      {/* system pictures */}
      <div className="w-screen flex justify-center">
            <div className="w-[93vw] flex justify-between">
              <Link 
                to="./chassis"
                className="w-[30vw] h-[40vh] bg-cover bg-center text-7xl relative"
                style={{ 
                    backgroundImage: `url(${ChassisPic})`, 
                }}
              >
                <div className="absolute inset-0 bg-[#510087] opacity-20 pointer-events-none"/>
                <h1 className="text-[#F5F0F6] absolute bottom-4 left-2">CHASSIS</h1>
              </Link>

              <Link
              to="./powertrain"
                className="w-[30vw] h-[40vh] bg-cover bg-center text-7xl relative"
                style={{ 
                    backgroundImage: `url(${PowertrainPic})`, 
                }}
              >
                <div className="absolute inset-0 bg-[#510087] opacity-20 pointer-events-none"/>
                <h1 className="text-[#F5F0F6] absolute bottom-4 left-2">POWERTRAIN</h1>
              </Link>

              <Link
                to="./business"
                className="w-[30vw] h-[40vh] bg-cover bg-center text-7xl relative"
                style={{ 
                    backgroundImage: `url(${BuisnessPic})`, 
                }}
              >
                <div className="absolute inset-0 bg-[#510087] opacity-20 pointer-events-none"/>

                <h1 className="text-[#F5F0F6] absolute bottom-4 left-2">BUSINESS</h1>
              </Link>
            </div>
      </div>

      <div className="!mt-[4vh]">
        <span className="text-center text-[#510087] text-[4rem]">
          <h1>First, what's in it for me?</h1>
        </span>
      </div>

      {/* why join */}
      <JoinReasons/>

      {/* Systems */}
      <div>
        <div className="w-screen flex justify-center">
        <div className="w-[93%] !pb-[5rem]">
            <span className="text-[#510087] text-[10rem]">
              <h1>Our Systems</h1>
            </span>
            <p className="text-[2rem]">TigerRacing is divided into three systems, <strong>Chassis, Powertrain, and Business.</strong> Each system is then divided into <strong>subsystems</strong>, such as Aerodynamics, Ergonomics, Battery, Low Voltage, etc. Come check it out!</p>
          </div>
        </div>


        <span className="w-screen flex justify-center"> {/* i tried to use the hr tag but its not cooperating with tailwind so im doing this for now */}
          <div className="w-[93vw] h-1 bg-[#510087] mx-auto"></div>
        </span>
        {/* Chassis Section */}
        <span className="w-screen flex justify-center">
          <div className="w-[93vw] h-[58vh] flex justify-between items-center">
            <div className="flex flex-col !mt-none">
              <span className="text-[#510087] text-[10rem]">
                <h1>Chassis</h1>
              </span>

              <div className="w-[60vw] flex justify-between !pb-[5vh]">
                <span className="text-[2rem]">
                  <p className="w-[35vw]">
                    Our chassis system forms the foundation of our race car, covering <strong>frame design, suspension, brakes, aero, and ergonomics</strong>. If you're interested in mechanical systems, structural design, or the fundamental engineering that makes cars run, Chassis is where you belong.
                  </p>
                </span>

                <div className="flex flex-col text-[3rem]">
                  <h2>Suggested Majors</h2>
                  <ul className="text-[2rem]">
                    <li><p>• Mechanical Engineering</p></li>
                    <li><p>• Civil Engineering</p></li>
                    <li><p>• Industrial Engineering</p></li>
                  </ul>
                </div>
              </div>
            </div>
            <Link 
                to="./chassis"
                className="w-[26vw] h-[85%] bg-cover flex items-center justify-center"
                style={{ 
                      backgroundImage: `url(${ChassisPic})`, 
                }}
              >
                <span className="text-[#FFD500] text-8xl text-center">
                  <h1>LEARN MORE</h1>
                </span>
            </Link>
          </div>
        </span>

        <span className="w-screen flex justify-center"> {/* i tried to use the hr tag but its not cooperating with tailwind so im doing this for now */}
          <div className="w-[93vw] h-1 bg-[#510087] mx-auto"></div>
        </span>

        {/* Powertrain Section */}
        <span className="w-screen flex justify-center">
          <div className="w-[93vw] h-[58vh] flex justify-between items-center">
            <div className="flex flex-col !mt-none">
              <span className="text-[#510087] text-[10rem]">
                <h1>Powertrain</h1>
              </span>

              <div className="w-[60vw] flex justify-between !pb-[5vh]">
                <span className="text-[2rem]">
                  <p className="w-[35vw]">
                    Our powertrain system is the heart of our electric race car, encompassing everything from <strong>battery design</strong> to <strong>embedded software</strong> and <strong>PCB development</strong>. If you're passionate about any of these fields, join us to power championship performance!                
                  </p>
                </span>

                <div className="flex flex-col text-[3rem]">
                  <h2>Suggested Majors</h2>
                  <ul className="text-[2rem]">
                    <li><p>• Electrical Engineering</p></li>
                    <li><p>• Computer Science</p></li>
                    <li><p>• Mechanical Engineering</p></li>
                    <li><p>• ISA (formerly ISDS)</p></li>
                  </ul>
                </div>
              </div>
            </div>
            <Link 
                to="./powertrain"
                className="w-[26vw] h-[85%] bg-cover flex items-center justify-center"
                style={{ 
                      backgroundImage: `url(${PowertrainPic})`, 
                }}
              >
                <span className="text-[#FFD500] text-8xl text-center">
                  <h1>LEARN MORE</h1>
                </span>
            </Link>
          </div>
        </span>

        <span className="w-screen flex justify-center"> {/* i tried to use the hr tag but its not cooperating with tailwind so im doing this for now */}
          <div className="w-[93vw] h-1 bg-[#510087] mx-auto"></div>
        </span>
        {/* Business Section */}
        <span className="w-screen flex justify-center">
          <div className="w-[93vw] h-[58vh] flex justify-between items-center">
            <div className="flex flex-col !mt-none">
              <span className="text-[#510087] text-[10rem]">
                <h1>Business</h1>
              </span>

              <div className="w-[60vw] flex justify-between !pb-[5vh]">
                <span className="text-[2rem]">
                  <p className="w-[35vw]">
                    Our business operations are every bit as critical as engineering to Formula SAE success. If you enjoy or are looking to pursue <strong>finance, marketing, entrepreneurship</strong>, or are looking to apply your <strong>graphic design or flimography</strong> skills, we need you!                
                  </p>
                </span>

                <div className="flex flex-col text-[3rem]">
                  <h2>Suggested Majors</h2>
                  <ul className="text-[2rem]">
                    <li><p>• All of College of Business</p></li>
                    <li><p>• Arts and Film</p></li>
                    <li><p>• Digital Media Minor</p></li>
                  </ul>
                </div>
              </div>
            </div>
            <Link 
                to="./business"
                className="w-[26vw] h-[85%] bg-cover flex items-center justify-center"
                style={{ 
                      backgroundImage: `url(${BuisnessPic})`, 
                }}
              >
                <span className="text-[#FFD500] text-8xl text-center">
                  <h1>LEARN MORE</h1>
                </span>
            </Link>
          </div>
        </span>
      </div>
      
      {/* how join */}
      <div className="w-screen !h-[70vh] bg-[#510087] flex flex-col items-center justify-between !py-[5vh]">
        <div className="text-center text-[#F5F0F6]">
          <span className="text-[10rem]">
            <h1>How do I join?</h1>
          </span>
          <span className="text-[3rem]">
            <p>Fill out our interest form and we’ll contact you from there!</p>
          </span>
        </div>
        <div className="w-fit h-fit bg-[#FFD500] !p-[1rem] !px-[2rem] text-[3.5rem] rounded-[2.5rem]">
          <h2>Interest Form</h2>
        </div>
      </div>
    </div>
  );
};

export default Join;