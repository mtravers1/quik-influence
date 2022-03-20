import { ChangeEvent } from "react"

export type SelectedFilterType = {
    type: string,
    options: Array<{label: string, value: string}>,
    name: string,
    value: string,
    key: string,
    id: string
}

export type FilterValueType = {
    selectedFilter: SelectedFilterType,
    handleFilterValueChange: (e: ChangeEvent, selectedFilter: SelectedFilterType, filterIndex: number ) => void,
    filterIndex: number
}