# Architecture du Projet AH&DJ Barbershop

## Vue d'ensemble

L'application AH&DJ Barbershop est une application web moderne construite avec une architecture frontend/backend séparée.

## Structure du Projet

```
barbershop/
├── frontend/                 # Application React/Vite
│   ├── src/
│   │   ├── components/      # Composants réutilisables
│   │   ├── pages/          # Pages de l'application
│   │   ├── App.jsx         # Composant principal
│   │   ├── main.jsx        # Point d'entrée
│   │   └── index.css       # Styles globaux
│   ├── package.json        # Dépendances Node.js
│   ├── vite.config.js      # Configuration Vite
│   └── tailwind.config.js  # Configuration Tailwind CSS
├── backend/                 # API Flask
│   ├── app.py             # Application Flask principale
│   └── requirements.txt   # Dépendances Python
├── docs/                   # Documentation
├── start.sh               # Script de lancement
└── README.md              # Documentation principale
```

## Technologies Utilisées

### Frontend
- **React 18** : Framework JavaScript pour l'interface utilisateur
- **Vite** : Outil de build rapide et moderne
- **Tailwind CSS** : Framework CSS utilitaire
- **Framer Motion** : Bibliothèque d'animations
- **React Router** : Routage côté client
- **Axios** : Client HTTP pour les appels API
- **Lucide React** : Icônes modernes

### Backend
- **Python 3.11+** : Langage de programmation
- **Flask** : Framework web léger
- **Flask-CORS** : Gestion des requêtes cross-origin
- **SQLite** : Base de données (simulée avec des données statiques)

## Fonctionnalités

### 1. Landing Page
- Design authentique inspiré des barbershops français
- Navigation responsive
- Sections : Hero, Services, À propos, CTA

### 2. Page des Tarifs
- Affichage des services et prix
- Catégorisation : Coupes, Soins, Packages
- Intégration avec l'API backend
- Design moderne avec animations

### 3. Page de Contact
- Formulaire de contact
- Informations du salon
- Intégration avec l'API backend

### 4. Redirection Planity
- Boutons de prise de rendez-vous
- Redirection vers la plateforme Planity
- Intégration dans toutes les pages

## API Endpoints

### Backend Flask

| Endpoint | Méthode | Description |
|----------|---------|-------------|
| `/` | GET | Page d'accueil de l'API |
| `/api/tarifs` | GET | Récupérer tous les tarifs |
| `/api/tarifs/<categorie>` | GET | Tarifs par catégorie |
| `/api/salon` | GET | Informations du salon |
| `/api/planity` | GET | URL Planity |
| `/api/contact` | POST | Envoi de message de contact |

## Design System

### Couleurs
- **Barber Orange** : `#f2751f` (couleur principale)
- **Dark** : `#1a1a1a` (texte principal)
- **Gray** : Palette de gris pour les éléments secondaires

### Typographie
- **Playfair Display** : Titres et éléments de marque
- **Inter** : Texte de contenu et interface

### Composants
- Boutons primaires et secondaires
- Cards avec hover effects
- Animations fluides avec Framer Motion
- Design responsive mobile-first

## Développement

### Prérequis
- Node.js 18+
- Python 3.11+
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone <repository>
cd barbershop

# Lancer avec le script automatique
./start.sh
```

### Développement Manuel
```bash
# Backend
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py

# Frontend (nouveau terminal)
cd frontend
npm install
npm run dev
```

## Déploiement

### Frontend
- Build de production : `npm run build`
- Serveur statique pour les fichiers générés

### Backend
- Serveur WSGI (Gunicorn recommandé)
- Variables d'environnement pour la configuration
- Base de données en production

## Sécurité

- Validation des données côté serveur
- CORS configuré pour le développement
- Sanitisation des entrées utilisateur
- Headers de sécurité recommandés

## Performance

- Lazy loading des composants
- Optimisation des images
- Code splitting avec Vite
- Cache des requêtes API
- Animations optimisées

## Maintenance

- Mise à jour régulière des dépendances
- Tests automatisés (à implémenter)
- Monitoring des performances
- Sauvegarde des données 