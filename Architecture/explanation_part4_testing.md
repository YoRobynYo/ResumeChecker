# Validating and Testing Your Setup

Now that you have the code for the frontend and backend, and instructions on how to run them, let's test if everything works together. Remember, our current code uses placeholders for the actual AI logic (document processing, embedding, chat generation), so we'll be testing the basic communication flow, file upload mechanism, and chat interface.

**Before You Start:**

*   **Prerequisites Check:** Although our current code doesn't fully *use* them yet, ensure your prerequisites are running if you plan to implement the AI features later:
    *   Is your PostgreSQL server running?
    *   Is Ollama running? (You can check by opening a terminal and typing `ollama list` to see downloaded models).
*   **Backend Terminal:** Have the terminal running the Flask backend (`python app.py` inside the `backend` directory with the virtual environment activated) visible. You'll want to watch its output for logs and potential errors.
*   **Frontend Terminal:** Have the terminal running the React development server (`npm start` inside the `frontend` directory) visible.
*   **Browser:** Have the React application open in your browser (usually `http://localhost:3000`).

## Testing Steps

1.  **Check Backend Startup:** Look at the backend terminal. You should see lines indicating the Flask server is running on `http://0.0.0.0:5001` and that debug mode is on. You should also see the "Initializing AI components (placeholders)..." message.

2.  **Check Frontend Loading:** Look at your browser. The React app should load, showing the title "AI Resume Assistant", the file upload section, and the chat section.

3.  **Test File Upload (Successful Case):**
    *   Click the "Choose File" or "Browse" button in the "Upload Your Resume" section.
    *   Select a small PDF or DOCX file from your computer (you can create a dummy one for testing).
    *   The file name should appear next to the button, and the status message below might say "Selected file: [your file name]".
    *   Click the "Upload & Process" button.
    *   **Expected Frontend Behavior:** The button text should change to "Uploading...", and then the status message should update to something like "Resume [your file name] uploaded successfully. Processing started."
    *   **Expected Backend Behavior:** Look at the backend terminal. You should see log messages like:
        *   `File saved to: .uploads/[your file name]`
        *   `Processing file: [your file name] (placeholder)`
        *   A line showing a `POST /upload HTTP/1.1` request with a status code `200`.

4.  **Test File Upload (Wrong File Type):**
    *   Click the "Choose File" button again.
    *   Select a file that is *not* a PDF or DOCX (e.g., a .txt or .jpg file).
    *   **Expected Frontend Behavior:** The status message should immediately change to "Please select a PDF or DOCX file.", and the "Upload & Process" button might remain disabled or clicking it might show an error.
    *   If you manage to click upload, the frontend status should show "Upload failed: File type not allowed".
    *   **Expected Backend Behavior:** The backend should log a `POST /upload HTTP/1.1` request with a status code `400`.

5.  **Test Chat Functionality:**
    *   In the "Chat About Your Resume" section, type a message into the input field (e.g., "Hello AI").
    *   Click the "Send" button.
    *   **Expected Frontend Behavior:**
        *   Your message ("Hello AI") should appear in the chat history, labeled "You".
        *   A loading indicator (three dots) should appear briefly under the "AI" label.
        *   A response message should appear, labeled "AI", saying: "This is a placeholder response to your message: Hello AI. Implement the actual AI logic here."
    *   **Expected Backend Behavior:** Look at the backend terminal. You should see:
        *   `Received chat message: Hello AI`
        *   `Generating response for: Hello AI (placeholder)`
        *   A line showing a `POST /chat HTTP/1.1` request with a status code `200`.

## Troubleshooting Common Issues

*   **Frontend Doesn't Load (Page Not Found/Cannot Connect):**
    *   Is the React development server running? Check the `frontend` terminal for errors. Try running `npm start` again.
    *   Are you using the correct URL (`http://localhost:3000`)?

*   **Upload/Chat Fails with Network Error / CORS Error:**
    *   **Is the backend server running?** Check the `backend` terminal. If it crashed or wasn't started, the frontend cannot connect.
    *   **Did you install and enable CORS correctly in the backend?**
        *   Make sure `Flask-CORS` is in `backend/requirements.txt`.
        *   Make sure you ran `pip install -r requirements.txt` in the activated virtual environment *after* adding `Flask-CORS`.
        *   Verify the `CORS(app, ...)` line is present in `backend/app.py`.
        *   Check the browser's developer console (usually opened with F12) for specific CORS error messages. They often indicate a mismatch between the frontend's origin (`http://localhost:3000`) and the origins allowed by the backend.
    *   **Is the backend URL correct in the frontend code?** Double-check the `axios.post` calls in `frontend/src/App.tsx` use `http://localhost:5001` (or your actual backend address/port).

*   **File Upload Fails with "File type not allowed":** Ensure you are selecting a file with a `.pdf` or `.docx` extension.

*   **Backend Crashes / Shows Errors:** Read the error message in the `backend` terminal carefully. It often points to the exact line in `app.py` causing the issue. Common causes include missing dependencies, incorrect file paths, or errors in the (currently placeholder) processing logic.

*   **AI Responses Are Only Placeholders:** This is expected! We haven't implemented the actual LangChain, Ollama, and PostgreSQL integration logic yet. That involves more complex code for loading documents, creating embeddings, setting up the vector store, and defining the chat chain, which goes beyond this initial setup guide.

By following these testing steps, you can verify that the basic structure of your application is working correctly and that the frontend and backend can communicate. This forms a solid foundation for adding the more advanced AI features later.
