import { BuilderValidationConfig, ValidationType } from "vali-valid";
import { IRequestGuardian } from "../../interfaces/IRequestGuardian";

export const validationsRequestGuardian: BuilderValidationConfig<IRequestGuardian> = [
    {
        field: "requerimientos",
        validations: [
            { type: ValidationType.Required }
        ]
    },
    {
        field:"tiempoEstimado",
        validations:[
            { type: ValidationType.Required },
            { type: ValidationType.DigitsOnly }
        ]
    }
]