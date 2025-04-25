import { environment } from "../../../environments/environment.development";
import { IApi } from "../../models/IApi";

const serverApi = environment.apiUrl;
export const API: IApi = {
    auth: `${serverApi}/auth`,
    registration: `${serverApi}/register`,
    newPasswordSetting: `${serverApi}/newPasswordSetter`,
    tours: `${serverApi}/tours`,
    tour: `${serverApi}/tour`,
    config: `/config/config.json`,
    nearestTours: `${serverApi}/nearestTours`,
    countries: `${serverApi}/countries`,
    countryByCode: 'https://restcountries.com/v3.1/alpha',
    getWeather: "https://api.open-meteo.com/v1/forecast",
    order: `${serverApi}/order`
}