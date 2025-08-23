import SponsorshipPacket from "../../assets/documents/Sponsorship-Packet-25-26.pdf"

const Sponsors = () => {
  return (
    <div className="w-screen h-fit flex flex-col justify-center !pt-[10vh]">
      <div className="h-[85vh] flex flex-col justify-between items-center">
        <span className="text-[#510087] text-[12rem] text-center leading-[12rem]">
          <h1>KEEP OUR ENGINES ROARING.</h1>
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


    </div>
  );
};

export default Sponsors;