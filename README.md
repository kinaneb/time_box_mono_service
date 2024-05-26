
# Microservices App Project

## Overview
This project involves the design and development of a microservices application. The application consists of several microservices, including a gateway API, users API, and authentication API. The authentication mechanism utilizes JWT (JSON Web Tokens) with Passport-JWT. Additionally, gRPC is implemented using protocol buffers for communication between the microservices.

## Microservices
1. **Gateway API**: Acts as a single entry point for all client requests and routes them to the appropriate microservice.
2. **Users API**: Manages user-related operations such as creating, updating, and retrieving user information.
3. **Authentication API**: Handles user authentication using JWT and Passport-JWT.

## gRPC Communication
gRPC is used for efficient communication between the microservices. Protocol buffers are used to define the service contracts and message structures.

## Docker Configuration
The project includes Docker Compose configurations for each microservice as well as a global Docker Compose file. This setup allows the development team to run, develop, and test each service in isolation or all services together.

## Logging Service
A logging service is integrated to log each request from the gateway to its final destination, providing comprehensive request tracing and monitoring.

## Getting Started
1. Clone the repository.
2. Navigate to the root directory.
3. Use the Docker Compose file to start the services:
   ```bash
   docker-compose up

