import BlurbPic1 from "../../../assets/images/Join/Chassis/BlurbPic1.png"
import BlurbPic2 from "../../../assets/images/Join/Chassis/BlurbPic2.png"

const Chassis = () => {
  return (
    <div className="w-screen h-fit flex flex-col justify-center !pt-[10vh]">
      <div className="h-[85vh] flex flex-col justify-between items-center text-center !mb-[10vh]">
        <span className="text-[#510087] text-[14rem] leading-[14rem]">
          <h1>FOUNDATION OF VICTORY.</h1>
        </span>
  
        <span className="text-[2.2rem] leading-[2rem]">
          <p>SCROLL TO EXPLORE CHASSIS</p>
        </span>
      </div>

      <div className="w-[93%] h-[90vh] flex flex-col justify-between !mx-auto">
        <div className="w-full h-[48.5%] flex justify-between">
          <div className="w-[43.5%] h-full bg-[#510087] rounded-3xl">
            <div className="w-[90%] h-[90%] !mx-auto !mt-[4%] text-[#F5F0F6] text-[2.25rem]">
              <p>Our chassis system forms the <strong>structural backbone of our race car</strong>, where frame design, suspension, aerodynamics, and braking systems create the foundation that transforms raw power into controlled speed and handling precision.</p>
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
            <div className="w-[90%] h-[90%] !mx-auto !mt-[6%] text-[#F5F0F6] text-[2.25rem]">
              <p>As a chassis team member, you'll design and create lightweight frame structures from scratch, engineer suspension systems that optimize tire contact and handling, and develop aerodynamic packages that generate downforce while minimizing drag.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[93%] !mx-auto text-center text-[2.5rem] leading-[3.5rem] !mt-[4vh]">
        <p>The chassis you build doesn't just hold everything together—it determines whether our driver can push through corners at maximum speed, whether our powertrain's torque translates into lap times, and whether our entire team's engineering efforts result in championship performance or missed opportunities on race day.</p>
      </div>
    </div>
  );
};

export default Chassis;