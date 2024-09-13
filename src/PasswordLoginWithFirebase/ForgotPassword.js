import React from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { database } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css"; 

function ForgotPassword() {
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;
    sendPasswordResetEmail(database, emailVal)
      .then((data) => {
        alert("check your email");
        history("/");
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  return (
    <div>
    <h1>Calories Burnt Prediction System</h1>
    <p align='center'>We provide advanced prediction models to assess the Calories Burnt.</p>
    <div className="forgot-password-container">
       

      <h2>Forgot Password</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <button className="btn-reset">Reset Password</button>
      </form>
    </div>

             <footer>
                <p>&copy; {new Date().getFullYear()} Calories Burnt Prediction System. All rights reserved.</p>
            </footer>
    </div>

    
  );
}

export default ForgotPassword;
