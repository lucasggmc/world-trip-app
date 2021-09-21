import { Server, Model } from 'miragejs'
import cityRoutes from './routes/cityRoutes'
import continentRoutes from './routes/continentRoutes'

// Some imports from routes folder. Ex:
// import { mock1Routes } from './routes/mock1Routes'

const createMirageServer = () => {
  const server = new Server({

    models: {
      citys: Model,
      continents: Model
    },

    seeds(server) {
      server.db.loadData({
        citys: [
          {
            id: 1,
            continentId: 1,
            name: 'Londres',
            country: 'Reino Unido',
            image: '/images/london.jpg'
          },
          {
            id: 2,
            continentId: 1,
            name: 'Paris',
            country: 'França',
            image: '/images/paris.jpg'
          },
          {
            id: 3,
            continentId: 1,
            name: 'Roma',
            country: 'Itália',
            image: '/images/roma.jpg'
          },
          {
            id: 4,
            continentId: 1,
            name: 'Praga',
            country: 'República Tcheca',
            image: '/images/praga.jpg'
          },
          {
            id: 5,
            continentId: 1,
            name: 'Amsterdã',
            country: 'Holanda',
            image: '/images/amsterdam.jpg'
          },
          {
            id: 6,
            continentId: 2,
            name: 'Hong Kong',
            country: 'China',
            image: '/images/hongkong.jpg'
          },
          {
            id: 7,
            continentId: 2,
            name: 'Bangkok',
            country: 'Tailândia',
            image: '/images/bangkok.jpg'
          },
          {
            id: 8,
            continentId: 2,
            name: 'Cingapura',
            country: 'Cingapura',
            image: '/images/cingapura.jpg'
          },
          {
            id: 9,
            continentId: 2,
            name: 'Tóquio',
            country: 'Japão',
            image: '/images/tokio.jpg'
          },
          {
            id: 10,
            continentId: 2,
            name: 'Dubai',
            country: 'Emirados Árabes',
            image: '/images/dubai.jpg'
          },
        ],
        continents: [
          {
            id: 1,
            image: '/images/europe-detail.jpg'
          },
          {
            id: 2,
            image: '/images/asia-detail.jpg'
          }
        ]
      })
    },

    routes() {
      this.namespace = 'api';
      this.urlPrefix = process.env.API_BASE_URL

      continentRoutes(this);
      cityRoutes(this);

      this.namespace = "/";
      this.passthrough();
    }
  })

  return server
}

export default createMirageServer