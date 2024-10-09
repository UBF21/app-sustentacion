import { Button, Field, Input, Spinner, Textarea, Toast, ToastIntent, ToastTitle, Toaster, useId, useToastController } from "@fluentui/react-components";
import { CardComponent } from "../components/card/CardComponent";
import { ShiftsDayRegular, ClipboardBulletListLtrRegular } from "@fluentui/react-icons";
import { FooterMovil } from "./FooterMovil";
import { IRequestGuardian, initialRequestGuardian } from "../interfaces/IRequestGuardian";
import { FormErrors, ValiValid } from "vali-valid";
import { useEffect, useState } from "react";
import { validationsRequestGuardian } from "../utils/validations/ValidationsRequestGuardian";
export const GenerateRequestGuardian = () => {

    const beforeId = useId("content-before");

    const toasterId = useId("toaster");
    const { dispatchToast } = useToastController(toasterId);

    const [formRequestGuardian, setFormRequestGuardian] = useState<IRequestGuardian>(initialRequestGuardian());
    const [errors, setErrors] = useState<FormErrors<IRequestGuardian>>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const managerValitation = new ValiValid<IRequestGuardian>(setIsFormValid, validationsRequestGuardian);

    const handleChange = (field: keyof IRequestGuardian, value: any): void => {
        managerValitation.handleChange(field, value, setFormRequestGuardian, setErrors);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        notify("", null);
        if (isFormValid) {
            setTimeout(() => {
                notify("Se Generó la notificación de solicitud de cuidador correctamente.", "success");
                setFormRequestGuardian(initialRequestGuardian());
            },2000);
        }
    };

    useEffect(() => {
        const errors = managerValitation.validate(formRequestGuardian);
        setErrors(errors);
    }, [formRequestGuardian])

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
                        <h3 className='fw-bold text-center'>Solicitar Cuidador</h3>
                    </div>
                    <div className="col-12">
                        <CardComponent
                            title='Animal Rescatado'
                            descripcion=' The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
                            image='https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_1280.jpg'
                            showOptions={false}
                        />
                    </div>
                    <div className="col-12 mt-4">
                        <Field
                            label="Tiempo estimado (días)"
                            validationState={!errors ? "none" : errors.tiempoEstimado ? "error" : "success"}
                            validationMessage={!errors ? "none" : errors.tiempoEstimado ? errors.tiempoEstimado : "Correcto."}
                        >
                            <Input
                                type="text"
                                contentBefore={<ShiftsDayRegular />}
                                id={beforeId}
                                value={formRequestGuardian.tiempoEstimado}
                                onChange={(e) => { handleChange("tiempoEstimado", e.target.value) }}
                            />
                        </Field>
                    </div>
                    <div className="col-12 mt-3">
                        <Field
                            label="Requerimientos"
                            validationState={!errors ? "none" : errors.requerimientos ? "error" : "success"}
                            validationMessage={!errors ? "none" : errors.requerimientos ? errors.requerimientos : "Correcto."}
                        >
                            <Textarea
                                rows={9}
                                value={formRequestGuardian.requerimientos}
                                onChange={(e) => {
                                    handleChange("requerimientos", e.target.value);
                                }}
                            />
                        </Field>
                    </div>
                    <div className="col-12 mt-3">
                        <Button
                            appearance='primary'
                            disabled={!isFormValid}
                            onClick={handleSubmit}
                        >
                            Notificar
                        </Button>
                    </div>
                </div>
            </div>
            <FooterMovil />
        </div>
    );
}