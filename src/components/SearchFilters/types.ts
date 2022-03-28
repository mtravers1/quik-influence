
export type PropertyType = {
    label: string,
    value: string,
    type: string,
    key: string
}

export type WhereBoxProps={
    setSearchParams: () => {},
    handleRemoveQuery: (a: number) => void
    id: number
}