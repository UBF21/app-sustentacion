import { useContext, useEffect, useRef, useState } from 'react';
import { FooterMovil } from './FooterMovil';
import { Checkbox, CheckboxProps } from '@fluentui/react-components';
import { DonateMaterial } from './DonateMaterial';
import { DonateMonetaria } from './DonateMonetaria';

const Donate = () => {

    const [checked1, setChecked1] = useState<CheckboxProps["checked"]>(true);
    const [checked2, setChecked2] = useState<CheckboxProps["checked"]>(false);
    const [selectedChecked,setSelectedChecked] = useState<"Material" | "Monetario">("Material");

    const handlerRenderContent = (): React.ReactNode => {
        switch (selectedChecked) {
            case "Material":
                return <DonateMaterial/>
            case "Monetario":
                return <DonateMonetaria/>
            default:
                return null
        }
    }
    return (
        <div>
            <div className='container mt-4'>
                <div className='row'>
                    <div className="col-12 text-center">
                        <h4 className='fw-bold'>Donativo</h4>
                    </div>
                    <div className='col-12 mt-3 d-flex justify-content-center'>
                        <Checkbox
                            checked={checked1}
                            value={"Material"}
                            onChange={(ev, data) => {
                                setChecked1(data.checked);
                                setChecked2(false);
                                setSelectedChecked("Material");
                            }}
                            label="Material"
                            />
                        <Checkbox
                            checked={checked2}
                            value={"Monetario"}
                            onChange={(ev, data) => {
                                setChecked2(data.checked);
                                setChecked1(false);
                                setSelectedChecked("Monetario");
                            }}
                            label="Monetario"
                        />
                    </div>
                    <div className='col-12'>
                        {handlerRenderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export {
    Donate
};