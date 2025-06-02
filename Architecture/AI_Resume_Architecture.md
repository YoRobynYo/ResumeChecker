
# AI Resume Assistant Architecture

```
AI Resume Assistant Architecture
--------------------------------

|__ Frontend (React)
    |–– Resume Upload Interface
    |–– Interactive AI Feedback Window
    |–– Pro Feature Purchase & Access
    |–– Talks to Backend (Flask) via REST API

|__ Backend (Flask)
    |–– Accepts Resume + Chat Input
    |–– API Routing to:
         |__ LangChain (AI Orchestration)
         |__ Ollama (LLM + Embeddings)
         |__ PostgreSQL (Database)
    |–– Handles Sessions, Payments, Pro Access

|__ LangChain (Orchestration Layer)
    |–– Manages Flow Between Components
    |–– Sends Resume Text to:
         |__ Ollama LLM for Chat-Based Feedback
         |__ Ollama Embedding Model
    |–– Generates Context-Aware Responses
    |–– Controls Resume Scoring, Suggestions

|__ Ollama (Local AI Models)
    |–– Chat LLM (e.g., LLaMA3, Mistral) for AI Feedback
    |–– Embedding Model (e.g., nomic-embed-text) for Semantic Matching
    |–– Converts Resume Text to Embeddings

|__ PostgreSQL + pgvector
    |–– Stores:
         |__ Uploaded Resumes (Raw Text + Chunks)
         |__ Resume Embeddings
         |__ User Profiles & Pro Status
    |–– Enables:
         |__ Vector Similarity Search
         |__ Retrieval-Augmented Generation (RAG)

|__ Pricing / Monetization
    |–– Standard Plan (£29.99): 
         |__ Basic AI Resume Feedback
    |–– Pro Plan (£49.99):
         |__ Unlimited Checks
         |__ Enhanced Optimization Feedback
         |__ Resume Scoring & Fix Suggestions
    |–– Optional:
         |__ Stripe Integration
         |__ License Key Access System

|__ Deployment
    |–– Local Dev Environment
    |–– GitHub for Codebase + Version Control
    |–– Cloud Deployment Plan:
         |__ Heroku (Backend)
         |__ Cloudflare Pages + GitHub (Frontend)
    |–– Message:
         "Deploy your website for free with Cloudflare Pages and GitHub!"
```
