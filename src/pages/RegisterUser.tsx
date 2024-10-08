import { useContext, useEffect, useRef, useState } from 'react';
import { IRegisterUser, initialRegisteUser } from '../interfaces/IRegisterUser';
import { FormErrors, ValiValid } from 'vali-valid';
import { validationsRegisterUser } from '../utils/validations/ValidationsRegisterUser';
import { Button, Field, Input, Link, Spinner, Text, Toast, ToastIntent, ToastTitle, Toaster, useId, useToastController } from '@fluentui/react-components';
import { PersonRegular, LockClosedRegular } from '@fluentui/react-icons';
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {


    const navegate = useNavigate();

    const toasterId = useId("toaster");
    const { dispatchToast } = useToastController(toasterId);

    const [formRegisterUser, setFormRegisterUser] = useState<IRegisterUser>(initialRegisteUser());
    const [errors, setErrors] = useState<FormErrors<IRegisterUser>>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const managerValitation = new ValiValid<IRegisterUser>(setIsFormValid, validationsRegisterUser);

    const handleChange = (field: keyof IRegisterUser, value: any): void => {
        managerValitation.handleChange(field, value, setFormRegisterUser, setErrors);
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        notify("", null);
        if (isFormValid) {
            setTimeout(() => {
                notify("Se Registró el usuario correctamente.", "success");
                setFormRegisterUser(initialRegisteUser());
            },2000);
        }
    };

    useEffect(() => {
        const errors = managerValitation.validate(formRegisterUser);
        setErrors(errors);
    }, [formRegisterUser])

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
        <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
            <Toaster
                toasterId={toasterId}
                position="bottom-start"
                pauseOnHover
                pauseOnWindowBlur
                timeout={2200}
            />
            <div className="row justify-content-center">
                <div className="col-12 col-md-12 col-lg-12">
                    <div className="card shadow-sm">
                        <div className="card-body p-4">
                            <Text as="h2" size={800} weight="semibold" className="mb-3">Registrar Usuario</Text>
                            {/* <Text as="p" className="mb-4">Ingresa tus credenciales para acceder</Text> */}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 ">
                                    <Field
                                        label="Nombres"
                                        validationState={!errors ? "none" : errors.nombres ? "error" : "success"}
                                        validationMessage={!errors ? "none" : errors.nombres ? errors.nombres : "Correcto."}
                                    >
                                        <Input
                                            id="nombres"
                                            type="text"
                                            value={formRegisterUser.nombres}
                                            onChange={(e) => { handleChange("nombres", e.target.value) }}
                                            // contentBefore={<PersonRegular />}
                                            className="w-100"
                                        />
                                    </Field>
                                </div>
                                <div className="mb-3 ">
                                    <Field
                                        label="Apellidos"
                                        validationState={!errors ? "none" : errors.apellidos ? "error" : "success"}
                                        validationMessage={!errors ? "none" : errors.apellidos ? errors.apellidos : "Correcto."}
                                    >
                                        <Input
                                            id="apellidos"
                                            type="text"
                                            value={formRegisterUser.apellidos}
                                            onChange={(e) => { handleChange("apellidos", e.target.value) }}
                                            // contentBefore={<PersonRegular />}
                                            className="w-100"
                                        />
                                    </Field>
                                </div>
                                <div className="mb-3 ">
                                    <Field
                                        label="Email"
                                        validationState={!errors ? "none" : errors.email ? "error" : "success"}
                                        validationMessage={!errors ? "none" : errors.email ? errors.email : "Correcto."}
                                    >
                                        <Input
                                            id="email"
                                            type="text"
                                            value={formRegisterUser.email}
                                            onChange={(e) => { handleChange("email", e.target.value) }}
                                            contentBefore={<PersonRegular />}
                                            className="w-100"
                                        />
                                    </Field>
                                </div>
                                <div className="mb-3">
                                    <Field
                                        label="Password"
                                        validationState={!errors ? "none" : errors.password ? "error" : "success"}
                                        validationMessage={!errors ? "none" : errors.password ? errors.password : "Correcto."}
                                    >
                                        <Input
                                            id="password"
                                            type="password"
                                            value={formRegisterUser.password}
                                            onChange={(e) => { handleChange("password", e.target.value) }}
                                            contentBefore={<LockClosedRegular />}
                                            className="w-100"
                                        />
                                    </Field>
                                </div>
                                <div className="d-flex justify-content-end mb-3">
                                    <Link onClick={() => { navegate("/login") }}>¿Ya tiene cuenta? inicie sesión</Link>
                                </div>
                                <Button type="submit" appearance="primary" className="w-100">
                                    Registrar
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {
    RegisterUser
};