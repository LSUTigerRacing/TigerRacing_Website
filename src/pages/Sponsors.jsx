import SponsorshipPacket from "../assets/documents/Sponsorship-Packet-25-26.pdf"

import Giveback from "../assets/images/Sponsors/Giveback.png"
import Car from "../assets/images/Sponsors/Car.png"

const Sponsors = () => {
  return (
    <div className="w-screen h-fit flex flex-col justify-center !pt-[10vh]">
      <div className="h-[85vh] flex flex-col justify-between items-center">
        <span>
          <span className="text-[#510087] text-[12rem] text-center leading-[12rem]">
            <h1>KEEP OUR ENGINES ROARING.*</h1>
          </span>
          <span className="text-[#510087] text-[1rem] text-center leading-[1rem]">
            <p>*note that since 2023 we no longer have an engine nor does the car roar.</p>
          </span>
        </span>

        <div className="w-[75rem] flex justify-between">
          <a 
            href={SponsorshipPacket}
            target="_blank"
            className="w-[35rem] h-fit bg-[#FFD500] text-[2rem] text-center !p-[1.5rem] rounded-2xl"
          >
            <h2>Sponsorship Packet</h2>
          </a>
          <a 
            href="mailto:FormulaLSU@gmail.com"
            className="w-[35rem] h-fit bg-[#FFD500] text-[2rem] text-center !p-[1.5rem] rounded-2xl"
          >
            <h2>Contact Us</h2>
          </a>
        </div>

      </div>

      <div className="w-[93%] !mx-auto !mt-[5vh]">
        <span className="text-[#510087] text-[7rem]">
          <h1>Why partner with us?</h1>

        </span>
        <span className="text-[2rem]">
          <p>
            External sponsors account for 95% of our team’s annual budget. Contributions towards our team allow us to continue representing LSU on an international stage, as well as giving back to our local community. 
            <br/>
            <br/>
            Your business will gain brand exposure via our <strong>5000+ social media followers</strong>, and access our network of university connections. By partnering with us, you invest in the next generation of engineers and gain access to our <strong>exclusive resume booklet</strong> of our top engineering talent.
            <br/>
            <br/>
            TigerRacing is a <strong>registered 501(c)(3) non-profit organization.</strong> Any and all donations are considered <strong>tax-deductible</strong>.
          </p>
        </span>
        <div className="h-[60vh] flex justify-between !mt-[3vh]">
          <img
            src={Car}
            alt="example of logos on car"
            className="w-[70%] object-cover"
          />
          <img
            src={Giveback}
            alt="TigerRacing Member helping kid into car"
            className="w-[28%] object-cover"
          />
        </div>

        <div className="w-full h-[40vh] flex flex-row justify-between gap-[2%] !mt-[3vh]">
          <div className="w-[32%] bg-[#510087] flex flex-col justify-center text-center text-[#F5F0F6]">
            <h1 className="!text-[7rem] leading-[7rem]">12+</h1>
            <h3 className="!text-[3.6rem] leading-[3.5rem]">
              Years of Performance
            </h3>
          </div>
          <div className="w-[32%] bg-[#510087] flex flex-col justify-center text-center text-[#F5F0F6]">
            <h1 className="!text-[7rem] leading-[7rem]">5000+</h1>
            <h3 className="!text-[3.5rem] leading-[3.5rem]">
              Instagram Followers
            </h3>
          </div>
          <div className="w-[32%] bg-[#510087] flex flex-col justify-center text-center text-[#F5F0F6]">
            <h1 className="!text-[7rem] leading-[7rem]">7th/89</h1>
            <h3 className="!text-[3.5rem] leading-[3.5rem]">
              Peak overall placement
            </h3>
          </div>
        </div>

        <div className="text-[#510087]">
          <span className="text-[7rem]">
            <h1>Our Sponsors</h1>
          </span>
          <span className="w-full flex justify-center"> {/* i tried to use the hr tag but its not cooperating with tailwind so im doing this for now */}
            <div className="w-full h-1 bg-[#510087] !mx-none"></div>
          </span>

          <span className="text-[5rem]">
            <h2>Platinum Sponsors</h2>
          </span>

          <span className="text-[5rem]">
            <h2>Gold Sponsors</h2>
          </span>

          <span className="text-[5rem]">
            <h2>Silver Sponsors</h2>
          </span>

          <span className="text-[5rem]">
            <h2>Bronze Sponsors</h2>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;