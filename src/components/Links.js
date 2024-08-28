import React from "react";

// Links Component displays user's GitHub and LinkedIn links
function Links(props) {
  return (
    <div>
      <h3>Links</h3>

      {/* Displaying the GitHub link */}
      <a href={props.github}>{props.github}</a>

      {/* Displaying the LinkedIn link */}
      <a href={props.linkedin}>{props.linkedin}</a>
    </div>
  );
}

// Exporting the Links component as the default export
export default Links;
