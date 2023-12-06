import { useRef } from "react";
import { Video, CloudinaryContext} from "cloudinary-react";
import styles from "./sds-video.module.css";

const VideoPlayer = () => {
    const videoRef = useRef();
    // Cloudinary configuration
    const cloudinaryCloudName = "ddc6slavq"; // Replace with your Cloudinary cloud name
    const publicId = "infosys-video_whv3a4"; // Replace with the Cloudinary public ID of your video

    return (
        <CloudinaryContext cloudName={cloudinaryCloudName}>
            <div>
                <Video
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