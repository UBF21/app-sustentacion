import { Button, Dropdown, Field, Input, Option, Spinner, Textarea, Toast, ToastIntent, ToastTitle, Toaster, useId, useToastController } from '@fluentui/react-components';
import { useContext, useEffect, useRef, useState } from 'react';
import { FooterMovil } from './FooterMovil';
import { CardUiRegular, CalendarRegular, CalendarDateRegular, LockClosedRegular,CurrencyDollarEuroFilled } from "@fluentui/react-icons";
import { dataRefugios } from '../utils/data/DataRefugios';
import { IDonateMonetaria, initialDonateManetaria } from '../interfaces/IDonateMonetaria';
import { FormErrors, ValiValid } from 'vali-valid';
import { IItemCombo } from '../interfaces/IItemCombo';
import { validationsDonateMonetaria } from '../utils/validations/ValidationsDonateMonetaria';

const DonateMonetaria = () => {

    const dropdownId = useId("dropdown-default");
    const beforeId = useId("content-before");

    const toasterId = useId("toaster");
    const { dispatchToast } = useToastController(toasterId);

    const [selectedRefugio, setSelectedRefugio] = useState<IItemCombo>({ key: "", text: "" });

    const [formDonateMonetaria, setFormDonateMonetaria] = useState<IDonateMonetaria>(initialDonateManetaria());
    const [errors, setErrors] = useState<FormErrors<IDonateMonetaria>>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const managerValitation = new ValiValid<IDonateMonetaria>(setIsFormValid, validationsDonateMonetaria);

    const handleChange = (field: keyof IDonateMonetaria, value: any): void => {
        managerValitation.handleChange(field, value, setFormDonateMonetaria, setErrors);
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        notify("", null);
        if (isFormValid) {
            setTimeout(() => {
                notify("Se Registró el donativo monetario correctamente.", "success");
                setFormDonateMonetaria(initialDonateManetaria());
                setSelectedRefugio({ key: "", text: "" });
            },2000);
        }
    };

    useEffect(() => {
        const errors = managerValitation.validate(formDonateMonetaria);
        setErrors(errors);
    }, [formDonateMonetaria])

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
                    label="Monto"
                    validationState={!errors ? "none" : errors.monto ? "error" : "success"}
                    validationMessage={!errors ? "none" : errors.monto ? errors.monto : "Correcto."}
                >
                    <Input
                        type='number'
                        contentBefore={<CurrencyDollarEuroFilled />}
                        id={beforeId}
                        value={formDonateMonetaria.monto}
                        onChange={(e) => { handleChange("monto", e.target.value) }}
                    />
                </Field>
            </div>
            <div className="col-12 mb-2">
                <Field
                    label="N°ro de Tarjeta"
                    validationState={!errors ? "none" : errors.nroTarjeta ? "error" : "success"}
                    validationMessage={!errors ? "none" : errors.nroTarjeta ? errors.nroTarjeta : "Correcto."}
                >
                    <Input
                        contentBefore={<CardUiRegular />}
                        id={beforeId}
                        value={formDonateMonetaria.nroTarjeta}
                        onChange={(e) => { handleChange("nroTarjeta", e.target.value) }}
                    />
                </Field>
            </div>
            <div className="col-12 mb-2">
                <Field
                    label="Mes"
                    validationState={!errors ? "none" : errors.mes ? "error" : "success"}
                    validationMessage={!errors ? "none" : errors.mes ? errors.mes : "Correcto."}
                >
                    <Input
                        contentBefore={<CalendarRegular />}
                        id={beforeId}
                        value={formDonateMonetaria.mes}
                        onChange={(e) => { handleChange("mes", e.target.value) }}
                    />
                </Field>
            </div>
            <div className="col-12 mb-2">
                <Field
                    label="Año"
                    validationState={!errors ? "none" : errors.anio ? "error" : "success"}
                    validationMessage={!errors ? "none" : errors.anio ? errors.anio : "Correcto."}
                >
                    <Input
                        contentBefore={<CalendarDateRegular />}
                        id={beforeId}
                        value={formDonateMonetaria.anio}
                        onChange={(e) => { handleChange("anio", e.target.value) }}
                    />
                </Field>
            </div>
            <div className="col-12 mb-2">
                <Field
                    label="CVV"
                    validationState={!errors ? "none" : errors.cvv ? "error" : "success"}
                    validationMessage={!errors ? "none" : errors.cvv ? errors.cvv : "Correcto."}
                >
                    <Input
                        contentBefore={<LockClosedRegular />}
                        id={beforeId}
                        value={formDonateMonetaria.cvv}
                        onChange={(e) => { handleChange("cvv", e.target.value) }}
                    />
                </Field>
            </div>
            <div className="col-12 mt-3">
                <Button
                    appearance='primary'
                    disabled={!isFormValid}
                    onClick={handleSubmit}
                >
                    Donar
                </Button>
            </div>

            <FooterMovil />
        </div>
    );
}

export {
    DonateMonetaria
};