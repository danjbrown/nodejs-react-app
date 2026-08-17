# Deploying the application using AWS Elastic Container Service (ECS)

Follow these steps to deploy the application to ECS.

## Authenticate to AWS
```
aws configure
```

# Server application deployment

The server application will run on port 3000 in production.

## Build and test run the docker image
```
cd server
docker build -t nodejs-react-server-app .

## Very important to build the app on MacOS for linux/amd64 otherwise you will see manifest mismatch errors in the pod logs:
docker build --platform linux/amd64,linux/arm64 -t nodejs-react-server-app .

docker run -t -i -p 3000:3000 nodejs-react-server-app
```

## Login to ECR
```
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <aws-account-id>.dkr.ecr.us-east-1.amazonaws.com
```

## Create an ECR
```
aws ecr create-repository --repository-name nodejs-react-server-app
```

This will provide the repositoryUri for use below.


## Tag and push docker image
```
docker tag nodejs-react-server-app:latest <aws-account-id>.dkr.ecr.us-east-1.amazonaws.com/nodejs-react-server-app:latest
docker push <aws-account-id>.dkr.ecr.us-east-1.amazonaws.com/nodejs-react-server-app:latest
```

## Create the ECS

Open the AWS UI and create a new ECS in Express Mode:

1. Specify ECR image URI using the `repositoryUri` above, appending the image tag 'latest'.
2. Change the port from 80 to 3000.
3. Set the health check URL to '/healthcheck'.
3. Click create.

This will create the task definition, security group, and initialise the deployment.

Once completed, load the deployed application using the Application URL in the ECS UI, for example:
https://no-28ea8e8ccbd34bf9938571eb9656a377.ecs.us-east-1.on.aws/api/userdata

# Client application deployment

The client application will run on port 80 in production.

## Change the base URL in the /client/.env.production file to the above ECS server base URL
For example:
``
VITE_API_URL=https://no-28ea8e8ccbd34bf9938571eb9656a377.ecs.us-east-1.on.aws
``

## Build and test run the docker image
```
cd client
docker build -t nodejs-react-client-app . -f Dockerfile.prod

## Very important to build the app on MacOS for linux/amd64 otherwise you will see manifest mismatch errors in the pod logs:
docker build --platform linux/amd64,linux/arm64 -t nodejs-react-client-app . -f Dockerfile.prod

docker run -t -i -p 80:80 nodejs-react-client-app
```

## Login to ECR
```
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <aws-account-id>.dkr.ecr.us-east-1.amazonaws.com
```

## Create an ECR
```
aws ecr create-repository --repository-name nodejs-react-client-app
```

This will provide the repositoryUri for use below.


## Tag and push docker image
```
docker tag nodejs-react-client-app:latest <aws-account-id>.dkr.ecr.us-east-1.amazonaws.com/nodejs-react-client-app:latest
docker push <aws-account-id>.dkr.ecr.us-east-1.amazonaws.com/nodejs-react-client-app:latest
```

## Create the ECS

Open the AWS UI and create a new ECS in Express Mode:

1. Specify ECR image URI using the `repositoryUri` above.
2. Leave the default port as 80.
3. Click create

This will create the task definition, security group, and initialise the deployment.

Load the deployed application using the Application URL in the ECS overview UI. 

You should see the greeting "Get started, Test User" which includes data "Test User" loaded from the ECS server created above.

## Delete services

1. Delete the ECS services via the UI.
2. Delete the ECR repositories via the UI.