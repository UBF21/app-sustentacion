import { IItemCombo } from "../../interfaces/IItemCombo";

export const dataComportamientos = (): IItemCombo[] => {
    return [
        {

            key: crypto.randomUUID(),
            text: "Sociable"
        },
        {

            key: crypto.randomUUID(),
            text: "Protector"
        },
        {

            key: crypto.randomUUID(),
            text: "Independiente"
        },
        {

            key: crypto.randomUUID(),
            text: "Juguetón"
        },
        {

            key: crypto.randomUUID(),
            text: "Amigable"
        }
    ]
}