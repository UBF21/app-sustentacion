import { Button, Field, Input, Label, Link, Spinner, Text, Toast, ToastIntent, ToastTitle, Toaster, useId, useToastController } from '@fluentui/react-components';
import { useContext, useEffect, useRef, useState } from 'react';
import { PersonRegular, LockClosedRegular } from "@fluentui/react-icons";
import { ILogin, initialLogin } from '../interfaces/ILogin';
import { validationsLogin } from '../utils/validations/ValidationsLogin';
import { FormErrors, ValiValid } from 'vali-valid';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navegate = useNavigate();

    const toasterId = useId("toaster");
    const { dispatchToast } = useToastController(toasterId);


    const [formLogin, setFormLogin] = useState<ILogin>(initialLogin());
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<FormErrors<ILogin>>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const managerValitation = new ValiValid<ILogin>(setIsFormValid, validationsLogin);

    const handleChange = (field: keyof ILogin, value: any): void => {
        managerValitation.handleChange(field, value, setFormLogin, setErrors);
    };

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        console.log(formLogin.email === "admin@gmail.com" && formLogin.password === "##admin##");
    

        if (formLogin.email === "admin@gmail.com" && formLogin.password === "##admin##") {
            
            setTimeout(() => {
                navegate("/list-pets");
            }, 2000);
        } else {
            setTimeout(() => {
                setIsLoading(false);
                notify("Las credenciales no son correctas", "error");
            }, 2000);
        }

    };

    useEffect(() => {
        const errors = managerValitation.validate(formLogin);
        setErrors(errors);
    }, [formLogin])

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
                            <Text as="h2" size={800} weight="semibold" className="mb-3">Iniciar sesión</Text>
                            {/* <Text as="p" className="mb-4">Ingresa tus credenciales para acceder</Text> */}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 ">
                                    <Field
                                        label="Email"
                                        validationState={!errors ? "none" : errors.email ? "error" : "success"}
                                        validationMessage={!errors ? "none" : errors.email ? errors.email : "Correcto."}
                                    >
                                        <Input
                                            id="email"
                                            type="text"
                                            value={formLogin.email}
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
                                            value={formLogin.password}
                                            onChange={(e) => { handleChange("password", e.target.value) }}
                                            contentBefore={<LockClosedRegular />}
                                            className="w-100"
                                        />
                                    </Field>
                                </div>
                                <div className="d-flex justify-content-end mb-3">
                                    <Link onClick={() => { navegate("/register-user") }}>¿No tienes cuenta? registrate</Link>
                                </div>
                                {
                                    isLoading ? (
                                        <Button type="submit" appearance="primary" className="w-100">
                                            <Spinner size='extra-tiny' />
                                        </Button>
                                    ) : (
                                        <Button type="submit" appearance="primary" className="w-100" onClick={handleSubmit}>
                                        Inicio Sesión
                                    </Button>
                                    )
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {
    Login
};