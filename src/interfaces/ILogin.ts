export interface ILogin {
    email: string;
    password: string;
}

export const initialLogin = (): ILogin => {
    return {
        email: "",
        password: ""
    }
}