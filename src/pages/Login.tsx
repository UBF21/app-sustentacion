import { Button, Field, Input, Label, Link, Spinner, Text } from '@fluentui/react-components';
import { useContext, useEffect, useRef, useState } from 'react';
import { PersonRegular, LockClosedRegular } from "@fluentui/react-icons";
import { ILogin, initialLogin } from '../interfaces/ILogin';
import { validationsLogin } from '../utils/validations/ValidationsLogin';
import { FormErrors, ValiValid } from 'vali-valid';

const Login = () => {


    const [formLogin, setFormLogin] = useState<ILogin>(initialLogin());
    const [errors, setErrors] = useState<FormErrors<ILogin>>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const managerValitation = new ValiValid<ILogin>(setIsFormValid, validationsLogin);

    const handleChange = (field: keyof ILogin, value: any): void => {
        managerValitation.handleChange(field, value, setFormLogin, setErrors);
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    useEffect(() => {
        const errors = managerValitation.validate(formLogin);
        setErrors(errors);
    }, [formLogin])

    return (
        <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
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
                                    <Link href="#">¿Olvidaste tu contraseña?</Link>
                                </div>
                                <Button type="submit" appearance="primary" className="w-100">
                                    Iniciar Sesión
                                    {/* <Spinner size='extra-tiny'  /> */}
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
    Login
};