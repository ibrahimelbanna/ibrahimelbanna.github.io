import React from "react";
import SEO from "../components/seo";
import { TwitterFollowButton } from "react-twitter-embed";
import SeeMore from "../components/SeeMore";

export default function Contact({ location: { pathname } }) {
  return (
    <>
      <SEO title="Contact" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gridGap: 20
        }}>
        <div
          style={{
            gridColumn: "1/3"
          }}>
          <h1>Hi! It's my pleasure to hear from you.</h1>
          <p>
            I like code and anything related, I guess you too! so if you have
            something to share with me, contact me:
            <p
              style={{
                textAlign: "center",
                fontSize: "1.5em",
                fontWeight: 700,
                background: "linear-gradient(to right, #ffbf00, #ff6a00)",
                lineHeight: "84px",
                color: "#000",
                borderRadius: "50px"
              }}>
              zeyadetman@gmail.com
            </p>
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h1>Wanna be friends?</h1>
          <TwitterFollowButton
            screenName={"zeyadetman"}
            options={{ size: "large" }}
          />
        </div>
      </div>
      <SeeMore />
    </>
  );
}
