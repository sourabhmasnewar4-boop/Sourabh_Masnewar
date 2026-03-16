import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    // ScrollSmoother create
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    // Navbar links scroll
    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const elemTarget = e.currentTarget as HTMLAnchorElement;
          const section = elemTarget.getAttribute("data-href");
          if (section) smoother.scrollTo(section, true, "top top");
        }
      });
    });

    // Refresh ScrollSmoother on resize
    const resizeHandler = () => ScrollSmoother.refresh(true);
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      links.forEach((elem) => {
        const element = elem as HTMLAnchorElement;
        element.replaceWith(element.cloneNode(true));
      });
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          SM
        </a>
        <a
          href="mailto:sourabhmasnewar4@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          sourabhmasnewar4@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;