import BlurbPic1 from "../../../assets/images/Join/Powertrain/BlurbPic1.png"
import BlurbPic2 from "../../../assets/images/Join/Powertrain/BlurbPic2.png"

const Powertrain = () => {
  return (
    <div className="w-screen h-fit flex flex-col justify-center !pt-[10vh]">
      <div className="h-[85vh] flex flex-col justify-between items-center text-center !mb-[10vh]">
        <span className="text-[#510087] text-[14rem] leading-[14rem]">
          <h1>SOUL OF THE MACHINE.</h1>
        </span>
  
        <span className="text-[2.2rem] leading-[2rem]">
          <p>SCROLL TO EXPLORE POWERTRAIN</p>
        </span>
      </div>

      <div className="w-[93%] h-[90vh] flex flex-col justify-between !mx-auto">
        <div className="w-full h-[48.5%] flex justify-between">
          <div className="w-[43.5%] h-full bg-[#510087] rounded-3xl">
            <div className="w-[90%] h-[90%] !mx-auto !mt-[4%] text-[#F5F0F6] text-[2.25rem]">
              <p>Our powertrain system serves as the <strong>electric heart of our race car</strong>, where battery management, motor control, and embedded systems transform stored electrical energy into the instantaneous torque that launches our machine to championship speeds.</p>
            </div>
          </div>
          <img
            src={BlurbPic1}
            alt=""
            className="w-[55%] h-full object-cover rounded-3xl"
          />
        </div>
        <div className="w-full h-[48.5%] flex justify-between">
          <img
            src={BlurbPic2}
            alt=""
            className="w-[43.5%] h-full object-cover rounded-3xl"
          />
          <div className="w-[55%] h-full bg-[#510087] rounded-3xl">
            <div className="w-[90%] h-[90%] !mx-auto !mt-[4%] text-[#F5F0F6] text-[2.25rem]">
              <p>As a powertrain team member, you'll <strong>develop battery systems</strong> that monitor thousands of cells for temperature and voltage, write embedded software that makes split-second decisions, and engineer high-voltage PCB layouts that withstand the extreme demands of competitive racing.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[93%] !mx-auto text-center text-[2.5rem] leading-[3.5rem] !mt-[4vh]">
        <p>Every component you design, every algorithm you optimize, and every system you integrate becomes part of a machine that will be tested at the absolute limits of performance, giving you real-world experience that transforms theoretical knowledge into the kind of practical expertise that launches careers in the most exciting sector of modern engineering.</p>
      </div>
    </div>
  );
};

export default Powertrain;