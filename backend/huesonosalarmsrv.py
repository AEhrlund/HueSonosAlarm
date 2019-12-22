import json
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
    print('setalarm')
    global mockdata
    mockdata = request.get_json()
    print(mockdata)
    return "Alarm successfully set"

@app.route('/huesonosalarm/cancelalarm', methods=['DELETE'])
def cancelalarm():
    print('cancelalarm')
    global mockdata
    mockdata['time'] = None
    print(mockdata)
    return "Alarm successfully canceled"

@app.route('/huesonosalarm/getalarm', methods=['GET'])
def getalarm():
    print('getalarm')
    global mockdata
    print(mockdata)
    return Response(json.dumps(mockdata), mimetype='text/json')
