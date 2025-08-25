import { Link } from "react-router-dom";

import ChassisPic from "../../assets/images/Join/chassis.jpg"
import PowertrainPic from "../../assets/images/Join/powertrain.png"
import BuisnessPic from "../../assets/images/Join/business.jpg"

import CareerPic from "../../assets/images/Join/career.png"
import CompetitionWin from "../../assets/images/Join/competition-win.png"
import CompetitionWinMeme from "../../assets/images/Join/competition-win-meme.png"

const JoinReasons = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center !mt-[10vh]">
          {/* Career */}
          <div className="w-[93%] relative flex flex-col justify-between !pb-[10vh]">
              <div className="w-full min-h-[30%] bg-[#510087] flex justify-between !p-[3vh] !pl-[5vh]">
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
              <div className="w-full flex flex-row justify-between gap-[2vh] !mt-[2vh]">
                <div className="w-full bg-[#510087] text-center text-[#F5F0F6] !pt-[3%] !pb-[3%]">
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
      </div>
  )
}

const Join = () => {
  return (
    <div className="w-screen h-fit bg-[#F5F0F6] !pb-[10vh]">
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
              <div 
                className="w-[30vw] h-[40vh] bg-cover bg-center text-7xl relative"
                style={{ 
                    backgroundImage: `url(${ChassisPic})`, 
                }}
              >
                <div className="absolute inset-0 bg-[#510087] opacity-20 pointer-events-none"/>
                <h1 className="text-[#F5F0F6] absolute bottom-4 left-2">CHASSIS</h1>
              </div>

              <div
                className="w-[30vw] h-[40vh] bg-cover bg-center text-7xl relative"
                style={{ 
                    backgroundImage: `url(${PowertrainPic})`, 
                }}
              >
                <div className="absolute inset-0 bg-[#510087] opacity-20 pointer-events-none"/>
                <h1 className="text-[#F5F0F6] absolute bottom-4 left-2">POWERTRAIN</h1>
              </div>

              <div
                className="w-[30vw] h-[40vh] bg-cover bg-center text-7xl relative"
                style={{ 
                    backgroundImage: `url(${BuisnessPic})`, 
                }}
              >
                <div className="absolute inset-0 bg-[#510087] opacity-20 pointer-events-none"/>

                <h1 className="text-[#F5F0F6] absolute bottom-4 left-2">BUSINESS</h1>
              </div>
            </div>
      </div>

      <div className="!mt-[4vh]">
        <span className="text-center text-[#510087] text-[4rem]">
          <h1>First, what's in it for me?</h1>
        </span>
      </div>

      {/* why join */}
      <JoinReasons/>

      {/* <div className="relative w-[30vw] h-[20vw] overflow-hidden shadow-lg group">
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
      </div> */}

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
                to=""
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
                to=""
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
                to=""
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
      
    </div>
  );
};

export default Join;