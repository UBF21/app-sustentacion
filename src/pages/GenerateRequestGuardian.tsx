import { Button, Field, Input, Textarea, useId } from "@fluentui/react-components";
import { CardComponent } from "../components/card/CardComponent";
import { ShiftsDayRegular, ClipboardBulletListLtrRegular } from "@fluentui/react-icons";
import { FooterMovil } from "./FooterMovil";
export const GenerateRequestGuardian = () => {

    const beforeId = useId("content-before");

    return (
        <div>
            <div className='container mt-4'>
                <div className='row'>
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
                            label="Tiempo estimado"
                        // validationState={!errors ? "none" : errors.nroTarjeta ? "error" : "success"}
                        // validationMessage={!errors ? "none" : errors.nroTarjeta ? errors.nroTarjeta : "Correcto."}
                        >
                            <Input
                            type="text"
                                contentBefore={<ShiftsDayRegular />}
                                id={beforeId}
                            // value={formDonateMonetaria.nroTarjeta}
                            // onChange={(e) => { handleChange("nroTarjeta", e.target.value) }}
                            />
                        </Field>
                    </div>
                    <div className="col-12 mt-3">
                        <Field
                            label="Requerimientos"
                        // validationState={!errors ? "none" : errors.nroTarjeta ? "error" : "success"}
                        // validationMessage={!errors ? "none" : errors.nroTarjeta ? errors.nroTarjeta : "Correcto."}
                        >
                            <Textarea rows={9} />
                        </Field>
                    </div>
                    <div className="col-12 mt-3">
                        <Button
                            appearance='primary'
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