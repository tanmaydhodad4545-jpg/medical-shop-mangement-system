from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config["SECRET_KEY"] = "medicalshop123"

app.config["SQLALCHEMY_DATABASE_URI"] = \
    "mysql+pymysql://root:password@localhost/medical_shop"

db = SQLAlchemy(app)

from routes import auth, medicine, customer, billing

if __name__ == "__main__":
    app.run(debug=True)