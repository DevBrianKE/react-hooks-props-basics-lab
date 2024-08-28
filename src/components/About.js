import React from "react";
import Links from "./Links"; // Importing the Links component

// About Component displays user's bio and links
function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>

      {/* Conditional rendering: Display bio only if it exists and is not an empty string */}
      {props.bio && <p>{props.bio}</p>}

      {/* Displaying a static image */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      {/* Rendering the Links component and passing down github and linkedin props */}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

// Exporting the About component as the default export
export default About;
