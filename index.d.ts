
export function FetchAsync<T extends unknown, Y extends unknown>({query}: {query: (params: T) => Promise<Y>}): {
    executeAsync: (params: T) => Awaited<Y>, 
    isLoading: boolean, 
    error: string
}

export function FetchNow<T extends unknown, Y extends unknown>({query}: {query: (params: T) => Promise<Y>}): {
    data: Awaited<T>,
    isLoading: boolean,
    error: string
}