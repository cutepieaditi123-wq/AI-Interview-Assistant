from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/interview")
def interview():
    return render_template("interview.html")

def check_answer(question, answer):
    answer = answer.lower()

    if "python" in question.lower():
        if "programming" in answer or "language" in answer:
            return {
                "score": 9,
                "feedback": "Excellent Answer!"
            }
        else:
            return {
                "score": 4,
                "feedback": "Try explaining that Python is a high-level programming language."
            }

    return {
        "score": 7,
        "feedback": "Good Attempt!"
    }

import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
