import { useState } from "react";
import { ITabItem } from "../interfaces/ITabItem";
import { ITabListConfig } from "../interfaces/ITabListConfig";
import { ListBarFilled } from "@fluentui/react-icons";
import { TabListComponent } from "../components/tabList/TabListComponent";
import { TabListComponentHeader } from "../components/tabList/TabListComponentHeader";
import { DrawerComponent } from "../components/Drawer/DrawerComponent";
import { useNavigate } from "react-router-dom";
import { Tab, TabList } from "@fluentui/react-components";

export const HeaderMovil = () => {


    const navegate = useNavigate();


    const [isOpen, setIsOpen] = useState<boolean>(false);

    const items: ITabItem[] = [
        { key: "opciones", title: "", route: "/list-pets", icon: <ListBarFilled />, onclick: () => { setIsOpen(true) } },
    ];

    const [selectedTab, setSelectedTab] = useState<string>("opciones");
    const tabConfig: ITabListConfig<ITabItem> = {
        items: items,
        size: "small",
        orientation: "Horizontal",
        useLink: true,
        onTabChange(value) {
            setSelectedTab(value);
        },
    };


    return (
        <div>
            <TabListComponentHeader size='large'
                items={tabConfig.items}
                useLink={tabConfig.useLink}
                onTabChange={tabConfig.onTabChange}
                orientation='Horizontal'
            />

            <DrawerComponent
                isOpen={isOpen}
                title="Opciones del usuario"
                setIsOpen={setIsOpen}
            >

                <TabList defaultSelectedValue="" vertical>
                    <Tab value={"report"} onClick={() => { navegate("/list-report-adoption") }} >Animales Adoptados</Tab>
                </TabList>
            </DrawerComponent>
        </div>
    );
}