import { Server, Response } from 'miragejs'

const continentRoutes = (server: Server) => {
    server.get("/continents", () => ({
        continents: [
          { id: 1, name: "Europa", description: "O continente mais antigo" },
          { id: 1, name: "Ásia", description: "O maior continente" },
          { id: 1, name: "América", description: "O continente com a maior mata atlântica do mundo" },
          { id: 1, name: "África", description: "Venha explorar esse continente" },
          { id: 1, name: "Oceania", description: "O continente de madagascar e modernidade" },
        ],
      }))
}

export default continentRoutes