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



Agregando una segunda base de datos

Agregamos en docker compose una segunda base
  mysql:
    image: mysql:5
    environment:
      - MYSQL_DATABASE=my_store
      - MYSQL_USER=
      - MYSQL_ROOT_PASSWORD=admin123
      - MYSQL_PORT=3306
    ports:
      - "3306:3306"
    volumes:
      - ./mysql_data:/var/lib/mysql

  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    environment:
      - MYSQL_ROOT_PASSWORD=admin123
      - PMA_HOST=mysql
    ports:
      - 6080:80

Instalacion del driver de mysql

npm i --save mysql2


Migrciones con sequelize

npm i sequelize-cli --save-dev


Agregar archivo de configuracion

.sequelizerc

module.exports = {
  'config': './db/config.js',
  'models-path': './db/models',
  'migrations-path': './db/migrations/',
  'seeders-path': './db/seeders/',
}




docker-compose up -d mysql
docker-compose up -d phpmyadmin


Correr Migraciones

Moduificar el Package.json para correr las migraciones


    "migrations:generate": "sequelize-cli migration:generate --name",
    "migrations:run": "sequelize-cli db:migrate",
    "migrations:revert": "sequelize-cli db:migrate:undo",
    "migrations:delete": "sequelize-cli db:migrate:undo:all"


Orden de ejecucion

"migrations:generate": "sequelize-cli migration:generate --name",

npm run migrations:generate create-user


npm run migrations:run


extension util REST CLient, para utilizarlo creamos el archivo index.http

dentro del file

POST loca

Documentacion sqquelize
