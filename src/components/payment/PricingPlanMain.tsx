import WhyUse from "../home/WhyUseUs";
import BreadCambDefault from "../shearedComponents/BreadCambDefault";
import Payment from "./Payment";

const PricingPlanMain = () => {
  return (
    <>
      <BreadCambDefault pages="Pages" title="Payment" />
      <Payment />
      <WhyUse propsClass="two" bgImg={null}/>
    </>
  );
};

export default PricingPlanMain;
