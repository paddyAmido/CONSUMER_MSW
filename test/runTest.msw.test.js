import { setupServer } from "msw/node";
import { rest } from "msw";
import { setupPactMswAdapter } from "@pactflow/pact-msw-adapter";
import { handlers } from '../src/mock/handlers'
import { mock } from '../src/mock/mockData'
import API from "./../src/api.js";

// This configures a request mocking server with the given request handlers.
const server = setupServer(...handlers);

const pactMswAdapter = setupPactMswAdapter({
  server,
  options: {
    consumer: "pact-test-paddy-consumer", providers: { ['pact-test-paddy-provider']: ['/QAs'], ["product-api"]: ["/QA/1"], },
    debug: true,
    includeUrl: ['QAs', '/qa'],
    excludeHeaders: ["x-powered-by", "cookie"]
  },
});

describe("Example conumser tests with MSW", () => {

beforeAll(() => {
    server.listen(); // tell the server to start listening for interactions
  });

  beforeEach(() => {
    pactMswAdapter.newTest(); // tell server a new test is starting
  });

  afterEach(() => {
    pactMswAdapter.verifyTest(); //Waits for all pending network calls to finish or timeout and that there were no calls to included urls which aren't handled by msw. 
    server.resetHandlers(); // Removes any request handlers that were added on runtime 
  });

  afterAll(async () => {
    await pactMswAdapter.writeToFile(); // writes the pacts to a file
    pactMswAdapter.clear(); // clear down adapters
    server.close(); // stop the server
  });

  describe("API", () => {
    test("get all qas", async () => {
      const respqas = await API.getAllqas();
      expect(respqas).toEqual(mock.qas);
    });
  
    // test("get product ID 1", async () => {
    //   const respQA = await API.getQA(1);
    //   expect(respQA).toEqual(mock.QA);
    // });  
  })
})