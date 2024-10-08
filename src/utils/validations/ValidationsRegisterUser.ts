import { BuilderValidationConfig, ValidationType } from "vali-valid";
import { IRegisterUser } from "../../interfaces/IRegisterUser";

export const validationsRegisterUser : BuilderValidationConfig<IRegisterUser> = [
    {
        field:"nombres",
        validations:[
            {type:ValidationType.Required}
        ]
    },
    {
        field:"apellidos",
        validations:[
            {type:ValidationType.Required}
        ]
    },
    {
        field:"email",
        validations:[
            {type:ValidationType.Required},
            {type:ValidationType.Email},
        ]
    },
    {
        field:"password",
        validations:[
            {type:ValidationType.Required}
        ]
    }
] 