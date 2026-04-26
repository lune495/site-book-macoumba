
1. docker build  --no-cache . -t madi2/book_front:dev-1.0.0
2. docker push madi2/book_front:dev-1.0.0

 
# espace alioune

<!--aller a la racine du projet et executer cette commande jusuqu'a la fin  -->
1. docker build . -t badaralune/book_front:dev-1.0.0  
<!-- a la fin de la commande precedante ,executer celle ci  -->
2. docker push badaralune/book_front:dev-1.0.0

<!-- a la fin de la commande precedante ,executer celle ci sur le serveur -->
# serveur
docker pull madi2/book_front:dev-1.0.0 && docker rm -f  book_front && docker run  --restart=always -d -p 8020:80 --name book_front madi2/book_front:dev-1.0.0

