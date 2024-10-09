import { SelectTabData, SelectTabEvent, Tab, TabList, TabValue } from "@fluentui/react-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ITabItem } from "../../interfaces/ITabItem";
import { ITabListConfig } from "../../interfaces/ITabListConfig";
import "../../styles/HeaderMovil.css";

export const TabListComponentHeader = (config : ITabListConfig<ITabItem>) => {
    const [selectedValue, setSelectedValue] = useState<TabValue>("");
    const navegate = useNavigate();
    const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
        setSelectedValue(data.value);
        if (config.onTabChange) config.onTabChange(String(data.value));

        const selectedItem = config.items.find(item => item.key === data.value);
        if (selectedItem) {
            navegate(selectedItem.route);
            console.log("gola");

        }
    };

    return (
        <div className="Header-movil">
            <TabList selectedValue={selectedValue} onTabSelect={onTabSelect} size={config.size} vertical={config.orientation === "Vertical" ? true : false} className=' d-flex justify-content-between'>
                {
                    config.items.map((item) => (

                        config.useLink ? (
                            <Tab value={item.key} key={item.key} icon={item.icon} className="text-decoration-none" onClick={item.onclick}>
                                {item.title}
                            </Tab>
                        )
                            : (
                                <Tab value={item.key} key={item.key} icon={item.icon} >
                                    {item.title}
                                </Tab>
                            )

                    ))
                }
            </TabList>
        </div >
    );
}