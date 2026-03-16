import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

/* ---------- Props Type ---------- */
type WorkImageProps = {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
};

const WorkImage = ({ image, alt, video, link }: WorkImageProps) => {
  const [isVideo, setIsVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string>("");

  /* ---------- Mouse Enter ---------- */
  const handleMouseEnter = async () => {
    if (!video) return;

    try {
      setIsVideo(true);

      // Load video from public folder
      const response = await fetch(`/videos/${video}`);
      if (!response.ok) throw new Error("Video not found");

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      setVideoSrc(blobUrl);
    } catch (error) {
      console.error("Video load error:", error);
    }
  };

  /* ---------- Mouse Leave ---------- */
  const handleMouseLeave = () => {
    setIsVideo(false);

    // Revoke old blob URL to free memory
    if (videoSrc) URL.revokeObjectURL(videoSrc);
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
            className="work-hover-video"
          />
        )}
      </a>
    </div>
  );
};

export default WorkImage;