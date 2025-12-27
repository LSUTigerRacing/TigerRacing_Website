import President from "../assets/images/Team/Admin/President.png"
import VicePresident from "../assets/images/Team/Admin/VicePres.png"
import Treasurer from "../assets/images/Team/Admin/Treasurer.png"
import PublicRelations from "../assets/images/Team/Admin/PublicRelations.png"
import Captain from "../assets/images/Team/Admin/Captain.png"
import Powertrain from "../assets/images/Team/Admin/Powertrain.png"
import Chassis from "../assets/images/Team/Admin/Chassis.png"
import Safety from "../assets/images/Team/Admin/Safety.png"

import SystemChassis from "../assets/images/Team/SystemChassis.png";
import SystemPowertrain from "../assets/images/Team/SystemPowertrain.png";
import SystemBusiness from "../assets/images/Team/SystemBusiness.png";
import SystemPublicRelations from "../assets/images/General/filler.png";
import SystemSoftware from "../assets/images/General/filler.png";


const Team = () => {
  return (
    <div className="w-full background">
        <section className="w-full py-40">
            <span className="text-center">
                <h1>Meet the hands behind the wheel.</h1>
                <p>TigerRacing has asdjflkasdjflkasdjflkaTigerRacing has asdjflkasdjflkasdjflkaTigerRacig has asdjflkasdjflkasdjflkaTigerRacing has as</p>
            </span>
            <section className="w-[92.5%] flex flex-row justify-between gap-[26px] mx-auto">
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
                    title="Public Relations"
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

        <section className="w-[92.5%] grid grid-cols-4 gap-6 py-50 mx-auto">
            <Portrait
                to="/team/member1"
                image={President}
                title="President"
                name="Mizuki Teryama"
            />
            <Portrait
                to="/team/member1"
                image={VicePresident}
                title="Vice President"
                name="Urwah Abbas"
            />
            <Portrait
                to="/team/member1"
                image={PublicRelations}
                title="Public Relations"
                name="Thomas Au"
            />
            <Portrait
                to="/team/member1"
                image={Treasurer}
                title="Treasurer"
                name="Syphany Guo"
            />
            <Portrait
                to="/team/member1"
                image={Captain}
                title="Captain"
                name="Gareth Oram"
            />
            <Portrait
                to="/team/member1"
                image={Chassis}
                title="Chassis Lead"
                name="Tristan Thai"
            />
            <Portrait
                to="/team/member1"
                image={Powertrain}
                title="Powertrain Lead"
                name="Yianni Kiritsis"
            />
            <Portrait
                to="/team/member1"
                image={Safety}
                title="Safety Chair"
                name="Luka Brekalo"
            />
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
        <div className="flex-1">
            <h3>{title}</h3>
            <img
                src={image}
                alt={title}
                className="w-fit h-[30vh] object-cover"
            />
            <p>{description}</p>
        </div>
    )
}

const Portrait = ( props: { to: any; image: any; title: any; name: any; } ) => {
    const {
        to,
        image,
        title,
        name
    } = props;
    return (
        <div className="relative flex-1 h-[60vh]">
            <img
                src={image}
                alt={title}
                className="absolute w-fit h-full object-cover rounded-[36px]"
            />
            <div className="absolute-center border-2 rounded-[30px] "
                  style={{
                    width: 'calc(100% - 20px)',
                    height: 'calc(100% - 20px)'
                }}
            >
                <div className="absolute bottom-4 left-5">
                    <p>{name}</p>
                    <h3>{title}</h3>
                </div>
            </div>


        </div>
    )
}