import { Button, Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle } from "@fluentui/react-components"
import { Children, ReactNode, useState } from "react";

import { Dismiss24Regular } from "@fluentui/react-icons";

export interface IOpenPanel {
    isOpen: boolean;
    title:string;
    children?:ReactNode;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DrawerComponent = ({
    isOpen,
    setIsOpen,
    title,
    children
}: IOpenPanel) => {
    return (
        <Drawer
        type={"overlay"}
        separator
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
    >
        <DrawerHeader>
            <DrawerHeaderTitle
                action={
                    <Button
                        appearance="subtle"
                        aria-label="Close"
                        icon={<Dismiss24Regular />}
                        onClick={() => setIsOpen(false)}
                    />
                }
            >
                {title}
            </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
           {children}
        </DrawerBody>
    </Drawer>
    );
}