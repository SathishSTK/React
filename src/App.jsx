//Task1
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// // import './App.css'
 
// // function App() {
// //   return (
// //     <div className="page">
// //       <div className="intro-container">
// //         <h1>Self Introduction</h1>
 
// //         <div className="details">
// //           <p>
// //             <span>NAME:</span> Sathish
// //           </p>
 
// //           <p>
// //             <span>EDUCATION:</span> BE(EEE)
// //           </p>
 
// //           <p>
// //             <span>SKILLS:</span> HTML, CSS, JavaScript, React
// //           </p>
 
// //           <p>
// //             <span>LOCATION:</span> Nagapattinam
// //           </p>
 
// //           <p>
// //             <span>HOBBIES:</span> Playing Games, Watching Movies, Listening
// //             to Music
// //           </p>
 
// //           <p>
// //             <span>CAREER GOAL:</span> To become a skilled Full Stack Developer
// //             and build useful web applications.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
 
// // export default App;

//Task2
import React from "react";
import UserCard from "./UserCard";
import "./App.css";

function App() {
  // Parent Component - User Data
  const users = [
    {
      name: "John Doe",
      age: 28,
      city: "Chennai",
      mobile: "+91 98765 43210",
      email: "john.doe@gmail.com",
      occupation: "Software Engineer",
      address: "12 Anna Nagar, Chennai"
    },
    {
      name: "Emma Watson",
      age: 25,
      city: "Bangalore",
      mobile: "+91 87654 32109",
      email: "emma.watson@gmail.com",
      occupation: "UI/UX Designer",
      address: "45 MG Road, Bangalore"
    },
    {
      name: "Michael Brown",
      age: 32,
      city: "Mumbai",
      mobile: "+91 76543 21098",
      email: "michael.brown@gmail.com",
      occupation: "Project Manager",
      address: "78 Andheri West, Mumbai"
    },
    {
      name: "Sophia Davis",
      age: 27,
      city: "Hyderabad",
      mobile: "+91 65432 10987",
      email: "sophia.davis@gmail.com",
      occupation: "Data Analyst",
      address: "21 Hitech City, Hyderabad"
    },
    {
      name: "Daniel Wilson",
      age: 30,
      city: "Coimbatore",
      mobile: "+91 54321 09876",
      email: "daniel.wilson@gmail.com",
      occupation: "DevOps Engineer",
      address: "56 RS Puram, Coimbatore"
    }
  ];

  return (
    <div className="app-container">

      <h1>User Profiles</h1>

      <p className="subtitle">
        React Props - Parent to Child Communication
      </p>

      <div className="cards-container">

        {users.map((user, index) => (
          <UserCard
            key={index}
            user={user}
          />
        ))}

      </div>

    </div>
  );
}

export default App;