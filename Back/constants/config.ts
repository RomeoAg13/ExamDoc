import dotenv from "dotenv";

dotenv.config();

export const API_KEY = process.env.IP_API_KEY || "default_api_key";
export const IP_API_BASE_URL = `https://geo.ipify.org/api/v2/`;





