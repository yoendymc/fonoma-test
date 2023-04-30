export type Symbols={[key:string]:string}

export type ApiResponse = {
    message?:string
    success?:boolean
    symbols?:Symbols
}