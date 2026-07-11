# AgentShield
AI Identity and Permission Infrastructure for AI Agents

## Overview

AgentShield is an AI-powered security layer designed to improve the safety and trustworthiness of AI agents. It helps verify AI agent identity, evaluate risk levels, and recommend appropriate permissions before allowing sensitive actions.

## Problem

As AI agents become more autonomous, they may access sensitive information or perform important tasks. Without proper verification and control, this can create security risks.

## Solution

AgentShield provides an intelligent assessment system that analyzes registered AI agents and generates:
- Trust scores
- Risk levels
- Recommended permissions
- Security assessments

## Features

- 🤖 AI Agent Registration
- 🔐 Agent identity verification
- 📊 AI-based trust score generation
- ⚠️ Risk assessment
- ✅ Permission recommendations
- 🛡️ Security analysis dashboard

## Tech Stack

- Python
- Flask
- Google Gemini API
- HTML
- CSS
- JavaScript
- SQLite

## How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/ParidhiBhargava/AgentShield.git

### 2. Install dependencies
```bash
pip install -r requirements.txt

### 3. Configure API Key
Create a `.env` file in the project directory:
```env
GEMINI_API_KEY=your_api_key_here

```markdown

### 4. Run the application
```bash
python app.py

Open your browser and go to:
http://127.0.0.1:5000

## Future Improvements

- Real-time agent monitoring
- Advanced threat detection
- Detailed audit logs
- Role-based access control

## Team

Built for a hackathon project.

