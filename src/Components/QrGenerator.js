import React from "react";
import QRCode from "react-qr-code";

function QrGenerator({
  value,
  text,
  bgColor,
  fgColor,
  level,
  textColor,
  textFontFamily,
}) {
  return (
    <div className="qr_gen" style={{ margin: "auto", textAlign: "center" }}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Reddit+Mono:wght@200..900&display=swap');
      </style>
      <QRCode
        value={value}
        bgColor={bgColor}
        fgColor={fgColor}
        level={level || "L"}
      />
      <h1
        style={{
          color: textColor || "black",
          fontFamily: textFontFamily || "Reddit Mono, monospace",
          fontWeight: 400,
          fontOpticalSizing: "auto",
          fontStyle: "normal",
        }}
      >
        {text}
      </h1>
    </div>
  );
}

export default QrGenerator;
