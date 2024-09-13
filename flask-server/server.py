from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd
import numpy as np
import os  # Import the os module to work with the file system

app = Flask(__name__)
CORS(app)  # Allow requests from all origins

# Print the current working directory
print("Current Working Directory:", os.getcwd())

# Load the model pipeline
with open(r'C:\Users\thejan\calories_burn_prediction\client\flask-server\pipeline.pkl', 'rb') as f:
    pipeline = pickle.load(f)

@app.route('/', methods=['POST'])
def predict():
    data = request.json
    df = pd.DataFrame(data, index=[0])
    result = pipeline.predict(df)
    
    # Convert result to a standard Python type
    result = result.astype(float)  # Convert numpy float32 to Python float
    
    prediction = result[0].tolist()
    print("Calories Burnt Prediction :", prediction)  # Debugging line
    
    return jsonify(prediction)  # Send the prediction back as JSON
if __name__ == "__main__":
    app.run(debug=True)
