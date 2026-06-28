import React from "react";

function Team() {
  return (
    <div className="container">
      {/* Heading */}
      <div className="row border-top mt-5">
        <div className="col-12">
          <h1 className="text-center my-5">People</h1>
        </div>
      </div>

      {/* Team Section */}
      <div
        className="row align-items-center py-4 py-md-5 text-muted"
        style={{ lineHeight: "1.8" }}
      >
        {/* Image & Designation */}
        <div className="col-12 col-lg-5 text-center mb-5 mb-lg-0">
          <img
            src="media/imgages/2.jpg.jpeg"
            alt="Dattatray"
            className="img-fluid rounded-circle border"
            style={{
              width: "250px",
              height: "250px",
              objectFit: "cover",
            }}
          />

          <h4 className="mt-4 fw-bold">Dattatray Savalkar</h4>
          <h6 className="text-secondary">Developer</h6>
        </div>

        {/* Description */}
        <div className="col-12 col-lg-7 px-3 px-md-5">
          <p className="lh-lg">
            I started my journey as a passionate Full Stack Developer
            with the vision of building modern and user-friendly web
            applications using the MERN stack.
          </p>

          <p className="lh-lg">
            My goal is to create impactful digital products that help
            businesses and users solve real-world problems through
            technology and innovation.
          </p>

          <p className="lh-lg">
            I continuously improve my skills in React.js, Node.js,
            Express.js, MongoDB, AWS, Docker, and modern web
            technologies to become a successful software engineer.
          </p>

          <p className="mt-4">
            Contact on{" "}
            <a href="#" className="text-decoration-none">
              Homepage
            </a>
            {" / "}
            <a href="#" className="text-decoration-none">
              Instagram
            </a>
            {" / "}
            <a href="#" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;