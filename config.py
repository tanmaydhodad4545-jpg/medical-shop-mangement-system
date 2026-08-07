import os

class Config:
    SECRET_KEY = "medical_shop_secret"

    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:password@localhost/medical_shop"

    SQLALCHEMY_TRACK_MODIFICATIONS = False