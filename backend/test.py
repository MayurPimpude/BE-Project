import pandas as pd
import numpy as np
import pickle



# Load the Random Forest model
model_path = 'Random.pkl'
with open(model_path, 'rb') as file:
    loaded_model = pickle.load(file)

def make_prediction(data):
    # Use the loaded model to make predictions on the data
    prediction = loaded_model.predict(data)
    print(prediction)
    return prediction

data = [['38'],
 ['2'],
 ['-74'],
 ['-76'],
 ['-14'],
 ['-6'],
 ['1'],
 ['202'],
 ['3'],
 ['1'],
 ['0'],
 ['1']]

# arr = data.astype(float)

# data = [[38,2,-74,-76,-14,-6,1,202,3,1,0,1]]


# make_prediction(arr)

float_data = [int(value[0]) for value in data]

print(float_data)