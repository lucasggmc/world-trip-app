import { Server } from 'miragejs';

const cityRoutes = (server: Server) => {    
    server.get('/citys/:continentId', (schema: any, request) => {                
        return schema.citys.where({ continentId: request.params.continentId});
    })    
}

export default cityRoutes;