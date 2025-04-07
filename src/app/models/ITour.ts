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
    date: Date
}
export interface ITourServerRes {
    tours: ITour[]
}

export interface ITourTypes {
    key: string,
    label: string
}