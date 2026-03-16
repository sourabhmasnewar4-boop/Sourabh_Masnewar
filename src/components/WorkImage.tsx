import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const WorkImage = ({ image, alt, video, link }) => {
  const [isVideo, setIsVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const handleMouseEnter = async () => {
    if (!video) return;

    try {
      setIsVideo(true);

      // Load video from public folder
      const response = await fetch(`/videos/${video}`);
      const blob = await response.blob();

      const blobUrl = URL.createObjectURL(blob);
      setVideoSrc(blobUrl);
    } catch (error) {
      console.error("Video load error:", error);
    }
  };

  const handleMouseLeave = () => {
    setIsVideo(false);
    setVideoSrc("");
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-cursor="disable"
      >
        {/* External link icon */}
        {link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}

        {/* Project Image */}
        <img src={image} alt={alt || "project image"} />

        {/* Hover Video Preview */}
        {isVideo && videoSrc && (
          <video
            src={videoSrc}
            autoPlay
            muted
            playsInline
            loop
          />
        )}
      </a>
    </div>
  );
};

export default WorkImage;