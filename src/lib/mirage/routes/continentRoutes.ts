import { Server, Response } from 'miragejs'

const continentRoutes = (server: Server) => {
    server.get("/continents", () => ({
        continents: [
          { id: 1, name: "Europa", description: "O continente mais antigo", image: "/images/europe.jpg" },
          { id: 2, name: "Ásia", description: "O maior continente", image: "/images/asia.jpg" },
          { id: 3, name: "América", description: "O continente com a maior mata atlântica do mundo", image: "/images/america.jpg" },
          { id: 4, name: "África", description: "Venha explorar esse continente", image: "/images/africa.jpg" },
          { id: 5, name: "Oceania", description: "O continente de madagascar e modernidade", image: "/images/oceania.jpg" },
        ],
      }))
      
      server.get('/continents/:continentId', (schema: any, request) => {                 
        return schema.continents.findBy({ id: request.params.continentId });
    })
}

export default continentRoutes