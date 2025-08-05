#!/bin/bash

echo "🚀 Démarrage de AH&DJ Barbershop"
echo "=================================="

# Vérifier si Python est installé
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Vérifier si npm est installé
if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

echo "✅ Prérequis vérifiés"

# Installer les dépendances du backend
echo "📦 Installation des dépendances Python..."
cd backend
if [ ! -d "venv" ]; then
    echo "🔧 Création de l'environnement virtuel Python..."
    python3 -m venv venv
fi

source venv/bin/activate
pip install -r requirements.txt
cd ..

# Installer les dépendances du frontend
echo "📦 Installation des dépendances Node.js..."
cd frontend
npm install
cd ..

echo "✅ Toutes les dépendances sont installées"
echo ""
echo "🌐 Lancement de l'application..."
echo ""

# Lancer le backend en arrière-plan
echo "🔧 Démarrage du backend Flask..."
cd backend
source venv/bin/activate
python app.py &
BACKEND_PID=$!
cd ..

# Attendre un peu que le backend démarre
sleep 3

# Lancer le frontend
echo "🎨 Démarrage du frontend React..."
cd frontend
npm run dev &
FRONTEND_PID=$!
cd ..

echo ""
echo "🎉 Application démarrée avec succès !"
echo ""
echo "📱 Frontend: http://localhost:5173"
echo "🔧 Backend API: http://localhost:5000"
echo ""
echo "Appuyez sur Ctrl+C pour arrêter l'application"

# Fonction pour nettoyer les processus
cleanup() {
    echo ""
    echo "🛑 Arrêt de l'application..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo "✅ Application arrêtée"
    exit 0
}

# Capturer Ctrl+C
trap cleanup SIGINT

# Attendre que les processus se terminent
wait 