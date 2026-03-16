import { lazy, Suspense, useEffect, useState, ReactNode } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

/* Lazy load TechStack */
const TechStack = lazy(() => import("./TechStack"));

/* ---------- Props Type ---------- */
type MainContainerProps = {
  children?: ReactNode;
};

const MainContainer = ({ children }: MainContainerProps) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(true);

  useEffect(() => {
    // Initial check
    const handleResize = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-main">
      {/* Custom Cursor */}
      <Cursor />

      {/* Navbar */}
      <Navbar />

      {/* Social Media Links */}
      <SocialIcons />

      {/* Desktop view children */}
      {isDesktopView && children}

      {/* Smooth scrolling wrapper */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Landing section */}
          <Landing>{!isDesktopView && children}</Landing>

          {/* About You */}
          <About />

          {/* Skills / What you do */}
          <WhatIDo />

          {/* Career / Learning journey */}
          <Career />

          {/* Projects */}
          <Work />

          {/* Tech Stack (lazy loaded) */}
          {isDesktopView && (
            <Suspense fallback={<div>Loading Tech Stack...</div>}>
              <TechStack />
            </Suspense>
          )}

          {/* Contact Section */}
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;