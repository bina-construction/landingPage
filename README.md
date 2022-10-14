<p align="center">
    <img alt="icon-bina" src="./src/assets/images/bina-logo.webp" >
</p>
<h1 align="center">Bina Construction</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/4e2eaec7-4912-4010-9fd2-48fe9caf6e7e/deploy-status)](https://app.netlify.com/sites/bina/deploys)

<br />

## Présentation Projet

Ceci est notre site vitrine, _landing page_ afin de mieux nous comprendre, découvrir nos services ainsi que nos réalisations.

<br>

---

## Design Atomique

L'entrée des Vues de L'applications se constitue toujours de la même façon :

- Les Screens ( donnée de Navigation de l'application )
- Les Containers ( La Logique )
- Les Organisms ( La Vue | Formulaire... )
- Les Molécules & Atoms (Element répétitif: boutton,icon, input, Titre )

<br>

---

<br>

## Utilisation des composants atom

Les atoms suivant peuvent être utilisé sans ajouté de style supplémentaire :

- BinaLogo
- Button
- IconButton
- Input
- Link
- Title
- ZoomImg
- TextBanner
- InputFile
- Skill

Les atoms suivants doivent être accompagné d'un style supplémentaire :

- Img (=> Obligation de définir la taille dans le composant parent)
- ImgTemplate (=> Contient des enfants)
- CardButton (=> Contient des enfants)

## Comment est pensé le CSS

Le nom des classes et id est en **snake case** version tirret du millieu _(=> dede-dede)_

Modèle **Desktop first** pour le responsive

L'espacement des différentes section se fait avec un **margin-top de 3rem** sur chaque section

## .env

|                Key                |                     Description                     |
| :-------------------------------: | :-------------------------------------------------: |
|  REACT_APP_MAILER_SEND_TOKEN_ID   | [Clé d'API MailerSend](https://www.mailersend.com/) |
| REACT_APP_MAILER_SEND_TEMPLATE_ID |                MailerSend TemplateID                |

<br>

### Commande à savoir

<kbd>npm i</kbd> or <kbd> yarn install</kbd> - Install Dependencies

<kbd> yarn start</kbd> - Run the App

En savoir plus sur :

- React.js : [For Develop this Project](https://fr.reactjs.org/)

ENJOY 🙂

## Team

- Designé & Piloté par [Jonathan Nohile](https://www.linkedin.com/in/jonathan-nohile)
- Développé par [Jeremy Noh](https://github.com/JeremyNoh)

<br />

Merci à vous 🤗
