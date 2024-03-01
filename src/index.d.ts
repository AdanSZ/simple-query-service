/**
 * FetchAsync
 *
 * ```ts
 *
 * const FetchAsync()
 * ```
 */
export declare const FetchAsync: <T extends unknown>({ query }: {
    query: (params?: {}) => T;
}) => {
    executeAsync: (params: {}) => Promise<T>;
    isLoading: boolean;
    error: string;
};
/**
* FetchNow
*
* ```ts
*
* const FetchNow()
* ```
*/
export declare const FetchNow: <T extends unknown>({}: {}, query: () => T) => {
    data: Awaited<T>;
    isLoading: boolean;
    error: string;
};
