import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import close from '../../assets/forgetPg/close.png'
import Arrow from '../../assets/forgetPg/arrow.png'
import axios from 'axios';
import logoImg from "/src/assets/Logo.png";


export default function Otp() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(45);
  const [error, setError] = useState('');
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Get email from location state or localStorage
  const email = location.state?.email || localStorage.getItem('resetEmail');
  const mode = location.state?.mode || "forgot-password"; // default to forgot

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join('');

    if (enteredOtp.length !== 6) {
      setError('Please enter a 6-digit OTP');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8000/forget-password/verify-otp',
        {
          otp: enteredOtp,
          email: email
        }
      );
      navigate('/ResetPassword', { state: { email } });
    } catch (err) {
      setError(err.response?.data?.detail || 'Invalid OTP');
    }
  };

  const handleResendOTP = async () => {
    if (timer > 0 || !email) return;

    setIsResending(true);
    setError('');

    try {
      const response = await axios.post(
        'http://localhost:8000/forget-password/resend-otp',
        { email },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      setTimer(45);
      setOtp(['', '', '', '', '', '']);
      alert('New OTP has been sent to your email');
    } catch (err) {
      const errorMsg = err.response?.data?.detail || 'Failed to resend OTP';
      setError(errorMsg);

      // If rate limited, set timer to remaining time
      if (err.response?.status === 429) {
        setTimer(60); // Reset to 1 minute
      }
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div>
      <section
        className="w-full min-h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: 'url("/ForgetPg/fgPg.png")',
          height: '100dvh' // Uses dynamic viewport height for mobile
        }}
      >

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
              display: 'block' // Add this to ensure img renders
            }}
          />
        </div>
        <div className="w-[525px] min-h-[444px] rounded-[10px] border-[1px] border-solid border-white px-[32px] py-[28px] shadow-sm shadow-black flex flex-col justify-center items-center gap-[40px] bg-[#00000033] backdrop-blur-sm
            max-[440px]:flex-col max-[440px]:w-full max-[440px]:max-w-[400px] 
            max-[440px]:min-h-[506px] max-[440px]:rounded-[10px] 
            max-[440px]:border-[1px] max-[440px]:border-solid max-[440px]:border-white
            max-[440px]:pt-[28px] max-[440px]:pr-[32px] max-[440px]:pb-[28px] max-[440px]:pl-[32px]
            max-[440px]:gap-[40px]">
          <div className="w-[461px] min-h-[320px] flex flex-col justify-center items-center gap-[40px]
            max-[440px]:flex-col max-[440px]:w-full max-[440px]:max-w-[336px]
            max-[440px]:min-h-[382px] max-[440px]:gap-[40px]">
            <div
              className="w-full min-h-[86px] flex flex-col justify-center items-center gap-[12px]
  max-[440px]:flex-col max-[440px]:w-[336px] max-[440px]:h-[86px] max-[440px]:gap-[12px]"
            >

              <div
                className="w-[289px] min-h-[26px] font-semibold text-[26px] leading-[26px] text-center text-[#009A98]
  max-[440px]:w-[127px] max-[440px]:h-[26px] max-[440px]:text-[26px] max-[440px]:leading-[26px] max-[440px]:font-[600] max-[440px]:text-center"
                style={{ fontFamily: 'Inter' }}
              >
                Enter OTP
              </div>

              <div
                className="w-[461px] min-h-[48px] font-[400] text-[15px] leading-[24px] text-center text-[#B0B0B0]
  max-[440px]:w-[336px] max-[440px]:h-[48px] max-[440px]:text-[14px] max-[440px]:leading-[24px] max-[440px]:font-[400] max-[440px]:text-center"
                style={{ fontFamily: 'Inter' }}
              >
                We've sent a 6-digit OTP to {email}. Please enter it below to continue.
              </div>

            </div>

            <div
              className="w-[461px] min-h-[260px] flex flex-col gap-[40px]
  max-[440px]:flex-col max-[440px]:w-[336px] max-[440px]:h-[256px] max-[440px]:gap-[40px]"
            >

              <div
                className="w-[461px] min-h-[200px] flex flex-col gap-[40px]
  max-[440px]:flex-col max-[440px]:w-[336px] max-[440px]:h-[256px] max-[440px]:gap-[40px]"
              >

                <div
                  className="w-[461px] min-h-[50px] flex justify-between
  max-[440px]:flex-row max-[440px]:w-[336px] max-[440px]:h-[50px] max-[440px]:justify-between"
                >

                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Backspace' && !digit && index > 0) {
                          document.getElementById(`otp-${index - 1}`).focus();
                        }
                      }}
                      className="w-[50px] h-[50px] border-b-[1px] border-bottom border-solid border-[#007B82] text-white text-center bg-transparent focus:outline-none"
                    />
                  ))}
                </div>

                {error && (
                  <div className="text-red-500 text-center text-sm">
                    {error}
                  </div>
                )}

                <div
                  onClick={handleVerify}
                  className="w-[461px] min-h-[46px] rounded-[8px] bg-gradient-to-l from-[#00B0BA] via-[black] to-[#007B82]
  flex justify-center items-center text-white font-bold text-[16px] leading-[35px] text-center cursor-pointer hover:opacity-90
  max-[440px]:w-[336px] max-[440px]:h-[42px] max-[440px]:rounded-[8px]"
                >
                  Verify OTP
                </div>


                <div
                  className="w-[461px] min-h-[24px] font-[400] text-[13px] leading-[24px] text-center text-white
  max-[440px]:w-[336px] max-[440px]:h-[24px] max-[440px]:text-[13px] max-[440px]:leading-[24px] max-[440px]:font-[400] max-[440px]:text-center"
                  style={{ fontFamily: 'Inter' }}
                >
                  Didn't receive the code?
                  <span
                    className={`${timer > 0 ? 'text-gray-400' : 'text-[#007B82] cursor-pointer hover:underline'}`}
                    onClick={handleResendOTP}
                  >
                    {isResending ? ' Resending...' :
                      timer > 0 ? ` Resend in 00:${timer.toString().padStart(2, '0')}` :
                        ' Resend OTP'}
                  </span>
                </div>


                <div
                  className="w-[461px] text-center flex justify-center mx-auto
  max-[440px]:flex-row max-[440px]:w-[192px] max-[440px]:h-[20px] max-[440px]:gap-[4px]"
                >

                  <Link
                    to="/Sign-in"
                    className="w-full max-[440px]:w-[192px] h-[20px] flex justify-center items-center gap-[4px] hover:opacity-80"
                  >
                    <img src={Arrow} alt="Back arrow" />
                    <span
                      className="font-semibold text-[15px] leading-[100%] text-[#009A98] text-center
        max-[440px]:font-[600] max-[440px]:text-[14px] max-[440px]:leading-[100%] max-[440px]:w-[168px] max-[440px]:h-[17px]"
                      style={{ fontFamily: 'Inter' }}
                    >
                      Back to forget Password
                    </span>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
