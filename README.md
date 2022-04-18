# Test technique intégration civitime - El Housni Youness

[link for front](https://stupefied-panini-007c31.netlify.app/?fbclid=IwAR2Osme1huLioXicPVQcFP78ptGgcCl6JkpJZG3_GoHpFeoJkMFoACnPyz4)

Lancez le projet avec `npm install && npm run start.`

Le project utilise les Hooks de ReactJs , le style est basé sur Css seuelement aucun lib extérieur

## Errors Handling

State formError : handel error displays

- "Please Select an Avatar before submit" : click Avant Sur Sumbmit il faut Sélectionner un Avatar

- "Please Select one of the Avatars (Man,Woman) Before Selecting a skin Color" : Avant Choix couleur il faut Sélectionner un Avatar

- "Please Select one of the Avatars (Man,Woman) Before Selecting a skin Color" : manque de sélection avatar

- "This Shirt is not avaible for the woman avatar" : Pas de support de choix pour l'avatar sélectionner (woman)

## Event Handling

Click Sur Skin or Shirt Trigger changement sur l'avatar View

## Valider

Clicker sur le button valider : lance alert sur Avatar sélectionner

## Docker

Build docker image : docker build -t test-ui-civitime .

Run : docker run -p 3001:3000 test-ui-civitime
