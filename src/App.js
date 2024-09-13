import React from 'react';
import Home from "./PasswordLoginWithFirebase/Home"
import Prediction from "./PasswordLoginWithFirebase/Prediction"
import ContactUs from "./PasswordLoginWithFirebase/ContactUs"
import AwarenessOfCalories from "./PasswordLoginWithFirebase/AwarenessOfCalories"
import FAQ from "./PasswordLoginWithFirebase/FAQ"
import ChatBot from 'react-simple-chatbot';
import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import RegisterAndLogin from "./PasswordLoginWithFirebase/RegisterAndLogin";
import ForgotPassword from "./PasswordLoginWithFirebase/ForgotPassword";
import './styles.css';



function App() {
  
  const [minimized, setMinimized] = useState(false);

  const handleToggleMinimize = () => {
    setMinimized(!minimized);
  };
  const steps = [
    {
      id: "Greet",
      message: "Hello There!  Welcome to Calories Burnt Prediction system",
      trigger: "Help",
    },

    {
      id: "Help",
      message: "Do you want a guidance?",
      trigger: "selection",
    },
    {
      id: "selection",
      options: [
        { value: "Yes", label: "Yes", trigger: "Yes" },
        { value: "No", label: "No", trigger: "No" },
      ],
    },

    {
      id: "No",
      message: "If you need assistance, feel free to ask!",
      end: true
    },
    {
      id: "Yes",
      message: "It's really glad to assist you!",
      trigger: "selection2",
    },

    {
      id: "selection2",
      options: [
        
        { value: "I don't have an account", label: "I don't have an account", trigger: "I don't have an account"},
        { value: "What are the facilities that the system provides.", label: "What are the facilities that the system provides.", trigger: "What are the facilities that the system provides."},
        { value: "How can i get Calories Burnt prediction Through this system", label: "How can i get Calories Burnt prediction Through this system", trigger: "How can i get Calories Burnt prediction Through this system"},
      ],
    },

    {
      id: "I don't have an account",
      message: "If you don't have an account, then click on 'Register' button",
      trigger: "step1",
    },

    {
      id: "step1",
      message: "create username & password", 
      trigger: "step2",
    },
    {
      id: "step2",
      message: "Then click on 'submit' button.",
      end: true,
    },
    

    {
      id: "What are the facilities that the system provides.",
      message: "Calories Burnt prediction panel",
      trigger: "Facility2",
    },
    {
      id: "Facility2",
      message: "Awareness of Calorie Burning",
      trigger: "Facility3",
    },
    {
      id: "Facility3",
      message: "Optimizing Fitness with Calorie Burning Predictions",
      end: true,
    },

    {
      id: "How can i get Calories Burnt prediction Through this system",
      message: "First of all, login into the system by using username & password", 
      trigger: "step3",
    },

    {
      id: "step3",
      message: "if you don't have an account get registered",
      trigger: "step4",
    },
    {
      id: "step4",
      message: "then you have to login into the system", 
      trigger: "step5",
    },

    {
      id: "step5",
      message: "and go to the tab called get prediction",
      trigger: "step6",
    },
    {
    id: "step6",
    message: "then after fill the form and click on the 'Prediction' button.",
    end: true,
    },

   

  ];

   return (
  <>   

  
    <div className="Container">
        <Routes>
        <Route path="/" element={<RegisterAndLogin/>} />
            <Route path="/reset" element={<ForgotPassword/>} />
            <Route path="/home" element={<Home />} />  
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/awarenessofcalories" element={<AwarenessOfCalories />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contactus" element={<ContactUs />} />           
        </Routes>
    </div>



    <div style={styles.chatbotContainer}>
      {!minimized && (
        <ChatBot steps={steps} botAvatar="/botavatar.png" />
      )}
      <Button
        icon={minimized ? 'window maximize' : 'window minimize'}
        onClick={handleToggleMinimize}
        style={styles.minimizeButton}
      />
    </div>
  
</>
    );
}
const styles = {
  chatbotContainer: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    zIndex: 9999,
  },
  minimizeButton: {
    position: 'absolute',
    top: 0, 
    right: 0,
    zIndex: 10000, 
    height: '20px', 
    width: '50px', 
  },
};  
        export default App;