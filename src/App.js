import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './Login/Signup.js';
import Dashboard1 from './dashboard/Dashboard.js';
import SignInSide from './Login/SignIn.js';
import AdminLogin from './Login/AdminLogin.js';
import Blog from './blog/Blog';
import AboutPage from './blog/About/About';
import FeedbackForm from './Feedback/form';
import Submissions1 from './Complaint/submission1.js';
import Submissions from './Feedback/submissions';
import Chatbot from './Chatbot';
import Leaderboard from './LeaderBoard/LeaderBoard.js';
import PoliceComplaintForm from '../src/Complaint/form.js'
import { firebase } from './config.js';
import Contact from './blog/About/contact.js';
import Service from './blog/About/Service.js';
import FeedBackSec from './Feedback/FeedbackSec.js';
import GeneralFeedbackForm from './GeneralFeedback/generalFeed.js';
import GeneralSubmissions from './GeneralFeedback/GeneralSub.js';
import Report from './dashboard/Report.js';
import 'chart.js/auto';
function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  function onAuthStateChanged(user) {
    setUser(user);
    setInitializing(false);
  }

  if (initializing) {
    // You might want to show a loading indicator here
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Routes>
        {!user ? (
          <>
            <Route path="/" element={<SignInSide/>} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/AdminLogin" element={<AdminLogin />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Blog />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/AdminBoard" element={<Dashboard1 />} />
            <Route path="/FeedBack" element={<FeedbackForm />} />
            <Route path="/Complaint" element={<PoliceComplaintForm />} />
            <Route path="/LeaderBoard" element={<Leaderboard />} />
            <Route path="/Chat" element={<Chatbot />} />  
            <Route path="/Contact" element={<Contact/>} />  
            <Route path="/Service" element={<Service/>} />  
            <Route path="/Report" element={<Report/>} />  
            <Route path="/FeedBacksection" element={<FeedBackSec/>} />  
            <Route path="/General" element={<GeneralFeedbackForm/>} /> 
            <Route path="submissions2" element={<GeneralSubmissions/>} />
            <Route path="Generalsubmission/:id" element={<GeneralSubmissions/>} />
            <Route path="submissions" element={<Submissions />} />
            <Route path="submission/:id" element={<Submissions />} />
            <Route path="submission" element={<Submissions1/>} />
            <Route path="submission1/:id" element={<Submissions1 />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
