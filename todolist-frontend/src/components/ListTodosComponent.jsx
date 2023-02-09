import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { retreiveAllTodos,deleteTodoApi } from "./api/ToDoApiService"

export default function ListTodosComponent(){

    const[todos,setTodos]=useState([])

    const[message,setMessage]=useState(null)

    const navigate=useNavigate()

    // const todos=[
    //     // {id:1,description:'todo1'},
    //     // {id:2,description:'todo2'},
    //     // {id:3,description:'todo3'}
    // ]

    useEffect(
        ()=>allTodos(),[]
    )
    
    function allTodos(){
    retreiveAllTodos()
    .then((response)=>{
        
        setTodos(response.data)
    })

    .catch((error)=>console.log(error))
    }

    function deleteToDO(id){
        deleteTodoApi(id)
        .then(
            ()=>{
                setMessage("delete of todo is success")
                allTodos()
            })

        .catch(error=>console.log(error))
    }

    function retreiveTodoApi(id){
       navigate(`/todo/${id}`)
    }

    function addNewTodo(){
        navigate("/todo/-1")
    }
    return(
        <div className='ListTodosComponent'>
{message && <div className="alert alert-warning">{message}</div>}
            <table className="table">
  <thead>
    <tr>
      {/* <th scope="col">id</th> */}
      <th scope="col">description</th>  
      <th>Delete</th>
      <th>Update</th>
    </tr>
  </thead>
  <tbody>
  {
        todos.map(todo=>(
            <tr key={todo.id}>
                {/* <td>{todo.id}</td> */}
                <td>{todo.item}</td>
                <td><button className="btn btn-danger" onClick={()=>deleteToDO(todo.id)}>Delete</button></td>
                <td><button className="btn btn-info" onClick={()=>retreiveTodoApi(todo.id)}>Update</button></td>
            </tr>
        ))
    }
   
  </tbody>
</table>

         <div className="btn btn-success m-5" onClick={addNewTodo}>Add New TODO</div>
        
        </div> 
    )
}

