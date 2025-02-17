import Image from "next/image";
import thumbImg from "../../../public/assets/thumbnail-video.gif";
const Thumbnail = () => {
  return (
    <>
      <div className="container mt-60">
        <div className="video">
          <figure>
            <Image alt="img" src={thumbImg} style={{ width: "100%", height: "auto" }}/>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Thumbnail;
