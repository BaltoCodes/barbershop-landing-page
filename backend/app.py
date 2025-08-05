from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import os
from datetime import datetime

app = Flask(__name__, static_folder="dist", static_url_path="/static")
CORS(app)

# Configuration
app.config['JSON_AS_ASCII'] = False

# Données des tarifs (simulation d'une base de données)
TARIFS = {
    "coupes": [
        {
            "id": 1,
            "nom": "Coupe Homme Classique",
            "description": "Coupe traditionnelle avec finitions soignées",
            "prix": 20,
            "duree": "30 min"
        },
        {
            "id": 2,
            "nom": "Coupe Homme Moderne",
            "description": "Coupe tendance avec dégradé et finitions",
            "prix": 30,
            "duree": "45 min"
        },
        {
            "id": 3,
            "nom": "Coupe + Barbe",
            "description": "Coupe complète avec soin de la barbe",
            "prix": 35,
            "duree": "60 min"
        },
        {
            "id": 4,
            "nom": "Rasage Traditionnel",
            "description": "Rasage au coupe-chou avec serviette chaude",
            "prix": 20,
            "duree": "30 min"
        }
    ],
    "soins": [
        {
            "id": 5,
            "nom": "Soin de la Barbe",
            "description": "Nettoyage, huile et cire de barbe",
            "prix": 15,
            "duree": "20 min"
        },
        {
            "id": 6,
            "nom": "Soin du Visage",
            "description": "Nettoyage et hydratation du visage",
            "prix": 18,
            "duree": "25 min"
        }
    ],
    "packages": [
        {
            "id": 7,
            "nom": "Pack Gentleman",
            "description": "Coupe + Barbe + Soin du visage",
            "prix": 45,
            "duree": "90 min",
            "economie": 8
        }
    ]
}

# Informations du salon
SALON_INFO = {
    "nom": "AH&DJ Barbershop",
    "adresse": "121 Rue de Charenton, 75012 Paris",
    "telephone": "06 98 35 27 82",
    "email": "contact@ahdj-barbershop.fr",
    "horaires": {
        "lundi": "09:00 - 21:00",
        "mardi": "09:00 - 21:00",
        "mercredi": "09:00 - 21:00",
        "jeudi": "09:00 - 21:00",
        "vendredi": "09:00 - 21:00",
        "samedi": "09:00 - 21:00",
        "dimanche": "09:00 - 21:00"
    },
    "planity_url": "https://www.treatwell.fr/salon/ah-dj-coiffeur-barbier/?utm_source=google&utm_medium=rwg&hl=fr-FR&gei=GYWOaNfXIt2jkdUPi8yx2QU"
}





@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, 'index.html')




@app.route('/ping')
def home():
    """Route d'accueil de l'API"""
    return jsonify({
        "message": "Bienvenue sur l'API AH&DJ Barbershop",
        "version": "1.0.0",
        "timestamp": datetime.now().isoformat()
    })

@app.route('/api/tarifs', methods=['GET'])
def get_tarifs():
    """Récupérer tous les tarifs"""
    return jsonify(TARIFS)

@app.route('/api/tarifs/<categorie>', methods=['GET'])
def get_tarifs_categorie(categorie):
    """Récupérer les tarifs par catégorie"""
    if categorie in TARIFS:
        return jsonify(TARIFS[categorie])
    else:
        return jsonify({"error": "Catégorie non trouvée"}), 404

@app.route('/api/salon', methods=['GET'])
def get_salon_info():
    """Récupérer les informations du salon"""
    return jsonify(SALON_INFO)

@app.route('/api/planity', methods=['GET'])
def get_planity_url():
    """Récupérer l'URL Planity pour la prise de rendez-vous"""
    return jsonify({
        "planity_url": SALON_INFO["planity_url"]
    })

@app.route('/api/contact', methods=['POST'])
def contact():
    """Endpoint pour les demandes de contact"""
    data = request.get_json()
    
    if not data or 'nom' not in data or 'email' not in data or 'message' not in data:
        return jsonify({"error": "Données manquantes"}), 400
    
    # Ici on pourrait ajouter l'envoi d'email ou sauvegarde en base
    return jsonify({
        "message": "Message reçu, nous vous recontacterons rapidement",
        "timestamp": datetime.now().isoformat()
    })

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Route non trouvée"}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({"error": "Erreur interne du serveur"}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port) 