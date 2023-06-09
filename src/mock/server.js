
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// Setup requests interception using the given handlers.
export const server = setupServer(...handlers) // allows us to mock a server based off handler info