import { Navigate, useParams } from "react-router-dom"
import { carsData } from "./carData"

const CarPage = () => {
    const { year } = useParams<{ year: string }>();
	const carData = carsData[year || ''];
	
	if (!carData) {
		return <Navigate to="/cars" replace />;
	}
	return (
		<div className="w-full background bg-white!">
			<div className="car-single-landing">
				<img src={carData.carPhoto} alt={`${year} car`} />
				<div className="car-overlay">
					<div className="w-[92.5%] mx-auto flex justify-between">
						<span>
							<p className="text-[1.4rem]!">{carData.name}</p>
							<h2 className="leading-12">{year}</h2>
						</span>
						<div className="w-[20%] h-[50%] bg-white mb-50">
						</div>
					</div>
				</div>
			</div>
			<div>
				<img className="w-full h-screen object-cover" src={carData.teamPhoto}/>
			</div>
			<div className="w-fit mx-auto grid grid-cols-2 justify-between">
				{carData.teamLeads?.map((member, idx) => (
					<div key={idx}>
						<h3 className="text-black text-[1.3rem]">{member.role}: {member.name}</h3>
					</div>
				))}
			</div>
			<div className="w-[80%] mx-auto grid grid-cols-3 justify-between">
				{carData.teamMembers?.map((member, idx) => (
					<div className="w-fit bg-amber-800" key={idx}>
						<p className="text-black text-[1.3rem]">{member}</p>
					</div>
				))}
			</div>
		</div>

    )
}

export default CarPage