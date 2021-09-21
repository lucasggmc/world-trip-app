import { Server } from 'miragejs';
import Schema from 'miragejs/orm/schema';

const cityRoutes = (server: Server) => {
    console.log('tttt');
    server.get('/citys', (schema: any, request) => {
        console.log('schema', schema);
        return schema.citys.where({ continentId: 1});
    })

    // server.get("/citys", () => ({
    //     citys: [
    //       { id: 1, name: "Europa", description: "O continente mais antigo", url: "/images/europe.jpg" },
    //       { id: 2, name: "Ásia", description: "O maior continente", url: "/images/asia.jpg" },
    //       { id: 3, name: "América", description: "O continente com a maior mata atlântica do mundo", url: "/images/america.jpg" },
    //       { id: 4, name: "África", description: "Venha explorar esse continente", url: "/images/africa.jpg" },
    //       { id: 5, name: "Oceania", description: "O continente de madagascar e modernidade", url: "/images/oceania.jpg" },
    //     ],
    //   }))
}

export default cityRoutes;