declare function FetchAsync<T extends unknown, Y extends unknown>({query}: {query: (params: T) => Promise<Y>}): {
    executeAsync: (params: T) => Promise<Y>, 
    isLoading: boolean, 
    error: string
}

declare function FetchNow<T extends unknown, Y extends unknown>({query}: {query: (params: T) => Promise<Y>}): {
    data: Awaited<T>,
    isLoading: boolean,
    error: string
}


export {FetchAsync, FetchNow}

