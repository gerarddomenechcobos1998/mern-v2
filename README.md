### Program Operation
 This repository consist of a list of services to create a MERN full stack project. The services included are:
 - ExpressJS & NodeJS (backend)
 - MongoDB
 - MongoExpress
 - React-Native (Expo)
 (All of those services are **Dockerized**)

### RUN program
1. Go to ./services/app folder
2. Run `npm install`
3. Go to ./services/nodered folder
4. Run `npm install`
5. Go to ./stacks folder
6. Run `docker-compose build`
7. Run `docker-compose up`

### Make calls to API
The mongoExpress is running at** port 8081**
The Expo app is running at ** port 19006** (on WEB) and ** port 19000** (on Expo-CLI app)
You can make the calls using a tool like **Postman**, via Browser, via commandline or via ApiCaller (located at **./services/app/src/core/Apicaller.tsx**).
All api calls have prefix **/api**. E.g. `http://localhost:3000/api/activities`
The backend is running using node-red, located at port 1880.

### Folders
- The **./data/db **folder saves the data from mongodb. Is a shared volume by mongo Docker container
- The folder** ./services/app** contains the frontend Expo app. All then code can be found at folder **src**.
