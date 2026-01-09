import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import Landing from "../assets/images/Home/Landing.png";
import About from "../assets/images/Home/About.png";
import Join from "../assets/images/Home/Join.png";
import Sponsor from "../assets/images/Home/Sponsor.png";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
	useGSAP(() => {
		gsap.from(".home-redirect", {
			clipPath: " inset(0 0 100% 0)",
			duration: 1.2,
			ease: "power1.out",
			stagger: 0.2,
			scrollTrigger: {
				trigger: ".home-redirect-section",
				start: "top center",
				markers: true
			}
		})
	})

	return (
		<div className="background">
			<div className="flex-center relative w-screen h-screen overflow-hidden">
				{/* Background Image */}
				<img
					src={Landing}
					alt="Racing car"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				
				{/* Gradient Overlay */}
				<div className="absolute inset-0"
				style={{
					background: 'linear-gradient(to bottom, transparent 0%, transparent 64%, var(--standard-purple) 100%)'
				}}    
				/>
				
				{/* Text Content */}
				<div className="home-landing-tagline">
					<h2>
					Aiming for the forefront of electric vehicle race technology.
					</h2>
				</div>
			</div>

			<div className="w-[40%] text-center mx-auto">
				<p>As Louisiana State University’s Formula SAE Team...As Louisiana State University’s Formula SAE Team...As Louisiana State University’s Formula SAE Team...As Louisiana State University’s Formula SAE Team...As Louisiana State University’s Formula SAE Team...As Louisiana State University’s Formula SAE Team...</p>
			</div>

			<div className="text-8xl text-center !mt-[8vh]">
				<h2 className="text-[#FFD500]">Powering TigerRacing</h2>
			</div>
			
			<div className="purple-line mb-[5rem]"/>

			<section className="home-redirect-section">
				<Redirect
					to="/about"
					image={About}
					title="About Us"
					description="We started as a curriculum-integrated program. Now, we grow as our own independent team. Learn more about our history behind TigerRacing."
				/>
				<Redirect
					to="/join"
					image={Join}
					title="Join Us"
					description="We started as a curriculum-integrated program. Now, we grow as our own independent team. Learn more about our history behind TigerRacing.."
				/>
				<Redirect
					to="/cars"
					image={Sponsor}
					title="Sponsor Us"
					description="We started as a curriculum-integrated program. Now, we grow as our own independent team. Learn more about our history behind TigerRacing."
				/>
				
			</section>
		</div>
  	);
};

export default Home;

const Redirect = ( props: { to: any; image: any; title: any; description: any; } ) => {
    const {
        to,
        image,
        title,
        description
    } = props;
    return (
        <div className="home-redirect">
            <h3>{title}</h3>
            <img
                src={image}
                alt={title}
            />
            <p>{description}</p>
        </div>
    )
}
