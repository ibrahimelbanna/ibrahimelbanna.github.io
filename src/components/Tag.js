import React from "react";

export default function Tag({ title, url, type, color }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <span
        style={{
          background: color,
          padding: "2px 5px 1px 5px",
          fontSize: 12,
          textTransform: "capitalize",
          display: "inline-block",
          verticalAlign: "text-bottom",
          marginRight: 5,
          color: "#0d0d0d"
        }}
      >
        {type}
      </span>
      <a href={url}>{title}</a>
    </div>
  );
}
