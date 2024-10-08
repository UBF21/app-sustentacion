import { BuilderValidationConfig, ValidationType } from "vali-valid";
import { IRequestAdoption } from "../../interfaces/IRequestAdoption";

export const validationsRequestAdoption: BuilderValidationConfig<IRequestAdoption> = [
    {
        field: "nombres",
        validations: [
            { type: ValidationType.Required }
        ]
    },
    {
        field: "apellidos",
        validations: [
            { type: ValidationType.Required }
        ]
    },
    {
        field: "dni",
        validations: [
            { type: ValidationType.Required },
            { type: ValidationType.MinLength, value: 8 },
            { type: ValidationType.MaxLength, value: 8 }
        ]
    },
    {
        field: "idRazonAdopcion",
        validations: [
            { type: ValidationType.Required }
        ]
    }
]