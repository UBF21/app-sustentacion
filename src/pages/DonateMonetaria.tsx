import { Button, Dropdown, Field, Input, Option, Textarea, useId } from '@fluentui/react-components';
import { useContext, useEffect, useRef, useState } from 'react';
import { FooterMovil } from './FooterMovil';
import { CardUiRegular,CalendarRegular,CalendarDateRegular,LockClosedRegular } from "@fluentui/react-icons";

const DonateMonetaria = () => {

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
                    label="N°ro de Tarjeta"
                    validationState="success"
                    validationMessage="This is a success message."
                >
                    <Input contentBefore={<CardUiRegular />} id={beforeId} />
                </Field>
            </div>
            <div className="col-12 mb-2">
                <Field
                    label="Mes"
                    validationState="success"
                    validationMessage="This is a success message."
                >
                    <Input contentBefore={<CalendarRegular />} id={beforeId} />
                </Field>
            </div>
            <div className="col-12 mb-2">
                <Field
                    label="Año"
                    validationState="success"
                    validationMessage="This is a success message."
                >
                    <Input contentBefore={<CalendarDateRegular />} id={beforeId} />
                </Field>
            </div>
            <div className="col-12 mb-2">
                <Field
                    label="CVV"
                    validationState="success"
                    validationMessage="This is a success message."
                >
                    <Input contentBefore={<LockClosedRegular />} id={beforeId} />
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
    DonateMonetaria
};