import { useContext, useEffect, useRef, useState } from 'react';
import { FooterMovil } from './FooterMovil';
import { Avatar, Button, Dropdown, Field, Option, Textarea, useId } from '@fluentui/react-components';
import { AnimalDogRegular } from "@fluentui/react-icons";

const AdoptionReport = () => {

    const dropdownId = useId("dropdown-default");

    const options = [
        "Cat",
        "Caterpillar",
        "Corgi",
        "Chupacabra",
        "Dog",
        "Ferret",
        "Fish",
        "Fox",
        "Hamster",
        "Snake",
    ];

    return (
        <div>
            <div className='container mt-4'>
                <div className="col-12 text-center">
                    <h4 className='fw-bold'>Reporte de Adopción</h4>
                </div>
                <div className="col-12 mb-2 d-flex justify-content-center">
                    <Field
                        label=""
                        validationState="success"
                        validationMessage="This is a success message."
                    >
                        <div className='d-flex justify-content-center'>

                            <Avatar
                                // name="Ashley McCarthy"
                                style={{ width: '132px', height: '132px' }}
                                icon={<AnimalDogRegular fontSize={60} />}
                                image={{ src: "https://cdn.pixabay.com/photo/2022/08/17/15/46/labrador-7392840_1280.jpg" }}
                            />
                        </div>
                    </Field>
                </div>
                <div className="col-12 mb-2">
                    <Field
                        label="Comentarios Adicionales"
                        validationState="success"
                        validationMessage="This is a success message."
                    >
                        <Textarea cols={13} />
                    </Field>
                </div>
                <div className="col-12 mb-2">
                    <Field
                        label="Salud"
                        validationState="success"
                        validationMessage="This is a success message."
                    >
                        <Dropdown
                            aria-labelledby={dropdownId}
                            placeholder="Seleccione el estado de salud"
                        >
                            {options.map((option) => (
                                <Option key={option} disabled={option === "Ferret"}>
                                    {option}
                                </Option>
                            ))}
                        </Dropdown>
                    </Field>
                </div>
                <div className="col-12 mb-2">
                    <Field
                        label="Comportamiento"
                        validationState="success"
                        validationMessage="This is a success message."
                    >
                        <Dropdown
                            aria-labelledby={dropdownId}
                            placeholder="Seleccione el comportamiento"
                        >
                            {options.map((option) => (
                                <Option key={option} disabled={option === "Ferret"}>
                                    {option}
                                </Option>
                            ))}
                        </Dropdown>
                    </Field>
                </div>
                <div className="col-12 mt-3">
                    <Button appearance='primary'>Reportar</Button>
                </div>

            </div>
            <FooterMovil />
        </div>
    );
}

export {
    AdoptionReport
};