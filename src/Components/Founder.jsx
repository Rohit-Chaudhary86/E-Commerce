import React from "react";
import founderImg2 from "../assets/founderImg2.png";
import { useNavigate } from "react-router";
import './Founder.css';

function Founder() {
  const navigate = useNavigate();

  return (
    <>
      

      <div className="founder-container">
        <div className="founder-card">
          <div className="founder-image">
            <img src={founderImg2} alt="Founder" />
          </div>
          <div className="founder-info">
            <h2>Rohit Chaudhary</h2>
            <p>
              Web development student by day, Stack Overflow explorer by night.
              Currently building projects not just to learn — but to prove to my
              laptop that I do know what I'm doing. Obsessed with turning vague
              ideas into working apps (eventually).
            </p>
            <ul>
              <li><strong>Email:</strong> rohitskills86@gmail.com</li>
              <li><strong>Phone:</strong> +91 8630827951</li>
              <li><strong>Location:</strong> Greater Noida, India</li>
              <li>
                <strong>GitHub:</strong> 
                <a href="https://github.com/Rohit-Chaudhary86" target="_blank" rel="noopener noreferrer">
                  Rohit-Chaudhary86
                </a>
              </li>
            </ul>
            <button onClick={() => navigate('/')} className="home-button">Home</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Founder;
