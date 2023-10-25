

export enum Status{
    LOADING='loading',
    SUCCESS='success',
    ERROR='error',
}

export type TRegister = {
    name: string,
    surname: string
    email: string,
    password: string,
    avatarUrl?: string
}
export type TAuth = {
    email: string,
    password: string,
}
export interface TAuthResponse {
    data: null | TAuth | TRegister,
    status: Status
}