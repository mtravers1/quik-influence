
export type PropertyType = {
    label: string,
    value: string,
    type: string,
    key: string
}

export type WhereBoxProps={
    setSearchParams: React.Dispatch<React.SetStateAction<string>>,
    handleRemoveQuery: (a: number) => void
    id: number
}