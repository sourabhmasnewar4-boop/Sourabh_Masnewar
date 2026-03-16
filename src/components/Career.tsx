import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">

          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Current Learning */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Development</h4>
                <h5>Self Learning & Projects</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Building full stack web applications using React.js, Node.js,
              Express.js and MongoDB. Developing responsive user interfaces,
              REST APIs, and authentication systems while improving problem
              solving and development skills.
            </p>
          </div>

          {/* Major Project */}
          

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Engineering</h4>
                <h5>computer science and design</h5>
              </div>
              <h3>2026 - Present</h3>
            </div>
            <p>
              Pursuing engineering with focus on software development,
              cybersecurity, and modern web technologies. Actively building
              projects and learning industry tools like Git, APIs, databases,
              and cloud deployment.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;