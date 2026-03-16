import { lazy, Suspense, useEffect, useState } from "react";
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

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }) => {

  // Detect desktop view
  const [isDesktopView, setIsDesktopView] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">

      {/* Custom Cursor */}
      <Cursor />

      {/* Navbar with your name and navigation */}
      <Navbar />

      {/* Social media links (GitHub, LinkedIn etc.) */}
      <SocialIcons />

      {/* Desktop view content */}
      {isDesktopView && children}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">

            {/* Landing section (Your intro) */}
            <Landing>
              {!isDesktopView && children}
            </Landing>

            {/* About You */}
            <About />

            {/* Skills / What you do */}
            <WhatIDo />

            {/* Your learning journey / experience */}
            <Career />

            {/* Projects */}
            <Work />

            {/* Tech Stack */}
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

    </div>
  );
};

export default MainContainer;