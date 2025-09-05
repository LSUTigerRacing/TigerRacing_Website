import President from "../../assets/images/Team/President.png"
import VicePresident from "../../assets/images/Team/VicePres.png"
import Treasurer from "../../assets/images/Team/Treasurer.png"
import PublicRelations from "../../assets/images/Team/President.png"
import President from "../../assets/images/Team/President.png"
import President from "../../assets/images/Team/President.png"
import President from "../../assets/images/Team/President.png"

const Team = () => {
  return (
    <div className="w-screen text-[#510087]">
      <div className="h-screen !pt-[8vh] text-center text-[25rem] leading-[25rem]">
        <h1>MEET THE TEAM.</h1>
      </div>

      <div className="w-[93%] !mx-auto !my-[3vh]">
        <span className="text-7xl">
          <h2>Admin</h2>
        </span>
        <span className="w-screen"> {/* i tried to use the hr tag but its not cooperating with tailwind so im doing this for now */}
          <div className="w-[93vw] h-1 bg-[#510087] mx-auto"></div>
        </span>
      </div>
    </div>
  );
};

export default Team;