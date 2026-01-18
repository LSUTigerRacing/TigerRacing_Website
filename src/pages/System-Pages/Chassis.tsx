import Landing from "../../assets/images/System-Pages/Chassis/Landing.png";
import TempPicture from "../../assets/images/System-Pages/Powertrain/PCB.png";

import { LandingComponent, SubsystemComponent, TableOfContents } from "./SystemComponents";



const Chassis = () => {
  return (
 <div className="w-full background">
        <LandingComponent 
        name="Chassis"
        blurb="The LSU TigerRacing team sincerely thanks all of our generous sponsors. We could not build our electric vehicles, maintain our combustion cars, and thrive as one of LSU's premiere engineering organizations without the help of our sponsors.
        
        If you are interested in becoming a TigerRacing sponsor, please look at our sponsorship packet linked below and contact our team at 
        
        Your support makes a real difference to our team."
        image={Landing} />
        <TableOfContents
            sections={[
                { index: "01", title: "Frame" },
                { index: "02", title: "Brakes" },
                { index: "03", title: "Suspension" },
                { index: "04", title: "Aerodynamics" },
                { index: "05", title: "Ergonomics" },
            ]}
        />
        <SubsystemComponent
            index="01"
            title="Frame"
            description="The frame is the foundation that holds everything together and determines how the car responds to driver inputs and track conditions. Our frame team designs and fabricates the tubular space frame structure using steel tubing, welding techniques, and structural analysis to create a chassis that is both lightweight and incredibly stiff. Members develop skills in CAD modeling, finite element analysis, TIG welding, fixture design, and the manufacturing processes that turn hundreds of individual tubes into a precise rolling chassis. The work requires understanding load paths, torsional rigidity, driver safety requirements, and how frame design affects the performance of every other system on the car. Building a frame demands meticulous attention to detail, as even small errors in tube placement can compromise structural integrity."
            images={[TempPicture, TempPicture, TempPicture]} 
            layout={2}
        />
        <SubsystemComponent
            index="02"
            title="Brakes"
            description="Stopping a race car from high speeds repeatedly requires more than just strong brakes. The system needs thermal management, precise modulation, and consistent performance lap after lap. Our brakes team designs the complete braking system, from caliper selection and rotor sizing to pedal box geometry and brake bias adjustment mechanisms. Members gain experience with thermal analysis, hydraulic system design, materials selection for extreme temperatures, and performance testing that validates stopping power and fade resistance. The work involves balancing competing requirements of maximum deceleration, driver feel, weight minimization, and packaging constraints. Every component must withstand intense heat cycles while providing the driver with confidence-inspiring feedback and control."
            images={[TempPicture, TempPicture, TempPicture]} 
            layout={2}
        />
        <SubsystemComponent
            index="03"
            title="Suspension"
            description="A race car is only as fast as its tires can grip, and the suspension is what keeps those tires planted. Our suspension team designs the geometry, components, and damping systems that control how the car handles through corners, over bumps, and under braking. Members work with kinematic analysis software, finite element modeling, and on-track data acquisition to optimize parameters like camber curves, roll centers, and spring rates. The role involves machining custom components, selecting and testing dampers, and conducting suspension tuning sessions that directly impact lap times. Understanding the complex interplay between geometry, weight transfer, and tire contact patches helps create a suspension system that gives drivers confidence to push the limits."
            images={[TempPicture, TempPicture, TempPicture]} 
            layout={2}
        />
        <SubsystemComponent
            index="04"
            title="Aerodynamics"
            description="Making a car stick to the track without adding weight is where aerodynamics becomes crucial. Our aerodynamics team designs and manufactures the wings, undertray, and bodywork that generate downforce and manage airflow around the vehicle. Members gain experience with computational fluid dynamics software, wind tunnel testing, composite manufacturing techniques, and the iterative design process that balances downforce generation with drag reduction. From initial concept sketches to carbon fiber layup and track validation, every surface is optimized to improve cornering speeds and overall performance. The work requires both analytical thinking and hands-on fabrication skills as members transform simulations into physical components that can withstand racing conditions."
            images={[TempPicture, TempPicture, TempPicture]} 
            layout={2}
        />
        <SubsystemComponent
            index="05"
            title="Ergonomics"
            description="The fastest car is useless if the driver can't operate it comfortably and efficiently. Our ergonomics team focuses on the human-machine interface, designing everything from seat positioning and pedal placement to steering wheel controls and driver visibility. Members conduct driver fit studies, create mockups to test different configurations, and optimize the cockpit layout to minimize driver fatigue while maximizing control and feedback. The work involves understanding human factors, anthropometric data, and the physical demands of racing, then translating those insights into practical design decisions. Creating an ergonomic cockpit means finding the balance between driver comfort, control accessibility, packaging constraints, and safety regulations while ensuring drivers of different sizes can operate the vehicle effectively."
            images={[TempPicture, TempPicture, TempPicture]} 
            layout={2}
        />
    </div>
  );
};

export default Chassis;