Instalar depencencias

npm i

Correr la aplicacion

npm run dev


Utilizacion de Docker Para servidor de Base de datos

Debes descargar el instalador desde la página de Docker for Windows.


Creo el archivo docker-compose.yml a nivel del root de proyecto

version: '3.3'

services:
  postgres:
    image: postgres:13
    environment:
      - POSTGRES_DB=my_store
      - POSTGRES_USER=gabriel
      - POSTGRES_PASSWORD=admin123
    ports:
      - 5432:5432
    volumes:
      - ./postgres_data:/var/lib/postgresql/data
  pgadmin:
    image: dpage/pgadmin4
    environment:
      - PGADMIN_DEFAULT_EMAIL=admin@mail.com
      - PGADMIN_DEFAULT_PASSWORD=root
    ports:
      - 5050:80


Ejecuto para que se instal el servicio

docker-compose up -d postgres

docker-compose ps

docker-compose down



Conexion a la base de datos

Por terminal de comandos

docker-compose exec postgres bash


Conectando a la base
psql -h localhost -d my_store -U gabriel

para saber la estructura de bd
\d+

para salir de la base
\q

salir del contenedor
exit


Por terminal grafica pgadmin

docker-compose up -d pgadmin


Como saber la ip de nuestro contenedor

docker ps nos da el id del contenedor

docker inspect 2cf0397045da

de aca obtengo la IPAdress 172.22.0.2


Instalacion de Libreria postgres

npm install pg


Para leer .env se debe descargar
npm i dotenv


Instalacion ORM

Sequelize para JavaScript y TypeORM para TypeScript.

Sequelize


Instalacion de sequelize
https://sequelize.org/docs/v6/getting-started/

npm install --save sequelize

Instalacion del driver
npm install --save pg-hstore









