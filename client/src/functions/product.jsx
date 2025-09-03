import axios from "axios";

const url = import.meta.env.VITE_API_URL

export const remove = async (event) => {
    await axios.delete(`${url}/product/${event}`)
}

export const create = async (event) =>{
    await axios.post(`${url}/product`,event)
}

export const getdata = async (event) =>{
    return await axios.get(`${url}/product`)
}
export const read = async (event) =>{
    return await axios.get(`${url}/product/${event}`)
}

export const update = async (event,data) =>{
    return await axios.put(`${url}/product/${event}`,data)
}