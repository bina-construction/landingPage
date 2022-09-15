# Bina - Web (=> Développement)

## Ce qui à été fait

- [x] Intégration complète de la maquette (responsive compris)
- [x] Support complet de Laytom
- [x] Vérification de tous les formulaires (sauf surface -> Screen 4 partie Projet)
- [x] Récupération des données des formulaires

<br>

---

<br>

## Où récupérer les données des formulaire

<br>

<u>Formulaire de contact (=> home page) :</u>

Fonction submitData() dans `HomeContainer.tsx`


<u>Formulaire projet (=> Project page) :</u>

Fonction submitData() dans `ProjectContainer.tsx`

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


## Patch à réaliser

- [ ] NavBar (=> Simplifier la structure html et le css) -> Section
- [ ] ProjectGallery (=> Simplifier la structure html et le css) -> Molecule
- [ ] ProjectGallery animation (=> Actuellement trop couteuse)
- [ ] Bug sur l'import de fichier (=> Dernier screen partie projet)
    
    Impossible d'ajouter un fichier si celui-ci à été ajouté puis supprimer et qu'il n'y a pas d'autre fichier importé.
    Pour reproduir le bug :
    
        1. Importer un fichier
        2. le supprimer
        3. L'importer à nouveau
        
- [ ] Remplacer tous les assets


## Comment est pensé le CSS

Le nom des classes et id est en **snake case** version tirret du millieu _(=> dede-dede)_

Modèle **Desktop first** pour le responsive

L'espacement des différentes section se fait avec un **margin-top de 3rem** sur chaque section


## .env

|            Key              |     Description       |
| :--------------------------:| :-------------------: |
| REACT_APP_GH_TOKEN_PERSONAL | Clé d'API GitHub      |