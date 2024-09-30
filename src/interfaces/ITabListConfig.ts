import { INavConfig } from "./INavConfig"

export interface ITabListConfig<T> extends INavConfig<T> {
    orientation?: "Horizontal" | "Vertical",
    size: "large" | "medium" | "small",
    onTabChange?: (value: string) => void
}

export function _initialTabListConfig<T>(): ITabListConfig<T> {
    return {
        items: [],
        orientation: "Vertical",
        size: "small",
        useLink: false
    }
}