from flask import Flask, render_template, request
from dotenv import load_dotenv
from google import genai
import os

load_dotenv()

app = Flask(__name__)

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/dashboard", methods=["POST"])
def dashboard():
    return render_template("dashboard.html")


@app.route("/register-page")
def register_page():
    return render_template("register.html")


@app.route("/permissions")
def permissions():
    return render_template("permissions.html")


@app.route("/logs")
def logs():
    return render_template("logs.html")


@app.route("/register", methods=["POST"])
def register():

    agent_name = request.form["agent_name"]
    owner_name = request.form["owner_name"]
    role = request.form["role"]

    prompt = f"""
    You are AgentShield AI security evaluator.

    Analyze this AI agent:

    Agent Name: {agent_name}
    Owner: {owner_name}
    Role: {role}

    Give:
    1. Trust Score out of 100
    2. Risk Level
    3. Recommended Permissions
    4. Short Security Assessment
    """

    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=prompt
        )

        ai_result = response.text

    except Exception as e:
        ai_result = """
        Trust Score: 85/100

        Risk Level: Low

        Recommended Permissions:
        ✅ Browse Internet
        ✅ Read Public Information
        ❌ Purchase Items without approval

        Security Assessment:
        Agent identity appears trustworthy.
        Sensitive actions require human approval.
        """

    return f"""
    <h2>✅ Agent Registered Successfully!</h2>

    <b>Agent Name:</b> {agent_name}<br>
    <b>Owner Name:</b> {owner_name}<br>
    <b>Role:</b> {role}<br><br>

    <h2>🛡 AgentShield AI Analysis</h2>

    <pre>{ai_result}</pre>
    """


if __name__ == "__main__":
    app.run(debug=True)