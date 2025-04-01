import React from "react";
import profilePicture from './assets/vishwajeet.jpg'; // Add the path to your photo

function Home() {
  return (
    <div className="home-page section">
      <h2>Welcome to My Portfolio</h2>
      <p>Hi, I'm Vishwajeet Londhe. I'm a passionate developer with expertise in web development, blockchain technology, and more.</p>
      <img src={profilePicture} alt="Vishwajeet Londhe" />
    </div>
  );
}

export default Home;
