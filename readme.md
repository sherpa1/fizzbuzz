# Fizz Buzz

Fizz buzz (often spelled FizzBuzz in this context) has been used as an interview screening device for computer programmers. Writing a program to output the first 100 FizzBuzz numbers is a trivial problem for any would-be computer programmer, so interviewers can easily filter out those with insufficient programming ability.

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

`node main.js`

ou

`npm start`

## Autres Solutions

Différentes solutions en JavaScript

<https://learnjswith.me/javascript-fizzbuzz/>

https://devdojo.com/posandu/lets-code-golf-with-javascript

## Tests

Tests Unitaires réalisés avec Jest

<https://jestjs.io/en/>

## Installation du projet

`npm install`

### Exécution des tests

`npm test`

---

**Alexandre Leroux**

- _Mail_ : alex@sherpa.one
- _Github_ : sherpa1
- _Twitter_ : @_sherpa_
- _Discord_ : sherpa#3890

_Enseignant vacataire à l'Université de Lorraine_

- IUT Nancy-Charlemagne (LP Ciasie)

- Institut des Sciences du Digital, Management & Cognition (Masters Sciences Cognitives)
