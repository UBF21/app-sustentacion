export interface IDonateMaterial {
    id: string;
    idRefugio: string;
    idMaterial: string;
    direccion: string;
    calle: string;
    nroCalle: string;
    referencia: String;
}

export const initialDonateMaterial = (): IDonateMaterial => {
    return {
        id: "",
        idRefugio: "",
        idMaterial: "",
        direccion: "",
        calle: "",
        nroCalle: "",
        referencia: ""
    }
}