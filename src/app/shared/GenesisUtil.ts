import { environment } from '../../environments/environment';



export class GenesisUtil {
    static getApiEndPointPath(): string {
        return environment.apiEndPoint;
    }

    static getBaseURL(): string {
        return environment.baseURL;
    }

    static getGoogleMapApiEndPointPath(): string {
        return environment.googleMapEndPoint;
    }

    static getMapApiKey(): string {
        return environment.mapApiKey;
    }

    static getImageStaticPath(): string {
        return environment.baseURL;
    }
}
