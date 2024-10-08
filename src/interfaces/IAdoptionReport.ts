export interface IAdoptionReport {
    id: string;
    image: Blob | null;
    comentarios: string;
    idEstadoSalud: string;
    idComportamiento: string;
}

export const initialAdoptionReport = (): IAdoptionReport => {
    return {
        id: "",
        comentarios: "",
        idComportamiento: "",
        idEstadoSalud: "",
        image: null
    }
}