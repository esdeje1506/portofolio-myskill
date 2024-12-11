import React from "react";
import { Fade } from "react-awesome-reveal";

function About(prop) {
  if (!prop.data) return null;
  const {
    bio,
    name,
    contactmessage,
    email,
    phone,
    image,
    address,
    resumedownload,
  } = prop.data;

  return (
    <section id="about">
      <Fade duration={1000}>
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={image}
              alt="Syahrul Dwi Juniyanto"
            />
          </div>
          <div
            className="nine columns main-col"
            style={{ textAlign: "justify" }}
          >
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {address.street}
                    <br />
                    {address.city} {address.state}, {address.zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumedownload} className="button">
                    <i className="fa fa-download"></i> Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default About;
