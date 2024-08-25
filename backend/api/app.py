from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/bfhl', methods=['POST', 'GET'])
def bfhl():
    if request.method == 'POST':
        # Extract data from the request
        data = request.json.get('data', [])
        
        # Example user data
        user_id = "john_doe_17091999"
        email = "john@xyz.com"
        roll_number = "ABCD123"
        
        # Separate numbers and alphabets
        numbers = [item for item in data if item.isdigit()]
        alphabets = [item for item in data if item.isalpha()]
        
        # Determine the highest lowercase alphabet
        lowercase_alphabets = [ch for ch in alphabets if ch.islower()]
        highest_lowercase = max(lowercase_alphabets) if lowercase_alphabets else None
        
        # Construct the response
        response = {
            "is_success": True,
            "user_id": user_id,
            "email": email,
            "roll_number": roll_number,
            "numbers": numbers,
            "alphabets": alphabets,
            "highest_lowercase_alphabet": [highest_lowercase] if highest_lowercase else []
        }
        return jsonify(response)
    
    elif request.method == 'GET':
        response = {
            "operation_code": 1
        }
        return jsonify(response), 200

if __name__ == '__main__':
    app.run(debug=True)
