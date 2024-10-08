import { useContext, useEffect, useRef, useState } from 'react';
import { FooterMovil } from './FooterMovil';
import { Avatar, Button, Dropdown, Field, Option, Textarea, useId } from '@fluentui/react-components';
import { AnimalDogRegular } from "@fluentui/react-icons";
import { IAdoptionReport, initialAdoptionReport } from '../interfaces/IAdoptionReport';
import { FormErrors, ValiValid } from 'vali-valid';
import { validationsAdoptionReport } from '../utils/validations/ValidationsAdoptionReport';
import { dataEstadosSalud } from '../utils/data/DataEstadoSalud';
import { dataComportamientos } from '../utils/data/DataComportamiento';
import { IItemCombo } from '../interfaces/IItemCombo';

const AdoptionReport = () => {

    const dropdownId = useId("dropdown-default");

    const [selectedComportamiento, setSelectedComportamiento] = useState<IItemCombo>({ key: "", text: "" });
    const [selectedEstadoSalud, setSelectedEstadoSalud] = useState<IItemCombo>({ key: "", text: "" });

    const fileImage = useRef<HTMLInputElement>(null);
    const [fileImageAnimal, setFileImageAnimal] = useState<string>("");



    const [formAdoptionReport, setAdoptionReport] = useState<IAdoptionReport>(initialAdoptionReport());
    const [errors, setErrors] = useState<FormErrors<IAdoptionReport>>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const managerValitation = new ValiValid<IAdoptionReport>(setIsFormValid, validationsAdoptionReport);

    const handleChange = (field: keyof IAdoptionReport, value: any): void => {
        managerValitation.handleChange(field, value, setAdoptionReport, setErrors);
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const handleClickImage = () => {
        if (fileImage.current !== null && fileImage.current !== undefined) {
            fileImage.current.click();
        }
    };


    useEffect(() => {
        const errors = managerValitation.validate(formAdoptionReport);
        setErrors(errors);
    }, [formAdoptionReport])


    return (
        <div>
            <div className='container mt-4'>
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
                        label="Comentarios Adicionales"
                        validationState={!errors ? "none" : errors.comentarios ? "error" : "success"}
                        validationMessage={!errors ? "none" : errors.comentarios ? errors.comentarios : "Correcto."}
                    >
                        <Textarea cols={13}
                            onChange={(e) => { handleChange("comentarios", e.target.value) }}
                        />
                    </Field>
                </div>
                <div className="col-12 mb-2">
                    <Field
                        label="Salud"
                        validationState={!errors ? "none" : errors.idEstadoSalud ? "error" : "success"}
                        validationMessage={!errors ? "none" : errors.idEstadoSalud ? errors.idEstadoSalud : "Correcto."}
                    >
                        <Dropdown
                            aria-labelledby={dropdownId}
                            placeholder="Seleccione el estado de salud"
                            value={selectedEstadoSalud.text}
                            onOptionSelect={(e, data) => {
                                setSelectedEstadoSalud({ key: data.optionValue ?? "", text: data.optionText ?? "" });
                                handleChange("idEstadoSalud", data.optionValue);
                            }}
                        >
                            {dataEstadosSalud().map((option) => (
                                <Option key={option.key} text={option.text} value={option.key}>
                                    {option.text}
                                </Option>
                            ))}
                        </Dropdown>
                    </Field>
                </div>
                <div className="col-12 mb-2">
                    <Field
                        label="Comportamiento"
                        validationState={!errors ? "none" : errors.idComportamiento ? "error" : "success"}
                        validationMessage={!errors ? "none" : errors.idComportamiento ? errors.idComportamiento : "Correcto."}
                    >
                        <Dropdown
                            aria-labelledby={dropdownId}
                            placeholder="Seleccione el comportamiento"
                            value={selectedComportamiento.text}
                            onOptionSelect={(e, data) => {
                                setSelectedComportamiento({ key: data.optionValue ?? "", text: data.optionText ?? "" });
                                handleChange("idComportamiento", data.optionValue);
                            }}
                        >
                            {dataComportamientos().map((option) => (
                                <Option key={option.key} text={option.text} value={option.key}>
                                    {option.text}
                                </Option>
                            ))}
                        </Dropdown>
                    </Field>
                </div>
                <div className="col-12 mt-3">
                    <Button
                        appearance='primary'
                        disabled={!isFormValid}
                    >
                        Reportar
                    </Button>
                </div>

            </div>
            <FooterMovil />
        </div>
    );
}

export {
    AdoptionReport
};