export interface IDonateMonetaria {
    id: string;
    idRefugio:string;
    nroTarjeta: string;
    mes: string;
    anio: string;
    cvv: string;
}

export const initialDonateManetaria = () :IDonateMonetaria => {
    return {
        id:"",
        idRefugio: "",
        nroTarjeta:"",
        mes: "",
        anio: "",
        cvv: ""
    }
}