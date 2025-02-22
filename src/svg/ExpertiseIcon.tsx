import Image from "next/image";
import indus from "../../public/assets/img/abt-expertise.png";

const ExpertiseIcon = () => {
  return (
    <Image
      src={indus}
      alt="expertise"
      style={{ width: "70px", height: "70px" }}
    />
  );
};

export default ExpertiseIcon;
