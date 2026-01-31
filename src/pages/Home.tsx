import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { horizontalLoop } from '../helpers/horizontalLoop';

import Landing from "../assets/images/Home/Landing.png";
import Hero from "../assets/images/Home/Hero.png";

import About from "../assets/images/Home/About.png";
import Join from "../assets/images/Home/Join.png";
import Sponsor from "../assets/images/Home/Sponsor.png";

// Carousel
import EVCar from "../assets/images/Home/Carousel/2025.jpg"
import ClubCar from "../assets/images/Home/Carousel/2013.png"
import FirstCar from "../assets/images/Home/Carousel/1983.png"

// Sponsors
import BASF from "../assets/images/Home/Sponsor-Icons/BASF.png"
import Exxon from "../assets/images/Home/Sponsor-Icons/Exxon.png"
import Haas from "../assets/images/Home/Sponsor-Icons/Haas.png"
import Hoosier from "../assets/images/Home/Sponsor-Icons/Hoosier.png"
import Kenesto from "../assets/images/Home/Sponsor-Icons/Kenesto.png"
import LSUEngineering from "../assets/images/Home/Sponsor-Icons/LSUEngineering.png"
import Siemens from "../assets/images/Home/Sponsor-Icons/Siemens.png"
import Solidworks from "../assets/images/Home/Sponsor-Icons/Solidworks.png"
import { useState } from 'react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
	useGSAP(() => {
		gsap.from(".home-landing-tagline", {
			y: 60,
			opacity: 0,
			duration: 1
		})
		gsap.from(".home-redirect", {
			clipPath: "inset(0 0 100% 0)",
			duration: 1.2,
			ease: "power1.out",
			stagger: 0.2,
			scrollTrigger: {
				trigger: ".home-redirect-section",
				start: "top center",
				markers: true
			}
		})
        const logos = gsap.utils.toArray<HTMLElement>('.sponsor-logo');

		const loop = horizontalLoop(logos, {
			repeat: -1,
			speed: 1,
			paused: false,
			dragToScroll: true,
			invalidateOnRefresh: true,
			paddingRight: 45
		});
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
				<p>TigerRacing FSAE is LSU's student-led Formula SAE Electric team. We design, build, and race a fully electric formula-style race car from the ground up, competing against universities worldwide while gaining real-world engineering experience.</p>
			</div>

			<div className="text-8xl text-center !mt-[8vh]">
				<h2 className="text-[#FFD500]">Powering TigerRacing</h2>
			</div>
			<div className='home-sponsor-bar-container'>
				<div className='home-sponsor-bar'>
					<div className='sponsor-logo'><img src={BASF}/></div>
					<div className='sponsor-logo'><img src={Exxon}/></div>
					<div className='sponsor-logo'><img src={Haas}/></div>
					<div className='sponsor-logo'><img src={Hoosier}/></div>
					<div className='sponsor-logo'><img src={Kenesto}/></div>
					<div className='sponsor-logo'><img src={LSUEngineering}/></div>
					<div className='sponsor-logo'><img src={Siemens}/></div>
					<div className='sponsor-logo'><img src={Solidworks}/></div>
				</div>
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
			<div className="flex-center relative w-screen h-[92vh] overflow-hidden">
				{/* Background Image */}
				<img
					src={Hero}
					alt="Racing car"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				
				{/* Gradient Overlay */}
				<div className="absolute inset-0"
				style={{
					background: 'linear-gradient(to top, transparent 0%, transparent 90%, var(--standard-purple) 100%)'
				}}    
				/>
			</div>

			<section className='bg-white text-black w-screen h-fit'>
				<div className='w-[95%] mx-auto pt-5'>
					<div className='w-[72%]'>
						<h3 className='pb-5'>Starting in 1985 as an ME capstone project, LSU TigerRacing has become a proving ground where theory meets the test of competition. </h3>
						<p>Here, hands-on experience fuels innovation as we design, build, and race cutting-edge formula vehicles.
							<br/><br/>
							Our shift to electric racing in 2023 reflects both our commitment to progress and our dedication to preparing the next generation of engineers. 
							<br/><br/>
							Every season brings new challenges, new solutions, and new opportunities to push further—on the track and beyond it.</p>
					</div>
				</div>

				<section className='w-[95%] h-[60vh] grid grid-cols-3 gap-5 my-30 mx-auto'>
					<img
						src={EVCar}
						className='w-full h-full object-cover'
					/>
					<div>
						<h3>alskdjfklsadfjls</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque urna, fermentum vitae orci eu, dignissim facilisis turpis. Sed viverra, est id fermentum eleifend, justo arcu mollis massa, a porttitor massa dui vitae lorem. 
						</p>
						<img
							src={ClubCar}
							className='w-full object-cover'

						/>
					</div>
					<div>
						<h3>⠀</h3> {/* ascii blank char for formatting */}
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque urna, fermentum vitae orci eu, dignissim facilisis turpis. Sed viverra, est id fermentum eleifend, justo arcu mollis massa, a porttitor massa dui vitae lorem. 
						</p>

						<img
							src={FirstCar}
						/>
					</div>

				</section>

			<div className='w-[95%] h-[80%] mx-auto bg-[--tinted-white] overflow-hidden'>
				asdfas
			</div>
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
