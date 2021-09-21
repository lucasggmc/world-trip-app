import { Server, Model } from 'miragejs'
import cityRoutes from './routes/cityRoutes'
import continentRoutes from './routes/continentRoutes'

// Some imports from routes folder. Ex:
// import { mock1Routes } from './routes/mock1Routes'

const createMirageServer = () => {
  const server = new Server({

    models: {
        citys: Model,
    },

    seeds(server) {
        server.db.loadData({
            citys: [
              { 
                id: 1,
                continentId: 1,
                name: 'Londres',
                Country: 'Reino Unido',
                image: ''
              },
              { 
                id: 2,
                continentId: 1,               
                name: 'Paris',
                Country: 'França',
                image: ''
              },
              { 
                id: 3,
                continentId: 1,               
                name: 'Roma',
                Country: 'Itália',
                image: ''
              },
              { 
                id: 4,      
                continentId: 1,         
                name: 'Praga',
                Country: 'República Tcheca',
                image: ''
              },
              { 
                id: 5,    
                continentId: 1,           
                name: 'Amsterdã',
                Country: 'Holanda',
                image: ''
              }
            ]
          })
    },

    routes () {
        this.namespace = 'api';
        this.urlPrefix = process.env.API_BASE_URL      

      // Examples:
      // mock1Routes(this)
      continentRoutes(this);
      cityRoutes(this);

      this.namespace = "/"; 
      this.passthrough();
    }
  })

  return server
}

export default createMirageServer