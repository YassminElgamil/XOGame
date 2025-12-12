import React from "react";

export default function About() {
  return (
    <div className="about-container" style={{ padding: "20px" }}>
      <h2 className="about-title">About the Author</h2>

      <p className="about-text">
        Hi! I’m <span className="highlight">Yassmin Elgameel</span>, a web
        developer and game lover.
      </p>

      <p className="about-text">
        I created this <span className="highlight">Tic-Tac-Toe web game</span>{" "}
        as a fun project to practice my skills in
        <span className="highlight">React</span> and{" "}
        <span className="highlight">JavaScript</span>.
      </p>

      <p className="about-text">
        I hope you enjoy playing it and have fun challenging yourself or your
        friends!🎮😊
      </p>
    </div>
  );
}
