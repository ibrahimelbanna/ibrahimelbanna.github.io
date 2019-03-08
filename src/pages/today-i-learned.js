import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/projects.css";
import { connect } from "react-redux";
import { TwitterShareButton } from "react-twitter-embed";

const Til = ({ mode }) => {
  const tils = [
    {
      title: "Gradient text style in CSS",
      date: "2019-03-08",
      body: (
        <iframe
          height="265"
          style={{ width: "100%" }}
          scrolling="no"
          title="gradient text hover"
          src="//codepen.io/zeyadetman/embed/preview/rRydWv/?height=265&theme-id=dark&default-tab=css,result"
          frameBorder="no"
          allowtransparency="true"
          allowFullScreen={true}
        >
          See the Pen{" "}
          <a href="https://codepen.io/zeyadetman/pen/rRydWv/">
            gradient text hover
          </a>{" "}
          by Zeyad Etman (
          <a href="https://codepen.io/zeyadetman">@zeyadetman</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>
      )
    }
  ];
  return (
    <Layout>
      <SEO title="Today I Learned" />
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        Today I Learned
        <a
          style={{ marginTop: 5 }}
          href="https://stackexchange.com/users/6213143/zeyad-etman"
        >
          <img
            src={`https://stackexchange.com/users/flair/6213143.png?theme=${
              mode === "night" ? "dark" : "day"
            }`}
            width="208"
            height="58"
            alt="profile for Zeyad Etman on Stack Exchange, a network of free, community-driven Q&amp;A sites"
            title="profile for Zeyad Etman on Stack Exchange, a network of free, community-driven Q&amp;A sites"
          />
        </a>
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gridGap: 15
        }}
      >
        {tils.map(tip => {
          const tipId = tip.title.replace(/ /g, "").toLowerCase();
          return (
            <div className="card" key={tip.title}>
              <h2 style={{ marginBottom: 5, paddingLeft: 10 }} id={tipId}>
                {tip.title}
              </h2>
              <time style={{ paddingLeft: 10 }} dateTime={tip.date}>
                {tip.date}
              </time>
              <div
                style={{
                  marginTop: 25
                }}
              >
                {tip.body}
              </div>
              <div
                style={{
                  textAlign: "center"
                }}
              >
                <TwitterShareButton
                  url={`https://zeyadetman.github.io/today-i-learned/#${tipId}`}
                  options={{
                    text: `TIL: ${tip.title}`,
                    via: "zeyadetman",
                    size: "large"
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

const mapStateToProps = ({ mode }) => {
  return { mode };
};

export default connect(mapStateToProps)(Til);