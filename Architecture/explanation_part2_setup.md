# Setting Up Your Project: Structure and Prerequisites

Now that we understand the architecture, let's set up the basic structure for our project files and discuss the tools and software you'll need to have installed on your computer to build and run this AI Resume Assistant.

## Project Directory Structure

We'll organize our code into a main folder containing subfolders for the different parts of the application. We've created the following structure inside a main directory named `ai_resume_assistant_setup`:

```
ai_resume_assistant_setup/
├── frontend/       # Code for the React user interface
├── backend/        # Code for the LangChain orchestration, API, and AI logic
├── documents/      # Place to store example resumes (PDF/DOCX) for testing
└── explanation.md  # This combined explanation document (eventually)
```

*   **`frontend/`**: This directory will hold all the files related to the React application that the user interacts with in their browser.
*   **`backend/`**: This directory will contain the Python code for our server. This includes the LangChain setup, code to interact with Ollama models, logic for handling file uploads, communication with the PostgreSQL database, and the API that the frontend talks to. We'll likely use a Python web framework like Flask or FastAPI here.
*   **`documents/`**: This is a place to keep sample resume files (like PDFs or DOCX files) that you can use to test the application during development.

## Prerequisites: Software You Need to Install

Before we start coding, you need to make sure you have the necessary software installed on your system. Since you're a beginner, take your time with each installation, and don't hesitate to consult the official documentation for each tool if you encounter issues.

1.  **Node.js and npm (or pnpm/yarn):**
    *   **What it is:** Node.js is a JavaScript runtime that lets you run JavaScript code outside of a web browser. npm (Node Package Manager) comes with Node.js and is used to install and manage JavaScript libraries, including React.
    *   **Why we need it:** For building and running the React frontend application.
    *   **How to get it:** Visit the official Node.js website ([https://nodejs.org/](https://nodejs.org/)) and download the LTS (Long-Term Support) version recommended for most users. The installer usually includes npm.

2.  **Python and pip:**
    *   **What it is:** Python is a versatile programming language. pip is the package installer for Python, used to install libraries like LangChain, Flask/FastAPI, etc.
    *   **Why we need it:** For writing the backend logic, using LangChain, and interacting with Ollama and PostgreSQL.
    *   **How to get it:** Visit the official Python website ([https://www.python.org/](https://www.python.org/)) and download the latest stable version (e.g., Python 3.10 or newer). Make sure to check the box during installation that says "Add Python to PATH" (or similar) to make it easily accessible from your command line/terminal. pip usually comes bundled with Python.

3.  **PostgreSQL Database:**
    *   **What it is:** A powerful, open-source object-relational database system.
    *   **Why we need it:** To store the text chunks from resumes and their corresponding vector embeddings for efficient similarity search.
    *   **How to get it:** Installation varies by operating system. Visit the PostgreSQL website ([https://www.postgresql.org/download/](https://www.postgresql.org/download/)) for instructions specific to your OS (Windows, macOS, Linux). After installation, you'll typically need to initialize the database server and create a database and a user for our application.
    *   **Important Extension (`pgvector`):** We specifically need the `pgvector` extension for PostgreSQL to handle the vector embeddings efficiently. After installing PostgreSQL, you'll need to install this extension and enable it within your database. Instructions are available on the `pgvector` GitHub repository ([https://github.com/pgvector/pgvector](https://github.com/pgvector/pgvector)). This usually involves downloading the extension and running a command like `CREATE EXTENSION vector;` within your target database using a tool like `psql` or a GUI client (like pgAdmin).

4.  **Ollama:**
    *   **What it is:** A tool that makes it easy to download and run various open-source large language models (LLMs) locally on your computer.
    *   **Why we need it:** To run the chat model and the embedding model required by our application without relying on external cloud APIs.
    *   **How to get it:** Visit the Ollama website ([https://ollama.com/](https://ollama.com/)) and follow the download and installation instructions for your operating system.
    *   **Pulling Models:** Once Ollama is installed, you'll need to download the specific models we plan to use. You do this using the command line. For example, you might need:
        *   A chat model: `ollama pull llama3` (or another suitable chat model like `mistral`)
        *   An embedding model: `ollama pull mxbai-embed-large` (or another suitable embedding model)
        Make sure the models you pull are running and accessible via Ollama before proceeding with the backend code.

5.  **Git (Optional but Recommended):**
    *   **What it is:** A version control system used for tracking changes in code.
    *   **Why we need it:** While not strictly necessary to run the code, it's highly recommended for managing your project, tracking changes, and collaborating if you ever work with others. It helps you revert to previous versions if something breaks.
    *   **How to get it:** Visit the Git website ([https://git-scm.com/downloads](https://git-scm.com/downloads)).

## Key Libraries We Will Install Later

Once the prerequisites are set up, we will use package managers (npm for frontend, pip for backend) to install specific libraries, including:

*   **Frontend (npm):** `react`, `react-dom`, `axios` (for making API calls), etc.
*   **Backend (pip):** `langchain`, `langchain-community`, `langchain-postgres`, `ollama`, `flask` or `fastapi` (web framework), `psycopg2-binary` (PostgreSQL driver), `pypdf`, `python-docx` (for reading resume files), etc.

Don't worry about installing these libraries just yet; we'll cover that in the next steps when we provide the code examples for each component.
