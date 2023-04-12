from flask import Flask, render_template, request
from pswGen import PasswordGenerator

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate-passwords', methods=['POST'])
def generate_passwords():
    # Récupération des données du formulaire
    firstname = request.form['firstname']
    lastname = request.form['lastname']
    birthdate = request.form['birthdate']
    # Génération du mot de passe
    password_generator = PasswordGenerator()
    password_generator.minlen = 3
    password_generator.maxlen = 10
    password_generator.minuchars = 2
    password_generator.minlchars = 2
    password_generator.minnumbers = 2
    password_generator.minschars = 2
    password = password_generator.generate()
    # Affichage de la page de résultat
    return render_template('result.html', firstname=firstname, lastname=lastname, birthdate=birthdate, password=password)

if __name__ == '__main__':
    app.run(debug=True)
