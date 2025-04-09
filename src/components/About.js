import React from "react";
import Links from "./Links"; // <-- import the new component

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>} {/* Only render this if bio exists */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;
