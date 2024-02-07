from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Sample data to send (replace with your actual data)
data_to_send = {"message": "Hello from Flask!"}

@app.route('/get-data')
def send_data():
    return jsonify(data_to_send)

# ... (Other routes)

if __name__ == '__main__':
    app.run(debug=True)
