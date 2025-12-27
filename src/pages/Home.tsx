import Landing from "../assets/images/Home/Landing.png";
import About from "../assets/images/Home/About.png";
import Join from "../assets/images/Home/Join.png";
import Sponsor from "../assets/images/Home/Sponsor.png";

const Home = () => {
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
            <div className="w-[57vw] relative z-2 flex items-end justify-center h-full pb-20">
                <h2 className="text-white text-center ">
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
        
        <div className="purple-line"/>

        <section className="w-[92.5%] flex flex-row justify-between gap-[26px] mx-auto py-40">
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
        <div className="flex-1">
            <h3>{title}</h3>
            <img
                src={image}
                alt={title}
                className="w-fit h-[60vh] object-cover"
            />
            <p>{description}</p>
        </div>
    )
}