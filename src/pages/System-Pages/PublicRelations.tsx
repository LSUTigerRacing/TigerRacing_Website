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
            description="Telling our story and building our brand requires creativity, strategy, and consistent execution. Our marketing team manages the team's social media presence, creates content that showcases our work, and develops campaigns that engage our community and attract new members. Members gain hands-on experience with graphic design, video production, content strategy, and the analytics that reveal what resonates with different audiences. The work involves photographing and filming team activities, designing promotional materials, managing our website and social platforms, and creating narratives that communicate the excitement and innovation happening in our shop. Strong marketing builds the team's reputation, strengthens our recruiting efforts, and demonstrates value to sponsors who want to be associated with our success."
            images={[TempPicture, TempPicture, TempPicture]} 
            layout={2}
        />
        <SubsystemComponent
            index="02"
            title="Fundraising"
            description="Securing the resources needed to build a competitive race car takes persistence, creativity, and excellent people skills. Our fundraising team organizes events, runs campaigns, and develops initiatives that generate revenue beyond traditional sponsorships. Members learn event planning, donor engagement, campaign management, and the outreach strategies that turn interest into financial support. The role involves coordinating fundraising events like car shows or community appearances, managing crowdfunding campaigns, developing merchandise sales programs, and building relationships with alumni and supporters who believe in our mission. Every successful fundraising effort directly translates into better parts, more testing opportunities, and resources that help the technical teams push boundaries."
            images={[TempPicture, TempPicture, TempPicture]} 
            layout={2}
        />
    </div>
  );
};

export default PublicRelations;