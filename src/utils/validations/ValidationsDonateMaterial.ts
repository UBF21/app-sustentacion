import { BuilderValidationConfig, ValidationType } from "vali-valid";
import { IDonateMaterial } from "../../interfaces/IDonateMaterial";

export const validationsDoanteMaterial:BuilderValidationConfig<IDonateMaterial> = [
    {
        field:"idRefugio",
        validations:[
            { type: ValidationType.Required}
        ]
    },
    {
        field:"idMaterial",
        validations:[
            { type: ValidationType.Required}
        ]
    },
    {
        field:"direccion",
        validations:[
            { type: ValidationType.Required}
        ]
    },
    {
        field:"calle",
        validations:[
            { type: ValidationType.Required}
        ]
    },
    {
        field:"nroCalle",
        validations:[
            { type: ValidationType.Required}
        ]
    },
    {
        field:"referencia",
        validations:[
            { type: ValidationType.Required}
        ]
    },
] 