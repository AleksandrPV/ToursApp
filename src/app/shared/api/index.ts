import { environment } from "../../../environments/environment.development";
import { IApi } from "../../models/IApi";

const serverApi = environment.apiUrl;
export const API: IApi = {
    auth: `${serverApi}/auth`,
    registration: `${serverApi}/register`,
    tours: `${serverApi}/tours`,
    tour: `${serverApi}/tour`,
    config: `/config/config.json`,
    nearestTours: `${serverApi}/nearestTours`,
}