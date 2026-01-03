import Landing from "../../assets/images/System-Pages/Chassis/Landing.png";
import TempPicture from "../../assets/images/System-Pages/Powertrain/PCB.png";

import { LandingComponent, SubsystemComponent, TableOfContents } from "./SystemComponents";

const PublicRelations = () => {
  return (
 	<div className="w-full background">
        <LandingComponent 
			name="Public Relations"
			blurb="The LSU TigerRacing team sincerely thanks all of our generous sponsors. We could not build our electric vehicles, maintain our combustion cars, and thrive as one of LSU's premiere engineering organizations without the help of our sponsors.
			
			If you are interested in becoming a TigerRacing sponsor, please look at our sponsorship packet linked below and contact our team at 
			
			Your support makes a real difference to our team."
        	image={Landing} 
		/>

        <TableOfContents
            sections={[
                { index: "01", title: "Marketing" },
                { index: "02", title: "Fundraising" },
            ]}
        />
        <SubsystemComponent
            index="01"
            title="Marketing"
            description="Formula SAE is about much more than just engineering. Being a part of the Business division provides an unparalleled collegiate experience in all aspects of running a racing team including financial management, procurement, sponsorship and more. Business division members gain valuable experience with recruitment, event planning, content creation, social media management, procurement of materials, establishing and maintaining relationships with sponsors, and managing the team’s finances. Members develop their speaking skills through many presentations to alumni, stakeholders, and judges. In addition, a major portion of the Formula SAE competition is a business presentation based on a chosen prompt to a prospective client. "
            images={[TempPicture, TempPicture, TempPicture]} 
            layout={2}
        />
        <SubsystemComponent
            index="02"
            title="Fundraising"
            description="Formula SAE is about much more than just engineering. Being a part of the Business division provides an unparalleled collegiate experience in all aspects of running a racing team including financial management, procurement, sponsorship and more. Business division members gain valuable experience with recruitment, event planning, content creation, social media management, procurement of materials, establishing and maintaining relationships with sponsors, and managing the team’s finances. Members develop their speaking skills through many presentations to alumni, stakeholders, and judges. In addition, a major portion of the Formula SAE competition is a business presentation based on a chosen prompt to a prospective client. "
            images={[TempPicture, TempPicture, TempPicture]} 
            layout={2}
        />
    </div>
  );
};

export default PublicRelations;