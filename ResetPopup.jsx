import React from 'react'
import close from '../../assets/forgetPg/close.png'
import Arrow from '../../assets/forgetPg/arrow.png'
import Pop from '../../assets/forgetPg/pop.png'
import { Link } from 'react-router-dom'
import logoImg from "/src/assets/Logo.png";


export default function ResetPopup() {
  return (
    <div>
      <section
        className="w-full min-h-[800px] flex justify-center items-center bg-no-repeat bg-center bg-cover
              "
        style={{ backgroundImage: 'url("/ForgetPg/fgPg.png")' }}
      >
        <div style={{
          position: 'absolute',
          top: '35px', // Your d esired gap from top
          left: '24px',
          backgroundColor: 'white',
          padding: '2px',
          borderRadius: '3px',
          display: window.innerWidth < 441 ? 'block' : 'none'
        }}>
          <img
            src={logoImg}
            alt="logo"
            style={{
              width: '100px',
              height: '30px',
              objectFit: 'contain'
            }}
          />
        </div>
        <div className="w-[525px] min-h-[444px] rounded-[10px] border-[1px] border-solid border-white px-[32px] py-[28px] shadow-sm shadow-black flex flex-col justify-center items-center gap-[40px] bg-[#00000033] backdrop-blur-sm

  max-[440px]:flex-col
  max-[440px]:w-[400px]
  max-[440px]:h-[328.14px]
  max-[440px]:rounded-[10px]
  max-[440px]:border
  max-[440px]:border-[#FFFFFF]
  max-[440px]:p-[32px]
  max-[440px]:gap-[40px]"
        >

          {/* Centered image */}
          <div className="flex justify-center items-center max-[440px]:mt-[32px]">
            <img
              src={Pop}
              alt=""
              className="w-auto h-auto 
         sm:w-[107px] sm:h-[92.14px]
         max-[440px]:w-[92.14px]
         max-[440px]:h-[92.14px]
         max-[440px]:rounded-[7.93px]"
            />
          </div>

          <div className="w-[461px] min-h-[104px] flex flex-col justify-center items-center gap-[28px]">
            <div className="w-[461px] min-h-[52px] font-semibold text-[26px] leading-[26px] text-center text-[#009A98]
  max-[440px]:w-[336px]
  max-[440px]:min-h-[72px]
  max-[440px]:font-medium
  max-[440px]:text-[26px]
  max-[440px]:leading-[36.4px]  /* 140% of 26px */
  max-[440px]:tracking-[0]
  max-[440px]:text-center
  max-[440px]:text-white
  max-[440px]:flex
  max-[440px]:flex-col
  max-[440px]:items-center
  max-[440px]:gap-[40px]"
            >
              Your password has been reset successfully!
            </div>

            <div className="w-[461px] min-h-[24px] font-[400] text-[15px] leading-[24px] text-center text-[#B0B0B0] max-[440px]:hidden">
              Create a strong new password for your account.
            </div>

          </div>

          <div>
            <Link
              href=""
              className="
  w-[122px] h-[20px] flex justify-center items-center gap-[4px]
  max-[440px]:flex-row
  max-[440px]:w-[107px]
  max-[440px]:h-[20px]
  max-[440px]:gap-[4px]
">
              <img
                src={Arrow}
                alt=""
                className="
      w-auto h-auto
      /* Mobile styles (<440px) */
      max-[440px]:w-[12.98px]
      max-[440px]:h-[12.64px]
      max-[440px]:mt-[3.69px]
      max-[440px]:ml-[3.69px]
      max-[440px]:brightness-0 max-[440px]:invert
    "
              />
              <div className="font-semibold text-[15px] leading-[100%] text-[#009A98]
  max-[440px]:text-white
  max-[440px]:font-semibold
  max-[440px]:text-[15px]
  max-[440px]:leading-[100%]
  max-[440px]:tracking-[0]
  max-[440px]:w-[83px]
  max-[440px]:h-[18px]
">
                <Link
                  to="/Sign-in"
                  className="max-[440px]:underline max-[440px]:decoration-solid max-[440px]:decoration-white max-[440px]:decoration-1 max-[440px]:underline-offset-[2px]"
                >
                  Go to Login
                </Link>
              </div>


            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
