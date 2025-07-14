// import React from "react";
// import bgImage from "../../assets/api/apibg.png";

// const integrationData = [
//   {
//     title: "Interior Design Platforms",
//     description:
//       "Let your users transform their rooms instantly within your app using AI rendering.",
//   },
//   {
//     title: "Architectural SaaS Tools",
//     description:
//       "Integrate real-time visualization of floor plans, facades, and elevations.",
//   },
//   {
//     title: "Home Renovation Platforms",
//     description:
//       "Enable users to preview renovation ideas directly on your website.",
//   },
//   {
//     title: "E-Commerce & Furniture Brands",
//     description:
//       "Display furniture in realistic settings using AI-generated room mockups.",
//   },
//   {
//     title: "Real Estate Marketplaces",
//     description:
//       "Offer virtual staging with one click, enhancing property listings.",
//   },
//   {
//     title: "Home Builder Apps",
//     description:
//       "Let buyers preview customized homes with different themes and materials.",
//   },
// ];

// const StacklyAPIIntegration = () => {
//   return (
//     <div
//       className="w-full h-[959px] flex flex-col items-center justify-center gap-12 px-4 bg-black"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Heading */}
//       <div className="w-[791px] h-[58px] text-[48px] font-bold leading-[100%] text-black text-center">
//         Who Can <span className="text-[#00D9D0]">Integrate</span> StacklyAI API?
//       </div>

//       {/* Paragraph */}
//       <p className="w-[672px] h-[56px] text-[18px] font-[400] leading-[28px] text-center text-white">
//         Our API is designed for platforms and businesses that want to bring visual intelligence into their own systems.
//       </p>

//       {/* Boxes */}
//       <div className="w-[1440px] h-[484px] grid grid-cols-3 gap-10">
//         {integrationData.map((item, index) => (
//           <div
//             key={index}
//             className="w-[413px] h-[240px] p-[40px] bg-white rounded-[40px] drop-shadow-[4px_4px_12px_#007B8229] shadow-[inset_2px_2px_16px_#FFFFFF14] flex flex-col gap-[20px]"
//           >
//             <h3 className="w-[333px] h-[68px] text-[#2a2a2a] text-[28px] font-bold leading-[100%]">
//               {item.title}
//             </h3>
//             <p className="w-[333px] h-[72px] text-[#707070] text-[17px] font-[400] leading-[24px]">
//               {item.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// export default StacklyAPIIntegration;
// import React from "react";
// import bgImage from "../../assets/api/apibg.png";

// const integrationData = [
//   {
//     title: "Interior Design Platforms",
//     description:
//       "Let your users transform their rooms instantly within your app using AI rendering.",
//   },
//   {
//     title: "Architectural SaaS Tools",
//     description:
//       "Integrate real-time visualization of floor plans, facades, and elevations.",
//   },
//   {
//     title: "Home Renovation Platforms",
//     description:
//       "Enable users to preview renovation ideas directly on your website.",
//   },
//   {
//     title: "E-Commerce & Furniture Brands",
//     description:
//       "Display furniture in realistic settings using AI-generated room mockups.",
//   },
//   {
//     title: "Real Estate Marketplaces",
//     description:
//       "Offer virtual staging with one click, enhancing property listings.",
//   },
//   {
//     title: "Home Builder Apps",
//     description:
//       "Let buyers preview customized homes with different themes and materials.",
//   },
// ];

// const StacklyAPIIntegration = () => {
//   return (
//     <div
//       className="w-full py-16 px-4 md:px-8 lg:px-16 bg-black flex flex-col items-center gap-10"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Heading */}
//       <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-black">
//         Who Can <span className="text-[#00D9D0]">Integrate</span> StacklyAI API?
//       </h2>

//       {/* Paragraph */}
//       <p className="text-base sm:text-lg text-white text-center max-w-[700px] leading-relaxed">
//         Our API is designed for platforms and businesses that want to bring visual intelligence into their own systems.
//       </p>

//       {/* Boxes */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
//         {integrationData.map((item, index) => (
//           <div
//             key={index}
//             className="p-6 sm:p-8 bg-white rounded-[30px] shadow-md shadow-[#007B8229] flex flex-col gap-4"
//           >
//             <h3 className="text-xl sm:text-2xl font-bold text-[#2a2a2a]">
//               {item.title}
//             </h3>
//             <p className="text-sm sm:text-base text-[#707070] leading-relaxed">
//               {item.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StacklyAPIIntegration;

import React from "react";
import bgImage from "../../assets/api/apibg.png";

const integrationData = [
  {
    title: "Interior Design Platforms",
    description:
      "Let your users transform their rooms instantly within your app using AI rendering.",
  },
  {
    title: "Architectural SaaS Tools",
    description:
      "Integrate real-time visualization of floor plans, facades, and elevations.",
  },
  {
    title: "Home Renovation Platforms",
    description:
      "Enable users to preview renovation ideas directly on your website.",
  },
  {
    title: "E-Commerce & Furniture Brands",
    description:
      "Display furniture in realistic settings using AI-generated room mockups.",
  },
  {
    title: "Real Estate Marketplaces",
    description:
      "Offer virtual staging with one click, enhancing property listings.",
  },
  {
    title: "Home Builder Apps",
    description:
      "Let buyers preview customized homes with different themes and materials.",
  },
];

const StacklyAPIIntegration = () => {
  return (

    <div className="relative w-full">
  {/* Light glow (only on <441px) */}
  {window.innerWidth <= 440 && (
    <div
      className="w-[120px] h-[120px] rounded-full absolute top-0 left-1/2 translate-x-[-50%] blur-[80px] z-0"
      style={{ backgroundColor: "#00B0BAB2" }}
    />
  )}
 <div
  className="w-full max-w-[1440px] py-16 px-4 md:px-8 lg:px-16 mx-auto flex flex-col items-center justify-center gap-[52px]
             max-[440px]:w-[440px] max-[440px]:pt-[40px] max-[440px]:pr-[20px] max-[440px]:pb-[40px] max-[440px]:pl-[20px] max-[440px]:gap-[32px] max-[440px]:bg-[#021618]"
  style={{
    ...(window.innerWidth > 440 && {
      // backgroundImage: `url(${bgImage})`,
      // backgroundSize: "cover",
      // backgroundPosition: "center",
      // backgroundRepeat: "no-repeat",
      opacity: 1,
      height: "881px",
      
    }),
  }}
>

      {/* Heading */}
<div
  className="w-[1280px] h-[89px] flex flex-col items-center justify-start gap-[16px] opacity-100
             max-[440px]:w-[400px] max-[440px]:h-auto max-[440px]:gap-[12px]"
>

  <h2
    className="w-[1280px] h-[39px] text-[32px] font-normal leading-[100%] tracking-[0] text-center text-black
               max-[440px]:w-[400px] max-[440px]:h-[24px] max-[440px]:text-[20px] max-[440px]:leading-[100%] max-[440px]:font-bold max-[440px]:text-center"
    style={{ fontFamily: "Inter" }}
  >
    <span className="max-[440px]:text-white">Who Can </span>
    <span className="text-[#00D9D0]">Integrate</span>
    <span className="max-[440px]:text-white"> StacklyAI API?</span>
  </h2>

<p
  className="w-[1280px] h-[34px] text-[24px] font-normal leading-[140%] tracking-[0] text-black text-center opacity-100
             max-[440px]:w-[400px]
             max-[440px]:h-auto
             max-[440px]:text-[16px]
             max-[440px]:leading-[28px]
             max-[440px]:font-[400]
             max-[440px]:tracking-[0]
             max-[440px]:text-center
             max-[440px]:text-white"
  style={{ fontFamily: "Inter" }}
>
  Our API is designed for platforms and businesses that want to bring visual intelligence into their own systems.
</p>

</div>




      {/* Boxes */}
  <div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[1279px] gap-[20px] max-w-full rounded-[40px]
             max-[440px]:grid-cols-2 max-[440px]:w-[400px] max-[440px]:gap-[21px] 
             max-[440px]:pt-[4px] max-[440px]:pb-[4px]"
  style={{
    height: "620px",
    opacity: 1,
    transform: "rotate(0deg)", // angle: 0deg
  }}
>

        {integrationData.map((item, index) => (
<div
  className="w-[390px] h-[300px] p-[50px_40px] bg-white border-[2px] flex flex-col gap-[20px]
             shadow-[4px_4px_12px_0px_#007B8229] max-[440px]:w-[194px] max-[440px]:h-[153px] 
             max-[440px]:rounded-[22.28px] max-[440px]:pt-[28px] max-[440px]:pr-[12px] 
             max-[440px]:pb-[28px] max-[440px]:pl-[12px] max-[440px]:gap-[12px] 
             max-[440px]:opacity-100"
  style={{
    borderImageSource: 'linear-gradient(180deg, #FFFFFF 0%, #00B0BA 100%)',
    borderImageSlice: 1,
    borderImageRepeat: 'stretch',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderRadius: '70px', // 👈 Ensures border is also rounded
    boxShadow: `
      4px 4px 12px 0px #007B8229,
      inset 2px 2px 16px 0px #FFFFFF14
    `,
    backdropFilter: 'blur(84px)',
  }}
>



           <h3
  className="text-xl sm:text-2xl font-bold text-[#2a2a2a]
             w-[170px] h-[34px] text-[14px] leading-[100%] tracking-[0] font-[700]
             sm:w-[310px] sm:h-[68px] sm:text-[28px] sm:font-medium"
  style={{ 
    fontFamily: "Inter",
    fontStyle: "medium",
    opacity: 1,
    letterSpacing: "0%"
  }}
>
  {item.title}
</h3>

           <p
  className="text-sm sm:text-base text-[#707070] leading-relaxed
             w-[170px] h-[51px] text-[12px] leading-[140%] tracking-[0] font-[400]
             sm:w-[310px] sm:h-[75px] sm:text-[18px] sm:text-[#007B82]"
  style={{ 
    fontFamily: "Inter",
    fontStyle: "normal",
    opacity: 1,
    letterSpacing: "0%"
  }}
>
  {item.description}
</p>

          </div>
        ))}
      </div>
    </div>
     </div>
  );
};

export default StacklyAPIIntegration;
