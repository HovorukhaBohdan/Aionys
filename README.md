# Aionys Test Task 
#### This repository contains a full-stack application built with Spring Boot for the backend, React.js for the frontend, and MySQL for the database. The application allows managing notes through a REST API and a web UI.
## Getting Started
### Backend
### Endpoints

___The backend provides the following REST API endpoints:___

```GET api/notes``` - Retrieve all notes.

```GET api/notes/{id}``` - Retrieve a specific note by its ID.

```POST api/notes``` - Create a new note.

```PUT api/notes/{id}``` - Update an existing note by its ID.

```DELETE api/notes/{id}``` - Delete a note by its ID.

### Environment Variables
#### Replace values of ```MYSQLDB_USER```, ```MYSQLDB_ROOT_PASSWORD```, ```MYSQLDB_DATABASE``` in ```.env``` file with your desired values.

### Frontend
#### The frontend is implemented using React.js and uses a state manager to manage the application's state. It also supports localization (i18n) to change languages.
### Running the Application with Docker
#### Follow these steps to set up and run the application locally using Docker:
1. ___Clone the Repository___
```
git clone https://github.com/HovorukhaBohdan/Aionys.git
cd Aionys
```
2. ___Build and Run with Docker Compose___
```
docker-compose build
docker-compose up
```
#### This command will:
- ___Build Docker images for the backend (Spring Boot), frontend (React.js), and MySQL database if they do not exist.___
- ___Start containers for MySQL, backend, and frontend applications.___
- ___Expose ports for MySQL on 3306, backend on 8088, and frontend on 80.___

3. ___Access the Application___

#### Once the containers are up and running, you can access the application at:
- ___Frontend (React.js): http://localhost___
- ___Backend (Spring Boot): http://localhost:8088___

4. ___Running Tests___
```
cd front
npm install
npx cypress open
```
#### This command will open the Cypress Test Runner. From there, you can run the tests located in the cypress/e2e/notes_spec.cy.js file.
