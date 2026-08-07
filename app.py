from flask import Flask, render_template

app = Flask(__name__)


@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")


@app.route("/medicines")
def medicines():
    return render_template("medicines.html")


@app.route("/customers")
def customers():
    return render_template("customers.html")


@app.route("/billing")
def billing():
    return render_template("billing.html")


if __name__ == "__main__":
    app.run(debug=True)