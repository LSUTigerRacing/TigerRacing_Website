import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import { Navigate, useParams } from "react-router-dom"
import { carsData } from "./carData"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const CarPage = () => {
    const { year } = useParams<{ year: string }>();
	const carData = carsData[year || ''];
	
	if (!carData) {
		return <Navigate to="/cars" replace />;
	}


	useGSAP(() => {
		gsap.from("#landing-text", {
			opacity:0,
			y: -40,
			ease: "power1.out",
			duration: 0.4
		})
		gsap.from("#stats", {
			clipPath: "inset(100% 0 0 0)",
			ease: "power1.out",
			duration: 0.5,
			delay: 0.2
		})
	})

	return (
		<div className="w-full background bg-white!">
			<div className="car-single-landing">
				<img src={carData.landingPhoto || carData.carPhoto} alt={`${year} car`} />
				<div className="car-overlay">
					<div className="w-[92.5%] mx-auto flex justify-between items-end ">
						<span className="mb-16" id="landing-text">
							<p className="text-[1.4rem]!">{carData.name}</p>
							<h2 className="leading-12">{year}</h2>
						</span>
						<div className="min-w-[22.5%] w-fit h-[50%] bg-black/50 mb-16 p-6 mr-8" id="stats">
							<h2 className="mb-4">Stats</h2>
							{carData.specs?.map((content, idx) => (
								<p className="mb-1">{content}</p>
							))}
						</div>
					</div>
				</div>
			</div>
		
			<div className= {`${carData.performance ? "" : "hidden"} w-full background`}>
				<div className="w-[92.5%] py-16 mx-auto">
					<h2>Performance</h2>
					<div className="w-full flex gap-8">
						{carData.performance?.map((statistic, idx) => (
							<div className="flex-1 bg-white p-8 mt-8 text-black">
								<h2 className="mb-4">{statistic[0]}</h2>

								{statistic.slice(1).map((stat, statIdx) => (
									<p>{stat}</p>
								))}
							</div>
						))}
					</div>
				</div>
			</div>

			<img className={`${carData.teamPhoto? "" : "hidden"} w-full h-screen object-cover`} src={carData.teamPhoto}/>
			<div className={`${carData.teamLeads? "" : "hidden"} w-fit mx-auto my-8 grid grid-cols-2  justify-between`}>
				{carData.teamLeads?.map((member, idx) => (
					<div key={idx}>
						<h3 className="text-black text-[1.3rem] px-5">{member.role}: {member.name}</h3>
					</div>
				))}
			</div>
			<div className={`${carData.teamMembers ? "" : "hidden"} w-[80%] mx-auto mb-16 grid grid-cols-3 justify-between`}>
				{carData.teamMembers?.map((member, idx) => (
					<div className="w-full text-center " key={idx}>
						<p className="text-black text-[1.3rem]">{member}</p>
					</div>
				))}
			</div>
		</div>

    )
}

export default CarPage