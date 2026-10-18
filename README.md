# 🌱 Calcul d'empreinte carbone

## Présentation

Application web développée avec **Angular** dans le cadre de ma formation de **Conceptrice Développeuse d'Applications (CDA)**.

Elle permet d'estimer les émissions de CO₂ liées aux trajets en voiture, de suivre la consommation de carburant et de consulter un récapitulatif des voyages enregistrés.

## Fonctionnalités

- 🚗 Ajout de trajets avec distance et consommation de carburant.
- 🌍 Calcul automatique des émissions de CO₂.
- 📊 Affichage des distances, de la consommation totale et des émissions cumulées.
- 💾 Sauvegarde des voyages dans le navigateur avec `localStorage`.
- 🔄 Réinitialisation des voyages et restauration des données de démonstration.
- 👤 Navigation entre les pages Accueil, Résumé et Profil.
- 🔐 Simulation de connexion et de déconnexion avec protection des routes.

## Technologies utilisées

- **Angular 22**
- **TypeScript**
- **HTML5**
- **CSS3**
- **Angular Router**
- **Git et GitHub**

## Installation et lancement

Cloner le dépôt :

```bash
git clone https://github.com/meryam89/calcul-empreinte-carbone.git
```

Accéder au projet :

```bash
cd calcul-empreinte-carbone
```

Installer les dépendances :

```bash
npm install
```

Démarrer l'application :

```bash
ng serve
```

Ouvrir ensuite `http://localhost:4200/` dans un navigateur.

## Compilation

Pour générer une version de production :

```bash
ng build
```

## Informations importantes

- La connexion est **simulée** : il n'y a pas de serveur d'authentification.
- Les voyages sont enregistrés localement dans le navigateur, sans base de données.
- Le calcul des émissions repose sur un facteur indicatif de **2,3 kg de CO₂ par litre de carburant**.

## Objectif pédagogique

Ce projet m'a permis de mettre en pratique la création de composants Angular, les services, l'injection de dépendances, le routage, les formulaires, la manipulation de données et leur persistance locale.

## Dépôt GitHub

[Consulter le code source](https://github.com/meryam89/calcul-empreinte-carbone)
