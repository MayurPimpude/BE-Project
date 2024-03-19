from flask import Flask, request, jsonify
import os
import pandas as pd
import numpy as np
import pickle

from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the Random Forest model
model_path = 'Random.pkl'
with open(model_path, 'rb') as file:
    loaded_model = pickle.load(file)

def make_prediction(data):
    # Use the loaded model to make predictions on the data
    prediction = loaded_model.predict(data)
    return prediction

@app.route('/submit', methods=['POST'])
def submit_form():
    data = request.json
    df =  pd.DataFrame.from_dict(data, orient="index")
    print(df.iloc[4:16])

    # if df.columns != None:
    #         predictions = make_prediction(df.values)

    # Handle data as needed, for example, you might save it to a database
    df1 = df.iloc[4:16]
    # print(df1.values)
    
    float_data = [int(value[0]) for value in df1.values]

    # print(df1[0])
    print('####')
    print(float_data)

    float_data = [float_data]

    predictions = make_prediction(float_data)
    print(predictions)

    if(predictions == [0]):
        return jsonify({'detection': 'Malnutrion Detected'})
    else:
         return jsonify({'detection': 'Healthy'})
    
    # return jsonify({'message': 'Form data received successfully'})

if __name__ == '__main__':
    app.run(debug=True)
