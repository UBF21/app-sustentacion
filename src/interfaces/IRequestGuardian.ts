export interface IRequestGuardian{
    id:string;
    tiempoEstimado:string;
    requerimientos:string;
}

export const initialRequestGuardian = () :IRequestGuardian => {
    return {
        id:"",
        tiempoEstimado:"",
        requerimientos:""
    }
}