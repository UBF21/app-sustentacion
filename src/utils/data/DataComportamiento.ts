import { IItemCombo } from "../../interfaces/IItemCombo";

export const dataComportamientos = (): IItemCombo[] => {
    return [
        {

            key: crypto.randomUUID(),
            text: "Apropiado"
        },
        {

            key: crypto.randomUUID(),
            text: "Inapropiado"
        }
    ]
}