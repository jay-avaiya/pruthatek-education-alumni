import React from "react";

const SectionCardLeft = ({ image, title, description, badge }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:h-[60vh] items-center gap-12 lg:gap-24 justify-between w-full">
      {/* image */}
      <div className="w-full max-w-[400px] xl:max-w-[500px] border-[10px] border-[#EFEFEF] rounded-[21px] shadow-[0_20px_60px_rgba(0,0,0,0.08),0_10px_80px_rgba(255,180,120,0.35)]">
        <img
          src={image || "/home.png"}
          alt=""
          className="w-full h-full rounded-[21px] object-contain"
        />
      </div>

      {/* text */}
      <div className="font-inter flex flex-col space-y-6 md:w-[80%] lg:w-[50%]">
        <div>
          <p className="text-[#007BFF] text-sm md:text-[16px] font-semibold">
            {badge || "Simplify Prescription Management"}
          </p>
          <h3 className="text-[#333333] text-2xl md:text-3xl xl:text-[40px] font-semibold">
            {title || "Schedule Appointments"}
          </h3>
        </div>
        <p className="text-[#333333] text-sm xl:text-[16px] leading-[32px] xl:w-[93%]">
          {description ||
            `Unified calendar system for managing appointments across multiple
          hospitals. Real-time synchronization prevents double-bookings,
          automated reminders reduce no-shows, and smart scheduling optimizes
          your daily workflow across all practice locations.`}
        </p>

        {/* button */}
        <button className="bg-[#007BFF] text-white px-6 lg:px-12 py-3 rounded-xl w-fit cursor-pointer outline-none active:scale-95 transition duration-100 text-sm text-[16px]">
          Let's Start Now
        </button>
      </div>
    </div>
  );
};

export default SectionCardLeft;
