// Importing necessary React components and user data
import React from "react";
import NavBar from "./NavBar"; // Importing the NavBar component
import Home from "./Home"; // Importing the Home component
import About from "./About"; // Importing the About component

// Importing user data from a separate file
import user from "../data/user"; 
console.log(user); // Logging user data to the console for debugging

// App Component is the top-level component that will render NavBar, Home, and About
function App() {
  return (
    <div>
      {/* Rendering the NavBar component */}
      <NavBar />
      
      {/* Passing user data as props to the Home component */}
      <Home name={user.name} city={user.city} color={user.color} />

      {/* Passing bio and links as props to the About component */}
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
