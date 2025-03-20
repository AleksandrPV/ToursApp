import { environment } from "../../../environments/environment.development";

const serverApi = environment.apiUrl;
export const API = {
    auth: `${serverApi}/auth`,
    registration: `${serverApi}/register`,
    tours: `${serverApi}/tours`
}