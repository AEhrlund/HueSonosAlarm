import os
from flask import Flask, render_template

app = Flask(__name__,
            static_folder = "../frontend/dist",
            template_folder="../frontend/dist"
           )

@app.route('/')
def index():
    print(os.getcwd())
    return render_template("index.html")
