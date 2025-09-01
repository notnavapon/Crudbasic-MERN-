import axios from "axios";

export const remove = async (event) => {
    await axios.delete(import.meta.env.VITE_API_URL+'/product/'+ event)
}

export const create = async (event) =>{
    await axios.post(import.meta.env.VITE_API_URL+'/product',event)
}

export const getdata = async (event) =>{
    return await axios.get(import.meta.env.VITE_API_URL+'/product')
}
export const read = async (event) =>{
    return await axios.get(import.meta.env.VITE_API_URL+'/product/'+event)
}

export const update = async (event,data) =>{
    return await axios.put(import.meta.env.VITE_API_URL+'/product/'+event,data)
}