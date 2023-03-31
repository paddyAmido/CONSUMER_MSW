Pact flow with Mock-Service-Worker

Create MSW (mock-service-worker) mocks, and generate pact contracts from the recorded interactions.

Bi-direct uses scheme compare approach e.g open api doc

Set up env

Set Global Envs:
export PACT_BROKER_HOST=${PACT_BROKER_HOST}
export PACT_BROKER_BASE_URL=${PACT_BROKER_BASE_URL}
export PACT_BROKER_TOKEN=-${PACT_BROKER_TOKEN}


Run tests: `npm run test:msw`

Deploy Pact

`pact-broker publish msw_generated_pacts/ --consumer-app-version 1 --branch master`