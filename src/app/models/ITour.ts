export interface ITour {
    createdAt?: string,
    name: string,
    avatar?: string,
    id: string,
    firstName?: string,
    lastName?: string,
    cardNumber?: string,
    birthDate?: string,
    age?: number,
    citizenship?: string,
    description: string,
    tourOperator: string,
    price: string,
    img: string,
    type?: string,
    locationId?: string,
    date: Date,
    country?: ICountriesResponseItem,
    code?: string,
    inBasket?: boolean
}
export interface ITourServerRes {
    tours: ITour[]
}

export interface ITourTypes {
    key: string,
    label?: string
}

export interface ICountriesResponseItem {
    iso_code2: string,
    iso_code3: string,
    name_ru: string,
    flag_url: string
}
export interface ILocation {
    lat: number;
    lng: number;
}

export type Coords = {latlng: [number, number]}