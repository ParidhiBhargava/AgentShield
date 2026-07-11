from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/register", methods=["POST"])
def register():

    agent_name = request.form["agent_name"]
    owner_name = request.form["owner_name"]
    role = request.form["role"]

    return f"""
    Agent Registered Successfully!<br><br>

    Agent Name: {agent_name}<br>
    Owner Name: {owner_name}<br>
    Role: {role}
    """

@app.route("/dashboard", methods=["POST"])
def dashboard():
    return render_template("dashboard.html")

if __name__ == "__main__":
    app.run(debug=True)