# nodejs-react-app

React client and Node.js server applications in a monorepo.

Instructions for deploying the applications using AWS Elastic Container Service (ECS) are provided in the ECS_DEPLOYMENT.md file.

A branch for deploying the client application using AWS Amplify instead of ECS with nginx can be found at [feat/aws-amplify](https://github.com/danjbrown/nodejs-react-app/tree/feat/aws-amplify)

See detailed instructions [here](https://github.com/danjbrown/nodejs-react-app/blob/feat/aws-amplify/AWS_AMPLIFY.md)

## Build and run using docker compose

### Development

Clone the repository.

Build and run using docker compose:
```
docker compose -f docker-compose-dev.yml up --build
```

Load the Node.js server application at (for example) http://localhost:3000/api/user

Load the React client application at http://localhost:5173

### Production

Use the `docker-compose-prod.yml` file for production builds, which uses nginx exposing port 80. Port 80 is mapped in the docker compose file.

Build and run using docker compose:
```
docker compose -f docker-compose-prod.yml up --build
```

Load the Node.js server application at (for example) http://localhost:3000/api/user

Load the React client application at http://localhost:80

## Development mode

Install and run the client and server applications with hot reloading enabled:
```
npm run install
npm run dev
```

## Server application: development mode

Install:
```
cd server
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
docker build -t nodejs-react-app-server .
docker run -p 3000:3000 nodejs-react-app-server
```

Load the application at http://localhost:3000/api/user

## Client application: development mode

Install:
```
cd client
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
docker build -t nodejs-react-app-client .
docker run -p 5173:5173 nodejs-react-app-client
```

## Unit Testing

### Client

Run the client unit tests with the following command:  
```npm run test```

Get the test code coverage:  
```npm run test:coverage```

### Server

Run the server unit tests with the following command:  
```npm run test```

Jest ships with experimental support for ECMAScript Modules (ESM), see:
https://jestjs.io/docs/ecmascript-modules

## References

https://nodejs.org/api/typescript.html

https://nodejs.org/learn/typescript/introduction

https://www.docker.com/blog/how-to-dockerize-react-app/