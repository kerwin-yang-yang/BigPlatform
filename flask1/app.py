from flask import Flask, jsonify, request

from flask_cors import CORS
app = Flask(__name__)
CORS(app, resources={r'/*': {'origins': '*'}})
@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"



@app.route("/post")
def returns():
     
     if request.method=='GET':
            val=request.args.get('address')   
            print(val)
            data={'msg': 'ok'}
            return jsonify(data)




if __name__ == '__main__':
    app.run(host='0.0.0.0', port=1234,debug="true")