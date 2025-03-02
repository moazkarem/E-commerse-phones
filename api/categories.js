import axios from "axios"
import server from "./server"

export const getAllCategoriesApi = async ()=>{
  const response =await axios.get('https://dummyjson.com/products')
  // if(!response.)
  return response.data
}