import React from "react";
import founderImg from "../assets/founderImg.png";
import { useNavigate } from "react-router";

 //Image issue is need to be fixed here

function Founder() {
  const navigate=useNavigate();
  return (
    <>
    <button onClick={() => navigate('/')}
  className="radius-20"
>
  Home
</button>
    <div className="bg-gray-100 px-4 py-8">
      <div className="mx-auto flex flex-col md:flex-row max-w-5xl shadow-lg rounded-lg overflow-hidden bg-white">
       
        <div className="md:w-1/2 w-full flex items-center justify-center bg-gray-200 p-6">
          
        </div>
        

     
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Rohit Chaudhary
          </h2>
          <p className="text-gray-600 mb-4">
            Web development student by day, Stack Overflow explorer by night.
            Currently building projects not just to learn — but to prove to my
            laptop that I do know what I'm doing. Obsessed with turning vague
            ideas into working apps (eventually).
          </p>
          <ul className="text-gray-700 mb-4 space-y-2">
            <li><strong>Email:</strong> rohitskills86@gmail.com</li>
            <li><strong>Phone:</strong> +91 8630827951</li>
            <li><strong>Location:</strong> Greater Noida, India</li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/Rohit-Chaudhary86"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Rohit-Chaudhary86
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
    </>
  );

}

export default Founder;
