export interface IDonateMonetaria {
    id: string;
    idRefugio:string;
    monto:string;
    nroTarjeta: string;
    mes: string;
    anio: string;
    cvv: string;
}

export const initialDonateManetaria = () :IDonateMonetaria => {
    return {
        id:"",
        idRefugio: "",
        monto: "",
        nroTarjeta:"",
        mes: "",
        anio: "",
        cvv: ""
    }
}