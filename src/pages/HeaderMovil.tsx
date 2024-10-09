import { useState } from "react";
import { ITabItem } from "../interfaces/ITabItem";
import { ITabListConfig } from "../interfaces/ITabListConfig";
import { ListBarFilled  } from "@fluentui/react-icons";
import { TabListComponent } from "../components/tabList/TabListComponent";

export const HeaderMovil = () => {
    const items: ITabItem[] = [
        { key: "opciones", title: "", route: "/list-pets", icon:<ListBarFilled /> },
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
            <TabListComponent size='large'
                items={tabConfig.items}
                useLink={tabConfig.useLink}
                onTabChange={tabConfig.onTabChange}
                orientation='Horizontal'
            />
        </div>
    );
}