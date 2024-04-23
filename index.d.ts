declare function FetchAsync<T>({query}: {query: (params: T) => Promise<T>}): {
    executeAsync: (params: Record<string, unknown>) => Promise<T>, 
    isLoading: boolean, 
    error: string
}

declare function FetchNow<T>({query}: {query: (params: T) => Promise<T>}): {
    data: Awaited<T> | null,
    isLoading: boolean,
    error: string
}

declare interface FetchNowType<T> { data: T | null, isLoading: boolean, error: string }
declare interface FetchAsyncType<T> { executeAsync: (params: Record<string, unknown>) => Promise<T>, isLoading: boolean, error: string }


export {FetchAsync, FetchNow, FetchNowType, FetchAsyncType}

