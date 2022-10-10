import { CmsPropsType } from "lyatom-cms";

const data: CmsPropsType = {
  //Master
  branch: "dev", // Switch Branch to main for production
  repo: "NJG-connect/bina-landingPage",
  urlForLogin: "admin123",
  mediaFolder: "/src/assets/images",
  title: "Bina",
  type: "firstLvl",
  fields: [
    //Home Section
    {
      type: "section",
      title: "Accueil",
      file: "/src/data/data.json",
      fields: [
        //NavBar
        {
          type: "object",
          title: "Navigation",
          id: "NavBar",
          fields: [
            //Link Item
            {
              type: "input",
              title: "Lien 1",
              id: "Links[0][title]",
              htmlId: "navbar0",
            },
            //Link Item
            {
              type: "input",
              title: "Lien 2",
              id: "Links[1][title]",
              htmlId: "navbar1",
            },
            //Link Item
            {
              type: "input",
              title: "Lien 3",
              id: "Links[2][title]",
              htmlId: "navbar2",
            },
            {
              type: "input",
              title: "Lien 4",
              id: "Links[3][title]",
              htmlId: "navbar3",
            },
            //Button Text
            {
              type: "input",
              title: "Bouton",
              id: "Button",
              htmlId: "navbar-button",
            },
          ],
        },
        //Header
        {
          type: "object",
          title: "Header",
          id: "Header",
          fields: [
            //title (line 1)
            {
              type: "input",
              title: "Titre (ligne 1)",
              id: "title.line1",
              htmlId: "header-title1",
            },
            //title (line 2)
            {
              type: "input",
              title: "Titre (ligne 2)",
              id: "title.line2",
              htmlId: "header-title2",
            },
            //Background Image
            {
              type: "image",
              title: "Image",
              mediaFolder: "src/assets/images",
              id: "background",
              htmlId: "header",
            },
          ],
        },
        //Accommpaniment
        {
          type: "object",
          title: "Accompagnement",
          id: "accompaniment",
          fields: [
            {
              type: "input",
              title: "Titre",
              id: "title",
              htmlId: "home-accompaniment-title",
            },
            {
              type: "array",
              title: "Bandeau haut",
              id: "top",
              referenceFieldKey: "title",
              fields: [
                {
                  type: "input",
                  title: "Titre",
                  id: "title",
                  htmlId: "home-accompaniment-top-title",
                },
                {
                  type: "image",
                  title: "Icône",
                  mediaFolder: "src/assets/images",
                  id: "icon",
                  htmlId: "home-accompaniment-top-img",
                },
              ],
            },
            {
              type: "image",
              title: "Icône centrale",
              mediaFolder: "src/assets/images",
              id: "img",
              htmlId: "home-accompaniment-img",
            },
            {
              type: "object",
              title: "Bandeau gauche",
              id: "left",
              fields: [
                {
                  type: "input",
                  title: "Titre",
                  id: "title",
                  htmlId: "home-accompaniment-left-title-text",
                },
                {
                  type: "array",
                  title: "Items",
                  referenceFieldKey: "title",
                  id: "item",
                  fields: [
                    {
                      type: "input",
                      title: "Texte",
                      id: "title",
                      htmlId: "home-accompaniment-left-item-text",
                    },
                    {
                      type: "image",
                      title: "Icône",
                      mediaFolder: "src/assets/images",
                      id: "icon",
                      htmlId: "home-accompaniment-left-item-text",
                    },
                  ],
                },
              ],
            },
            {
              type: "object",
              title: "Bandeau droit",
              id: "right",
              fields: [
                {
                  type: "input",
                  title: "Titre",
                  id: "title",
                  htmlId: "home-accompaniment-right-title-text",
                },
                {
                  type: "array",
                  title: "Items",
                  referenceFieldKey: "title",
                  id: "item",
                  fields: [
                    {
                      type: "input",
                      title: "Texte",
                      id: "title",
                      htmlId: "home-accompaniment-right-item-text",
                    },
                    {
                      type: "image",
                      title: "Icône",
                      mediaFolder: "src/assets/images",
                      id: "icon",
                      htmlId: "home-accompaniment-right-item-text",
                    },
                  ],
                },
              ],
            },
          ],
        },
        //Skills
        {
          type: "object",
          title: "Savoir-Faire",
          id: "skills",
          fields: [
            {
              type: "input",
              title: "Titre",
              id: "title",
              htmlId: "home-skills-title",
            },
            {
              type: "image",
              title: "GIF",
              mediaFolder: "src/assets/images",
              id: "gif",
              htmlId: "home-skills-gif",
            },
            {
              type: "array",
              title: "Compétences",
              id: "skill",
              referenceFieldKey: "title",
              fields: [
                {
                  type: "input",
                  title: "Text",
                  id: "title",
                  htmlId: "home-skills-skill-text",
                },
                {
                  type: "image",
                  title: "Icône",
                  mediaFolder: "src/assets/images",
                  id: "icon",
                  htmlId: "home-skills-skill-icon",
                },
              ],
            },
            {
              type: "input",
              title: "Text 1",
              id: "text1",
              htmlId: "home-skills-text1",
            },
            {
              type: "input",
              title: "Text 3",
              id: "text2",
              htmlId: "home-skills-text2",
            },
          ],
        },
        //Projects
        {
          type: "object",
          title: "Projets",
          id: "project",
          fields: [
            {
              type: "input",
              title: "Titre",
              id: "title",
              htmlId: "project-gallery-title",
            },
            {
              type: "object",
              title: "Type de Projet 1",
              id: "projectType1",
              fields: [
                {
                  type: "input",
                  title: "Titre",
                  id: "title",
                  htmlId: "project-gallery1-title",
                },
                {
                  type: "input",
                  title: "Text",
                  id: "text",
                  htmlId: "project-gallery1-text",
                },
                {
                  type: "image",
                  title: "Fond",
                  mediaFolder: "src/assets/images",
                  id: "background",
                  htmlId: "project-gallery1-bg",
                },
                {
                  type: "array",
                  title: "Images",
                  id: "img",
                  referenceFieldKey: "item",
                  fields: [
                    {
                      type: "image",
                      title: "Image",
                      mediaFolder: "src/assets/images",
                      id: "item",
                      htmlId: "project-gallery1-img-item",
                    },
                  ],
                },
              ],
            },
            {
              type: "object",
              title: "Type de Projet 2",
              id: "projectType2",
              fields: [
                {
                  type: "input",
                  title: "Titre",
                  id: "title",
                  htmlId: "project-gallery2-title",
                },
                {
                  type: "input",
                  title: "Text",
                  id: "text",
                  htmlId: "project-gallery2-text",
                },
                {
                  type: "image",
                  title: "Fond",
                  mediaFolder: "src/assets/images",
                  id: "background",
                  htmlId: "project-gallery2-bg",
                },
                {
                  type: "array",
                  title: "Images",
                  id: "img",
                  referenceFieldKey: "item",
                  fields: [
                    {
                      type: "image",
                      title: "Image",
                      mediaFolder: "src/assets/images",
                      id: "item",
                      htmlId: "project-gallery2-img-item",
                    },
                  ],
                },
              ],
            },
            {
              type: "object",
              title: "Type de Projet 3",
              id: "projectType3",
              fields: [
                {
                  type: "input",
                  title: "Titre",
                  id: "title",
                  htmlId: "project-gallery3-title",
                },
                {
                  type: "input",
                  title: "Text",
                  id: "text",
                  htmlId: "project-gallery3-text",
                },
                {
                  type: "image",
                  title: "Fond",
                  mediaFolder: "src/assets/images",
                  id: "background",
                  htmlId: "project-gallery3-bg",
                },
                {
                  type: "array",
                  title: "Images",
                  id: "img",
                  referenceFieldKey: "item",
                  fields: [
                    {
                      type: "image",
                      title: "Image",
                      mediaFolder: "src/assets/images",
                      id: "item",
                      htmlId: "project-gallery3-img-item",
                    },
                  ],
                },
              ],
            },
            {
              type: "object",
              title: "Type de Projet 4",
              id: "projectType4",
              fields: [
                {
                  type: "input",
                  title: "Titre",
                  id: "title",
                  htmlId: "project-gallery4-title",
                },
                {
                  type: "input",
                  title: "Text",
                  id: "text",
                  htmlId: "project-gallery4-text",
                },
                {
                  type: "image",
                  title: "Fond",
                  mediaFolder: "src/assets/images",
                  id: "background",
                  htmlId: "project-gallery4-bg",
                },
                {
                  type: "array",
                  title: "Images",
                  id: "img",
                  referenceFieldKey: "item",
                  fields: [
                    {
                      type: "image",
                      title: "Image",
                      mediaFolder: "src/assets/images",
                      id: "item",
                      htmlId: "project-gallery4-img-item",
                    },
                  ],
                },
              ],
            },
          ],
        },
        //About
        {
          type: "object",
          title: "Présentation",
          id: "about",
          fields: [
            //Title
            {
              type: "object",
              title: "Title",
              id: "title",
              fields: [
                //Main
                {
                  type: "input",
                  title: "Grand Format",
                  id: "main",
                  htmlId: "about-title",
                },
                //Reduce
                {
                  type: "input",
                  title: "Petit Format",
                  id: "reduce",
                  htmlId: "about-title",
                },
              ],
            },
            //Bina text
            {
              type: "input",
              title: "Text haut",
              id: "text-bina",
              htmlId: "about-bina-text",
            },
            //Text
            {
              type: "input",
              title: "Text",
              id: "text",
              htmlId: "about-text",
            },
            //Card 1
            {
              type: "object",
              title: "Card 1",
              id: "card1",
              fields: [
                //Name
                {
                  type: "input",
                  title: "Name",
                  id: "name",
                  htmlId: "about-card1-name",
                },
                {
                  type: "image",
                  title: "Photo",
                  mediaFolder: "src/assets/images",
                  id: "img",
                  htmlId: "about-card1-img",
                },
              ],
            },
            //Card 2
            {
              type: "object",
              title: "Card 2",
              id: "card2",
              fields: [
                //Name
                {
                  type: "input",
                  title: "Name",
                  id: "name",
                  htmlId: "about-card2-name",
                },
                {
                  type: "image",
                  title: "Photo",
                  mediaFolder: "src/assets/images",
                  id: "img",
                  htmlId: "about-card2-img",
                },
              ],
            },
          ],
        },
        //Sponsor
        {
          type: "object",
          title: "Partenaires",
          id: "sponsor",
          fields: [
            //Title
            {
              type: "input",
              title: "Titre",
              id: "title",
              htmlId: "sponsor-title",
            },
            //Logo
            {
              type: "array",
              title: "Logo partenaires",
              id: "img",
              referenceFieldKey: "title",
              canAdd: true,
              canDelete: true,
              fields: [
                {
                  type: "image",
                  title: "Logo",
                  mediaFolder: "src/assets/images",
                  id: "title",
                  htmlId: "sponsor-img",
                },
              ],
            },
          ],
        },
        //Quote
        {
          type: "object",
          title: "Citation",
          id: "quote",
          fields: [
            //Sentence
            {
              type: "input",
              title: "Citation",
              id: "sentence",
              htmlId: "quote-sentence",
            },
            //Author
            {
              type: "input",
              title: "Auteur",
              id: "author",
              htmlId: "quote-author",
            },
          ],
        },
        //Contact
        {
          type: "object",
          title: "Contact",
          id: "Contact",
          fields: [
            //title
            {
              type: "input",
              title: "Titre",
              id: "title",
              htmlId: "contact-title",
            },
            //title (line 2)
            {
              type: "input",
              title: "Sous-title",
              id: "subtitle",
              htmlId: "contact-subtitle",
            },
            //Background Image
            {
              type: "image",
              title: "Image",
              mediaFolder: "src/assets/images",
              id: "background",
              htmlId: "contact-background",
            },
          ],
        },
        //Footer
        {
          type: "object",
          title: "Pied de page",
          id: "Footer",
          fields: [
            //Copyright
            {
              type: "input",
              title: "Copyright",
              id: "copyright",
              htmlId: "copyright",
            },
            //Social
            {
              type: "array",
              title: "Liens réseaux sociaux",
              id: "social",
              referenceFieldKey: "title",
              canAdd: false,
              canDelete: false,
              fields: [
                {
                  type: "input",
                  htmlId: "social",
                  id: "title",
                  title: "Titre",
                },
                {
                  type: "input",
                  htmlId: "social",
                  id: "link",
                  title: "Lien de redirection",
                },
                {
                  type: "image",
                  title: "Icone",
                  mediaFolder: "src/assets/images",
                  id: "icon",
                  htmlId: "social-icon",
                },
              ],
            },
            //Additional Link
            {
              type: "array",
              title: "Liens supplémentaires",
              id: "additionalLink",
              referenceFieldKey: "title",
              canAdd: false,
              canDelete: false,
              fields: [
                {
                  type: "input",
                  htmlId: "add-link",
                  id: "title",
                  title: "Titre",
                },
                {
                  type: "input",
                  htmlId: "add-link",
                  id: "link",
                  title: "Lien de redirection",
                },
              ],
            },
          ],
        },
      ],
    },
    //Poject Section
    {
      type: "section",
      title: "Projet",
      file: "/src/data/dataProject.json",
      fields: [
        //Screen 1 (=> Type of client)
        {
          type: "object",
          id: "screen1",
          title: "Clientèle",
          fields: [
            {
              type: "input",
              title: "Titre",
              id: "title",
              htmlId: "project-screen1-title",
            },
            {
              type: "object",
              id: "card1",
              title: "Boutton Gauche",
              fields: [
                {
                  type: "input",
                  title: "Titre",
                  id: "text",
                  htmlId: "project-screen1-card1-title",
                },
                {
                  type: "image",
                  title: "Icone",
                  mediaFolder: "src/assets/images",
                  id: "icon",
                  htmlId: "project-screen1-card1-img",
                },
              ],
            },
            {
              type: "object",
              id: "card2",
              title: "Boutton Droite",
              fields: [
                {
                  type: "input",
                  title: "Titre",
                  id: "text",
                  htmlId: "project-screen1-card2-title",
                },
                {
                  type: "image",
                  title: "Icone",
                  mediaFolder: "src/assets/images",
                  id: "icon",
                  htmlId: "project-screen1-card2-img",
                },
              ],
            },
            {
              type: "image",
              title: "Image de fond",
              mediaFolder: "src/assets/images",
              id: "icon",
              htmlId: "project-screen1-bg",
            },
          ],
        },
        //Screen 2 (=> Client info)
        {
          type: "object",
          id: "screen2",
          title: "Information client",
          fields: [
            {
              type: "input",
              title: "Titre",
              id: "title",
              htmlId: "project-screen2-title",
            },
            {
              type: "image",
              title: "Image de fond",
              mediaFolder: "src/assets/images",
              id: "icon",
              htmlId: "project-screen2-bg",
            },
          ],
        },
        //Screen 3 (=> Service)
        {
          type: "object",
          id: "screen3",
          title: "Service",
          fields: [
            {
              type: "input",
              title: "Titre",
              id: "title",
              htmlId: "project-screen3-title",
            },
            {
              type: "object",
              id: "card1",
              title: "Boutton Gauche",
              fields: [
                {
                  type: "input",
                  title: "Titre",
                  id: "text",
                  htmlId: "project-screen3-card1-title",
                },
                {
                  type: "image",
                  title: "Icone",
                  mediaFolder: "src/assets/images",
                  id: "icon",
                  htmlId: "project-screen3-card1-img",
                },
              ],
            },
            {
              type: "object",
              id: "card2",
              title: "Boutton Centrale",
              fields: [
                {
                  type: "input",
                  title: "Titre",
                  id: "text",
                  htmlId: "project-screen3-card2-title",
                },
                {
                  type: "image",
                  title: "Icone",
                  mediaFolder: "src/assets/images",
                  id: "icon",
                  htmlId: "project-screen3-card2-img",
                },
              ],
            },
            {
              type: "object",
              id: "card3",
              title: "Boutton Droite",
              fields: [
                {
                  type: "input",
                  title: "Titre",
                  id: "text",
                  htmlId: "project-screen3-card3-title",
                },
                {
                  type: "image",
                  title: "Icone",
                  mediaFolder: "src/assets/images",
                  id: "icon",
                  htmlId: "project-screen3-card3-img",
                },
              ],
            },
            {
              type: "image",
              title: "Image de fond",
              mediaFolder: "src/assets/images",
              id: "icon",
              htmlId: "project-screen3-bg",
            },
          ],
        },
        //Screen 4 (=> Surface)
        {
          type: "object",
          id: "screen4",
          title: "Surface & Nombre de pièce",
          fields: [
            {
              type: "input",
              title: "Titre",
              id: "title1",
              htmlId: "project-screen4-title1",
            },
            {
              type: "input",
              title: "Titre",
              id: "title2",
              htmlId: "project-screen4-title2",
            },
            {
              type: "image",
              title: "Image de fond",
              mediaFolder: "src/assets/images",
              id: "background",
              htmlId: "project-screen4-bg",
            },
          ],
        },
        //Screen 5 (=> File)
        {
          type: "object",
          id: "screen5",
          title: "Import de document",
          fields: [
            {
              type: "input",
              title: "Titre",
              id: "title",
              htmlId: "project-screen5-title",
            },
            {
              type: "input",
              title: "Titre import de fichier",
              id: "inputText",
              htmlId: "project-screen5-input-title",
            },
            {
              type: "input",
              title: "Titre (Aucun fichier importé)",
              id: "emptyFileTitle",
              htmlId: "project-screen5-empty-title",
            },
            {
              type: "input",
              title: "Titre bouton",
              id: "button",
              htmlId: "project-screen5-button-text",
            },
            {
              type: "image",
              title: "Image de fond",
              mediaFolder: "src/assets/images",
              id: "background",
              htmlId: "project-screen5-bg",
            },
          ],
        },
      ],
    },
  ],
};

export default data;
