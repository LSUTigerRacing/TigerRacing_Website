import Landing from "../../assets/images/System-Pages/Powertrain/Landing.png";
import TempPicture from "../../assets/images/System-Pages/Powertrain/PCB.png";

import { LandingComponent, SubsystemComponent, TableOfContents } from "./SystemComponents";

const Powertrain = () => {
  return (
    <div className="w-full background">
        <LandingComponent 
        name="Powertrain"
        blurb="Our powertrain system serves as the electric heart of our race car, where battery management, motor control, and embedded systems transform stored electrical energy into the instantaneous torque that launches our machine to championship speeds.
                    
        As a powertrain team member, you'll develop battery systems that monitor thousands of cells for temperature and voltage, write embedded software that makes split-second decisions, and engineer high-voltage PCB layouts that withstand the extreme demands of competitive racing."
        image={Landing} />
        <TableOfContents
            sections={[
                { index: "01", title: "Electronics" },
                { index: "02", title: "Battery" },
                { index: "03", title: "Low Voltage" },
                { index: "04", title: "Tractive System" },
            ]}
        />
        <SubsystemComponent
            index="01"
            title="Electronics"
            description="Formula SAE is about much more than just engineering. Being a part of the Business division provides an unparalleled collegiate experience in all aspects of running a racing team including financial management, procurement, sponsorship and more. Business division members gain valuable experience with recruitment, event planning, content creation, social media management, procurement of materials, establishing and maintaining relationships with sponsors, and managing the team’s finances. Members develop their speaking skills through many presentations to alumni, stakeholders, and judges. In addition, a major portion of the Formula SAE competition is a business presentation based on a chosen prompt to a prospective client. "
            images={[TempPicture, TempPicture, TempPicture]} 
            layout={2}
        />
        <SubsystemComponent
            index="02"
            title="Battery"
            description="Formula SAE is about much more than just engineering. Being a part of the Business division provides an unparalleled collegiate experience in all aspects of running a racing team including financial management, procurement, sponsorship and more. Business division members gain valuable experience with recruitment, event planning, content creation, social media management, procurement of materials, establishing and maintaining relationships with sponsors, and managing the team’s finances. Members develop their speaking skills through many presentations to alumni, stakeholders, and judges. In addition, a major portion of the Formula SAE competition is a business presentation based on a chosen prompt to a prospective client. "
            images={[TempPicture, TempPicture, TempPicture]} 
            layout={2}
        />
        <SubsystemComponent
            index="03"
            title="Low Voltage"
            description="Formula SAE is about much more than just engineering. Being a part of the Business division provides an unparalleled collegiate experience in all aspects of running a racing team including financial management, procurement, sponsorship and more. Business division members gain valuable experience with recruitment, event planning, content creation, social media management, procurement of materials, establishing and maintaining relationships with sponsors, and managing the team’s finances. Members develop their speaking skills through many presentations to alumni, stakeholders, and judges. In addition, a major portion of the Formula SAE competition is a business presentation based on a chosen prompt to a prospective client. "
            images={[TempPicture, TempPicture, TempPicture]} 
            layout={2}
        />
        <SubsystemComponent
            index="04"
            title="Tractive System"
            description="Formula SAE is about much more than just engineering. Being a part of the Business division provides an unparalleled collegiate experience in all aspects of running a racing team including financial management, procurement, sponsorship and more. Business division members gain valuable experience with recruitment, event planning, content creation, social media management, procurement of materials, establishing and maintaining relationships with sponsors, and managing the team’s finances. Members develop their speaking skills through many presentations to alumni, stakeholders, and judges. In addition, a major portion of the Formula SAE competition is a business presentation based on a chosen prompt to a prospective client. "
            images={[TempPicture, TempPicture, TempPicture]} 
            layout={2}
        />
    </div>
  );
};

export default Powertrain;