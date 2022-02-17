/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosStatic } from 'axios';

export class StormGlass {
    constructor(protected request: AxiosStatic) {}
    
    // eslint-disable-next-line @typescript-eslint/ban-types
    public async fetchPoints(lat: number,lng: number): Promise<{}> {
        return this.request.get(
            `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed&source=noaa
            `);
    }
}