import { Link } from "react-router-dom";
import { EVImages, ICImages, PreClubImages } from "../assets/images/Cars";

const Cars = () => {
  return (
    <div className="w-full background">
		 <section className="white-landing">
					<div className="white-landing-content">
						<div id="landing-title">
							<h2>Our legacy on wheels.</h2>
						</div>
		
						<p id="landing-blurb">
							From concept to competition, every TigerRacing vehicle represents countless hours of student innovation, engineering excellence, and hands-on learning. Our cars showcase our evolution as a team, from our early combustion designs to our venture into electric vehicles that compete on tracks across the country. Each car tells a story of problem-solving, collaboration, and the relentless pursuit of performance. 
							<br/><br/>
							Explore our legacy of racing machines and see how LSU engineering students transform classroom knowledge into championship-caliber race cars.
						</p>
		                <div className="mt-30 h-[1.6rem] flex items-center">
							<h3>Explore our past.</h3>
						</div>

					</div>
					<img
						src={EVImages.y2025}
						id="landing-img"
					/>
				</section>

		<div className="flex justify-center items-center py-10 gap-2">
			<div className="purple-line flex-4"/>
			<h3 className="text-[var(--purple-line)]!">Electric Vehicles</h3>
			<div className="purple-line flex-80"/>
		</div>

		<section className="car-grid">
			<CarBox
				name="Evonne"
				year="2025"
				type="EV"
				image={EVImages.y2025}
			/>
		</section>

		<div className="flex justify-center items-center py-10 gap-2">
			<div className="purple-line flex-4"/>
			<h3 className="text-[var(--purple-line)]!">Internal Combustion</h3>
			<div className="purple-line flex-80"/>
		</div>

		<section className="car-grid">
			<CarBox
				name="Justin"
				year="2022"
				type="IC"
				image={ICImages.y2022}
			/>
			<CarBox
				name="Chloe"
				year="2021"
				type="IC"
				image={ICImages.y2021}
			/>
			
			<CarBox
				name="Julia"
				year="2019"
				type="IC"
				image={ICImages.y2019}
			/>
			
			<CarBox
				name="Anna"
				year="2018"
				type="IC"
				image={ICImages.y2018}
			/>
			
			<CarBox
				name="Sierra"
				year="2017"
				type="IC"
				image={ICImages.y2017}
			/>
			
			<CarBox
				name="Kyra"
				year="2016"
				type="IC"
				image={ICImages.y2016}
			/>
			<CarBox
				name="Chelsea"
				year="2015"
				type="IC"
				image={ICImages.y2015}
			/>
			<CarBox
				name="Emily"
				year="2014"
				type="IC"
				image={ICImages.y2014}
			/>
			<CarBox
				name="Carly Rae"
				year="2013"
				type="IC"
				image={ICImages.y2013}
			/>
		</section>


		<div className="flex justify-center items-center py-10 gap-2">
			<div className="purple-line flex-4"/>
			<h3 className="text-[var(--purple-line)]!">Pre-Club Cars</h3>
			<div className="purple-line flex-80"/>
		</div>

		<section className="car-grid">
			<CarBox
				name="⠀"
				year="2012"
				type="IC"
				image={PreClubImages.y2012}
			/>
			<CarBox
				name="⠀"
				year="2011"
				type="IC"
				image={PreClubImages.y2011}
			/>
			<CarBox
				name="⠀"
				year="2009"
				type="IC"
				image={PreClubImages.y2009}
			/>
			<CarBox
				name="⠀"
				year="2007-2008"
				type="IC"
				image={PreClubImages.y200708}
			/>
			<CarBox
				name="⠀"
				year="2006"
				type="IC"
				image={PreClubImages.y2006}
			/>
			<CarBox
				name="⠀"
				year="1993"
				type="IC"
				image={PreClubImages.y1993}
			/>
			<CarBox
				name="⠀"
				year="1983"
				type="IC"
				image={PreClubImages.y1983}
			/>
		</section>
    </div>
  );
};

export default Cars;

const CarBox = ( props: { name: any, year: any, type: any, image: any } ) => {
    const {
		name,
		year,
		type,
        image
    } = props;
    
    return ( 
        <Link to={`/cars/${year}`} className="car-box">
			<img src={image} alt={`${year} car`} />
			<div className="car-overlay">
				<div className="w-[92.5%] mx-auto mb-3 flex justify-between">
					<span>
						<p>{name}</p>
						<h3 className="leading-6">{year}</h3>
					</span>

					<h2>{type}</h2>
				</div>

			</div>
        </Link>
    )
  }