import React from 'react';
import { signOut } from "firebase/auth";
import { database } from './FirebaseConfig';
import { useNavigate } from "react-router-dom";
import './AwarenessOfCalories.css';
import Navbar from "../Navbar"


export default function AwarenessOfCalories() {


    const history = useNavigate()
    const handleClick = () =>{
        signOut(database).then(val=>{
            console.log(val,"val")
            history('/')
        })
    }

    return (
    <> 
    <Navbar />
     
    <div className="awareness-container">
    <div className="Container">
        <div>
            <button onClick={handleClick}>SignOut</button>
        </div>
    </div>
    <h1>Awareness of Calorie Consumption</h1>
    
 
    <div className="topic">
        <h2>Understanding Calories</h2>
        <div className="subtopic">
            <h3>What Are Calories?</h3>
            <p>Calories are units of energy that fuel our bodies. Every activity, from breathing to exercising, requires calories. Understanding your daily caloric intake is essential for maintaining a healthy weight and energy balance. Calories not only provide energy but also play a crucial role in metabolic processes that sustain life.</p>
        </div>
        <div className="subtopic">
            <h3>Caloric Needs</h3>
            <p>Your caloric needs depend on various factors like age, gender, weight, metabolism, and activity level. Consuming the right amount of calories helps you stay energized, supports bodily functions, and aids in maintaining overall health. It's important to tailor your diet to meet these specific needs for optimal well-being.</p>
        </div>
        <div className="subtopic">
            <h3>Caloric Balance</h3>
            <p>Maintaining a caloric balance is key to managing your weight. This involves consuming the same number of calories that your body uses. Overeating or undereating can lead to weight gain or loss, respectively. Achieving a caloric balance also helps in preventing chronic diseases such as obesity, diabetes, and cardiovascular disorders.</p>
        </div>
    </div>
    
 
    <div className="topic">
        <h2>Making Informed Choices</h2>
        <div className="subtopic">
            <h3>Reading Nutrition Labels</h3>
            <p>Nutrition labels provide valuable information about the caloric content of food items. Learning to read and understand these labels can help you make healthier food choices. Paying attention to serving sizes, ingredients, and nutritional content allows you to manage your caloric intake more effectively.</p>
        </div>
        <div className="subtopic">
            <h3>Mindful Eating</h3>
            <p>Mindful eating involves paying attention to what and how much you eat. By being mindful, you can better manage your calorie intake and avoid overeating. This practice encourages a deeper awareness of hunger and satiety cues, leading to healthier eating habits and a more balanced relationship with food.</p>
        </div>
        <div className="subtopic">
            <h3>Calorie-Dense Foods</h3>
            <p>Some foods are more calorie-dense than others, meaning they have a high number of calories in a small portion. Being aware of calorie-dense foods, such as fast food, desserts, and sugary beverages, can help you make smarter dietary choices and avoid excessive caloric intake, which can contribute to weight gain and health issues.</p>
        </div>
    </div>

  
    <div className="topic">
        <h2>The Importance of Exercise</h2>
        <div className="subtopic">
            <h3>Balancing Calories with Physical Activity</h3>
            <p>Regular physical activity is essential for burning calories and maintaining a healthy weight. Exercise helps balance the calories consumed with those expended, preventing excess weight gain. It also boosts metabolism and enhances overall health.</p>
        </div>
        <div className="subtopic">
            <h3>Types of Exercise</h3>
            <p>Incorporate a mix of aerobic exercises (like walking, running, or cycling) and strength training (like weight lifting or resistance exercises) to maximize calorie burn. A balanced exercise routine supports cardiovascular health, muscle strength, and endurance.</p>
        </div>
        <div className="subtopic">
            <h3>Consistency is Key</h3>
            <p>Consistency in physical activity is crucial for long-term health benefits. Regular exercise, combined with a balanced diet, helps you manage your calorie intake effectively and supports overall wellness. Aim for at least 150 minutes of moderate-intensity aerobic activity each week, along with muscle-strengthening activities on two or more days a week.</p>
        </div>
    </div>
</div>

            <footer>
                <p>&copy; {new Date().getFullYear()} Calories Burnt Prediction System. All rights reserved.</p>
            </footer>

    </>    
    );
}
