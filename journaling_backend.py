from flask import Flask, request, jsonify
import sqlite3
from datetime import datetime
from flask_cors import CORS   # allows frontend and backend communication

app = Flask(__name__)
CORS(app)  # Enable CORS if frontend and backend are on different ports
DB_NAME = "journal.db"


# Initialize database with indexes
def init_db():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS entries (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    title TEXT,
                    content TEXT,
                    mood TEXT,
                    timestamp TEXT
                )''')

    # Add indexes for faster filtering
    c.execute("CREATE INDEX IF NOT EXISTS idx_timestamp ON entries(timestamp)")
    c.execute("CREATE INDEX IF NOT EXISTS idx_mood ON entries(mood)")

    conn.commit()
    conn.close()


@app.route("/add_entry", methods=["POST"])
def add_entry():
    data = request.get_json()
    title = data.get("title", "Untitled")
    content = data.get("content", "")
    mood = data.get("mood", "unspecified")
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("INSERT INTO entries (title, content, mood, timestamp) VALUES (?, ?, ?, ?)",
              (title, content, mood, timestamp))
    conn.commit()
    conn.close()

    return jsonify({"message": "Entry saved!", "timestamp": timestamp})


@app.route("/get_entries", methods=["GET"])
def get_entries():
    mood = request.args.get("mood")
    start_date = request.args.get("start_date")
    end_date = request.args.get("end_date")

    query = "SELECT id, title, content, mood, timestamp FROM entries WHERE 1=1"
    params = []

    if mood:
        query += " AND mood = ?"
        params.append(mood)

    if start_date and end_date:
        query += " AND timestamp BETWEEN ? AND ?"
        params.append(start_date)
        params.append(end_date)

    query += " ORDER BY timestamp DESC"

    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute(query, params)
    rows = c.fetchall()
    conn.close()

    entries = [
        {"id": r[0], "title": r[1], "content": r[2], "mood": r[3], "timestamp": r[4]}
        for r in rows
    ]
    return jsonify(entries)


if __name__ == "__main__":
    init_db()
    app.run(debug=True)

