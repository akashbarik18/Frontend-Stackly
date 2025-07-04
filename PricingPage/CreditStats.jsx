import React from "react";
import TotalCreditsImg from "../../assets/pricing-pg/img1.png"; // Replace with your first image
import TodaysUsageImg from "../../assets/pricing-pg/img2.png"; // Replace with your first image


export default function CreditStats() {
  return (
    <section
      className="w-full min-h-[882px] bg-[white] flex flex-col justify-center items-center gap-[50px]
             max-[440px]:w-[440px]
             max-[440px]:min-h-[416px]
             max-[440px]:flex-col
             max-[440px]:pt-[40px]
             max-[440px]:pr-[20px]
             max-[440px]:pb-[40px]
             max-[440px]:pl-[20px]
             max-[440px]:gap-[32px]"
    >

     <div
  className="w-[100%] max-w-[719px] min-h-[31px] text-[26px] font-semibold leading-[100%] text-center text-[#2a2a2a] mt-[200px]
             max-[440px]:w-[271px] 
             max-[440px]:h-[50px] 
             max-[440px]:text-[18px] 
             max-[440px]:leading-[140%] 
             max-[440px]:text-center 
             max-[440px]:font-semibold 
             max-[440px]:mt-[10px]"  
>
  "Powering Millions of Actions — And Growing Every Day!"
</div>



     <div className="w-full flex justify-evenly min-[441px]:flex max-[440px]:hidden">
  <div>
    <div className="max-w-[250px] min-h-[34px] font-semibold text-[28px] leading-[100%] text-center text-[black] relative top-[70px] left-[10px]">
      Total Credits Used
    </div>
    <img src={TotalCreditsImg} alt="" />
    <div className="w-[140px] max-w-[140px] min-h-[140px] rounded-[50%] font-bold text-[52px] leading-[60px] text-black shadow-[0_3px_20px_0px] shadow-black flex justify-center items-center relative top-[-350px] left-[300px] bg-[white]">
      10+
    </div>
    <div className="w-full max-w-[441px] min-h-[22px] font-medium text-[18px] leading-[100%] text-[#2a2a2a] relative top-[-120px] left-[20px]">
      “Over 10+ Million Credits Used by Our Community!”
    </div>
  </div>

  <div>
    <div className="max-w-[250px] min-h-[34px] font-semibold text-[28px] leading-[100%] text-center text-[black] relative top-[70px] left-[10px]">
      Today's Usage
    </div>
    <img src={TodaysUsageImg} alt="" />
    <div className="w-[140px] max-w-[140px] min-h-[140px] rounded-[50%] font-bold text-[52px] leading-[60px] text-black shadow-[0_3px_20px_0px] shadow-black flex justify-center items-center relative top-[-350px] left-[300px] bg-[white]">
      85+
    </div>
    <div className="w-full max-w-[441px] min-h-[22px] font-medium text-[18px] leading-[100%] text-[#2a2a2a] relative top-[-120px] left-[20px]">
      “85,000 Credits Used Today — and Counting!”
    </div>
  </div>
</div>


{/* MOBILE */}
<div className="w-full flex flex-col items-center gap-[20px] px-[20px] pt-[20px] pb-[40px] max-[440px]:flex min-[441px]:hidden">
  {/* Cards Row */}
  <div className="flex flex-row justify-center gap-[16px]">
    {/* Total Credits Used Card */}
    <div className="relative w-[163.5px] h-[208px] rounded-[12px] overflow-hidden shadow-md">
      <img src={TotalCreditsImg} alt="" className="w-full object-cover rounded-[12px]" />
      <div className="absolute top-[9px] left-[5px] bg-white p-[4px] rounded-[4px] flex items-center shadow">
        <span className="text-[12px] leading-[100%] font-normal text-black">Total Credits Used</span>
      </div>
      <div className="absolute top-[85px] left-[123.5px] w-[40px] h-[40px] bg-white rounded-full shadow-[0_3px_20px_rgba(0,0,0,0.15)] flex justify-center items-center font-bold text-[14px] text-[#00A57E] border-[2px] border-white">
        10+
      </div>
    </div>

    {/* Today's Usage Card */}
    <div className="relative w-[163.5px] h-[208px] rounded-[12px] overflow-hidden shadow-md">
      <img src={TodaysUsageImg} alt="" className="w-full object-cover rounded-[12px]" />
      <div className="absolute top-[9px] left-[5px] bg-white p-[4px] rounded-[4px] flex items-center shadow">
        <span className="text-[12px] leading-[100%] font-normal text-black">Today's Usage</span>
      </div>
      <div className="absolute top-[85px] left-[123.5px] w-[40px] h-[40px] bg-white rounded-full shadow-[0_3px_20px_rgba(0,0,0,0.15)] flex justify-center items-center font-bold text-[14px] text-[#00A57E] border-[2px] border-white">
        85+
      </div>
    </div>
  </div>

  {/* Descriptions Below Cards */}
  <div className="flex flex-row justify-center gap-[16px] mt-[10px]">
    <p className="w-[171px] h-[30px] text-[12px] leading-[100%] font-normal text-[#2a2a2a] text-center">
      “Over 10+ Million Credits Used by Our Community!”
    </p>
    <p className="w-[171px] h-[30px] text-[12px] leading-[100%] font-normal text-[#2a2a2a] text-center">
      “85,000 Credits Used Today — and Counting!”
    </p>
  </div>
</div>


    </section>
  );
}

