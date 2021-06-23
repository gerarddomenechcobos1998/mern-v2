### Program Operation
 This repository consist of a list of services to create a MERN full stack project. The services included are:
 - ExpressJS & NodeJS (backend)
 - MongoDB
 - MongoExpress
 - React-Native (Expo)
 (All of those services are **Dockerized**)

### RUN program
1. Go to ./services/backend folder.
2. Run `npm install`
3. Go to ./services/app folder
4. Run `npm install`
5. Go to ./stacks folder
6. Run `docker-compose build`
7. Run `docker-compose up`

### Make calls to API
The CRUD operations are defined at **routes.js** file (located at **./services/backend** folder).
The expressJS server is running at **port 3000**
The mongoExpress is running at** port 8081**
The Expo app is running at ** port 19006** (on WEB) and ** port 19000** (on Expo-CLI app)
You can make the calls using a tool like **Postman**, via Browser, via commandline or via ApiCaller (located at **./services/app/src/core/Apicaller.tsx**).
All api calls have prefix **/api**. E.g. `http://localhost:3000/api/activities`

### Folders
- The **./data/db **folder saves the data from mongodb. Is a shared volume by mongo Docker container
- The folder** ./services/backend** contains all backend configuration.
	- **models** folder have inside the data models used. By default only contains one model named **Post.js**
	- **index.js** file contains the connections to the db and is the main file in wich runs the application.
- The folder** ./services/app** contains the frontend Expo app. All then code can be found at folder **src**.

### Considerations
- As we are using mongoose the models names should be in singular and with first letter in Uppercase. (The collection created at mongodb will be created automatically in plural).
- The prefix (/api), the port (3000) can be changed at index.js file. If change the port also change the port of the following files: Dockerfile and docker-compose.yml.
- The connection to mongoose (at index.js file) have the "db" name. This is because we are connecting it to mongodb docker container named "db". If change the name of the service, change also the name of the host to connect.