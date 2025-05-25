from flask import Flask, request, jsonify
from datetime import datetime
import psycopg2
import os

app = Flask(__name__)

#loaded in render enviornment variable
URL =  os.getenv("DATABASE_URL")
conn = psycopg2.connect(URL)
c = conn.cursor()


@app.route('/log', methods=['POST'])
def log_visit():
    ip = request.remote_addr
    user_agent = request.headers.get("User-Agent")
    data = request.json

    site = data.get('url', 'unknown')
    access_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    try:
        c.execute(
            "INSERT INTO access_logs (ip_address, site, access_time, user_agent) VALUES (%s, %s, %s, %s)",(ip, site, access_time, user_agent))
        conn.commit()
        return jsonify({"status": "logged"}), 200
    except Exception as e:
        print("Error logging to DB:", e)
        return jsonify({"status": "error"}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=1000)
