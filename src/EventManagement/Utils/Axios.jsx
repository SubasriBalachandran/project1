import axios from "axios";
const Client =axios.create({baseURL:'https://localhost:4000'})
export const  request =({...options})=>{
    Client.defaults.headers.common.Authorization=""
    const onSuccess=response=>response
    const onError=error=>{
        return error;
    }
    return Client(options).then(onSuccess).catch(onError)
}