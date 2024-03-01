import { useEffect, useState } from "react"
/**
 * FetchAsync
 *
 * ```ts
 * 
 * const FetchAsync()
 * ```
 */
export const FetchAsync = <T extends unknown>({query}: {query: (params?: {}) => T}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
  
    const executeAsync = async (params: {}) => {
      setIsLoading(true)
      setError('')
      try{
        const responseData: Awaited<T> = await query(params)
        setIsLoading(false)
        return responseData
      } catch (error){
        console.log(error)
        setError(error as string)
      }
      setIsLoading(false)
    }
    
    return {executeAsync, isLoading, error}
  }

  /**
 * FetchNow
 *
 * ```ts
 * 
 * const FetchNow()
 * ```
 */
  
  export const FetchNow = <T extends unknown>({}, query: ()=>T) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState<Awaited<T>>()

    useEffect(() => {
      const execute = async () => {
        setIsLoading(true)
        setError('')
        try{
          const responseData = await query()
          setIsLoading(false)
          setData(responseData)
        } catch (error){
          setError(error as string)
        }
        setIsLoading(false)
      }

      execute()
    }, [])
    
    return {data, isLoading, error}
  }