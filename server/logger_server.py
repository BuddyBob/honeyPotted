from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/log', methods=['POST'])
def log_visit():
    ip = request.remote_addr
    user_agent = request.headers.get("User-Agent")
    data = request.json
    print(f"{ip} - {data['url']} - {data['timeAccessed']} - {user_agent}\n")
    return "Logged", 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=1000)
