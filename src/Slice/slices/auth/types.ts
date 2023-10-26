

export enum Status{
    LOADING='loading',
    SUCCESS='success',
    ERROR='error',
}

export type TRegister = {
    fullName: string
    email: string,
    password: string,
    avatarUrl?: string
}
export type TUserData = {
    _id: string,
    fullName: string
    email: string,
    password: string,
    avatarUrl?: string
}
export type TAuth = {
    email: string,
    password: string,
}
export interface TAuthResponse {
    data: null | TUserData,
    status: Status
}