# Deploying the application using AWS Elastic Container Service (ECS)

Follow these steps to deploy the application to ECS.

SERVER DEPLOYMENT IS IN PROGRESS, USE ONLY CLIENT DEPLOYMENT FOR NOW.

## Authenticate to AWS:
```
aws configure
```

# Server application

## Change the exposed port:
In the /server/Dockerfile change the exposed port from 3000 to 80:
```
EXPOSE 80
```

In the /server/src/index.ts file change the port from 3000 to 80:
```
const PORT = process.env.PORT || 80;
```

## Build and test run the docker image:
```
cd server
docker build -t nodejs-react-server-app .

## Very important to build the app on MacOS for linux/amd64 otherwise you will see manifest mismatch errors in the pod logs:
docker build --platform linux/amd64,linux/arm64 -t nodejs-react-server-app .

docker run -t -i -p 80:80 nodejs-react-server-app
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

1. Specify ECR image URI using the `repositoryUri` above.
2. Leave the default port as 80.
3. Click create

This will create the task definition, security group, and initialise the deployment.

Load the deployed application using the Application URL in the ECS overview UI, for example:
https://no-28211e2f08464f87a6a538c1370573a9.ecs.us-east-1.on.aws/api/userdata


# Client application

## Build and test run the docker image:
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

## Delete services

1. Delete the ECS services via the UI.
2. Delete the ECR repositories via the UI.