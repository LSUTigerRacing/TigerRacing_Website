import Landing from "../../assets/images/System-Pages/Chassis/Landing.png";
import TempPicture from "../../assets/images/System-Pages/Powertrain/PCB.png";

import { LandingComponent, SubsystemComponent, TableOfContents } from "./SystemComponents";

const Business = () => {
  return (
 	<div className="w-full background">
        <LandingComponent 
			name="Business"
			blurb="The LSU TigerRacing team sincerely thanks all of our generous sponsors. We could not build our electric vehicles, maintain our combustion cars, and thrive as one of LSU's premiere engineering organizations without the help of our sponsors.
			
			If you are interested in becoming a TigerRacing sponsor, please look at our sponsorship packet linked below and contact our team at 
			
			Your support makes a real difference to our team."
        	image={Landing} 
		/>

        <TableOfContents
            sections={[
                { index: "01", title: "Finance" },
                { index: "02", title: "Sponsor Relations" },
            ]}
        />
        <SubsystemComponent
            index="01"
            title="Finance"
            description="Running a competitive race team requires smart financial management and strategic resource allocation. Our financial team oversees the team's budget, tracks expenditures across all subsystems, and develops funding strategies that keep the program sustainable year after year. Members gain practical experience with financial forecasting, cost-benefit analysis, purchase order management, and the accounting systems that ensure every dollar is spent effectively. The role involves working closely with team leadership to prioritize investments, negotiate pricing with suppliers, and prepare financial reports for stakeholders. Understanding how to balance ambitious technical goals with fiscal responsibility is critical, as smart financial decisions directly enable the innovations that make our car competitive."
            images={[TempPicture, TempPicture, TempPicture]} 
            layout={2}
        />
        <SubsystemComponent
            index="02"
            title="Sponsor Relations"
            description="Building and maintaining partnerships with companies and organizations is what makes our team possible. Our sponsor relations team cultivates relationships with current sponsors, identifies and pursues new partnership opportunities, and ensures sponsors receive value from their investment in our program. Members develop skills in professional communication, proposal writing, presentation delivery, and relationship management that extend far beyond the classroom. The work involves researching potential sponsors, crafting compelling pitches that align our team's goals with their interests, coordinating sponsor events and facility tours, and creating reports that demonstrate the impact of their support. Success in this role requires understanding what different organizations value and translating our team's achievements into meaningful partnerships."
            images={[TempPicture, TempPicture, TempPicture]} 
            layout={2}
        />
    </div>
  );
};

export default Business;