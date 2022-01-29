import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export interface User {}

export interface SideBarOptionMenu {
    name: string,
    icon: IconDefinition,
    path: string,
    child?: SideBarOptionMenu[],
    order?: number,
    permission?: string[],
    isShown?: boolean,
    isActive?: boolean,
}
