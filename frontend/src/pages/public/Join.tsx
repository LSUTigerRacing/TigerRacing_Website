import { Link } from "react-router-dom";

import ChassisPic from "../../assets/images/Join/chassis.jpg"
import PowertrainPic from "../../assets/images/Join/powertrain.png"
import BuisnessPic from "../../assets/images/Join/business.jpg"

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
            {/* Powertrain Section */}
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
  );
};

export default Join;