import { BuilderValidationConfig, ValidationType } from "vali-valid";
import { IPublishPet } from "../../interfaces/IPublishPet";

export const validationsPublishPet: BuilderValidationConfig<IPublishPet> = [
    {
        field:"descripcion",
        validations:[
            { type:ValidationType.Required}
        ]
    },
    {
        field:"image",
        validations:[
            { type:ValidationType.Required}
        ]
    },
    {
        field:"idAnimal",
        validations:[
            { type:ValidationType.Required}
        ]
    },
    {
        field:"idEstadoSalud",
        validations:[
            { type:ValidationType.Required}
        ]
    }

]