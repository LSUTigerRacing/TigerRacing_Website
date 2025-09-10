import President from "../assets/images/Team/Admin/President.png"
import VicePresident from "../assets/images/Team/Admin/VicePres.png"
import Treasurer from "../assets/images/Team/Admin/Treasurer.png"
import PublicRelations from "../assets/images/Team/Admin/PublicRelations.png"
import Captain from "../assets/images/Team/Admin/Captain.png"
import Powertrain from "../assets/images/Team/Admin/Powertrain.png"
import Chassis from "../assets/images/Team/Admin/Chassis.png"
import Safety from "../assets/images/Team/Admin/Safety.png"

import Frame from "../assets/images/Team/Chassis/Frame.png"
import Aero from "../assets/images/Team/Chassis/Aerodynamics.png"
import Ergo from "../assets/images/Team/Chassis/Ergonomics.png"
import Brakes from "../assets/images/Team/Chassis/Brakes.png"
import Suspension from "../assets/images/Team/Chassis/Suspension.png"
import Drivetrain from "../assets/images/Team/Chassis/Drivetrain.png"

import Electronics from "../assets/images/Team/Powertrain/Electronics.png"
import Battery from "../assets/images/Team/Powertrain/Battery.png"
import LowVoltage from "../assets/images/Team/Powertrain/LowVoltage.png"
import TractiveSystem from "../assets/images/Team/Powertrain/TractiveSystem.png"
import Controls from "../assets/images/Team/Powertrain/Controls.png"

const Team = () => {
  return (
    <div className="w-screen text-[#510087]">
      <div className="min-h-screen h-fit !pt-[8vh] text-center text-[25rem] leading-[25rem]">
        <h1>MEET THE TEAM.</h1>
      </div>

      <div className="w-[93%] relative !mx-auto !my-[3vh]">
        <span className="text-[5rem]">
          <h2>Admin</h2>
        </span>
        <span className="w-screen"> {/* i tried to use the hr tag but its not cooperating with tailwind so im doing this for now */}
          <div className="w-[93vw] h-1 bg-[#510087] mx-auto"></div>
        </span>
        <div className="w-full h-fit flex justify-between flex-wrap">
        <Portrait
          image={President}
          name="Mizuki Teruyama"
          title="President"
          linkedin="/"
        />        
        <Portrait
          image={VicePresident}
          name="Urwah Abbas"
          title="Vice President"
          linkedin="/"
        />        
        <Portrait
          image={Treasurer}
          name="Andrew Nguyen"
          title="Treasurer"
          linkedin="/"
        />        
        <Portrait
          image={PublicRelations}
          name="Thomas Au"
          title="Public Relations"
          linkedin="/"
        />
        <Portrait
          image={Captain}
          name="Gareth Oram"
          title="Captain"
          linkedin="/"
        />        
        <Portrait
          image={Powertrain}
          name="Jadon Yeboah"
          title="Powertrain Lead"
          linkedin="/"
        />        
        <Portrait
          image={Chassis}
          name="Tristan Thai"
          title="Chassis Lead"
          linkedin="/"
        />        
        <Portrait
          image={Safety}
          name="Luka Brekalo"
          title="Safety Chair"
          linkedin="/"
        />
        </div>

        <span className="text-[5rem]">
          <h2>Chassis</h2>
        </span>
        <span className="w-screen"> {/* i tried to use the hr tag but its not cooperating with tailwind so im doing this for now */}
          <div className="w-[93vw] h-1 bg-[#510087] mx-auto"></div>
        </span>
        <div className="w-full h-fit flex justify-between flex-wrap">
        <Portrait
          image={Frame}
          name="Tristan Thai"
          title="Frame"
          linkedin="/"
        />        
        <Portrait
          image={Aero}
          name="Brady Vidrine"
          title="Aerodynamics"
          linkedin="/"
        />        
        <Portrait
          image={Ergo}
          name="Matthew Robert"
          title="Ergonomics"
          linkedin="/"
        />        
        <Portrait
          image={Suspension}
          name="James Sirois"
          title="Suspension"
          linkedin="/"
        />
        <Portrait
          image={Brakes}
          name="Anthony Terry Rojas"
          title="Brakes"
          linkedin="/"
        />        
        <Portrait
          image={Drivetrain}
          name="mmm"
          title="Drivetrain"
          linkedin="/"
        />        
        </div>

        <span className="text-[5rem]">
          <h2>Powertrain</h2>
        </span>
        <span className="w-screen"> {/* i tried to use the hr tag but its not cooperating with tailwind so im doing this for now */}
          <div className="w-[93vw] h-1 bg-[#510087] mx-auto"></div>
        </span>
        <div className="w-full h-fit flex justify-between flex-wrap">
        <Portrait
          image={Electronics}
          name="Vinh Le"
          title="Electronics"
          linkedin="/"
        />        
        <Portrait
          image={Battery}
          name="Jadon Yeboah"
          title="Battery"
          linkedin="/"
        />        
        <Portrait
          image={LowVoltage}
          name="Sammy Ziegler"
          title="Low Voltage"
          linkedin="/"
        />        
        <Portrait
          image={TractiveSystem}
          name="Luka Brekalo"
          title="Tractive System"
          linkedin="/"
        />
        <Portrait
          image={Controls}
          name="Ricky Liang"
          title="Controls"
          linkedin="/"
        />        
      
        </div>

      </div>
    </div>
  );
};

const Portrait = (props) => {
  const {
    image,
    name,
    title,
    linkedin
  } = props
  return (
    <div 
      className="w-[27rem] h-[40rem] relative overflow-hidden"
      style = {{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="text-[#F5F0F6] absolute bottom-5 right-5 text-right">
        <span className="text-[3rem]">
          <h2>{title}</h2>
        </span>
        <span className="text-[2rem]">
          <h3>{name}</h3>
        </span>
      </div>
    </div>
  )
}

export default Team;