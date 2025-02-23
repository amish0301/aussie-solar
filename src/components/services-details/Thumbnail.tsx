import Image from "next/image";
import thumbImg from "../../../public/assets/thumbnail-video.gif";
import wifiMonitoring from "../../../public/assets/wifi-monitoring.gif";

interface ThumbnailProps {
  isWifiMonitoring: boolean;
}

const Thumbnail = ({ isWifiMonitoring }: ThumbnailProps) => {
  return (
    <>
      <div className="container mt-60">
        <div className={`${isWifiMonitoring ? "" : "video"}`}>
          <figure>
            <Image
              alt="img"
              src={isWifiMonitoring ? wifiMonitoring : thumbImg}
              style={{ width: "100%", height: "auto" }}
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Thumbnail;
