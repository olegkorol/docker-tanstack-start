import { createRouter as createTanstackRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

import './styles.css'

// Create a new router instance
export const createRouter = () => {
  const router = createTanstackRouter({
    routeTree,
    scrollRestoration: true,
  })
  return router
}

const router = createRouter()

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
