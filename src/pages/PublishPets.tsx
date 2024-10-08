import { useContext, useEffect, useRef, useState } from 'react';
import { FooterMovil } from './FooterMovil';
import { Avatar, Button, Dropdown, Field, Input, Option, Select, Textarea, useId } from '@fluentui/react-components';
import { AnimalDogRegular } from "@fluentui/react-icons";
import { dataAnimales } from '../utils/data/DataAnimales';
import { dataEstadosSalud } from '../utils/data/DataEstadoSalud';
import { initialPublisPet, IPublishPet } from '../interfaces/IPublishPet';
import { FormErrors, ValiValid } from 'vali-valid';
import { validationsPublishPet } from '../utils/validations/ValidationsPublishPets';
import { IItemCombo } from '../interfaces/IItemCombo';
const PublishPets = () => {
    const dropdownId = useId("dropdown-default");

    const [formPublishPet, setPublishPet] = useState<IPublishPet>(initialPublisPet());
    const [errors, setErrors] = useState<FormErrors<IPublishPet>>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const [selectedAnimal, setSelectedAnimal] = useState<IItemCombo>({ key: "", text: "" });
    const [selectedEstadoSalud, setSelectedEstadoSalud] = useState<IItemCombo>({ key: "", text: "" });



    const fileImage = useRef<HTMLInputElement>(null);
    const [fileImageAnimal, setFileImageAnimal] = useState<string>("");

    const managerValitation = new ValiValid<IPublishPet>(setIsFormValid, validationsPublishPet);

    const handleChange = (field: keyof IPublishPet, value: any): void => {
        managerValitation.handleChange(field, value, setPublishPet, setErrors);
    };

    const handleClickImage = () => {
        if (fileImage.current !== null && fileImage.current !== undefined) {
            fileImage.current.click();
        }
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    useEffect(() => {
        const errors = managerValitation.validate(formPublishPet);
        setErrors(errors);
    }, [formPublishPet])


    return (
        <div>
            <div className='container mt-4'>
                <div className="col-12 text-center">
                    <h4 className='fw-bold'>Publicar Animal</h4>
                </div>
                <div className="col-12 mb-2 d-flex justify-content-center">
                    <Field
                        label=""
                        validationState={!errors ? "none" : errors.image ? "error" : "success"}
                        validationMessage={!errors ? "none" : errors.image ? errors.image : "Correcto."}
                    >
                        <div className='d-flex justify-content-center'>

                            <input type="file" hidden ref={fileImage} onChange={(e) => {
                                if (e.target.files && e.target.files.length > 0) {
                                    const file = e.target.files[0];
                                    handleChange("image", file);
                                    setFileImageAnimal(URL.createObjectURL(file));
                                }
                            }} />


                            <Avatar
                                // name="Ashley McCarthy"
                                style={{ width: '132px', height: '132px' }}
                                icon={<AnimalDogRegular fontSize={60} />}
                                onClick={handleClickImage}
                                image={{ src: fileImageAnimal }}
                            />
                        </div>
                    </Field>
                </div>
                <div className="col-12 mb-2">
                    <Field
                        label="Especie"
                        validationState={!errors ? "none" : errors.idAnimal ? "error" : "success"}
                        validationMessage={!errors ? "none" : errors.idAnimal ? errors.idAnimal : "Correcto."}
                    >
                        <Dropdown
                            aria-labelledby={dropdownId}
                            placeholder="Seleccione la especie"
                            value={selectedAnimal.text}
                            onOptionSelect={(e, data) => {
                                setSelectedAnimal({ text: data.optionText ?? "", key: data.optionValue ?? "" });
                                handleChange("idAnimal", data.optionValue);
                            }}
                        >
                            {dataAnimales().map((option) => (
                                <Option key={option.key} value={option.key} text={option.text}>
                                    {option.text}
                                </Option>
                            ))}
                        </Dropdown>
                    </Field>
                </div>
                <div className="col-12 mb-2">
                    <Field
                        label="Estado de Salud"
                        validationState={!errors ? "none" : errors.idEstadoSalud ? "error" : "success"}
                        validationMessage={!errors ? "none" : errors.idEstadoSalud ? errors.idEstadoSalud : "Correcto."}
                    >
                        <Dropdown
                            aria-labelledby={dropdownId}
                            placeholder="Select el estado de salud"
                            value={selectedEstadoSalud.text}
                            onOptionSelect={(e, data) => {
                                setSelectedEstadoSalud({ text: data.optionText ?? "", key: data.optionValue ?? "" });
                                handleChange("idEstadoSalud", data.optionValue);
                            }}
                        >
                            {dataEstadosSalud().map((option) => (
                                <Option key={option.key} value={option.key} text={option.text}>
                                    {option.text}
                                </Option>
                            ))}
                        </Dropdown>
                    </Field>
                </div>
                <div className="col-12 mb-2">
                    <Field
                        label="Descripción"
                        validationState={!errors ? "none" : errors.descripcion ? "error" : "success"}
                        validationMessage={!errors ? "none" : errors.descripcion ? errors.descripcion : "Correcto."}
                    >
                        <Textarea
                            cols={13}
                            value={formPublishPet.descripcion}
                            onChange={(e) => {
                                handleChange("descripcion", e.target.value);
                            }}
                        />
                    </Field>
                </div>
                <div className="col-12 mb-2">
                    <Field
                        label="Ubicación"
                    // validationState="success"
                    // validationMessage="This is a success message."
                    >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56887.543165843075!2d-77.1065880513672!3d-12.12172299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81e30b6695f%3A0x1015ccad533f5be5!2sParque%20Kennedy!5e1!3m2!1ses-419!2spe!4v1727734857409!5m2!1ses-419!2spe" width="320" height="300" style={{ "border": 0 }} loading="lazy"></iframe>
                    </Field>
                </div>

                <div className="col-12 mt-3">
                    <Button
                        appearance='primary'
                        disabled={!isFormValid}
                    >
                        Publicar
                    </Button>
                </div>

            </div>
            <FooterMovil />
        </div>
    );
}

export {
    PublishPets
};