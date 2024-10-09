import { useContext, useEffect, useRef, useState } from 'react';
import { FooterMovil } from './FooterMovil';
import { Avatar, Button, Dropdown, Field, Option, Spinner, Textarea, Toast, ToastIntent, ToastTitle, Toaster, useId, useToastController } from '@fluentui/react-components';
import { AnimalDogRegular } from "@fluentui/react-icons";
import { IAdoptionReport, initialAdoptionReport } from '../interfaces/IAdoptionReport';
import { FormErrors, ValiValid } from 'vali-valid';
import { validationsAdoptionReport } from '../utils/validations/ValidationsAdoptionReport';
import { dataEstadosSalud } from '../utils/data/DataEstadoSalud';
import { dataComportamientos } from '../utils/data/DataComportamiento';
import { IItemCombo } from '../interfaces/IItemCombo';

const AdoptionReport = () => {

    const dropdownId = useId("dropdown-default");
    const toasterId = useId("toaster");
    const { dispatchToast } = useToastController(toasterId);

    const [selectedComportamiento, setSelectedComportamiento] = useState<IItemCombo>({ key: "", text: "" });
    const [selectedEstadoSalud, setSelectedEstadoSalud] = useState<IItemCombo>({ key: "", text: "" });

    const fileImage = useRef<HTMLInputElement>(null);
    const [fileImageAnimal, setFileImageAnimal] = useState<string>("");



    const [formAdoptionReport, setFormAdoptionReport] = useState<IAdoptionReport>(initialAdoptionReport());
    const [errors, setErrors] = useState<FormErrors<IAdoptionReport>>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const managerValitation = new ValiValid<IAdoptionReport>(setIsFormValid, validationsAdoptionReport);

    const handleChange = (field: keyof IAdoptionReport, value: any): void => {
        managerValitation.handleChange(field, value, setFormAdoptionReport, setErrors);
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        notify("", null);
        if (isFormValid) {
            setTimeout(() => {
                notify("Se Generó el reporte de adopción correctamente.", "success");
                setFormAdoptionReport(initialAdoptionReport());
                setSelectedComportamiento({ key: "", text: "" });
                setSelectedEstadoSalud({ key: "", text: "" });
            }, 2000);
        }
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

    const notify = (text: string, type: ToastIntent | null, timeout: number = 2000) => {

        if (type === null) {
            dispatchToast(
                <Toast>
                    <ToastTitle media={<Spinner size="tiny" />}>
                        cargando...
                    </ToastTitle>
                </Toast>,
                { timeout: timeout }
            );
        } else {
            dispatchToast(
                <Toast>
                    <ToastTitle>{text}</ToastTitle>
                </Toast>,
                {
                    intent: type,
                    timeout: timeout
                }
            );
        }

    }

    return (
        <div>
            <div className='container mt-4'>

                <Toaster
                    toasterId={toasterId}
                    position="bottom-start"
                    pauseOnHover
                    pauseOnWindowBlur
                    timeout={2200}
                />
                <div className='col-12 mb-3'>
                    <h3 className='fw-bold text-center'>Reporte de Adopción</h3>
                </div>
                <div className="col-12 mb-2 d-flex justify-content-center mb-3">
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
                        <Textarea 
                        rows={6}
                        value={formAdoptionReport.comentarios}
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
                        onClick={handleSubmit}
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