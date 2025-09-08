import BlurbPic1 from "../../assets/images/Join/Business/BlurbPic1.png"
import BlurbPic2 from "../../assets/images/Join/Business/BlurbPic2.png"

const Business = () => {
  return (
    <div className="w-screen h-fit flex flex-col justify-center !pt-[10vh]">
      <div className="h-[85vh] flex flex-col justify-between items-center text-center !mb-[10vh]">
        <span className="text-[#510087] text-[10rem] leading-[10rem]">
          <h1>THE BATTERY BEHIND THE ENGINE.</h1>
        </span>
  
        <span className="text-[2.2rem] leading-[2rem]">
          <p>SCROLL TO EXPLORE BUSINESS</p>
        </span>
      </div>

      <div className="w-[93%] h-[90vh] flex flex-col justify-between !mx-auto">
        <div className="w-full h-[48.5%] flex justify-between">
          <div className="w-[43.5%] h-full bg-[#510087] rounded-3xl">
            <div className="w-[90%] h-[90%] !mx-auto !mt-[4%] text-[#F5F0F6] text-[2.25rem]">
              <p>While the roar of engines and blur of speed capture headlines, every successful Formula SAE team knows a fundamental truth: <strong>racing is as much a business challenge as it is an engineering one.</strong></p>
            </div>
          </div>
          <img
            src={BlurbPic1}
            alt=""
            className="w-[55%] h-full object-cover rounded-3xl"
          />
        </div>
        <div className="w-full h-[48.5%] flex justify-between">
          <img
            src={BlurbPic2}
            alt=""
            className="w-[43.5%] h-full object-cover rounded-3xl"
          />
          <div className="w-[55%] h-full bg-[#510087] rounded-3xl">
            <div className="w-[90%] h-[90%] !mx-auto !mt-[6%] text-[#F5F0F6] text-[2.25rem]">
              <p>Running a Formula SAE team is essentially <strong>managing a small business with a six-figure budget</strong>, multiple revenue streams, complex supply chains, and demanding stakeholders, from sponsors and judges to team members and university administrators.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[93%] !mx-auto text-center text-[2.5rem] leading-[3.5rem] !mt-[4vh]">
        <p>The teams that consistently win championships aren't just the ones with the fastest cars; they're the ones that <strong>master</strong> the complete business ecosystem of motorsports, where your financial acumen, strategic thinking, and communication skills aren't just valuable—they're absolutely essential to enabling, driving, and determining whether the engineering succeeds or fails on the track.</p>
      </div>
      
      <div className="h-[50vh] flex flex-col justify-between items-center text-center !my-[5rem]">
        <div>
          <span className="text-[6rem] text-[#510087]">
            <h1>Sounds like a fit?</h1>
          </span>
          <span className="text-[3rem]">
            <h2>Fill out our interest form and we’ll contact you from there!</h2>
          </span>
        </div>

        <div className="w-fit h-fit bg-[#FFD500] !p-[1rem] !px-[2rem] text-[3.5rem] rounded-[2.5rem]">
          <h2>Interest Form</h2>
        </div>
      </div>
    </div>
  );
};

export default Business;