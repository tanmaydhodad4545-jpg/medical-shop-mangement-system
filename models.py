from app import db

class Medicine(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    company = db.Column(db.String(100))
    price = db.Column(db.Float)
    quantity = db.Column(db.Integer)
    expiry = db.Column(db.Date)
from flask import Blueprint, request, jsonify
from models import Medicine
from app import db

medicine = Blueprint("medicine", __name__)

@medicine.route("/api/medicine", methods=["POST"])
def add_medicine():

    data = request.json

    med = Medicine(
        name=data["name"],
        company=data["company"],
        price=data["price"],
        quantity=data["quantity"],
        expiry=data["expiry"]
    )

    db.session.add(med)
    db.session.commit()

    return jsonify({"message":"Medicine Added"})    