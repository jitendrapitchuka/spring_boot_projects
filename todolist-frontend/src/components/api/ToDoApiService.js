import axios from "axios"

const apiClient=axios.create(
    {
        baseURL:'http://localhost:8080'
    }
)


export const retreiveAllTodos=()=>{
   return  apiClient.get('/items')
}

export const deleteTodoApi=(id)=>{
    return  apiClient.delete(`/items/${id}`)
 }

 export const retreiveTodoApi=(id)=>{
    return  apiClient.get(`/items/${id}`)
 }

 export const updateTodoApi=(id,todo)=>{
    return  apiClient.put('/items',todo)
 }