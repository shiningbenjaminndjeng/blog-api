.Installation:

Cette API a ete concus a l'aide de Node.js , de l'editeur visualStudio code et du langage  javascrip.
Pour effectuer des test de bon fonctionnement Postman est utiliser.

Pour la effectuer des test sur Swagger UI , il faut ouvir ce lien dans votre navigateur http://localhost:3000/api-docs

  mkdir blog-api (Creation de mon dossier de travail)
 
  cd blog-api
 
  npm init -y(Initialiser mon package.Json)


.Commandes npm ET intalation de mes depenances:

   npm init -y

   npm install express sqlite3 body-parser cors swagger-ui-express swagger-jsdoc

   npm install nodemon --save-dev

   npm install mongoose

.Liste des endpoints :


   POUR LANCER LE SERVER IL FAUT TAPER LA COMMENDE "npm run dev"

   POST /api/articles: Pour creer un article  http://localhost:3000/api/articles
                        Body JSON :

               {
                   "title": "Mon article",
                   "content": "Contenu test",
                   "author": "Benjamin",
                   "date": "2026-03-18",
                   "category": "Tech",
                   "tags": "nodejs"
                }

  GET /api/articles: pour lire tous les articles http://localhost:3000/api/articles

  GET /api/articles/:id : pour lire un articles http://localhost:3000/api/articles/1

  PUT /api/articles/:id : modifier un articles http://localhost:3000/api/articles/1

  DELETE /api/articles/:id supprimer un article http://localhost:3000/api/articles/1

  GET /api/articles/search?query=texte : chercher un article http://localhost:3000/api/articles/search?query=test

.Exemples JSON:
               
               {
                   "title": "Mon article",
                   "content": "Contenu test",
                   "author": "Benjamin",
                   "date": "2026-03-18",
                   "category": "Tech",
                   "tags": "nodejs"
                }
          
