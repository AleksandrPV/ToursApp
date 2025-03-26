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
    locationId?: string
}
export interface ITourServerRes {
    tours: ITour[]
}