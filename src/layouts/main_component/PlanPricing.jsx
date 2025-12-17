import { SquareCheck } from "lucide-react";
import { useState } from "react";

const PlanPricing = ({ hide = false }) => {
  const [yearly, setYearly] = useState(false);

  const basicPrice = 150;
  const standarPrice = 300;
  const premiumPrice = 450;

  const getPrice = (price) => {
    return yearly ? price * 12 : price;
  };

  const basicPlan = [
    "Dashboard",
    "Remote Support",
    "Tablet App",
    "SSL Security ",
    "Android Tablet",
  ];

  const standardPlan = [
    "Dashboard",
    "Remote Support",
    "Tablet App",
    "SSL Security ",
    "Android Tablet",
    "Onside Training",
  ];

  const premiumPlan = [
    "Dashboard",
    "Remote Support",
    "Tablet App",
    "SSL Security ",
    "Android Tablet",
    "Onside Training",
  ];

  return (
    <div className="w-full px-4 md:px-6 lg:px-12 xl:px-24 font-inter overflow-x-hidden">
      {/* title */}
      <div>
        <p className="text-[#007BFF] text-sm md:text-[16px] font-semibold">
          Pocket Friendly Pricing
        </p>
        <h3 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#282D30] mt-2 leading-[60px]">
          Select your Plan
        </h3>
      </div>

      {/* plan */}
      <div className="w-full max-w-[1169px] mx-auto lg:mt-20 xl:mt-24">
        {/* plan type */}
        <div
          hidden={hide}
          className="w-full flex items-center justify-center gap-4"
        >
          <span className="text-sm md:text-lg font-semibold">Monthly</span>

          <button
            onClick={() => setYearly(!yearly)}
            className={`w-10 md:w-12 h-5 md:h-6 flex items-center rounded-full p-1 transition-all duration-300 ${
              yearly ? "bg-[#007BFF]" : "bg-[#D1D5DB]"
            }`}
          >
            <div
              className={`w-3 h-3 md:w-4 md:h-4 bg-white rounded-full transition-transform duration-300 ${
                yearly ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>

          <span className="text-sm md:text-lg font-semibold">Yearly</span>

          <span className="text-[#2C87F2] text-xs md:text-sm font-semibold">
            {" "}
            20% off + 15 days free
          </span>
        </div>

        {/* plan includes */}
        <div
          hidden={hide}
          className="flex flex-col md:flex-row items-center justify-center  md:justify-between px-3 md:px-6 py-3 mt-8 rounded-[10px] gap-y-5 md:gap-y-0"
        >
          <h4 className="text-xl lg:text-2xl font-semibold">
            All Plans Includes{" "}
          </h4>

          {/* multi-user */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center bg-[#3C99DB1A]">
              <img
                src="/user.png"
                alt="user"
                className="size-6 lg:size-[30px]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] lg:text-lg font-semibold">
                MultiUsers
              </span>
              <span className="text-[#A1A3B2] text-xs lg:text-sm font-medium">
                for single firm
              </span>
            </div>
          </div>

          {/* live support */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center bg-[#3C99DB1A]">
              <img
                src="/chats.png"
                alt="chats"
                className="size-6 lg:size-[30px]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] lg:text-lg font-semibold">
                Live Support
              </span>
              <span className="text-[#A1A3B2] text-xs lg:text-sm font-medium">
                on Weekdays.
              </span>
            </div>
          </div>

          {/* expert assist */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center bg-[#3C99DB1A]">
              <img src="/cog.png" alt="cog" className="size-6 lg:size-[30px]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] lg:text-lg font-semibold">
                Expert Assist
              </span>
              <span className="text-[#A1A3B2] text-xs lg:text-sm font-medium">
                on Weekdays.
              </span>
            </div>
          </div>
        </div>

        {/* plans cards */}
        <div className=" w-full mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {/* plan 1 */}
          <div className="w-[320px] xl:w-[360px] h-[850px] bg-white rounded-[24px] px-6 py-8 flex flex-col">
            {/* plan name & price */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-[#2C87F2]">Basic</h4>

              <div>
                <h5 className="text-2xl lg:text-3xl xl:text-[34px] font-bold mt-2 tracking-wide">
                  ₹ 56,000 {""}
                  <span className="text-xs xl:text-sm text-[#A1A3B2] font-normal">
                    1st Year
                  </span>
                </h5>
                <span className="text-[#FB8C5C] text-sm font-medium">
                  exclusive of GST
                </span>
              </div>

              <div className="w-full h-[1px]  bg-[#D8D8D8]"></div>

              <div>
                <h5 className="text-2xl lg:text-3xl xl:text-[34px] font-bold mt-2 tracking-wide">
                  ₹ 30,000 {""}
                  <span className="text-xs xl:text-sm text-[#A1A3B2] font-normal">
                    2nd Year Onwards
                  </span>
                </h5>
                <span className="text-[#FB8C5C] text-sm font-medium">
                  exclusive of GST
                </span>
              </div>
            </div>

            {/* plan features */}
            <div className="flex flex-col gap-9 mt-8">
              {basicPlan.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <SquareCheck className="size-5 text-[#0CB001]" />
                  <span className="text-lg text-[#333333] font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex mt-auto">
              <button className="w-full text-white font-bold text-[16px] bg-[#2C87F2] py-3 rounded-[14px] cursor-pointer active:scale-95 transition duration-200">
                Let's Start
              </button>
            </div>
          </div>

          {/* plan 2 */}
          <div className="w-[320px] xl:w-[360px] h-[850px] bg-[#FDFDFD] border-[3px] border-[#2C87F2] rounded-[24px] px-6 py-8 flex flex-col">
            {/* plan name & price */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-[#2C87F2]">Standard</h4>

              <div>
                <h5 className="text-2xl lg:text-3xl xl:text-[34px] font-bold mt-2 tracking-wide">
                  ₹ 60,000 {""}
                  <span className="text-xs xl:text-sm text-[#A1A3B2] font-normal">
                    1st Year
                  </span>
                </h5>
                <span className="text-[#FB8C5C] text-sm font-medium">
                  exclusive of GST
                </span>
              </div>

              <div className="w-full h-[1px]  bg-[#D8D8D8]"></div>

              <div>
                <h5 className="text-2xl lg:text-3xl xl:text-[34px] font-bold mt-2 tracking-wide">
                  ₹ 34,000 {""}
                  <span className="text-xs xl:text-sm text-[#A1A3B2] font-normal">
                    2nd Year Onwards
                  </span>
                </h5>
                <span className="text-[#FB8C5C] text-sm font-medium">
                  exclusive of GST
                </span>
              </div>
            </div>

            {/* plan features */}
            <div className="flex flex-col gap-9 mt-8">
              {standardPlan.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <SquareCheck className="size-5 text-[#0CB001]" />
                  <span className="text-lg text-[#333333] font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex mt-auto">
              <button className="w-full text-white font-bold text-[16px] bg-[#2C87F2] py-3 rounded-[14px] cursor-pointer active:scale-95 transition duration-200">
                Let's Start
              </button>
            </div>
          </div>

          {/* plan 3 */}
          <div className="relative w-[320px] xl:w-[360px]  h-[850px] border-[3px] border-[#2C87F2] bg-[#2C87F2] rounded-[24px] px-6 py-8 flex flex-col">
            {/* Designs */}
            <div className="absolute left-0 top-0 -translate-y-1/3 -translate-x-1/3 w-[90px] h-[90px] rounded-full border-[21px] border-[#FDFDFD1A]"></div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2  w-[200px] h-[200px] rounded-full border-[51px] border-[#FDFDFD1A]"></div>
            <div className="absolute left-0 bottom-0 translate-y-1/3 -translate-x-1/3  w-[135px] h-[135px] rounded-full border-[31px] border-[#FDFDFD1A]"></div>

            {/* badge */}
            <div className="absolute top-2 right-2 bg-[#EB4335] text-white text-[16px] rounded-[23px] py-2 px-6 font-bold">
              Popular
            </div>

            {/* plan name & price */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">Premium</h4>

              <div>
                <h5 className="text-2xl lg:text-3xl xl:text-[34px] font-bold mt-2 tracking-wide text-white">
                  ₹ 64,000 {""}
                  <span className="text-xs xl:text-sm font-normal">
                    1st Year
                  </span>
                </h5>
                <span className="text-white text-sm font-medium">
                  exclusive of GST
                </span>
              </div>

              <div className="w-full h-[1px]  bg-[#D8D8D8]"></div>

              <div>
                <h5 className="text-2xl lg:text-3xl xl:text-[34px] font-bold mt-2 tracking-wide text-white">
                  ₹ 34,000 {""}
                  <span className="text-xs xl:text-sm font-normal">
                    2nd Year Onwards
                  </span>
                </h5>
                <span className="text-white text-sm font-medium">
                  exclusive of GST
                </span>
              </div>
            </div>

            {/* plan features */}
            <div className="flex flex-col gap-9 mt-8">
              {premiumPlan.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <SquareCheck className="size-5 text-[#FDFDFD]" />
                  <span className="text-lg text-[#FDFDFD] font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex mt-auto">
              <button className="w-full text-[#2C87F2] font-bold text-[16px] bg-[#FDFDFD] py-3 rounded-[14px] cursor-pointer z-10 active:scale-95 transition duration-200">
                Let's Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanPricing;
