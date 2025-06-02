# Connecting the Pieces: Running the Frontend and Backend

We now have the basic code structure for both the frontend (React App) and the backend (Flask API). Let's walk through how to run them and how they communicate with each other.

## 1. Running the Backend (Flask API)

The backend server needs to be running first so the frontend can send requests to it.

**Steps:**

1.  **Open a Terminal or Command Prompt:** Navigate to the `backend` directory within your main project folder (`ai_resume_assistant_setup`).
    ```bash
    cd path/to/your/ai_resume_assistant_setup/backend
    ```

2.  **Create and Activate a Virtual Environment (Recommended):** This isolates the project's Python dependencies.
    ```bash
    # Create the virtual environment (you only need to do this once)
    python -m venv venv

    # Activate the virtual environment:
    # On Windows (cmd.exe/powershell):
    venv\Scripts\activate
    # On macOS/Linux (bash/zsh):
    source venv/bin/activate
    ```
    You should see `(venv)` appear at the beginning of your terminal prompt, indicating the virtual environment is active.

3.  **Install Dependencies:** Install all the required Python libraries listed in `requirements.txt`.
    ```bash
    pip install -r requirements.txt
    ```
    *Note:* This command might take a few minutes the first time.

4.  **(Optional) Environment Variables:** For more complex setups, especially database connections, you'd use environment variables (e.g., in a `.env` file). For our current basic example, the database connection and Ollama URLs are placeholders or assume defaults (like Ollama running on `http://localhost:11434`). We'll skip explicit `.env` setup for now to keep it simple, but be aware this is standard practice for real applications.

5.  **Run the Flask Application:**
    ```bash
    python app.py
    ```
    You should see output indicating the server is running, typically something like:
    ```
     * Running on http://0.0.0.0:5001/
     * Debug mode: on
    ```
    This means your backend API is now listening for requests on port 5001.
    *Keep this terminal window open while the backend is running.*

## 2. Running the Frontend (React App)

Now, let's start the user interface.

**Steps:**

1.  **Open a *New* Terminal or Command Prompt:** It's important to keep the backend terminal running. Navigate to the `frontend` directory.
    ```bash
    cd path/to/your/ai_resume_assistant_setup/frontend
    ```

2.  **Install Dependencies (if needed):** `create-react-app` usually installs dependencies automatically, but if you encounter issues, you can run:
    ```bash
    npm install
    ```

3.  **Start the Development Server:**
    ```bash
    npm start
    ```
    This command will usually:
    *   Compile the React application.
    *   Start a development web server (often on port 3000).
    *   Automatically open the application in your default web browser at `http://localhost:3000`.

## 3. How They Connect: API Calls and CORS

*   **API Calls:** The React frontend (specifically the code in `frontend/src/App.tsx`) uses the `axios` library to make HTTP requests to the backend. When you upload a file or send a chat message, the React app sends a POST request to `http://localhost:5001/upload` or `http://localhost:5001/chat`, respectively. The backend Flask app receives these requests, processes them (currently with placeholder logic), and sends back a response.

*   **Backend URL:** Notice the URL `http://localhost:5001` is hardcoded in `App.tsx`. This tells the frontend where to find the backend API. If your backend runs on a different address or port, you would need to update this URL in the frontend code.

*   **CORS (Cross-Origin Resource Sharing):** Web browsers have security restrictions that prevent a web page from making requests to a different domain (or port) than the one it was served from. Since our frontend runs on `http://localhost:3000` and our backend runs on `http://localhost:5001` (different ports), this is a cross-origin request. The backend needs to explicitly tell the browser that it's okay to accept requests from the frontend's origin. We'll need to add a library called `Flask-CORS` to the backend to handle this.

**Next Steps:** We will update the backend code slightly to include CORS support and then move on to explaining how to test the basic setup.
