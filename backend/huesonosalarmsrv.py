from flask import Flask, render_template, request

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
    global mockdata
    mockdata = request.get_json()
    print('cancelalarm')
    print(mockdata)
    return "OK"

@app.route('/huesonosalarm/cancelalarm', methods=['DELETE'])
def cancelalarm():
    global mockdata
    mockdata.time = None
    print('setalarm')
    print(mockdata)
    return "OK"

@app.route('/huesonosalarm/getalarm', methods=['GET'])
def getalarm():
    print('getalarm')
    print(mockdata)
    return mockdata

