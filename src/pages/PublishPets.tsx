import { useContext, useEffect, useRef, useState } from 'react';
import { FooterMovil } from './FooterMovil';
import { Avatar, Button, Dropdown, Field, Input, Option, Select, Textarea, useId } from '@fluentui/react-components';
import { AnimalDogRegular } from "@fluentui/react-icons";
const PublishPets = () => {
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
                   <h4 className='fw-bold'>Publicar Animal</h4>
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
                        style={{width:'132px',height:'132px'}}
                        icon={<AnimalDogRegular fontSize={60}/>}  
                        image={{src :"https://cdn.pixabay.com/photo/2022/08/17/15/46/labrador-7392840_1280.jpg"}}
                        />
                        </div>
                    </Field>
                </div>
                <div className="col-12 mb-2">
                    <Field
                        label="Especie"
                        validationState="success"
                        validationMessage="This is a success message."
                    >
                        <Dropdown
                            aria-labelledby={dropdownId}
                            placeholder="Select an animal"
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
                        label="Estado de Salud"
                        validationState="success"
                        validationMessage="This is a success message."
                    >
                        <Dropdown
                            aria-labelledby={dropdownId}
                            placeholder="Select an animal"
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
                        label="Descripción"
                        validationState="success"
                        validationMessage="This is a success message."
                    >
                        <Textarea cols={13} />
                    </Field>
                </div>
                <div className="col-12 mb-2">
                    <Field
                        label="Ubicación"
                    // validationState="success"
                    // validationMessage="This is a success message."
                    >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56887.543165843075!2d-77.1065880513672!3d-12.12172299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81e30b6695f%3A0x1015ccad533f5be5!2sParque%20Kennedy!5e1!3m2!1ses-419!2spe!4v1727734857409!5m2!1ses-419!2spe" width="360" height="300" style={{ "border": 0 }} loading="lazy"></iframe>
                    </Field>
                </div>

                <div className="col-12 mt-3">
                    <Button appearance='primary'>Publicar</Button>
                </div>

            </div>
            <FooterMovil />
        </div>
    );
}

export {
    PublishPets
};