export interface IAdress {
    street: string;
    city: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    address: IAdress;
}

export interface ITodo{
    id: number;
    title: string;
    complated: boolean;
}