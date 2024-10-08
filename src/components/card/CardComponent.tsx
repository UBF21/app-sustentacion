import { Body1, Button, Caption1, Card, CardHeader, CardPreview, Menu, MenuButton, MenuItem, MenuList, MenuPopover, MenuTrigger, Text } from '@fluentui/react-components';
import { useContext, useEffect, useRef, useState } from 'react';
import { MoreHorizontal20Regular } from "@fluentui/react-icons";
import { ICard } from '../../interfaces/ICard';
import { EyeRegular, ShareAndroidRegular, AppsListRegular } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";
const CardComponent = (
    {
        title = "",
        descripcion = "",
        image = "",
        showOptions = true
    }: ICard) => {

    const navegate = useNavigate();
    return (
        <div>
            <Card orientation="horizontal" className='mt-2'>
                <CardPreview>
                    <img
                        style={{ width: '100px' }}
                        src={image}
                        alt="image animal"
                    />
                </CardPreview>

                <div className='row'>
                    <div className="col-12">
                        <div>
                            <Caption1 className='fw-bold'>{title}</Caption1>
                        </div>
                        <div>
                            <Body1>{descripcion}</Body1>
                        </div>
                    </div>

                    {

                        showOptions && (
                            <div className="col-12 mt-2">
                                <Button appearance='subtle' icon={<EyeRegular fontSize={15} />}></Button>
                                <Button appearance='subtle' className='me-2 ms-2' icon={<ShareAndroidRegular fontSize={15} />}></Button>


                                <Menu>
                                    <MenuTrigger disableButtonEnhancement>
                                        <MenuButton appearance='subtle' icon={<AppsListRegular fontSize={15} />}></MenuButton>
                                    </MenuTrigger>

                                    <MenuPopover>
                                        <MenuList>
                                            <MenuItem>Generar Seguimiento</MenuItem>
                                            <MenuItem onClick={() => { navegate("/adoption-report") }}>Reporte de Adopción</MenuItem>
                                            <MenuItem onClick={() => { navegate("/generate-request-guardian") }}>Generar Petición Cuidador</MenuItem>
                                            <MenuItem>Solicitar Adopción</MenuItem>
                                            <MenuItem>Editar Animal</MenuItem>
                                        </MenuList>
                                    </MenuPopover>
                                </Menu>
                            </div>
                        )
                    }
                </div>

            </Card >
        </div >
    );
}

export {
    CardComponent
};