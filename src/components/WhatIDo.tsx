import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef([]);

  const setRef = (el, index) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    const clickHandlers = [];

    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");

          const handler = () => handleClick(container);
          container.addEventListener("click", handler);
          clickHandlers.push({ container, handler });
        }
      });
    }

    return () => {
      clickHandlers.forEach(({ container, handler }) => {
        container.removeEventListener("click", handler);
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">

          {/* FRONTEND */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-content-in">
              <h3>FRONTEND DEVELOPMENT</h3>
              <h4>Creating Modern Web Interfaces</h4>

              <p>
                I build responsive and interactive user interfaces using modern
                JavaScript frameworks. My focus is on performance, clean design,
                and smooth user experience.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">React.js</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">HTML5</div>
                <div className="what-tags">CSS3</div>
                <div className="what-tags">GSAP</div>
                <div className="what-tags">Three.js</div>
                <div className="what-tags">Responsive Design</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* BACKEND */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-content-in">
              <h3>BACKEND DEVELOPMENT</h3>
              <h4>Building APIs & Databases</h4>

              <p>
                I develop backend systems and REST APIs for full-stack
                applications. I work with databases and authentication systems
                to build scalable and secure applications.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Express.js</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">REST API</div>
                <div className="what-tags">Git & GitHub</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* AI / CYBERSECURITY */}
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 2)}>
            <div className="what-content-in">
              <h3>AI & CYBERSECURITY</h3>
              <h4>Research & Experimentation</h4>

              <p>
                I explore artificial intelligence and cybersecurity while
                building experimental projects such as EEG-based AI systems
                that analyze abnormal brain signals.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">Java</div>
                <div className="what-tags">Generative AI</div>
                <div className="what-tags">AI Research</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;


/* CLICK HANDLER */
function handleClick(container) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}