import { Request, Response } from "express";
import axios, { AxiosResponse } from 'axios';
import { IP_API_BASE_URL } from "../constants/config";
import { MinimalIpData } from "../interface/MinimalIpData";

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
}
