# app.py 

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os

from resume_assistant import get_resume_assistant

# === Flask app setup ===
app = Flask(__name__)
CORS(app)

# === File upload config ===
UPLOAD_FOLDER = os.path.join(os.getcwd(), 'uploads')
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# === Get the AI assistant chain ===
resume_chat = get_resume_assistant()

# === Health check route ===
@app.route('/')
def index():
    return "Resume Checker API is running!"

# === File upload route ===
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No file selected"}), 400

    filename = secure_filename(file.filename)
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(filepath)

    return jsonify({"url": f"/uploads/{filename}"}), 200

# === Serve uploaded files ===
@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# === Chat AI endpoint ===
@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")

    if not user_message:
        return jsonify({"error": "No message provided"}), 400

    response = resume_chat.run(message=user_message)
    return jsonify({"response": response})

# === Run the Flask app ===
if __name__ == '__main__':
    app.run(debug=True)
