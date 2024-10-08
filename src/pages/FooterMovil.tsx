import { useContext, useEffect, useRef, useState } from 'react';
import { ITabItem } from '../interfaces/ITabItem';
import { ITabListConfig } from '../interfaces/ITabListConfig';
import { AddSquareMultipleRegular, HomeMoreRegular, MoneyRegular } from "@fluentui/react-icons";
import { TabList } from '@fluentui/react-components';
import { TabListComponent } from '../components/tabList/TabListComponent';
import { tab } from '@testing-library/user-event/dist/tab';


const FooterMovil = () => {

    const items: ITabItem[] = [
        { key: "inicio", title: "Inicio", route: "/list-pets", icon: <HomeMoreRegular /> },
        { key: "publicar", title: "Publicar", route: "/publish-pets", icon: <AddSquareMultipleRegular /> },
        { key: "donar", title: "Donar", route: "/donate", icon: <MoneyRegular /> }
    ];

    const [selectedTab, setSelectedTab] = useState<string>("inicio");
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

export {
    FooterMovil
};