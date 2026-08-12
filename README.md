# nodejs-typescript

Node.js and React applications written in TypeScript, run using docker compose.

## Build and run

Clone the repository.

Builds and run using docker compose:
```
docker compose up --build
```

Load the Node.js server application at http://localhost:3000/api/user

Load the React.js client at http://localhost:5173

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

https://medium.com/@robinviktorsson/containerizing-a-typescript-node-js-application-with-docker-a-step-by-step-guide-be7fc87191f8

https://www.docker.com/blog/how-to-dockerize-react-app/