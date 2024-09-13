import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { database } from './FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import axios from 'axios';
import './Prediction.css';
import ResultNotification from './ResultNotification'; 

export default function Prediction() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Gender: 'male',
    Age: '',
    Height: '',
    Weight: '',
    Duration: '',
    Heart_Rate: '',
    Body_Temp: ''
  });

  const [result, setResult] = useState(null);

  const handleSignOut = () => {
    signOut(database)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/', formData);
      setResult(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const handleCloseNotification = () => {
    setResult(null);
  };

  return (
    <>
      
        <Navbar />
  
      <button className="sign-out-btn" onClick={handleSignOut}>Sign Out</button>

      <div className="cont">
        <div className="prediction-cont">
          <h1>Calories Burnt Prediction</h1>
          <ul className="bullet-list">
            <li className="bullet-item">Discover valuable insights into your health with our advanced prediction tool.</li>
            <li className="bullet-item">Gain a deeper understanding of your body and potential risks.</li>
            <li className="bullet-item">Ready to take control of your health? Start by completing our comprehensive questionnaire.</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="form-label">Gender:</label>
          <select className="form-input" name="Gender" value={formData.Gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select><br />

          <label className="form-label">Age:</label>
          <input className="form-input" type="number" name="Age" value={formData.Age} onChange={handleChange} required /><br />

          <label className="form-label">Height (cm):</label>
          <input className="form-input" type="number" name="Height" value={formData.Height} onChange={handleChange} required /><br />

          <label className="form-label">Weight (kg):</label>
          <input className="form-input" type="number" name="Weight" value={formData.Weight} onChange={handleChange} required /><br />

          <label className="form-label">Duration (min):</label>
          <input className="form-input" type="number" name="Duration" value={formData.Duration} onChange={handleChange} required /><br />

          <label className="form-label">Heart Rate (bpm):</label>
          <input className="form-input" type="number" name="Heart_Rate" value={formData.Heart_Rate} onChange={handleChange} required /><br />

          <label className="form-label">Body Temp (°C):</label>
          <input className="form-input" type="number" name="Body_Temp" value={formData.Body_Temp} onChange={handleChange} required /><br />

          <button className="form-button" type="submit">Predict</button>
        </form>

        {/* Render the ResultNotification modal if result exists */}
        {result && (
          <ResultNotification result={result} onClose={handleCloseNotification} />
        )}
      </div>

            <footer>
                <p>&copy; {new Date().getFullYear()} Calories Burnt Prediction System. All rights reserved.</p>
            </footer>

    </>
  );
}
