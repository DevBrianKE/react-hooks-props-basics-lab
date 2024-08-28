import React from "react";

// Home Component takes props and displays user information
function Home(props) {
  return (
    <div id="home">
      {/* Displaying user's name, city, and applying color style based on props */}
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}

// Exporting the Home component as the default export
export default Home;
