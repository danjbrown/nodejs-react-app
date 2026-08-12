# nodejs-react-app

Node.js server and React client applications in a single repository.

## Build and run using docker

Clone the repository.

Build and run using docker compose:
```
docker compose -f docker-compose-dev.yml up --build
```

Use the `docker-compose-prod.yml` file for production builds.

Load the Node.js server application at (for example) http://localhost:3000/api/user

Load the React.js client application at http://localhost:5173

## Development mode

Install the dependencies and run from the project root, or follow the instructions below with separate docker build steps:
```
npm run install
npm run dev:client
npm run dev:server
```

## Server application: development mode

Install:
```
cd /src/server
npm install
```

Type check and run the application locally (supports hot reloading via tsx):
```
npm run dev
```

Build and run the application:
```
npm run build
npm run start
```

### Docker

Build and run the docker container:
```
docker build -t nodejs-typescript-server .
docker run -p 3000:3000 nodejs-typescript-server
```

Load the application at http://localhost:3000/api/user

## Client application: development mode

Install:
```
cd /src/client
npm install
```

Run the application locally (supports hot reloading via tsx):
```
npm run dev
```

Build and run the application:
```
npm run build
npm run start
```

Load the application at http://localhost:5173

### Docker

Build and run the docker container:
```
docker build -t nodejs-typescript-client .
docker run -p 5173:5173 nodejs-typescript-client
```

## References

https://nodejs.org/api/typescript.html

https://nodejs.org/learn/typescript/introduction

https://www.docker.com/blog/how-to-dockerize-react-app/