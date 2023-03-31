Pactflow is a cloud-based platform for implementing and managing contract testing using the Pact framework. Pact is an open-source testing framework that enables consumer-driven contract testing between service providers and service consumers. Pactflow provides a range of features to make it easier to implement and manage these contracts in a production environment.

Some of the key features of Pactflow include:

Pact broker: A central repository for managing the contracts between service providers and consumers.

Webhooks: Automatically trigger verification of a contract when a new version is published.

Collaborative workflows: Allows multiple teams to collaborate on creating and testing contracts.

Versioning and tagging: Ability to version and tag contracts for better management and tracking.

Security: Advanced security features to ensure the integrity and confidentiality of the contracts.

Overall, Pactflow simplifies the implementation and management of contract testing and helps teams to deliver high-quality software faster and with greater confidence.

Mock Service Worker is a library for creating and managing mock APIs and services in client-side applications. It allows developers to simulate network responses and test client-server interactions without relying on the actual server. This is particularly useful during development and testing, as it provides a fast and reliable way to test different scenarios and edge cases.

Some of the key features of Mock Service Worker include:

API mocking: Allows developers to define custom responses for API requests, including headers, status codes, and payloads.

Network traffic interception: Intercepts all network requests made by the application and returns mock responses.

Request matching: Allows developers to match requests based on URL, HTTP method, query parameters, and other criteria.

Dynamic response generation: Allows developers to generate dynamic responses based on request parameters.

Browser support: Works with all major browsers, including Chrome, Firefox, Safari, and Edge.

Overall, Mock Service Worker is a powerful tool for testing and development, enabling developers to create and test applications that interact with APIs and services with ease and flexibility.


Bi-directional contract testing is a testing approach that focuses on the interactions between two or more services in a microservices architecture. In this approach, each service acts as both a provider and a consumer, and tests are performed to ensure that the communication between the services is working correctly in both directions.

The key idea behind bi-directional contract testing is that each service should have a contract that specifies the requests it expects to receive and the responses it will send. These contracts are then used to generate test cases that verify that the services are working correctly together.

Some of the key benefits of bi-directional contract testing include:

Improved reliability: By testing the interactions between services in both directions, bi-directional contract testing helps to identify and address potential issues before they impact production.

Better collaboration: Bi-directional contract testing encourages collaboration between service providers and consumers, as both teams must work together to create and verify the contracts.

Faster development: By catching issues early in the development cycle, bi-directional contract testing helps to speed up the overall development process.

Better test coverage: Bi-directional contract testing provides comprehensive test coverage for the interactions between services, ensuring that all edge cases are considered.

Overall, bi-directional contract testing is a valuable approach for testing microservices architectures, as it helps to ensure that services are working correctly together, improving the reliability and efficiency of the system as a whole.

Set up env

Set Global Envs:
export PACT_BROKER_HOST=${PACT_BROKER_HOST}
export PACT_BROKER_BASE_URL=${PACT_BROKER_BASE_URL}
export PACT_BROKER_TOKEN=-${PACT_BROKER_TOKEN}


Run tests: `npm run test:msw`

Deploy Pact

`pact-broker publish msw_generated_pacts/ --consumer-app-version 1 --branch master`