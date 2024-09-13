import React from 'react';
import { signOut } from "firebase/auth";
import { database } from './FirebaseConfig';
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import './FAQ.css'; // Ensure the CSS file is named correctly

export default function FAQ() {
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
            <div className="faq-container">
                <div className="signout-btn-container">
                    <button className="signout-btn" onClick={handleClick}>Sign Out</button>
                </div>

                
                {/* Custom Continuous Scrolling Carousel */}
                <div className="carousel-container">
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src="/bgi1.jpeg" alt="Background 1" />
                        </div>
                        <div className="carousel-item">
                            <img src="/bgi2.jpeg" alt="Background 2" />
                        </div>
                        <div className="carousel-item">
                            <img src="/bgi3.jpeg" alt="Background 3" />
                        </div>
                        <div className="carousel-item">
                            <img src="/bgi4.jpeg" alt="Background 4" />
                        </div>
                        <div className="carousel-item">
                            <img src="/bgi5.jpeg" alt="Background 5" />
                        </div>
                    </div>
                </div>

                
                <h1 className="faq-title">Frequently Asked Questions</h1>
                <div className="faq-section">
                    <h2 className="faq-question">What is this system about?</h2>
                    <p className="faq-answer">Our system is designed to predict chronic kidney disease using advanced machine learning algorithms. It helps in analyzing various factors and provides accurate assessments, helping users take proactive measures.</p>
                </div>

                <div className="faq-section">
                    <h2 className="faq-question">How does the system ensure accuracy?</h2>
                    <p className="faq-answer">We use state-of-the-art predictive technologies, which are constantly updated with the latest medical research to ensure the highest accuracy in kidney disease management.</p>
                </div>

                <div className="faq-section">
                    <h2 className="faq-question">Is my data secure?</h2>
                    <p className="faq-answer">Yes, we prioritize user privacy and data security. All information provided is encrypted and handled with the utmost confidentiality.</p>
                </div>

                <div className="faq-section">
                    <h2 className="faq-question">Can I provide feedback?</h2>
                    <p className="faq-answer">Absolutely! We encourage feedback from users and healthcare professionals to improve the accuracy and effectiveness of our prediction models.</p>
                </div>

                <div className="faq-section">
                    <h2 className="faq-question">How often is the system updated?</h2>
                    <p className="faq-answer">Our system is updated regularly to incorporate the latest advancements in medical research and machine learning techniques, ensuring that the predictions remain accurate and relevant.</p>
                </div>

                <div className="faq-section">
                    <h2 className="faq-question">What kind of data do I need to provide?</h2>
                    <p className="faq-answer">You will need to provide basic health information such as age, gender, blood pressure, and other relevant medical details. This data helps the system make accurate predictions about kidney health.</p>
                </div>

                <div className="faq-section">
                    <h2 className="faq-question">Is there a cost to use the system?</h2>
                    <p className="faq-answer">The basic features of our system are available free of charge. However, there may be premium features or additional services that come with a fee. Details will be provided within the app.</p>
                </div>

                <div className="faq-section">
                    <h2 className="faq-question">Can I access the system on mobile devices?</h2>
                    <p className="faq-answer">Yes, our system is designed to be accessible on both desktop and mobile devices, allowing you to monitor your health and access predictions anytime, anywhere.</p>
                </div>


            </div>

            <footer>
                <p>&copy; {new Date().getFullYear()} Calories Burnt Prediction System. All rights reserved.</p>
            </footer>

        </>
    );
}
