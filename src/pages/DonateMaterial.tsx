import { Button, Dropdown, Field, Input, Option, Spinner, Textarea, Toast, ToastIntent, ToastTitle, Toaster, useId, useToastController } from '@fluentui/react-components';
import { useContext, useEffect, useRef, useState } from 'react';
import { FooterMovil } from './FooterMovil';
import { validationsDoanteMaterial } from '../utils/validations/ValidationsDonateMaterial';
import { FormErrors, ValiValid } from 'vali-valid';
import { IDonateMaterial, initialDonateMaterial } from '../interfaces/IDonateMaterial';
import { dataRefugios } from '../utils/data/DataRefugios';
import { dataMateriales } from '../utils/data/DataMateriales';
import { IItemCombo } from '../interfaces/IItemCombo';

const DonateMaterial = () => {

    const dropdownId = useId("dropdown-default");
    const beforeId = useId("content-before");

    const toasterId = useId("toaster");
    const { dispatchToast } = useToastController(toasterId);

    const [selectedRefugio, setSelectedRefugio] = useState<IItemCombo>({ key: "", text: "" });
    const [selectedMaterial, setSelectedMaterial] = useState<IItemCombo>({ key: "", text: "" });

    const [formDonateMaterial, setFormDonateMaterial] = useState<IDonateMaterial>(initialDonateMaterial());
    const [errors, setErrors] = useState<FormErrors<IDonateMaterial>>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const managerValitation = new ValiValid<IDonateMaterial>(setIsFormValid, validationsDoanteMaterial);

    const handleChange = (field: keyof IDonateMaterial, value: any): void => {
        managerValitation.handleChange(field, value, setFormDonateMaterial, setErrors);
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        notify("", null);
        if (isFormValid) {
            setTimeout(() => {
                notify("Se registró el donativo material correctamente.", "success");
                setFormDonateMaterial(initialDonateMaterial());
                setSelectedRefugio({ key: "", text: "" });
                setSelectedMaterial({ key: "", text: "" });
            },2000);
        }
    };

    useEffect(() => {
        const errors = managerValitation.validate(formDonateMaterial);
        setErrors(errors);
    }, [formDonateMaterial])

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
        <div className='row'>

            <Toaster
                toasterId={toasterId}
                position="bottom-start"
                pauseOnHover
                pauseOnWindowBlur
                timeout={2200}
            />
            <div className="col-12 mb-2">
                <Field
                    label="Refugio"
                    validationState={!errors ? "none" : errors.idRefugio ? "error" : "success"}
                    validationMessage={!errors ? "none" : errors.idRefugio ? errors.idRefugio : "Correcto."}
                >

                    <Dropdown
                        aria-labelledby={dropdownId}
                        placeholder="Seleccione el refugio"
                        value={selectedRefugio.text}
                        onOptionSelect={(e, data) => {
                            setSelectedRefugio({ key: data.optionValue ?? "", text: data.optionText ?? "" });
                            handleChange("idRefugio", data.optionValue);
                        }}
                    >
                        {dataRefugios.map((option) => (
                            <Option key={option.key} text={option.text} value={option.key}>
                                {option.text}
                            </Option>
                        ))}
                    </Dropdown>

                </Field>
            </div>
            <div className="col-12 mb-2">
                <Field
                    label="Material"
                    validationState={!errors ? "none" : errors.idMaterial ? "error" : "success"}
                    validationMessage={!errors ? "none" : errors.idMaterial ? errors.idMaterial : "Correcto."}
                >

                    <Dropdown
                        aria-labelledby={dropdownId}
                        placeholder="Seleccione el material"
                        value={selectedMaterial.text}
                        onOptionSelect={(e, data) => {
                            setSelectedMaterial({ key: data.optionValue ?? "", text: data.optionText ?? "" });
                            handleChange("idMaterial", data.optionValue);
                        }}
                    >
                        {dataMateriales.map((option) => (
                            <Option key={option.key} text={option.text} value={option.key}>
                                {option.text}
                            </Option>
                        ))}
                    </Dropdown>

                </Field>
            </div>
            <div className="col-12 mb-2">
                <Field
                    label="Dirección"
                    validationState={!errors ? "none" : errors.direccion ? "error" : "success"}
                    validationMessage={!errors ? "none" : errors.direccion ? errors.direccion : "Correcto."}
                >
                    <Input
                        type='text'
                        onChange={(e) => { handleChange("direccion", e.target.value) }}
                    />
                </Field>
            </div>
            <div className="col-12 mb-2">
                <Field
                    label="Calle"
                    validationState={!errors ? "none" : errors.calle ? "error" : "success"}
                    validationMessage={!errors ? "none" : errors.calle ? errors.calle : "Correcto."}
                >
                    <Input
                        type='text'
                        onChange={(e) => { handleChange("calle", e.target.value) }}
                    />
                </Field>
            </div>
            <div className="col-12 mb-2">
                <Field
                    label="N°ro Calle"
                    validationState={!errors ? "none" : errors.nroCalle ? "error" : "success"}
                    validationMessage={!errors ? "none" : errors.nroCalle ? errors.nroCalle : "Correcto."}
                >
                    <Input
                        type='number'
                        onChange={(e) => { handleChange("nroCalle", e.target.value) }}
                    />
                </Field>
            </div>
            <div className="col-12 mb-2">
                <Field
                    label="Referencia"
                    validationState={!errors ? "none" : errors.referencia ? "error" : "success"}
                    validationMessage={!errors ? "none" : errors.referencia ? errors.referencia : "Correcto."}
                >
                    <Textarea
                        cols={14}
                        onChange={(e) => { handleChange("referencia", e.target.value) }}
                    />
                </Field>
            </div>
            <div className="col-12 mt-3">
                <Button appearance='primary' disabled={!isFormValid} onClick={handleSubmit}>Donar</Button>
            </div>

            <FooterMovil />
        </div>
    );
}

export {
    DonateMaterial
};