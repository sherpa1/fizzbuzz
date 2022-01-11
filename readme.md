# Fizz Buzz

## Enoncé

- Ecrire un programme qui retourne les entiers de 1 à 100
- Remplacer les multiples de 3 par "Fizz"
- Remplacer les multiples de 5 par "Buzz"
- Remplacer les multiples de 15 par "BuzzFizz"

## Problématique

La problématique du test est lié au fait que le nombre 15 est à la fois un multiple de 3, de 5 et de 15.

Or, l'énoncé induit un ordre de traitement (3,5,15) qui fait échouer l'affichage de BuzzFizz si la vérification du multiple de 15 n'est pas effectuée en 1er.

## Description de la solution proposée

Création d'une classe JavaScript Fizzbuzz

Création de 4 méthodes : fizz, buzz, buzzfizz et check permettant de vérifier si un nombre est un multiple de 3, 5 et 15.

### Exécution du programme

node index.js

ou

yarn start

## Autres Solutions

Différentes solutions en JavaScript

<https://learnjswith.me/javascript-fizzbuzz/>

## Tests

Tests Unitaires réalisés avec Jest

<https://jestjs.io/en/>

## Installation du projet

yarn install

### Exécution des tests

yarn test

---

Auteur :

Alexandre Leroux (<alex@sherpa.one>)

Enseignant à l'Université Lorraine :

- IUT Charlemagne (LP Ciasie),
- Institut des Sciences du Digital IDMC (Master Sciences Cognitives),

Octobre 2019
