import { IItemCombo } from "../../interfaces/IItemCombo";

export const dataRazones = (): IItemCombo[] => {
   return  [
        { key: crypto.randomUUID(), text: "Compañero de vida" },
        { key: crypto.randomUUID(), text: "Compañía" },
        { key: crypto.randomUUID(), text: "Apoyo emocional" },
        { key: crypto.randomUUID(), text: "Terapia y bienestar" },
    ];
}