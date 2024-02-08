import express from 'express';

const app= express();
const API_KEY = "b5e71e373cmsh88f7c6d5994b015p10e03ejsn85ac285ecd37";

const PORT : number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.listen(PORT, () => {
    console.log('Le serveur est en cours d')
})