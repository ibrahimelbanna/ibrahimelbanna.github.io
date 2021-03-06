import React, { useState } from "react";
import SEO from "../components/seo";
import "../styles/projects.css";
import Picture from "../../static/images/me.jpg";
import Avatar from "../../static/images/avatar.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGithub,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SeeMore from "../components/SeeMore";

const Home = ({ location: { pathname } }) => {
  const [image, setImage] = useState(Avatar);
  return (
    <>
      <SEO title="Home" keywords={[`zeyadetman`, `portfolio`]} />
      <div
        style={{
          textAlign: "center",
          margin: "0px auto",
          width: "80%",
          minWidth: 320
        }}>
        <div
          // src={image}
          className="pic-of-me"
          style={{
            borderRadius: "50%",
            width: 200,
            minWidth: 200,
            height: 200,
            border: "5px solid #f8ad36",
            boxShadow: "0px 2px 14px rgba(0,0,0,0.6)"
          }}
        />
        <h1 style={{ marginBottom: 0 }}>Zeyad Etman</h1>
        <h2 style={{ margin: 0 }}>Front-End Engineer</h2>
        <p>
          I do stuff <i className="twa twa-zap"></i> on the Internet.
        </p>
      </div>
      <ul
        style={{
          display: "flex",
          justifyContent: "center"
        }}
        className="social-network">
        <li>
          <a href="https://github.com/zeyadetman">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/zeyadetman">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/zeyadetman">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/zeyadetman">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href="mailto:zeyadetman@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
      <SeeMore />
    </>
  );
};

export default Home;
