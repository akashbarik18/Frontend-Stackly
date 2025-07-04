import React from "react";
import { CheckCircle2 } from "lucide-react";
import Banner1 from "../../assets/pricing-pg/banner1.png";
import Banner2 from "../../assets/pricing-pg/banner2.png";
import CreditStats from "./CreditStats";
import Graph from "./Graph";
import PricingTable from "./PricingTable";
import PricingFaq from "./PricingFaq";
import Billing from "./Billing";
import Payment from "./Payment";
import UiPlans from "./UiPlans";
import ConformationPage from "./ConformationPage";
import Pay from "./Pay";
import { Link } from "react-router-dom";



export default function HeroPricing() {
  

      const features = [
        "Unlimited Designs",
        "High-Resolution 4K Images",
        "Watermark-Free Downloads",
        "Highly Advanced AI Designs",
        "24/7 Support Assistance",
        "Cancel Anytime",
      ];

  return (
    
    <div>
      {/* section-1  */}

     <section
  className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center bg-black overflow-hidden
             max-[440px]:flex max-[440px]:flex-col
             max-[440px]:w-[440px] max-[440px]:h-[300px]
             max-[440px]:pt-[60px] max-[440px]:pr-[40px] max-[440px]:pb-[60px] max-[440px]:pl-[40px]"
>
        <div className="absolute inset-0 z-0 rotate-[45deg] scale-[2] origin-center
                max-[440px]:scale-[1.2]">
  <img
    src={Banner1}
    alt="Diagonal Grid 1"
    className="absolute top-[-190px] left-[20%] w-[1000px] max-w-none
               max-[440px]:w-[500px] max-[440px]:top-[-100px] max-[440px]:left-[10%]"
  />
  <img
    src={Banner2}
    alt="Diagonal Grid 2"
    className="absolute top-[230px] left-[-10%] w-[1300px] max-w-none
               max-[440px]:w-[600px] max-[440px]:top-[150px] max-[440px]:left-[-20%]"
  />
</div>


        <div
          className="relative z-10 text-center text-white px-4
             max-[440px]:flex max-[440px]:flex-col
             max-[440px]:w-[360px] max-[440px]:h-[146px]
             max-[440px]:pt-[6px] max-[440px]:pr-[12px] max-[440px]:pb-[6px] max-[440px]:pl-[12px]
             max-[440px]:gap-[28px]"
        >
          <h2
  className="text-[50px] font-bold leading-[100%] text-center
   max-[440px]:w-[336px] max-[440px]:h-[46px]
   max-[440px]:text-[20px] max-[440px]:leading-[100%]
   max-[440px]:font-['Inter'] max-[440px]:font-bold max-[440px]:text-center
   max-[440px]:relative max-[440px]:z-0"  // Added these two classes
>
  See How <span className="text-teal-400">Stackly.AI</span> Powers Innovation
</h2>

          <p
            className="mt-8 text-[22px] max-w-[937px] mx-auto text-white font-medium text-center
             max-[440px]:w-[336px] max-[440px]:h-[60px]
             max-[440px]:text-[14px] max-[440px]:leading-[140%]
             max-[440px]:font-['Inter'] max-[440px]:font-medium max-[440px]:text-center"
          >
            Trusted by thousands of creators, developers, and teams. Explore live usage
            stats and see how our community is growing every day.
          </p>

        </div>
      </section>

    {/* section-2 and section-3 — swapped on <441px */}
<div className="flex flex-col">
  <div className="order-2 max-[440px]:order-1">
    <Graph />
  </div>
  <div className="order-1 max-[440px]:order-2">
    <CreditStats />
  </div>
</div>


      {/* section-4  */}

      <section
  className="bg-[#001E20] text-white text-center py-16 px-4 mb-[120px]
             max-[440px]:bg-[#00B0BA14] max-[440px]:flex max-[440px]:flex-col
             max-[440px]:w-[440px] max-[440px]:h-[245px] 
             max-[440px]:pt-[40px] max-[440px]:pr-[20px] max-[440px]:pb-[40px] max-[440px]:pl-[20px]
             max-[440px]:gap-[40px]"
>
        {/* Heading */}
      {/* Desktop & Tablet version: shown only on >440px */}
<div className="max-[440px]:hidden">
  <h2 className="text-[44px] font-semibold leading-[140%] text-center mb-6">
    Ready to Experience the Power?
  </h2>

  <Link to="/Sign-in">
    <button className="bg-gradient-to-r from-[#00B0BA] via-[black] to-[#007B82] hover:from-cyan-600  
                       text-white font-bold py-3 px-8 rounded-md text-[20px] 
                       transition-all duration-300">
      Get Started for Free
    </button>
  </Link>

  <p className="mt-6 text-[16px] leading-[28px] font-[400] text-[#f5f5f5]">
    No credit card needed. Sign up and explore your free credits today.
  </p>
</div>

{/* Mobile version: shown only on <441px */}
<div className="hidden max-[440px]:block">
  <h2
    className="w-[400px] h-[24px] font-['Inter'] font-semibold text-[20px] leading-[100%]
               tracking-[0] text-center text-[#000000]"
  >
    There’s a <span className="text-[#007B82]">Plan </span>for Creator
  </h2>

  <p
    className="w-[400px] h-[17px] font-['Inter'] font-[400] text-[14px] leading-[100%]
               tracking-[0] text-center text-[#000000] mt-4"
  >
    From casual users to design pros, we’ve got you covered
  </p>

  {/* ✅ Center the button below */}
  <div className="flex justify-center mt-6">
    <Link to="/Sign-in">
      <button
        className="bg-gradient-to-r from-[#00B0BA] via-[black] to-[#007B82] hover:from-cyan-600  
                   text-white font-bold py-2 px-6 rounded-md text-[16px] 
                   transition-all duration-300
                   max-[440px]:w-[304px] max-[440px]:h-[60px] max-[440px]:rounded-[8px]
                   max-[440px]:text-[18px] max-[440px]:leading-[100%] max-[440px]:font-['Inter'] 
                   max-[440px]:font-[700] max-[440px]:text-center max-[440px]:flex max-[440px]:items-center 
                   max-[440px]:justify-center"
      >
        Get Started!
      </button>
    </Link>
  </div>
</div>



      </section>

      {/* section-5  */}
      {/* <PricingTable /> */}
      <UiPlans />

      {/* section-6  */}

      <div
  className="bg-[#001E20] text-white py-12 px-4 md:px-16 text-center mt-[120px] 
             max-[440px]:bg-transparent max-[440px]:flex max-[440px]:flex-col 
             max-[440px]:w-[440px] max-[440px]:h-[486px] 
             max-[440px]:pt-[40px] max-[440px]:pr-[20px] 
             max-[440px]:pb-[40px] max-[440px]:pl-[20px] 
             max-[440px]:gap-[48px]"
>


        <div className="hidden [@media(min-width:441px)]:block">
  <h2 className="text-[48px] font-bold leading-[64px] text-center text-[white]">
    Why Upgrade to Premium?
  </h2>

  <div className="inline-block mb-8">
    <span className="bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82] text-[22px] leading-[44px] text-center text-white text-sm font-semibold px-[30px] py-[10px] rounded-[50px] relative top-[55px]">
      Features of Paid Plans
    </span>
  </div>

  <div className="border-[1px] border-solid border-teal-700 rounded-[30px] px-[60px] py-[80px] max-w-[1200px] mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-2">
          <CheckCircle2 className="text-teal-400 w-5 h-5 mt-1" />
          <span className="text-[20px] leading-[44px] text-center font-medium">
            {feature}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>

{/* MOBILE */}
<div className="[@media(min-width:441px)]:hidden -mt-[40px]">

 <h2 className="w-[400px] h-[28px] text-center font-inter font-bold text-[20px] leading-[140%] mx-auto mb-4">
  <span className="text-[#000000]">Why Go </span>
  <span className="text-[#007B82]">Premium?</span>
</h2>


         <div className="w-full flex justify-center">
  <div
  className="inline-block mb-8 flex items-center justify-center 
             w-full"
>
  <span
    className="whitespace-nowrap text-white font-[400] text-[14px] leading-[140%] tracking-[0] 
               font-['Inter'] bg-gradient-to-l from-[#00B0BA] via-[#000000] to-[#007B82] 
               px-[30px] py-[10px] rounded-[50px] relative top-[55px] flex justify-center items-center"
  >
    Features of Paid Plans
  </span>
</div>

</div>


 <div
  className="flex flex-row w-[400px] h-[330px] border-[1px] border-solid border-teal-700 
             rounded-[30px] p-[10px] gap-[10px]"
>
<div className="grid grid-cols-2 gap-y-6 gap-x-20 w-full max-w-[550px] mx-auto py-[45px] px-[8px] text-left">
  {features.map((feature, idx) => (
    <div key={idx} className="flex items-start gap-3">
      <div className="bg-[#007B82] w-[24px] h-[24px] rounded-md flex items-center justify-center mt-[4px]">
        <CheckCircle2 className="w-[14px] h-[14px] text-white" />
      </div>
      <span className="w-[126px] text-left font-['Inter'] font-medium text-[14px] leading-[140%] text-[#000000]">
        {feature}
      </span>
    </div>
  ))}
</div>




  </div>
</div>
      </div>

      {/* section-7  */}

      <PricingFaq />

      {/* section 8  */}
    </div>
  );
}
