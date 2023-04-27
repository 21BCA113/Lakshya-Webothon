from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/length', methods=['POST'])
def string_length():
    string = request.form['string']
    length = len(string)
    return f'The length of "{string}" is {length}.'

if __name__ == '__main__':
    app.run()
