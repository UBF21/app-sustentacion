import { BuilderValidationConfig, ValidationType } from "vali-valid";
import { IDonateMonetaria } from "../../interfaces/IDonateMonetaria";

export const validationsDonateMonetaria: BuilderValidationConfig<IDonateMonetaria> = [
    {
        field: "idRefugio",
        validations: [
            { type: ValidationType.Required }
        ]
    },
    {
        field: "nroTarjeta",
        validations: [
            { type: ValidationType.Required },
            {
                type: ValidationType.Pattern,
                value: (value: string) => {
                    return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(value);
                },
                message: "El número de tarjeta de crédito debe tener el siguiente formato: XXXX XXXX XXXX XXXX (16 dígitos)"
            }
        ]
    },
    {
        field: "anio",
        validations: [
            { type: ValidationType.Required },
            { type: ValidationType.MinLength, value: 4 },
            { type: ValidationType.MaxLength, value: 4 }
        ]
    },
    {
        field: "mes",
        validations: [
            { type: ValidationType.Required },
            { type: ValidationType.MinLength, value: 2 },
            { type: ValidationType.MaxLength, value: 2 }
        ]
    },
    {
        field: "cvv",
        validations: [
            { type: ValidationType.Required },
            { type: ValidationType.MinLength, value: 3 },
            { type: ValidationType.MaxLength, value: 3 },
        ]
    },
]