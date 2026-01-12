import { AdminImages, ChassisImages, PowertrainImages, SoftwareImages } from "../assets/images/Team";

import SystemChassis from "../assets/images/Team/SystemChassis.png";
import SystemPowertrain from "../assets/images/Team/SystemPowertrain.png";
import SystemBusiness from "../assets/images/Team/SystemBusiness.png";
import SystemPublicRelations from "../assets/images/General/filler.png";
import SystemSoftware from "../assets/images/General/filler.png";

import Linkedin from "../assets/images/General/icons/linkedin.png"
import Mail from "../assets/images/General/icons/mail.png"

const Team = () => {
  return (
    <div className="w-full background">
        <section className="team-landing">
            <span className="text-center">
                <h1>Meet the hands behind the wheel.</h1>
                <p>TigerRacing has asdjflkasdjflkasdjflkaTigerRacing has asdjflkasdjflkasdjflkaTigerRacig has asdjflkasdjflkasdjflkaTigerRacing has as</p>
            </span>
            <section className="team-redirect-container">
                <Redirect
                    to="/about"
                    image={SystemChassis}
                    title="Chassis"
                    description="Responsible for the aslkdjfl kasd kasdjflasdflkjasdklfj askldfjalskdjf laskdjflkad jfasdkfjal"
                />
                <Redirect
                    to="/join"
                    image={SystemPowertrain}
                    title="Powertrain"
                    description="Responsible for the aslkdjfl kasd kasdjflasdflkjasdklfj askldfjalskdjf laskdjflkad jfasdkfjal"
                />
                <Redirect
                    to="/cars"
                    image={SystemBusiness}
                    title="Business"
                    description="Responsible for the aslkdjfl kasd kasdjflasdflkjasdklfj askldfjalskdjf laskdjflkad jfasdkfjal"
                />
                <Redirect
                    to="/cars"
                    image={SystemPublicRelations}
                    title="PR"
                    description="Responsible for the aslkdjfl kasd kasdjflasdflkjasdklfj askldfjalskdjf laskdjflkad jfasdkfjal"
                />
                <Redirect
                    to="/cars"
                    image={SystemSoftware}
                    title="Software"
                    description="Responsible for the aslkdjfl kasd kasdjflasdflkjasdklfj askldfjalskdjf laskdjflkad jfasdkfjal"
                />
            </section>
            <span className="text-center">
                <h2>Meet the 2026 Team</h2>
            </span>
        </section>

        {/* admin */}
        <section className="team-portrait-section">
        <h2>Admin</h2>
            <div className="team-portrait-container">
                <Portrait
                    to="none"
                    email="mteruy1@lsu.edu"
                    image={AdminImages.President}
                    title="President"
                    name="Mizuki Teryama"
                />
                <Portrait
                    to="https://www.linkedin.com/in/urwah-abbas/"
                    email="uabbas3@lsu.edu"
                    image={AdminImages.VicePresident}
                    title="Vice President"
                    name="Urwah Abbas"
                />
                <Portrait
                    to="none"
                    email="Thomas.Au@lsu.edu"
                    image={AdminImages.PublicRelations}
                    title="Public Relations"
                    name="Thomas Au"
                />
                <Portrait
                    to="https://www.linkedin.com/in/syphany-guo-3773b82b6/"
                    email="sguo15@lsu.edu"
                    image={AdminImages.Treasurer}
                    title="Treasurer"
                    name="Syph Guo"
                />
                <Portrait
                    to="https://www.linkedin.com/in/gareth-oram-02470a22b/"
                    email="goram1@lsu.edu"
                    image={AdminImages.Captain}
                    title="Captain"
                    name="Gareth Oram"
                />
                <Portrait
                    to="https://www.linkedin.com/in/tristan-thai-13288a2b4/"
                    email="tthai5@lsu.edu"
                    image={AdminImages.Chassis}
                    title="Chassis Lead"
                    name="Tristan Thai"
                />
                <Portrait
                    to="https://www.linkedin.com/in/john-kiritsis/"
                    email="jkirit1@lsu.edu"
                    image={AdminImages.Powertrain}
                    title="Powertrain Lead"
                    name="Yianni Kiritsis"
                />
                <Portrait
                    to="https://www.linkedin.com/in/luka-brekalo1/"
                    email="lbreka1@lsu.edu"
                    image={AdminImages.Safety}
                    title="Safety Chair"
                    name="Luka Brekalo"
                />
            </div>
        </section>

        <div className="purple-line"/>

        {/* chassis */}
        <section className="team-portrait-section">
        <h2>Chassis Leads</h2>
            <div className="team-portrait-container">
                <Portrait
                    to="https://www.linkedin.com/in/nicholas-fortie-987191331/"
                    email="nforti2@lsu.edu"
                    image={ChassisImages.Frame}
                    title="Frame"
                    name="Nick Fortie"
                />
                <Portrait
                    to="https://www.linkedin.com/in/brady-vidrine-113a75279/"
                    email="bvidr16@lsu.edu"
                    image={ChassisImages.Aerodynamics}
                    title="Aerodynamics"
                    name="Brady Vidrine"
                />
                <Portrait
                    to="/team/member1"
                    email="James.Sirois@lsu.edu"
                    image={ChassisImages.Suspension}
                    title="Suspension"
                    name="James Sirois"
                />
                <Portrait
                    to="https://www.linkedin.com/in/anthony-terry-rojas-71788b2b2/"
                    email="aterr36@lsu.edu"
                    image={ChassisImages.Brakes}
                    title="Brakes"
                    name="Anthony Terry-Rojas"
                />
                <Portrait
                    to="https://www.linkedin.com/in/urwah-abbas/"
                    email="uabbas3@lsu.edu"
                    image={ChassisImages.Ergonomics}
                    title="Ergonomics"
                    name="Urwah Abbas"
                />
                <Portrait
                    to="none"
                    email="none"
                    image={ChassisImages.Drivetrain}
                    title="Drivetrain"
                    name="??"
                />
            </div>
        </section>

        <div className="purple-line"/>

        {/* powertrain */}
        <section className="team-portrait-section">
        <h2>Powertrain Leads</h2>
            <div className="team-portrait-container">
                <Portrait
                    to="https://www.linkedin.com/in/vinh-le-grad2026/"
                    email="vle31@lsu.edu"
                    image={PowertrainImages.Electronics}
                    title="Electronics"
                    name="Vinh Le"
                />
                <Portrait
                    to="https://www.linkedin.com/in/gareth-oram-02470a22b/"
                    email="goram1@lsu.edu"
                    image={PowertrainImages.Battery}
                    title="Battery"
                    name="Gareth Oram"
                />
                <Portrait
                    to="https://www.linkedin.com/in/sammy-ziegler/"
                    email="sziegl6@lsu.edu"
                    image={PowertrainImages.LowVoltage}
                    title="Low Voltage"
                    name="Sammy Ziegler"
                />
                <Portrait
                    to="https://www.linkedin.com/in/luka-brekalo1/"
                    email="lbreka1@lsu.edu"
                    image={PowertrainImages.TractiveSystem}
                    title="Tractive System"
                    name="Luka Brekalo"
                />
            </div>
        </section>
        <div className="purple-line"/>

        {/* Software */}
        <section className="team-portrait-section">
        <h2>Software Leads</h2>
            <div className="team-portrait-container">
                <Portrait
                    to="https://www.linkedin.com/in/rickyxliang/"
                    email="rliang4@lsu.edu"
                    image={SoftwareImages.AppDev}
                    title="Software Lead
                    App Development"
                    name="Ricky Liang"
                />
                <Portrait
                    to="https://www.linkedin.com/in/alex-bui-707b90355/"
                    email="abui34@lsu.edu"
                    image={SoftwareImages.Embedded}
                    title="Embedded Controls"
                    name="Alex Bui"
                />
                <Portrait
                    to="https://www.linkedin.com/in/brandon-randle-link/"
                    email="Brandon.Randle1@lsu.edu"
                    image={SoftwareImages.DAQ}
                    title="Data Analysis"
                    name="Brandon Randle"
                />
            </div>
        </section>

    </div>
  );
};

export default Team;

const Redirect = ( props: { to: any; image: any; title: any; description: any; } ) => {
    const {
        to,
        image,
        title,
        description
    } = props;
    return (
        <div className="team-redirect">
            <h3>{title}</h3>
            <img
                src={image}
                alt={title}
            />
            <p>{description}</p>
        </div>
    )
}

// use "none" as an input to disable hover
const Portrait = ( props: { to: any; email: any; image: any; title: any; name: any; } ) => {
    const {
        to,
        email,
        image,
        title,
        name
    } = props;
    return (
        <div className='portrait'>
            <img
                src={image}
                alt={title}
                className="portrait-image"
            />
            <div className="portrait-lining">
                <div className="portrait-content">
                    <p>{name}</p>
                    <h3 className="whitespace-pre-line">{title}</h3>
                </div>
            </div>
            <div className="portrait-contact">
                <div className="portrait-contact-content">
                    <h3>Contact</h3>
                    <div className="flex flex-row gap-2">
                        <a className={`${email === "none" ? 'hidden' : ''}`} href={`mailto:${email}`} target="_blank">
                            <img src={Mail}/>
                        </a>
                        <a className={`${to === "none" ? 'hidden' : ''}`} href={to} target="_blank">
                            <img src={Linkedin}/>
                        </a>
                    </div>

                </div>
            </div>

        </div>
    )
}