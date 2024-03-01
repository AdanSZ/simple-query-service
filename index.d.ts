
export function FetchAsync<T extends unknown>({query}: {query: (params?: {}) => T}): {
    executeAsync: Awaited<T>, 
    isLoading: boolean, 
    error: string
}

export function FetchNow<T extends unknown>({}, query: ()=>T): {
    data: Awaited<T>,
    isLoading: boolean,
    error: string
}