import os
from flask import Flask, render_template

app = Flask(__name__,
            static_folder = "../frontend/huesonosalarm",
            template_folder="../frontend/huesonosalarm"
           )

@app.route('/')
def index():
    print(os.getcwd())
    return render_template("index.html")
