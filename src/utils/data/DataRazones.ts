import { IItemCombo } from "../../interfaces/IItemCombo";

export const dataRazones = (): IItemCombo[] => {
   return  [
        { key: crypto.randomUUID(), text: "Compañero de vida" },
        { key: crypto.randomUUID(), text: "Para la familia" },
        { key: crypto.randomUUID(), text: "Salvar una vida" },
        { key: crypto.randomUUID(), text: "Compañía" },
        { key: crypto.randomUUID(), text: "Para actividades al aire libre" },
        { key: crypto.randomUUID(), text: "Apoyo emocional" },
        { key: crypto.randomUUID(), text: "Para enseñar a los niños responsabilidad" },
        { key: crypto.randomUUID(), text: "Seguridad en el hogar" },
        { key: crypto.randomUUID(), text: "Terapia y bienestar" },
        { key: crypto.randomUUID(), text: "Dar y recibir amor" }
    ];
}