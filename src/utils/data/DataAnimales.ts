import { IItemCombo } from "../../interfaces/IItemCombo";

export const dataAnimales = () : IItemCombo[] => {
    return [
        {
            key:crypto.randomUUID(),
            text:"Perro"
        },
        {
            key:crypto.randomUUID(),
            text:"Gato"
        }
    ]
}