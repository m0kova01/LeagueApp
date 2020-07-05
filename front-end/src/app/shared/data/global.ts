import { HttpHeaders } from '@angular/common/http';

export const API_KEY = 'RGAPI-50e1c50b-267d-42b1-b1d2-ce73aab467ee';
export const AccessPointUrl = 'https://localhost:5001/api/';



export class Global {
    static BASE_URL = AccessPointUrl;

    public static API_ENDPOINTS = {
        SUMMONER: Global.BASE_URL + 'summoner/',
        MATCH: Global.BASE_URL + 'match/',
        REGION: Global.BASE_URL + 'region/'
    };

    public static GetHeader(): any {
        // add authorization header
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return { headers };
    }
}
