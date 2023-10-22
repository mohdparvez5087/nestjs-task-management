run this command in windows terminal as global when you are working on nestjs project for the first time
-npm install --global yarn
-npm install -g @nestjs/cli


run this command in windows terminal To run PostgreSQL on Docker
-docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres

run this command in windows terminal when ever you restart the pc to start the postgeSql server or just click o play button in docker app
-docker container start postgres-nest

to use dependencies
-npm install class-validator --save

run this command to connect the project to database
-npm install typeorm @nestjs/typeorm pg


how to setup pgAdmin
https://www.udemy.com/course/nestjs-zero-to-hero/learn/lecture/26681858#questions/17894298
videos 40 and 41

creating database using pgAdmin




Installing Docker and pgAdmin

Docker

We are going to use Docker to run Postgres. It is easy, straight-forward and it works cross-platform. You will need to install Docker on your machine.
https://www.docker.com/products/docker-desktop/


pgAdmin

pgAdmin is going to help us manage and observe our Postgres database. This tool is cross-platform. You can find detailed download instructions in the official pgAdmin download page.
https://www.pgadmin.org/download/pgadmin-4-windows/