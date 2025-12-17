import { IoIosCloudUpload } from "react-icons/io";
import ReviewCard from "../../../components/ReviewCard";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi2";
import { FaImage } from "react-icons/fa";
import { MdShield } from "react-icons/md";
import PlanPricing from "../../../layouts/main_component/PlanPricing";
import Blog from "../../../layouts/main_component/Blog";
import SectionCardLeft from "./_components/SectionCardLeft";
import SectionCardRight from "./_components/SectionCardRight";

const HomePage = () => {
  const pms = [
    {
      title: "Secure Architecture",
      desc: "HIPPA-3 Compliance Certified",
      icon: <MdShield className="size-8 text-[#007BFF]" />,
    },
    {
      title: "Manage Appointment Records Digitally",
      desc: "Store Unlimited Patient Data in Secure Cloud Storage",
      icon: <img src="/file.png" className="size-7" />,
    },
    {
      title: "Manage Payments",
      desc: "Store Patients Audio recordings , Video Recordings and Photos",
      icon: <FaImage className="size-8 text-[#007BFF]" />,
    },
    {
      title: "Secure Cloud Storage",
      desc: "SSL encryption Ensure All Data Protection",
      icon: <IoIosCloudUpload className="size-8 text-[#007BFF]" />,
    },
    {
      title: "Quick Support",
      desc: "Get Instant Support Via Google Meer & Whatsapp",
      icon: <BsChatLeftDotsFill className="size-8 text-[#007BFF]" />,
    },
    {
      title: "Real Time Analysis",
      desc: "Hospital Doctors can Write Prescription Direct on Tablet",
      icon: <HiDocumentText className="size-8 text-[#007BFF]" />,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-28">
      {/* ---- title ---- */}
      <div className="font-inter w-full max-w-6xl mx-auto text-center flex flex-col items-center gap-y-6 md:px-6 px-4 ">
        <p className="text-[#007BFF] font-medium text-sm md:text-[16px]">
          Smart Multi-Hospital Management Platform for Doctors
        </p>
        <h3 className="text-3xl md:text-[40px] xl:text-[50px] font-black text-[#282D30] md:leading:[45px] lg:leading-[60px]">
          Fully Integrated Multi-Appointment Management Solution for Doctors
        </h3>
        <p className="text-sm md:text-[16px] text-[#7C7C7C] leading-[32px] w-full lg:w-[95%]  xl:w-[90%]">
          Our unified practice management platform streamlines multi-hospital
          scheduling, automates payment reconciliation, and delivers real-time
          analytics—reducing administrative complexity, maximizing time
          efficiency, and enabling a modern, data-driven approach to healthcare
          practice management for Doctors.
        </p>

        <button className="text-white bg-[#007BFF] text-sm md:text-[16px] font-bold rounded-full py-3 px-14 cursor-pointer">
          Book A Demo
        </button>
      </div>

      {/* ---- home image ---- */}
      <div className="font-inter flex flex-col items-center gap-y-14 px-4 md:px-24 w-full max-w-[1300px]">
        <h3 className="text-2xl md:text-3xl xl:text-[40px] font-semibold text-[#282828]">
          Robust Multi-Appointment Management System For Doctors
        </h3>

        <div className="shadow-[0_4px_34px_0_rgba(120,120,120,0.25)] rounded-[20px] overflow-hidden">
          <img
            src="/home.png"
            alt="home_image"
            className="w-full max-w-[950px] object-contain"
          />
        </div>
      </div>

      {/* ---- review ---- */}
      <div className="flex flex-col px-4 md:px-6 lg:px-12 xl:px-24 w-full gap-y-14 font-inter">
        <div>
          <h3 className="text-2xl md:text-3xl lg:text-[40px] text-[#282D30] font-semibold text-center tracking-tight">
            Trusted By Leading Doctors
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-y-5">
          {[1, 2, 3, 4].map((_, i) => (
            <ReviewCard key={i} bg={"#008060"} />
          ))}
        </div>
      </div>

      {/* ----- section cards ----- */}
      <div className="flex flex-col gap-24 w-full px-4 md:px-6 lg:px-12 xl:px-24">
        <div>
          <p className="text-sm md:text-[16px] font-semibold text-[#007BFF]">
            What can Do With This System?
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#333333]">
            All task Done Digitally
          </h3>
        </div>

        <SectionCardLeft />

        <SectionCardRight
          badge={"Declutter Patient Data"}
          title={"Manage Patient Records"}
          description={
            "Automated payment tracking and reconciliation across all facilities. Instantly generate invoices, monitor pending payments, and maintain complete financial records—eliminating manual bookkeeping and ensuring billing accuracy."
          }
        />

        <SectionCardLeft
          badge={"Centralize Patient Media"}
          title={"Manage Payments"}
          description={
            "Automated payment tracking and reconciliation across all facilities. Instantly generate invoices, monitor pending payments, and maintain complete financial records—eliminating manual bookkeeping and ensuring billing accuracy."
          }
        />

        <SectionCardRight
          badge={"Simplify Laboratory Documentation"}
          title={"Analysis Repots"}
          description={
            "Real-time analytics dashboard tracking patient volume, revenue trends, and facility performance. Generate custom reports, identify patterns, and make data-driven decisions to optimize practice efficiency and profitability."
          }
        />
      </div>

      {/* ---- IMS ---- */}
      <div className="flex flex-col px-4 w-full md:px-6 lg:px-12 xl:px-24 gap-y-5 md:gap-y-10 lg:gap-y-14 font-inter">
        <div>
          <p className="text-sm md:text-[16px] font-semibold text-[#007BFF]">
            Why Pruthatek’s Institute Management System?
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#333333]">
            A lot more than you can imagine from a IPD software
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-14">
          {pms.map((pms, index) => (
            <div
              key={index}
              className="shadow-[0_6px_18px_-4px_rgba(0,0,0,0.15)] border-8 border-white rounded-xl w-full max-w-[380px] h-[256px] space-y-4 bg-white p-4"
            >
              <div className="w-20 h-20 rounded-[10px] bg-[#EBF2F6] flex items-center justify-center">
                {pms.icon}
              </div>

              <h3 className="text-lg text-[#333333] font-bold leading-[25px]">
                {pms.title}
              </h3>

              <p className="text-[#A1A3B2] text-[16px] font-medium leading-[25px] w-[80%]">
                {pms.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <PlanPricing hide={true} />

      {/* Review 2  */}
      <div className="flex flex-col px-4 md:px-6 lg:px-12 xl:px-24 w-full gap-y-14 font-inter">
        <div>
          <p className="text-sm md:text-[16px] text-[#007BFF] font-semibold">
            Happy Customers
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-[40px] text-[#282D30] font-semibold">
            Trusted By 30,000+ CA and Tax Practitioners Accross India
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-y-5">
          <ReviewCard bg={"#007BFF"} />
          <ReviewCard bg={"#FB8C5C"} />
          <ReviewCard bg={"#007BFF"} />
          <ReviewCard bg={"#FB8C5C"} />
        </div>
      </div>

      <Blog />
    </div>
  );
};

export default HomePage;
