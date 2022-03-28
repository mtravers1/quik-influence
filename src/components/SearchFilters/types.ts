
export type PropertyType = {
    label: string,
    value: string,
    type: string,
    key: string
}

export type WhereBoxProps={
    setSearchParams: (params:any) => {},
    handleRemoveQuery: (a: number) => void
    id: number
}