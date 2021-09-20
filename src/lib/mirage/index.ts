import { Server } from 'miragejs'
import continentRoutes from './routes/continentRoutes'

// Some imports from routes folder. Ex:
// import { mock1Routes } from './routes/mock1Routes'

const createMirageServer = () => {
  const server = new Server({
    routes () {
        this.namespace = 'api';
      this.urlPrefix = process.env.API_BASE_URL      

      // Examples:
      // mock1Routes(this)
      continentRoutes(this);
      this.namespace = "/"; 
      this.passthrough();
    }
  })

  return server
}

export default createMirageServer