import { Request, Response } from "express";
import axios, { AxiosResponse } from 'axios';
import { IP_API_BASE_URL } from "../constants/config";
import { MinimalIpData } from "../interface/MinimalIpData";
import { MinimalIpData2} from "../interface/MinimalIpData2";
import { MinimalIpData3} from "../interface/MinimalIpData3";

export class IpController {
    private API_KEY: string;

    constructor(apiKey: string) {
        this.API_KEY = apiKey;
    }

    public async getIp(req: Request, res: Response): Promise<void> {
        const ip: string = req.params.ip;
        try {

            const response: AxiosResponse = await axios.get(
                `${IP_API_BASE_URL}country,city,vpn?apiKey=${this.API_KEY}&ipAddress=${ip}`
            );

            const minimalData: MinimalIpData = {
                ip: response.data.ip,
                country: response.data.location.country,
                region: response.data.location.region,
                city: response.data.location.city,
                timezone: response.data.location.timezone,
                lat: response.data.location.lat,
                lng: response.data.location.lng,
                isp: response.data.isp,
            };      
                

            res.json(minimalData);

            }
         catch (error) {
            res.status(500).json({ error: "error" });
        }
    }

    public async getCity(req: Request, res: Response): Promise<void> {
        const ip: string = req.params.ip;
        try {

            const response: AxiosResponse = await axios.get(
                `${IP_API_BASE_URL}country,city,vpn?apiKey=${this.API_KEY}&ipAddress=${ip}`
            );

            const minimalData2: MinimalIpData2 = {
                ip: response.data.ip,
                city: response.data.location.city,
             
            };      
            res.json(minimalData2);
            }
         catch (error) {
            res.status(500).json({ error: "error" });
        }
    }
    


    public async getIsp(req: Request, res: Response): Promise<void> {
        const ip: string = req.params.ip;
        try {

            const response: AxiosResponse = await axios.get(
                `${IP_API_BASE_URL}country,city,vpn?apiKey=${this.API_KEY}&ipAddress=${ip}`
            );

            const minimalData3: MinimalIpData3 = {
                ip: response.data.ip,
                isp: response.data.isp,
             
            };      
            res.json(minimalData3);
            }
         catch (error) {
            res.status(500).json({ error: "error" });
        }
    }
}
