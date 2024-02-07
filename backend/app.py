from flask import Flask, render_template, request, jsonify
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

def check_csv_columns(file_path):
    try:
        # Read the CSV file
        df = pd.read_csv(file_path)

        # Define the expected column sequence
        expected_columns = ['HC63', 'HC64', 'HC70', 'HC71', 'HC72', 'HC73', 'V238', 'M11', 'M13', 'M45', 'M55', 'M62']
     #   print(df.columns)
        # Check if the columns are in the exact sequence
        if list(df.columns) == expected_columns:
            predictions = make_prediction(df.values)

        # Add predictions as a new column to the original DataFrame
            df['Predictions'] = predictions
            percentage_malnutrition = (df['Predictions'].sum() / len(df)) * 100

            # Save the updated DataFrame to a new CSV file
            result_path = os.path.join('./uploads', 'results.csv')
            df.to_csv(result_path, index=False)
           
            print(percentage_malnutrition)

            # return result_path,percentage_malnutrition
            return percentage_malnutrition
        
        else:
            #return False, "Columns are not in the exact sequence."
            return False

    except Exception as e:
        return False, str(e)

# @app.route('/')
# def index():
#     return render_template('home.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        # Check if the request contains a file
        if 'file' not in request.files:
            return jsonify({"error": "No file provided"}), 400

        file = request.files['file']

        # Check if the file has an allowed extension
        if file.filename == '' or not file.filename.endswith('.csv'):
            return jsonify({"error": "Invalid file type. Please provide a CSV file (.csv)"}), 400

        # Save the file to a temporary location
        upload_folder = 'uploads'
        os.makedirs(upload_folder, exist_ok=True)
        file_path = os.path.join(upload_folder, 'uploaded_file.csv')
        file.save(file_path)

        # Check the CSV columns
       # result, message = check_csv_columns(file_path)
        # result_path,percentage_malnutrition = check_csv_columns(file_path)
        percentage_malnutrition = check_csv_columns(file_path)
        # Return the result
        #return jsonify({"result": result, "message": message})
        # return jsonify({"result_path": result_path, "percentage_malnutrition": percentage_malnutrition})
        print(percentage_malnutrition)
        return jsonify({"percentage_malnutrition": percentage_malnutrition})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
