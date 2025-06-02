# resume_assistant.py

from langchain_ollama import OllamaLLM  # ✅ modern import
from langchain.memory import ConversationBufferMemory
from langchain_core.prompts import ChatPromptTemplate
from langchain.chains import LLMChain

def get_resume_assistant():
    llm = OllamaLLM(
        model="llama3",
        temperature=0.4,
        num_predict=200  # Shorten verbose responses
    )

    memory = ConversationBufferMemory()

    chat_prompt = ChatPromptTemplate.from_messages([
    ("system", """You are a Resume Assistant.

    You ONLY help with resumes, CVs, and job application documents.

    You can:
    - Check spelling and grammar.
    - Suggest formatting improvements.
    - Help rewrite content to improve clarity and impact.

    If the user asks about anything outside this scope (like websites, jobs, coding, interviews, careers), respond with:
    "I'm sorry, I can only assist with resumes, CVs, and job application content."

    Keep responses short, professional, and clear. No extra introductions or explanations."""),
        ("human", "{message}")
    ])

    return LLMChain(llm=llm, prompt=chat_prompt, memory=memory)
