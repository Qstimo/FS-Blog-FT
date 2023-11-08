

export enum Status{
    LOADING='loading',
    SUCCESS='success',
    ERROR='error',
}

export type TUser =  {
    _id: string,
    email: string,
    fullName: string,
    passwordHash: string,
    avatarUrl: string,
    createdAt: string,
    updatedAt: string,
    __v: number
}
export type TFetchComments ={
        
    _id: string,
    post: string,
    text: string,
    user: TUser,
    createdAt: string,
    updatedAt: string,
    __v: 0

}
export type TFetchPosts ={
    _id:string,
    title:string,
    text:string,
    tags: string[]
    user:TUser,
    viewsCount:number,
    createdAt:string,
    updatedAt:string,
    comments:TFetchComments[],
    imageUrl?:string,
}

export interface TPosts{
    posts:{
        items:TFetchPosts[],
        status: Status
    },
    tags:{
        items:string[],
        status: Status
    }
    latsPopulatePost:{
        items:TFetchPosts[],
        status: Status
    }
}