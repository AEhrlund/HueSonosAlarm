import json
import time
from flask import Flask, render_template, request, Response

app = Flask(__name__,
            static_folder = "../frontend/huesonosalarm",
            template_folder="../frontend/huesonosalarm"
           )

mockdata = { 'time': None, 'fadein': 20 }

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/huesonosalarm/setalarm', methods=['POST'])
def setalarm():
    print('Set alarm')
    global mockdata
    mockdata = request.get_json()
    print(mockdata)
    time.sleep(3)
    return "Alarm successfully set"

@app.route('/huesonosalarm/cancelalarm', methods=['DELETE'])
def cancelalarm():
    print('Cancel alarm')
    global mockdata
    mockdata['time'] = None
    print(mockdata)
    time.sleep(3)
    return "Alarm successfully canceled"

@app.route('/huesonosalarm/getalarm', methods=['GET'])
def getalarm():
    print('Get alarm')
    global mockdata
    print(mockdata)
    time.sleep(3)
    return Response(json.dumps(mockdata), mimetype='text/json')
