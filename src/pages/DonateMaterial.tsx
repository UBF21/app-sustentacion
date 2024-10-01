import { Button, Dropdown, Field, Input, Option, Textarea, useId } from '@fluentui/react-components';
import { useContext, useEffect, useRef, useState } from 'react';
import { FooterMovil } from './FooterMovil';

const DonateMaterial = () => {

    const dropdownId = useId("dropdown-default");
    const beforeId = useId("content-before");


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
        <div className='row'>
        <div className="col-12 mb-2">
            <Field
                label="Refugio"
                validationState="success"
                validationMessage="This is a success message."
            >

                <Dropdown
                    aria-labelledby={dropdownId}
                    placeholder="Seleccione el refugio"
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
                label="Material"
                validationState="success"
                validationMessage="This is a success message."
            >

                <Dropdown
                    aria-labelledby={dropdownId}
                    placeholder="Seleccione el material"
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
                label="Dirección"
                validationState="success"
                validationMessage="This is a success message."
            >
                <Input/>
            </Field>
        </div>
        <div className="col-12 mb-2">
            <Field
                label="Calle"
                validationState="success"
                validationMessage="This is a success message."
            >
                <Input/>
            </Field>
        </div>
        <div className="col-12 mb-2">
            <Field
                label="N°ro Calle"
                validationState="success"
                validationMessage="This is a success message."
            >
                <Input />
            </Field>
        </div>
        <div className="col-12 mb-2">
            <Field
                label="Referencia"
                validationState="success"
                validationMessage="This is a success message."
            >
              <Textarea cols={14} />
            </Field>
        </div>
        <div className="col-12 mt-3">
            <Button appearance='primary'>Donar</Button>
        </div>

        <FooterMovil />
    </div>
    );
}

export {
    DonateMaterial
};