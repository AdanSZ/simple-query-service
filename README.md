# Welcome to Simple Query Service!

This is a simple React Hook to handle the state of Promise Call

# How to install
- run `npm i simple-query-service`
- install dependencies if is necessary
## How it works

    import {FetchNow, FetchAsync} from  "simple-query-service"
    
    // example async funtion with axios
    const login = async (params):Promise<ResponseTpe> => {
	    const  data = await  axios.post(ROUTE, {...params})
	    return  data.data
	 }
	 
    // FetchAsync will be executed when you call executeAsync function
    const {executeAsync, isLoading, error} = FetchAsync({ query: () =>  login(params)})
	const data = await executeAsync()
	console.log(data)
	
	// FetchNow is automatically execute and returning data
	const {data, isLoading, error} = FetchNow({ query: () =>  login(params)})
	console.log(data)

### additional you can create your query file and export your hooks  (api/login.query.ts)
	export const useLogin = () =>  FetchAsync({query: (params: ParamTypes) =>  login(params)})
	
###  Calling hook	
	import { useLogin } from  "./api/login.query";
	const {executeAsync, isLoading, error} = useLogin()
	const data = await executeAsync()
	console.log(data)
