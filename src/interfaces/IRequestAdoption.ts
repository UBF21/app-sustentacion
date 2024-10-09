export interface IRequestAdoption{
    id:string;
    nombres:string;
    apellidos:string;
    dni:string;
    idRazonAdopcion:string;
}


export const initialRequestAdoption = () :IRequestAdoption  => {
    return {
        id:"",
        nombres: "",
        apellidos: "",
        dni : "",
        idRazonAdopcion: ""
    }
}