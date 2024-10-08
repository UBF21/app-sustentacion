
import { BuilderValidationConfig, ValidationType } from "vali-valid";
import { ILogin } from "../../interfaces/ILogin";

export const validationsLogin: BuilderValidationConfig<ILogin> = [
    {
        field: "email",
        validations: [
            { type: ValidationType.Required },
            { type: ValidationType.Email }
        ]
    },
    {
        field: "password",
        validations: [
            { type: ValidationType.Required }
        ]
    }
] 