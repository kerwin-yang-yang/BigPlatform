
from flask import Flask, jsonify, request
import json

from flask_cors import CORS
app = Flask(__name__)
CORS(app, resources={r'/*': {'origins': '*'}})
@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"



@app.route("/post")
def returns():
     
     if request.method=='GET':
            val=request.args.get('address').split("/")  
            rName =val[4].split(".")
            file=open("data/exercism-python.json","r",encoding='utf-8')
            data1 = json.load(file)
            # for i in data1['basic']:
            #     print(i)
            file.close()
            # data={'msg': 'ok'}
            # return jsonify(data)
            return data1




if __name__ == '__main__':
    app.run(host='0.0.0.0', port=1234,debug="true")
