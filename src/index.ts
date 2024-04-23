import { useEffect, useState } from 'react'
interface IQuery<T> {
  query: (params?: Record<string, unknown>) => Promise<T>
}

export interface FetchNowType<T> { data: T | null, isLoading: boolean, error: string }
export interface FetchAsyncType<T> { executeAsync: (params: Record<string, unknown>) => Promise<T>, isLoading: boolean, error: string }

export const FetchAsync = <T>({ query }: IQuery<T>): FetchAsyncType<T> => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const executeAsync = async (params: Record<string, unknown>) => {
    setIsLoading(true)
    setError('')
    try {
      const responseData: Awaited<T> = await query(params)
      setIsLoading(false)
      return responseData
    } catch (error) {
      setIsLoading(false)
      setError(error as string)
      throw new Error('Parameter is not a number!')
    }
  }
  return { executeAsync, isLoading, error }
}

export const FetchNow = <T>({ query }: { query: Promise<T> }): FetchNowType<T> => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [data, setData] = useState<Awaited<T> | null>(null)
  console.log('query', query)
  useEffect(() => {
    const execute = async (): Promise<void> => {
      setIsLoading(true)
      setError('')
      try {
        const responseData = await query
        setIsLoading(false)
        setData(responseData)
      } catch (error) {
        setError(error as string)
      }
      setIsLoading(false)
    }

    void execute()
  }, [])

  return { data, isLoading, error }
}
