import React, { useState } from "react";
import Tik from "../../assets/pricing-pg/tik.png";
import Silver from "../../assets/pricing-pg/silver.png";
import Gold from "../../assets/pricing-pg/grpGold.png";
import DarkPg from "../../assets/pricing-pg/darkPg.png";
import Rarrow from "../../assets/pricing-pg/Rarrow.png";
import { Link } from "react-router-dom";

export default function AfterUiPlans() {
  const [showSilverMore, setShowSilverMore] = useState(false);
  const [showGoldMore, setShowGoldMore] = useState(false);
  const [currentPlanIndex, setCurrentPlanIndex] = useState(0);

  const toggleSilverMore = () => setShowSilverMore(!showSilverMore);
  const toggleGoldMore = () => setShowGoldMore(!showGoldMore);

  const BasicPlan = ({ mobile = false }) => (
    <div className={`${mobile ? 'w-[340px]' : 'w-full'} rounded-[12px] p-5 bg-[#FFFFFF1A] border border-white shadow-[0_2px_12px_#007B8229] flex flex-col gap-6`}>
      <div className="flex flex-col gap-4">
        <div className="font-bold text-2xl text-[#00b0ba]">
          Basic <span className="text-white text-lg">(Free)</span>
        </div>
        <p className="text-white text-sm">
          Perfect for personal or casual users who want a simple idea of interior design.
        </p>
        <div className="text-white font-bold text-2xl">
          $0 <span className="text-base font-normal">/per month</span>
        </div>
        <Link to="/Sign-in">
          <div className="w-full py-3 bg-white rounded-lg border border-[#007B82] text-[#007B82] flex justify-center items-center hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA] hover:text-white">
            Get Started
          </div>
        </Link>
      </div>
      <hr className="border-dashed border-[#1A1A1A2E]" />
      <div className="flex flex-col gap-4 mt-4">
        {["10 Room Designs per month", "Limited AI-generated layouts", "Basic furniture suggestions", "Download SD images,no advanced tools", "Email support (Standard)", "No customization options", "No revision support", "Watermark images"].map((item, idx) => (
          <div className="flex gap-2 items-start" key={idx}>
            <img src={Tik} alt="tik" className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <span className="text-white text-sm font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const SilverPlan = ({ mobile = false }) => (
    <div className={`${mobile ? 'w-[340px]' : 'w-full'} rounded-[12px] p-5 bg-gradient-to-b from-[#00B0BA] via-[#FFFFFF1A] to-[#FFFFFF1A] border border-white shadow-[0_2px_12px_#007B8229] flex flex-col gap-6`}>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-white text-2xl font-bold">Silver</h3>
          <img src={Silver} alt="silver" className="w-16 h-16" />
        </div>
        <p className="text-white text-sm">
          Ideal for homeowners or renters looking for more creative control and polished designs.
        </p>
        <div className="text-white text-2xl font-bold">
          $29 or ₹2,399 <span className="text-base font-normal">/per month</span>
        </div>
        <div className="bg-[#FFFFFF1A] p-4 rounded-lg text-center text-white shadow-[0_2px_12px_#007B8229]">
          <p className="text-xs font-medium">Use code (Get 10%OFF)</p>
          <div className="flex items-center justify-center gap-2 mt-1">
            <img src={DarkPg} alt="page" className="w-4 h-4" />
            <span className="font-bold text-lg text-[#00b0ba]">STACKLY10</span>
          </div>
        </div>
        <Link to="/Sign-in">
          <div className="w-full py-3 bg-white rounded-lg border border-[#007B82] text-[#007B82] flex justify-center items-center hover:text-white hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA]">
            Get Started
          </div>
        </Link>
      </div>
      <hr className="border-dashed border-[#1A1A1A2E]" />
      <div className="flex flex-col gap-4 mt-4">
        {["50 Room Designs per month", "Advanced AI layout suggestions", "Access to premium themes & colour palettes", "Furniture & decor recommendations", "High-resolution image download"]
          .concat(showSilverMore ? ["Priority email support", "Basic customization options", "Limited revisions (up to 3)", "No watermark on images"] : [])
          .map((item, idx) => (
            <div className="flex gap-2 items-start" key={idx}>
              <img src={Tik} alt="tik" className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span className="text-white text-sm font-medium">{item}</span>
            </div>
          ))}
        <button className="flex gap-2 items-center cursor-pointer text-white" onClick={toggleSilverMore}>
          <img src={Rarrow} alt="arrow" className={`w-3 h-4 transition-transform ${showSilverMore ? "rotate-90" : ""}`} />
          <span className="text-sm font-medium">
            {showSilverMore ? "Show less" : "See 4 more"}
          </span>
        </button>
      </div>
    </div>
  );

  const GoldPlan = ({ mobile = false }) => (
    <div className={`${mobile ? 'w-[340px]' : 'w-full'} relative rounded-[12px] p-5 bg-[#FFFFFF1A] border border-white shadow-[0_2px_12px_#007B8229] flex flex-col gap-6`}>
      <span className="absolute top-0 right-0 bg-gradient-to-b from-[#FFAA17] to-[#99660E] px-2 py-1 text-white text-xs font-medium rounded-tr-md rounded-bl-lg">
        Most Popular
      </span>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-[#00b0ba] text-2xl font-bold">Gold</h3>
          <img src={Gold} alt="gold" className="w-16 h-16" />
        </div>
        <p className="text-white text-sm">
          Best for professionals, renovators, or anyone seeking top-tier results and personalization.
        </p>
        <div className="text-white text-2xl font-bold">
          $59 or ₹4,799 <span className="text-base font-normal">/per month</span>
        </div>
        <div className="bg-[#FFFFFF1A] p-4 rounded-lg text-center text-white shadow-[0_2px_12px_#007B8229]">
          <p className="text-xs font-medium">Use code (Get 10%OFF)</p>
          <div className="flex items-center justify-center gap-2 mt-1">
            <img src={DarkPg} alt="page" className="w-4 h-4" />
            <span className="font-bold text-lg text-[#00b0ba]">STACKLY20</span>
          </div>
        </div>
        <Link to="/Sign-in">
          <div className="w-full py-3 bg-white rounded-lg border border-[#007B82] text-[#007B82] flex justify-center items-center hover:text-white hover:bg-gradient-to-b from-[#007B82] to-[#00B0BA]">
            Get Started
          </div>
        </Link>
      </div>
      <hr className="border-t border-dashed border-[#1A1A1A2E]" />
      <div className="flex flex-col gap-4 mt-4">
        {["Unlimited Room Designs", "Commercial use upto 3-5 members", "Fully customized AI designs with layout and lighting suggestions", "Unlimited design revisions", "3D walk-through visualizations"]
          .concat(showGoldMore ? ["Dedicated support with 24-hour response time", "Advanced customization tools", "Export designs in multiple formats", "Access to exclusive design templates"] : [])
          .map((item, idx) => (
            <div className="flex gap-2 items-start" key={idx}>
              <img src={Tik} alt="tik" className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span className="text-white text-sm font-medium">{item}</span>
            </div>
          ))}
        <button className="flex gap-2 items-center cursor-pointer text-white" onClick={toggleGoldMore}>
          <img src={Rarrow} alt="arrow" className={`w-3 h-4 transition-transform ${showGoldMore ? "rotate-90" : ""}`} />
          <span className="text-sm font-medium">{showGoldMore ? "Show less" : "See 4 more"}</span>
        </button>
      </div>
    </div>
  );

  return (
  <section className="w-full py-12 px-4 bg-[#021314] max-[440px]:-mt-[118px]">

<div className="hidden max-[440px]:block w-[168px] h-[168px] bg-[#00B0BA66] mx-auto mb-6 rounded-full blur-[124px]"></div>

     <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 max-[440px]:-mt-[185px]">

        <div className="text-center">
          <h2 className="text-white text-3xl md:text-4xl font-medium mb-4 max-[440px]:w-[400px] max-[440px]:h-[24px] max-[440px]:text-[20px] max-[440px]:leading-[100%] max-[440px]:text-center" style={{ fontFamily: 'Inter' }}>
            Find the right plan that suits your needs
          </h2>

          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto max-[440px]:w-[400px] max-[440px]:h-[44px] max-[440px]:text-[16px] max-[440px]:leading-[140%] max-[440px]:text-center" style={{ fontFamily: 'Inter', fontWeight: 400 }}>
            Start free or unlock premium features. Choose what fits your journey best.
          </p>

        </div>

        {/* Mobile Slider */}
      <div className="w-full md:hidden flex flex-col items-center">
  {/* Slider Wrapper with Fixed Width */}
  <div className="overflow-hidden w-[366px]">
    <div
      className="flex transition-transform duration-300 ease-in-out"
      style={{
        transform: `translateX(-${currentPlanIndex * 366}px)`, // shift based on fixed width
      }}
    >
      {[<BasicPlan mobile />, <SilverPlan mobile />, <GoldPlan mobile />].map((Plan, index) => (
        <div key={index} className="w-[366px] flex-shrink-0 px-2">
          {Plan}
        </div>
      ))}
    </div>
  </div>

{/* Slide Buttons */}
<div className="flex justify-center items-center gap-4 mt-6">
  {/* Left Arrow */}
  <button
    onClick={() => setCurrentPlanIndex((prev) => (prev > 0 ? prev - 1 : 0))}
    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
    aria-label="Previous plan"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 18L9 12L15 6"
        stroke="#2A2A2A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>

  {/* Dots */}
  <div className="flex gap-2">
    {[0, 1, 2].map((index) => (
      <button
        key={index}
        onClick={() => setCurrentPlanIndex(index)}
        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
          currentPlanIndex === index ? 'bg-cyan-400' : 'bg-gray-400'
        }`}
        aria-label={`Go to plan ${index + 1}`}
      />
    ))}
  </div>

  {/* Right Arrow */}
  <button
    onClick={() => setCurrentPlanIndex((prev) => (prev < 2 ? prev + 1 : 2))}
    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
    aria-label="Next plan"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 18L15 12L9 6"
        stroke="#2A2A2A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
</div>


</div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          <BasicPlan />
          <SilverPlan />
          <GoldPlan />
        </div>
      </div>
    </section>
  );
}