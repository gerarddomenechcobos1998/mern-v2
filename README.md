### Program Operation
 This repository consist of a list of services to create a MERN full stack project. The services included are:
 - NodeJS (backend)
 - Node-red (backend and API)
 - MongoDB (data base)
 - MongoExpress (data base UI)
 - React-Native (expo app)
 (All of those services are **Dockerized**)

### RUN program
1. Go to ./app folder
2. Run `npm install`
3. Go to ./nodered folder
4. Run `npm install`
5. Go to ./stacks folder
6. Run `docker-compose build`
7. Run `docker-compose up`

### Make calls to API
The mongoExpress is running at** port 8081**
The Expo app is running at ** port 19006** (on WEB) and ** port 19000** (on Expo-CLI app). It is redirected by Nginx (used as a reverse proxy) at port 80
You can make the calls using a tool like **Postman**, via Browser, via commandline or via ApiCaller (located at **./app/src/core/Apicaller.tsx**).
All api calls have prefix **/api**. The Paths that starts with **/api** are automatically redirected (via Nginx) to nodered service network (running at port 1880)

### Folders
- The **./data/db** folder saves the data from mongodb. Is a shared volume by mongo Docker container
- The folder **./app** contains the frontend Expo app. All then code can be found at folder **src**.
- The folder **./nodered** contains the nodered packages and configuration.
- The folder **./stacks** contains docker compose (that consists in a docker container orchestrator). Inside this folder we can find another folder called **./stacks/nginx** which contains all nginx configuration.
