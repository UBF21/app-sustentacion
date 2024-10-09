import { IItemCombo } from "../../interfaces/IItemCombo"

export const dataRazasGatos = () : IItemCombo[] => {
    return [
        { key: crypto.randomUUID(), text: "Persa" },
        { key: crypto.randomUUID(), text: "Siamés" },
        { key: crypto.randomUUID(), text: "Bengalí" },
        { key: crypto.randomUUID(), text: "Maine Coon" },
        { key: crypto.randomUUID(), text: "Ragdoll" },
        { key: crypto.randomUUID(), text: "Sphynx" },
        { key: crypto.randomUUID(), text: "British Shorthair" },
        { key: crypto.randomUUID(), text: "Abisinio" },
        { key: crypto.randomUUID(), text: "Noruego de Bosque" },
        { key: crypto.randomUUID(), text: "Devon Rex" }
    ]
}