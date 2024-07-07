const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Agriprecision - Serviço de Autenticação API',
            version: '1.0.0',
            description: 'Uma API Express com autenticação JWT',
        },
        // servers: [
        //     {
        //         url: `http://localhost:3333/api`,
        //     },
        // ],
    },
    apis: ['./src/routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
