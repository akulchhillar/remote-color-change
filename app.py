from flask import Flask, render_template, request
import requests
from flask_socketio import SocketIO, emit

app = Flask(__name__)

app.config["SECRET_KEY"] = "hope"
socketio = SocketIO(app)


@app.route('/')
def hello_world():
    return render_template("index.html")


@socketio.on("my event")
def handle_my_custom_event(json):
    
    socketio.emit("my response", json)


@app.route('/hit', methods=["GET"])
def hit():
    if request.method == "GET":

        url = "http://www.colr.org/json/color/random"
        r = requests.get(url)
        color = r.json()
        handle_my_custom_event(color)
        return {"msg": color}


if __name__ == "__main__":
    socketio.run(app, debug=True)
