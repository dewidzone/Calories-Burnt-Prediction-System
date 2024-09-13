import { signOut } from "firebase/auth";
import React from "react";
import { database } from './FirebaseConfig';
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import "./Home.css"; 

function Home() {
    const history = useNavigate();

    const handleClick = () => {
        signOut(database).then(val => {
            console.log(val, "val");
            history('/');
        });
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="home-image-container">
                    <img src="/bgi.jpg" alt="Background" className="home-image" />
                </div>
                <div className="home-container">
                    <button onClick={handleClick}>Sign Out</button>
                    <div className="home-content">
                        <h1>Calories Burnt Prediction System</h1>
                        <p>We provide advanced prediction models to assess the Calories Burnt.</p>

                        <div className="vision-mission">
                            <h2>Vision</h2>
                            <p>"To lead the way in health and fitness by leveraging advanced predictive technologies to accurately estimate calories burnt, empowering individuals to achieve their wellness goals and maintain a balanced lifestyle."</p>
                            <h2>Mission</h2>
                            <p>"Our mission is to transform the way people approach fitness and health by providing cutting-edge calorie burnt prediction models. By continuously innovating and collaborating with fitness experts, our goal is to offer precise insights that support effective workout planning and personalized fitness strategies. We aim to make a significant impact on individual health and well-being by enhancing the accuracy of calorie tracking and promoting healthier lifestyles."</p>
                        </div>

                        <div className="testimonials">
                            <h2>What Our Users Say</h2>
                            <p>"This system has been a game changer for my fitness routine!" - Lahiru Anuradha <span className="star-rating">★★★★★</span></p>
                            <p>"The predictions are accurate and the interface is user-friendly. It's been a valuable addition to my fitness routine." - Dilusha <span className="star-rating">★★★★★</span></p>
                            <p>"Highly recommend and easy to use." - Ravin Priyadarshana <span className="star-rating">★★★★★</span></p>
                        </div>

                        <div className="contact-info">
                            <h2>Contact Us</h2>
                            <p>Have questions or need support? Reach out us from here...! 
                            <a href="ContactUs" className="contact-button">Get in Touch</a></p>
                        </div>

                    </div>
                </div>
            </div>
            <footer>
                <p>&copy; {new Date().getFullYear()} Calories Burnt Prediction System. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Home;
