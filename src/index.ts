import { useEffect, useState } from "react"
interface IQuery<T>{
    query: (params?: {}) => Promise<T>
}

export const FetchAsync = <T extends unknown>({query}: IQuery<T>) => {
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
        setIsLoading(false)
        console.log(error)
        setError(error as string)
        return error
      }
    }
    return {executeAsync, isLoading, error}
  }
  
  export const FetchNow = <T extends unknown>({query}:{query: ()=>T}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState<Awaited<T>|null>(null)
    console.log('query', query)
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