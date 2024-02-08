import express, {Request, Response }  from 'express';
import { IpController } from './controllers/IpController';
import { API_KEY } from './constants/config';
import swaggerJSDOC from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { swaggerOptions } from './swaggerOption';
const app= express();
const ipController = new IpController(API_KEY);


app.get( "/test" , (req:Request, res:Response)=>{
    res.send("API Ip location !");
});

app.get("/ip/:ip", async (req:Request, res:Response)=>{
    await ipController.getIp(req,res);
});

app.get('/city/:ip', async( req:Request, res:Response)=>{
    await ipController.getCity(req,res);
})

app.get('/isp/:ip', async( req:Request, res:Response)=>{
    await ipController.getIsp(req,res);
})

const specs = swaggerJSDOC(swaggerOptions);
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(specs));

const PORT : number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.listen(PORT, () => {
    console.log(`Le serveur est en cours d'Execution sur le PORT ${PORT}`)
})

