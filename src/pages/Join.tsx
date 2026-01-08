import Collage_1 from "../assets/images/Join/Collage_1.png";
import Collage_2 from "../assets/images/Join/Collage_2.png";

const Join = () => {
  return (
    <div className="w-full background text-black! bg-white!">
        <section className="purple-landing">
            <div className="join-landing-phrase">
                <h2 className="">Join one of LSU’s oldest and largest engineering organizations.</h2>
                <h3>All Majors Welcome!</h3>
            </div>

            <div className="yellow-button text-black mx-auto">
                <h3>Interest Form</h3>
            </div>
        </section>
        
        <section className="join-blurb-section">
            <div className="join-blurb-content">
                <h2 className="seperator-bottom-sm">Why Join?</h2>
                <p>We welcome LSU students of all majors and experience levels who are motivated and willing to donate themselves to building something incredible. <br/><br/>
                    We provide undergraduates with opportunities for technical and management experience on a large engineering project. <br/><br/>

                    As part of NUS FSAE, you will acquire technical skills in engineering design, design optimization, design for manufacturing and assembly, testing and validation, race car tuning, competitive driving, and many more skills
                    You will learn Computer Aided Design (CAD), Printed Circuit Board (PCB), coding and various simulation softare used by industries worldwide. 

                     <br/><br/>You will also experience fabricating parts of various complexity using conventional tools to Computer Numerical Control (CNC) machines, laying of carbon composite materials, PCB manufacturing, etc. ​Addtionally, there are supplementary roles like sponsorships, publicity, media, events, welfare and more.Most importantly, you will pick up lifelong intangibles like teamwork, communication and management skills
                </p>
            </div>
            <div className="join-blurb-collage">
                <div className="flex-1 flex flex-col gap-5">
                    <img
                        src={Collage_2}
                        className="object-cover flex-1"
                    />
                    <img
                        src={Collage_2}
                        className="object-cover flex-1"
                    />
                </div>
                <img
                    src={Collage_1}
                    className="w-[50%] object-cover flex-1"
                />
            </div>
                
        </section>
        <div className="white-line my-20"/>
        <section className="w-[90%] mx-auto">
            <h2>Our Systems</h2>

            <div className="systems-container">
                <SystemBox
                    to="/join/chassis"
                    title="Chassis"
                    description="Our chassis system forms the foundation of our race car, covering frame design, suspension, brakes, aero, and ergonomics. If you're interested in mechanical systems, structural design, or the fundamental engineering that makes cars run, Chassis is where you belong."
                />
                <SystemBox
                    to="/join/chassis"
                    title="Powertrain"
                    description="Our chassis system forms the foundation of our race car, covering frame design, suspension, brakes, aero, and ergonomics. If you're interested in mechanical systems, structural design, or the fundamental engineering that makes cars run, Chassis is where you belong."
                />
                <SystemBox
                    to="/join/chassis"
                    title="Business"
                    description="Our chassis system forms the foundation of our race car, covering frame design, suspension, brakes, aero, and ergonomics. If you're interested in mechanical systems, structural design, or the fundamental engineering that makes cars run, Chassis is where you belong."
                />
                <SystemBox
                    to="/join/chassis"
                    title="Software"
                    description="Our chassis system forms the foundation of our race car, covering frame design, suspension, brakes, aero, and ergonomics. If you're interested in mechanical systems, structural design, or the fundamental engineering that makes cars run, Chassis is where you belong."
                />
                <SystemBox
                    to="/join/chassis"
                    title="Public Relations"
                    description="Our chassis system forms the foundation of our race car, covering frame design, suspension, brakes, aero, and ergonomics. If you're interested in mechanical systems, structural design, or the fundamental engineering that makes cars run, Chassis is where you belong."
                />

            </div>
        </section>
    </div>
  );
};

export default Join;


const SystemBox = ( props: { to: any; title: any; description: any; } ) => {
    const {
        to,
        title,
        description,
    } = props;
    return (
        <div className="flex-1 text-black m-4 p-6 border-[var(--standard-purple)] border-4">
            <h2 className="mb-[2%] text-[var(--standard-purple)]">{title}</h2>
            <p className="mb-[2%] whitespace-pre-line">{description}</p>
            <h3 className="text-right">See More</h3>
        </div>
    )
}