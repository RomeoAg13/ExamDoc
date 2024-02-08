import path from "path";

export const swaggerOptions = {
    swaggerDefinition:{
        openapi:'3.0.0',
        info:{
            title:'API IP LOCATION',
            version:'1.0.0',
            description:'Documentation de l\'API IP LOCATION'
        },
        servers: [
            {
                url:'http://localhost:3000',
                description:'Serveur Local',
            },
        ] ,       
    },
    apis:[path.resolve(__dirname, './controllers/*.ts')],
}