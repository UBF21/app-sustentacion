import { IItemCombo } from "../../interfaces/IItemCombo";

export const dataEstadosSalud = (): IItemCombo[] => {
    return [
        {
            key: crypto.randomUUID(),
            text: "Salud óptima"
        },
        {
            key: crypto.randomUUID(),
            text: "En tratamiento"
        },
        {
            key: crypto.randomUUID(),
            text: "En recuperación"
        },
        {
            key: crypto.randomUUID(),
            text: "Enfermedad leve"
        },
        {
            key: crypto.randomUUID(),
            text: "Enfermedad grave"
        },
        {
            key: crypto.randomUUID(),
            text: "Bajo observación"
        },
        {
            key: crypto.randomUUID(),
            text: "Vacunado"
        },
        {
            key: crypto.randomUUID(),
            text: "Parásitos"
        },
        {
            key: crypto.randomUUID(),
            text: "Desnutrición"
        }
    ]
} 