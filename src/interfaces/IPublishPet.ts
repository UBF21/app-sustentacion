export interface IPublishPet{
    id: string;
    image: Blob | null;
    idAnimal:string;
    descripcion:string;
    idEstadoSalud: string;
}

export const initialPublisPet = () : IPublishPet => {
    return {
        id: "",
        image: null,
        descripcion: "",
        idAnimal: "",
        idEstadoSalud : ""
    }
}