import PlanPricing from "../../../layouts/main_component/PlanPricing";
import Blog from "../../../layouts/main_component/Blog";
import ReviewCard from "../../../components/ReviewCard";

const PricingPage = () => {
  return (
    <div className="flex flex-col gap-28">
      <PlanPricing />

      {/* Review */}
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

export default PricingPage;
