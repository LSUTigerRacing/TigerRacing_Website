import Landing from "../assets/images/Sponsor/Landing.png";
import WhyPartner from "../assets/images/Sponsor/WhyPartner.png";

const Sponsor = () => {
  return (
    <div className="w-full background">
        <section className="white-landing">
            <div className="white-landing-content">
                <h2>Keep our engines roaring.*</h2>
                <h4>*and our batteries whirring.</h4>
                <p>
                    The LSU TigerRacing team sincerely thanks all of our generous sponsors. We could not build our electric vehicles, maintain our combustion cars, and thrive as one of LSU's premiere engineering organizations without the help of our sponsors. 
                    <br/> <br/> 
                    If you are interested in becoming a TigerRacing sponsor, please look at our sponsorship packet linked below and contact our team at 
                    <br/> <br/>
                    Your support makes a real difference to our team.
                </p>

                <div className="yellow-button white-landing-button">
                    <h3>Sponsorship Packet</h3>
                </div>
            </div>
            <img
                src={Landing}
            />
        </section>

        <section className="w-[90%] h-[80vh] flex flex-row justify-between mt-45 mx-auto" >
            <div className="w-[45%]">
                <h2 className="mb-5">Why partner with us?</h2>
                <p>
                    External sponsors account for 95% of our team’s annual budget. Contributions towards our team allow us to continue representing LSU on an international stage, as well as giving back to our local community. 
                    <br/> <br/>
                    Your business will gain brand exposure via our 5000+ social media followers, and access our network of university connections. By partnering with us, you invest in the next generation of engineers and gain access to our exclusive resume booklet of our top engineering talent.
                    <br/> <br/>
                    TigerRacing is a registered 501(c)(3) non-profit organization. Any and all donations are considered tax-deductible.
                </p>
            </div>
            <div className="w-[45%] flex flex-col justify-between">
                <div className="h-[40%]">
                    <h1 className="text-[8rem]!">12+</h1>
                    <h3>Years of Performance</h3>
                </div>
                <div className="purple-line"/>
                <div className="flex gap-20">
                    <div>
                        <h2>5500+</h2>
                        <p>Followers across social medias</p>
                    </div>
                    <div>
                        <h2>7th/89</h2>
                        <p>Peak overall placement</p>
                    </div>
                </div>
                <div className="purple-line"/>
                <div className="flex gap-20">
                    <div>
                        <h2>xx%</h2>
                        <p>of alumni in major-relevant careers</p>
                    </div>
                    <div>
                        <h2>80+</h2>
                        <p>Active Members</p>
                    </div>
                </div>
                <div className="purple-line"/>
            </div>
        </section>

        <section className="sponsor-tier-section">
            <h2>Sponsorship Tiers</h2>
            <div className="sponsor-tier-container">
                <Tier
                    image={Landing}
                    title="Platinum Tier"
                    description="Logo on T-Shirt 
                    Resume Booklet
                    16 x 8 inch Logo on Car"
                    extra="+ everything in Gold"
                />
                <Tier
                    image={Landing}
                    title="Gold Tier"
                    description="Polo Shirt
                    Social Media Post
                    10 x 6 inch Logo on Car"
                    extra="+ everything in Silver"
                />
                <Tier
                    image={Landing}
                    title="Silver Tier"
                    description="Framed Photo
                    Logo on Website
                    Attendance to Drive Days
                    6 x 4 inch Logo on Car"
                    extra="+ everything in Bronze"
                />
                <Tier
                    image={Landing}
                    title="Bronze Tier"
                    description="Machine Shop Tour
                    T-Shirt"
                    extra=""
                />
            </div>
        </section>
    </div>
  );
};

export default Sponsor;

const Tier = ( props: { image: any; title: any; description: any; extra: any; } ) => {
    const {
        image,
        title,
        description,
        extra
    } = props;
    return (
        <div className="flex-1 bg-[var(--tinted-white)] text-black m-4 p-6 shadow-lg hover:shadow-xl transition-shadow">
            <img
                src={image}
                alt={title}
                className="w-fit h-[30vh] object-cover mb-[2%]"
            />
            <h3 className="mb-[2%]">{title}</h3>
            <p className="mb-[2%] whitespace-pre-line">{description}</p>
            <h4>{extra}</h4>
        </div>
    )
}