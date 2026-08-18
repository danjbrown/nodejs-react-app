# Deploying the client application using AWS Amplify

AWS Amplify is used to build and deploy web and mobile apps.

Follow the [Delete services](#delete-services) section to ensure no unintended costs are incurred.

## Deploy the server application
See the [ECS deployment guide](ECS_DEPLOYMENT.md)

## Change the base URL in the /client/.env.production file to the ECS server base URL
For example:
``
VITE_API_URL=https://no-28ea8e8ccbd34bf9938571eb9656a377.ecs.us-east-1.on.aws
``

## Set-up
There were a lot of issues and build failures related to Node.js versions. The working Amplify deployment uses Node.js v22.22.2 as specified in [amplify.yaml](amplify.yaml).
Before creating the app, do the following
```
nvm use 22.22.2
cd client
rm -rf node_modules && rm package-lock.json
npm install
npm install --package-lock-only
```

## Create a new AWS Amplify application
1. From the AWS Amplify management console, create a new app select "GitHub" for the provider.
2. Select the repository and a branch.
3. Enable "My app is a monorepo" and specify the directory "client".
4. On the following App Settings screen, select "My monorepo uses Amplify Gen2 Backend" and ensure "Create and use a new service role" is selected.
5. Review and create the application.

## Delete services

1. Delete the AWS Amplify service via the management console.