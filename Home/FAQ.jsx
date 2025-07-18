
import React, { useState } from "react";

export default function FAQ({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
   <section className="w-full py-8 md:py-16 px-4 sm:px-6 bg-white flex flex-col items-center mt-10 
  max-[440px]:min-h-[535px]">

     <div className="text-center mb-6 md:mb-10 w-full 
  max-[440px]:w-[400px] max-[440px]:min-h-[99px] max-[440px]:flex max-[440px]:flex-col max-[440px]:gap-[20px]">

     <h2 className="flex justify-center text-3xl md:text-[48px] font-black text-gray-800 leading-[100%] 
  max-[440px]:w-[400px] max-[440px]:h-[28px] max-[440px]:gap-[14px]">

  <span className="inline-flex items-center justify-center gap-2 md:text-[30px]">
    <span className="text-[white] w-8 h-8 md:w-[50px] md:h-[50px] bg-[#007B82] rounded-full flex justify-center items-center text-xl md:text-4xl 
      max-[440px]:w-[24px] max-[440px]:h-[24px]">
      ?
    </span>

    <span className="max-[440px]:w-[274px] max-[440px]:h-[28px] max-[440px]:font-['Inter'] max-[440px]:font-semibold 
      max-[440px]:text-[20px] max-[440px]:leading-[140%] max-[440px]:tracking-[0] max-[440px]:text-center">
      Frequently Asked Questions
    </span>
  </span>

</h2>

        <p className="mt-4 md:mt-10 text-[#B0B0B0] max-w-[941px] min-h-[48px] mx-auto text-md text-base md:text-[20px] font-[400] leading-[120%] md:leading-[100%]
  max-[440px]:w-[400px] max-[440px]:h-[51px] max-[440px]:font-['Inter'] max-[440px]:text-[12px] max-[440px]:leading-[140%] max-[440px]:tracking-[0] max-[440px]:text-center">
  Have questions? We've got answers! Explore our FAQs to learn more
  about how Stackly AI works, its features, and how it can help you
  streamline your tasks effortlessly.
</p>

      </div>

     <div className="w-full max-w-[846px] h-auto md:h-[488px] bg-[#007B820F] rounded-[16px] shadow-md p-4 sm:p-6 md:p-12 space-y-4 flex flex-col justify-center
  max-[440px]:w-[400px] max-[440px]:min-h-[324px] max-[440px]:rounded-[16px] max-[440px]:p-[20px] max-[440px]:space-y-[20px]">

        {faqs.map((faq, index) => (
         <div
  key={index}
  className={`bg-white rounded-lg overflow-hidden shadow-sm ${
    activeIndex === index ? "bg-[#007B82] bg-opacity-10" : ""
  } max-[440px]:flex max-[440px]:flex-row max-[440px]:w-[360px] max-[440px]:h-[56px] max-[440px]:rounded-[8px]`}
>

           <button
  className={`w-full flex justify-between items-center p-3 sm:p-4 md:p-5 text-base sm:text-lg md:text-[22px] font-medium text-left focus:outline-none ${
    activeIndex === index
      ? "bg-[#007B82] text-white"
      : "text-[#2A2A2A]"
  } max-[440px]:w-[360px] max-[440px]:h-[56px] max-[440px]:p-[30px]`}
  onClick={() => toggleFAQ(index)}
>

             <span className="text-left 
  max-[440px]:w-[132px] max-[440px]:h-[17px] max-[440px]:font-['Inter'] 
  max-[440px]:font-medium max-[440px]:text-[14px] 
  max-[440px]:leading-[100%] max-[440px]:tracking-[0]">
  {faq.question}
</span>

             <svg
  className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-200 ${
    activeIndex === index
      ? "rotate-180 text-white"
      : "text-current"
  } max-[440px]:w-[13.63px] max-[440px]:h-[24px] max-[440px]:-rotate-90`}
  viewBox="0 0 20 20"
  fill="currentColor"
>

                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="px-3 pt-3 sm:px-4 pb-4 sm:pb-6 md:pb-20 text-[#2a2a2a] bg-[white] text-sm sm:text-base md:text-[18px]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
