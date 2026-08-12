# nodejs-typescript

Node.js application written in TypeScript.

## Install and run

Install:
```
npm install
```

Type check and run the application (supports hot reloading via tsx):
```
npm run dev
```

Build and run the application:
```
npm run build
npm run start
```

Load the application at http://localhost:3000/api/user

## Docker

Build and run the docker container:
```
docker build -t nodejs-typescript .
docker run -p 3000:3000 nodejs-typescript
```

Using docker compose:
```
docker compose up
```

## References

https://nodejs.org/api/typescript.html
https://nodejs.org/learn/typescript/introduction

https://medium.com/@robinviktorsson/containerizing-a-typescript-node-js-application-with-docker-a-step-by-step-guide-be7fc87191f8