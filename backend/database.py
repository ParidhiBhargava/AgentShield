import sqlite3
import uuid

# Connect to database
connection = sqlite3.connect("database.db")
cursor = connection.cursor()

# Create table if it doesn't exist
cursor.execute("""
CREATE TABLE IF NOT EXISTS agents(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    agent_id TEXT,
    agent_name TEXT,
    owner_name TEXT,
    role TEXT,
    trust_score INTEGER,
    expiry_date TEXT
)
""")

# Function to register an AI Agent
def register_agent(agent_name, owner_name, role, expiry_date):

    agent_id = str(uuid.uuid4())[:8]

    cursor.execute("""
    INSERT INTO agents
    (agent_id, agent_name, owner_name, role, trust_score, expiry_date)

    VALUES (?, ?, ?, ?, ?, ?)
    """,
    (
        agent_id,
        agent_name,
        owner_name,
        role,
        100,
        expiry_date
    ))

    connection.commit()

    print("Agent Registered Successfully!")
    print("Agent ID:", agent_id)

# Example
register_agent(
    "FlightBot",
    "Paridhi",
    "Travel Assistant",
    "31-12-2026"
)

connection.close()