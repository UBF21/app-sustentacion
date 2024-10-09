import { Button, Dropdown, Field, Input, Option, Spinner, Toast, ToastIntent, ToastTitle, Toaster, useId, useToastController } from '@fluentui/react-components';
import { useContext, useEffect, useRef, useState } from 'react';
import { IRequestAdoption, initialRequestAdoption } from '../interfaces/IRequestAdoption';
import { FormErrors, ValiValid } from 'vali-valid';
import { validationsRequestAdoption } from '../utils/validations/ValidationsRequestAdoption';
import { FooterMovil } from './FooterMovil';
import { IItemCombo } from '../interfaces/IItemCombo';
import { dataRazones } from '../utils/data/DataRazones';

const GenerateRequestAdoption = () => {

    const dropdownId = useId("dropdown-default");
    const beforeId = useId("content-before");

    const toasterId = useId("toaster");
    const { dispatchToast } = useToastController(toasterId);


    const [selectedRazon, setSelectedRazon] = useState<IItemCombo>({ key: "", text: "" });


    const [formRequestAdoption, setFormRequestAdoption] = useState<IRequestAdoption>(initialRequestAdoption());
    const [errors, setErrors] = useState<FormErrors<IRequestAdoption>>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const managerValitation = new ValiValid<IRequestAdoption>(setIsFormValid, validationsRequestAdoption);

    const handleChange = (field: keyof IRequestAdoption, value: any): void => {
        managerValitation.handleChange(field, value, setFormRequestAdoption, setErrors);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        notify("", null);
        if (isFormValid) {
            setTimeout(() => {
                notify("Se Generó la solicitud de adopción correctamente.", "success");
                setFormRequestAdoption(initialRequestAdoption());
                setSelectedRazon({ key: "", text: "" });
            }, 2000);
        }
    };

    useEffect(() => {
        const errors = managerValitation.validate(formRequestAdoption);
        setErrors(errors);
    }, [formRequestAdoption])


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
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='fw-bold text-center'>Solicitud de Adopción</h3>
                    </div>
                    <div className="col-12 mt-4">
                        <Field
                            label="Nombres"
                            validationState={!errors ? "none" : errors.nombres ? "error" : "success"}
                            validationMessage={!errors ? "none" : errors.nombres ? errors.nombres : "Correcto."}
                        >
                            <Input
                                type="text"
                                // contentBefore={<ShiftsDayRegular />}
                                id={beforeId}
                                value={formRequestAdoption.nombres}
                                onChange={(e) => { handleChange("nombres", e.target.value) }}
                            />
                        </Field>
                    </div>
                    <div className="col-12 mt-3">
                        <Field
                            label="Apellidos"
                            validationState={!errors ? "none" : errors.apellidos ? "error" : "success"}
                            validationMessage={!errors ? "none" : errors.apellidos ? errors.apellidos : "Correcto."}
                        >
                            <Input
                                type="text"
                                // contentBefore={<ShiftsDayRegular />}
                                id={beforeId}
                                value={formRequestAdoption.apellidos}
                                onChange={(e) => { handleChange("apellidos", e.target.value) }}
                            />
                        </Field>
                    </div>
                    <div className="col-12 mt-3">
                        <Field
                            label="DNI"
                            validationState={!errors ? "none" : errors.dni ? "error" : "success"}
                            validationMessage={!errors ? "none" : errors.dni ? errors.dni : "Correcto."}
                        >
                            <Input
                                type="text"
                                // contentBefore={<ShiftsDayRegular />}
                                id={beforeId}
                                value={formRequestAdoption.dni}
                                onChange={(e) => { handleChange("dni", e.target.value) }}
                            />
                        </Field>
                    </div>
                    <div className="col-12 mt-3">
                        <Field
                            label="Razón"
                            validationState={!errors ? "none" : errors.idRazonAdopcion ? "error" : "success"}
                            validationMessage={!errors ? "none" : errors.idRazonAdopcion ? errors.idRazonAdopcion : "Correcto."}
                        >
                            <Dropdown
                                aria-labelledby={dropdownId}
                                placeholder="Seleccione razón adopción"
                                value={selectedRazon.text}
                                onOptionSelect={(e, data) => {
                                    setSelectedRazon({ key: data.optionValue ?? "", text: data.optionText ?? "" });
                                    handleChange("idRazonAdopcion", data.optionValue);
                                }}
                            >
                                {dataRazones().map((option) => (
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
                            onClick={handleSubmit}
                        >
                            Aplicar
                        </Button>
                    </div>
                </div>
            </div>
            <FooterMovil />
        </div>
    );
}

export {
    GenerateRequestAdoption
};