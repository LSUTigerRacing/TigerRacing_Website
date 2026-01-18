import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import Collage_1 from "../assets/images/Join/Collage_1.png";
import Collage_2 from "../assets/images/Join/Collage_2.png";

import Right_Arrow from "../assets/images/Join/join-right-arrow.png"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Join = () => {
    const landingRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useGSAP(() => {
        tl.current = gsap
            .timeline()
            .from(".join-landing-phrase", {
                opacity: 0,
                y: -50,
                delay: 0.3,
                duration: 0.8,
                ease: "power1.out",})
            .from(".yellow-button", {
                opacity: 0,
                y: -20,
                duration: 0.6,
                ease: "power1.out",
        })
    }, {scope: landingRef})

    useGSAP(() => {
		gsap.from(".collage-item", {
			clipPath: " inset(0 0 100% 0)",
			duration: 0.8,
			ease: "power1.out",
			stagger: 0.2,
			scrollTrigger: {
				trigger: ".join-blurb-collage",
				start: "top center",
				markers: true
			}
		})
        
        gsap.from(".join-systems-box", {
            opacity: 0,
            y: 100,
            duration: 0.8,
			ease: "power1.out",
			stagger: 0.2,
			scrollTrigger: {
				trigger: ".systems-container",
				start: "top center",
				markers: true
			}
		})
    }, [])
  return (
    <div className="w-full background text-black! bg-white!">
        <section className="purple-landing" ref={landingRef}>
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
                        className="collage-item object-cover flex-1" // collage-item is a class used for only gsap anims
                    />
                    <img
                        src={Collage_2}
                        className="collage-item object-cover flex-1"
                    />
                </div>
                <img
                    src={Collage_1}
                    className="collage-item w-[50%] object-cover flex-1"
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
                    to="/join/powertrain"
                    title="Powertrain"
                    description="Our chassis system forms the foundation of our race car, covering frame design, suspension, brakes, aero, and ergonomics. If you're interested in mechanical systems, structural design, or the fundamental engineering that makes cars run, Chassis is where you belong."
                />
                <SystemBox
                    to="/join/business"
                    title="Business"
                    description="Our chassis system forms the foundation of our race car, covering frame design, suspension, brakes, aero, and ergonomics. If you're interested in mechanical systems, structural design, or the fundamental engineering that makes cars run, Chassis is where you belong."
                />
                <SystemBox
                    to="/join/software"
                    title="Software"
                    description="Our chassis system forms the foundation of our race car, covering frame design, suspension, brakes, aero, and ergonomics. If you're interested in mechanical systems, structural design, or the fundamental engineering that makes cars run, Chassis is where you belong."
                />
                <SystemBox
                    to="/join/public-relations"
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
        <div className="join-systems-box">
            <h2 className="mb-[2%] text-[var(--standard-purple)]">{title}</h2>
            <p className="mb-[2%] whitespace-pre-line">{description}</p>
            <Link 
                to={to}
                className="flex items-center justify-end gap-1"
            >
                <h3>See More</h3>
                <img
                    src={Right_Arrow}
                />
            </Link>
        </div>
    )
}