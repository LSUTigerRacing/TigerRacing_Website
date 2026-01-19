import Landing from "../../assets/images/System-Pages/Chassis/Landing.png";
import TempPicture from "../../assets/images/System-Pages/Powertrain/PCB.png";

import { LandingComponent, SubsystemComponent, TableOfContents } from "./SystemComponents";

const Software = () => {
  return (
 <div className="w-full background">
        <LandingComponent 
			name="Software"
			blurb="The LSU TigerRacing team sincerely thanks all of our generous sponsors. We could not build our electric vehicles, maintain our combustion cars, and thrive as one of LSU's premiere engineering organizations without the help of our sponsors.
			
			If you are interested in becoming a TigerRacing sponsor, please look at our sponsorship packet linked below and contact our team at 
			
			Your support makes a real difference to our team."
			image={Landing} 
		/>

        <TableOfContents
            sections={[
                { index: "01", title: "App Development" },
                { index: "02", title: "Embedded Controls" },
                { index: "03", title: "Data Analysis" },
            ]}
        />

        <SubsystemComponent
            index="01"
            title="App Development"
            description="Modern race teams need software tools that make information accessible and operations efficient. Our app development team builds applications that serve the team's needs, from documentation platforms and project management to financial operation workflows and sponsor engagement tools. Members gain experience with web development frameworks, user interface design, database management, and the full software development lifecycle from requirements gathering to deployment. The work involves identifying problems that software can solve, prototyping solutions, gathering feedback from team members, and iterating until the tools actually improve how we work."
            images={[TempPicture, TempPicture, TempPicture]} 
            layout={2}
        />
        <SubsystemComponent
            index="02"
            title="Embedded Controls"
            description="The race car's onboard computers need reliable code that runs in real-time under harsh conditions. Our embedded systems team develops firmware for microcontrollers that manage critical vehicle functions, from vehicle control unit logic to sensor data collection and driver display updates. Members work with C/C++ programming, real-time operating systems, communication protocols like CAN bus, and debugging techniques for hardware-software integration. The role involves writing efficient code that meets strict timing requirements, implementing safety-critical algorithms, and testing thoroughly because failures on track aren't an option. Success requires thinking about edge cases, managing limited computational resources, and understanding how software interacts with the physical world of sensors, actuators, and electrical systems."
            images={[TempPicture, TempPicture, TempPicture]} 
            layout={2}
        />
        <SubsystemComponent
            index="03"
            title="Data Analysis"
            description="Every lap generates thousands of data points, and turning that information into faster lap times requires systematic analysis. Our data acquisition team develops the systems that log vehicle performance data and creates the analysis tools that reveal what's actually happening on track. Members gain experience with sensor integration, data logging systems, signal processing, visualization techniques, and statistical analysis methods that identify trends and anomalies. The work involves configuring data acquisition hardware, writing scripts to process and visualize telemetry, comparing driver inputs to vehicle responses, and presenting findings that help engineers make informed setup changes. Understanding what the data reveals about suspension behavior, power delivery, braking performance, and driver technique turns raw numbers into actionable improvements."
            images={[TempPicture, TempPicture, TempPicture]} 
            layout={2}
        />
    </div>
  );
};

export default Software;