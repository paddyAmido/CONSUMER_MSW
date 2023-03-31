// src/mocks/handlers.js
import { rest } from 'msw'
import { mock } from './mockData'
import API from "../api";

// Request handler is a function that determines whether an outgoing request should be mocked, and specifies its mocked response.
// The rest namespace contains a set of Request handlers designed for convenient mocking of REST API requests.

export const handlers = [
    rest.get(API.url + "/QAs", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mock.qas));
      }),
      rest.get(API.url + "/QA/1", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mock.QA));
      })
]