import { useRef } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";
import styles from "./youtube.module.css";

const VideoPlayer = () => {
    const videoRef = useRef();

    // Cloudinary configuration
    const cloudinaryCloudName = "ddc6slavq"; // Replace with your Cloudinary cloud name
    const publicId = "SDS_Team_9_CREAITIVESTUDIOS_easyCPF_Final_Product_Video_porvu8"; // Replace with the Cloudinary public ID of your video

    return (
        <CloudinaryContext cloudName={cloudinaryCloudName}>
            <div>
                <Video
                    startOffset={116}
                    publicId={publicId}
                    width="100%"
                    controls
                    innerRef={videoRef}
                    className={styles["video"]}
                >
                </Video>
            </div>
        </CloudinaryContext>
    );
};

export default VideoPlayer;