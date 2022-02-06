import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface User {}

export type T = { [key: string]: string[] };
export type Q = { [key: string]: string };
export type SelectProps = { label: string; value: string };

export interface SideBarOptionMenu {
  name: string;
  icon: IconDefinition;
  path: string;
  child?: SideBarOptionMenu[];
  order?: number;
  permission?: string[];
  isShown?: boolean;
  isActive?: boolean;
}

export interface FilterItemProps {
  onChange: (val: T) => void;
  isExpanded: boolean;
  title?: string;
  selectOptions?: SelectProps[];
}
