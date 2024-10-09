export  interface IRegisterUser{
    id:string;
    nombres:string;
    apellidos:string;
    email:string;
    password:string;
}

export const initialRegisteUser = () :IRegisterUser => {
    return {
        id:"",
        nombres:"",
        apellidos:"",
        email:"",
        password:""
    }
}