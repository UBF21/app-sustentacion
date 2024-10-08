import { BuilderValidationConfig, ValidationType } from "vali-valid";
import { IAdoptionReport } from "../../interfaces/IAdoptionReport";

export const validationsAdoptionReport:BuilderValidationConfig<IAdoptionReport> = [
    {
        field:"comentarios",
        validations:[
            { type: ValidationType.Required}
        ]
    },
    {
        field:"idComportamiento",
        validations:[
            { type: ValidationType.Required}
        ]
    },    
    {
        field:"idEstadoSalud",
        validations:[
            { type: ValidationType.Required}
        ]
    },
    {
        field:"image",
        validations:[
            { type: ValidationType.Required}
        ]
    }
]