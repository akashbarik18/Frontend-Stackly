import React, { useState } from "react";
import close from "../../assets/forgetPg/close.png";
import Arrow from "../../assets/forgetPg/arrow.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logoImg from "/src/assets/Logo.png";


export default function HeroForgetPg() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    // Basic email validation
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await axios.post("http://localhost:8000/forget-password/send-otp", {
        email,
      });
      localStorage.setItem("resetEmail", email);
      navigate("/Otp", { state: { email } }); // Passing email via state
    } catch (err) {
      setError(err.response?.data?.detail || "Error sending OTP");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <section
        className="w-full min-h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover fixed top-0 left-0 
               max-[440px]:w-[440px] max-[440px]:h-[956px] max-[440px]:rounded-[8px]"
        style={{ backgroundImage: 'url("/ForgetPg/fgPg.png")' }}
      >
        {/* Mobile Logo */}
        <div style={{
          position: 'absolute',
          top: '35px',
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
              display: 'block'
            }}
          />
        </div>

        {/* Main Container */}
        <div className="w-[525px] min-h-[444px] px-[32px] py-[28px] rounded-[10px]
                bg-[#00000033] backdrop-blur-[6px]
                border border-white shadow-[0_0_0_2px_rgba(255,255,255,0.6)]
                flex flex-col justify-center items-center
                max-[440px]:w-[400px] max-[440px]:min-h-[439px] max-[440px]:px-[32px] max-[440px]:py-[28px] 
                max-[440px]:gap-[40px]">


          {/* Close Button */}
          <div className="w-full min-h-[80px] text-end flex justify-end">
            <img src={close} alt="close" className="w-[28px] h-[28px]" />
          </div>

          {/* Content Area */}
          <div className="w-full min-h-[320px] flex flex-col justify-center items-center gap-[40px]
                     max-[440px]:w-[336px] max-[440px]:min-h-[315px] max-[440px]:gap-[40px]">

            {/* Title Section */}
            <div className="w-full min-h-[86px] flex flex-col justify-center items-center gap-[12px]
                       max-[440px]:w-full max-[440px]:h-[86px]">
              <div className="text-center text-[#009A98] font-semibold text-[26px] leading-[26px]
                         max-[440px]:text-[26px] max-[440px]:leading-[26px]"
                style={{ fontFamily: "Inter" }}>
                Forgot your password?
              </div>

              <div className="w-full min-h-[48px] font-normal text-[15px] leading-[24px] text-center text-[#B0B0B0]
                         max-[440px]:text-[14px]"
                style={{ fontFamily: 'Inter' }}>
                No worries. Enter your email and we'll send you a one-time
                password (OTP) to reset it.
              </div>
            </div>

            {/* Form Section */}
            <div className="w-full min-h-[194px] flex flex-col justify-center items-center gap-[40px]
                       max-[440px]:w-[336px] max-[440px]:h-[189px]">

              {/* Email Input */}
              <input
                type="email"
                placeholder="ramprakash@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="w-full h-[48px] rounded-[8px] border border-[#E2E2E2]
                      placeholder:text-[#2A2A2A] placeholder:text-[16px] placeholder:leading-[26px] px-[20px]
                      max-[440px]:w-full"
              />

              {/* Error Message */}
              {error && (
                <div className="text-red-500 text-sm w-full text-center">
                  {error}
                </div>
              )}

              {/* Send OTP Button */}
              <button
                onClick={handleSendOTP}
                disabled={isLoading}
                className="w-full h-[46px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-black to-[#007B82]
                      flex justify-center items-center text-white font-bold text-[16px] leading-[35px] 
                      cursor-pointer disabled:opacity-70
                      max-[440px]:h-[41px] max-[440px]:text-[14px]"
              >
                {isLoading ? "Sending..." : "Send OTP"}
              </button>

              {/* Back to Login Link */}
              <div>
                <Link
                  to="/sign-in"
                  className="flex justify-center items-center gap-[4px]"
                >
                  <img src={Arrow} alt="arrow" />
                  <span className="font-semibold text-[15px] text-[#009A98]">
                    Back to Login
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
