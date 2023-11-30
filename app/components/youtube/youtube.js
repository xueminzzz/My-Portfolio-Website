import YouTube from 'react-youtube';
import styles from "./youtube.module.css";

const YouTubePlayer = ({ videoId }) => {
    // Set up event handlers
    const onReady = (event) => {
        // Access the player instance
        const player = event.target;

        // For example, you can automatically play the video
        // player.playVideo();
    };

    const onError = (error) => {
        console.error('YouTube Player Error:', error);
    };

    return (
        <div className={styles["youtube-video-container"]}>
            <YouTube
                videoId={videoId}
                onReady={onReady}
                onError={onError}
                className={styles["youtube-video"]}
            />
        </div>
    );
};

export default YouTubePlayer;