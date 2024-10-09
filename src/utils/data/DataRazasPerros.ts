import { IItemCombo } from "../../interfaces/IItemCombo";

export const dataRazasPerros = () : IItemCombo[] => {
    return [
        { key: crypto.randomUUID(), text: "Labrador Retriever" },
        { key: crypto.randomUUID(), text: "Poodle" },
        { key: crypto.randomUUID(), text: "Bulldog" },
        { key: crypto.randomUUID(), text: "Siamés" },
        { key: crypto.randomUUID(), text: "Beagle" },
        { key: crypto.randomUUID(), text: "Holland Lop" },
        { key: crypto.randomUUID(), text: "Enano" },
        { key: crypto.randomUUID(), text: "Siberiano" },
        { key: crypto.randomUUID(), text: "Rottweiler" }
    ]
}