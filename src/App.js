import {Routes, Route ,Link } from "react-router-dom"
import './App.css';
import React from 'react';
// import index from "./pages/studentsjourney";
import Home from "./pages/Studentsjourney/Home";
import Add from "./pages/Studentsjourney/Add";
import Edit from "./pages/Studentsjourney/Edit";
import MentorHome from "./pages/mentorjourney/MentorHome";
import MentorAdd from "./pages/mentorjourney/MentorAdd";
import MentorEdit from "./pages/mentorjourney/MentorEdit";


function App() {
  return (
    <div className="App">
      <div className="Navbar">
       <Link to='/' >
        <img src="data:image/png;base64,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" alt="zenclass"/>
       </Link>
        <h2>Student-Mentors Management</h2>
        </div>

         <div className='totalcontent'>
          <div className='sidebar'>
            <nav>
              <ul>
                <li>
                  <Link style={{textDecoration:"none"}} to="/students">Students</Link>
                </li>
                <li>
                  <Link style={{textDecoration:"none"}} to='/mentors'>Mentors</Link>
                  </li>
              </ul>
            </nav>
           
          </div>
          <div className='Contentarea'>
          <Routes>
            <Route path="students" Component={Home}/>
            <Route path="students/create" Component={Add}/>
            <Route path="students/edit" Component={Edit}/>
            <Route path='mentors' Component={MentorHome}/>
            <Route path='mentors/create' Component={MentorAdd}/>
            <Route path='mentors/edit' Component={MentorEdit}/>
          </Routes>

          
          </div>
        </div>

    </div>
  );
}

export default App;
