import { Formik,Form,Field } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import { retreiveTodoApi,updateTodoApi,CreateTodoApi } from './api/ToDoApiService'
export default function ToDoComponent() {

    const {id}=useParams()
    const[item,setItem]=useState('')
    const navigate=useNavigate()
useEffect(()=>
// eslint-disable-next-line
    retreiveTodos(),[id])


function retreiveTodos(){

    if(id !== -1){
    retreiveTodoApi(id)
    .then((response)=>{
        setItem(response.data.item)
        console.log(response)
    })

    .catch((error)=>console.log(error))
}
}
function onSubmit(values){
    const todo={
        id:values.id,
        item:values.item
}
    console.log(todo)

    if(id === -1){
        
     CreateTodoApi(id,todo)
     .then((response)=>{
        navigate('/todos')
    })

    .catch((error)=>console.log(error))
    }
else{
     updateTodoApi(id,todo)
     .then((response)=>{
        navigate('/todos')
    })

    .catch((error)=>console.log(error))
}
}
  return (
    <div className='container'>
<h1>Enter Todo Details</h1>
<Formik initialValues={{id,item}} enableReinitialize={true} onSubmit={onSubmit} >
    {
    (props)=>(

        <div>
            <Form>
                <fieldset className='form-group'>
                    <label>Description</label>
                    <Field name="item" type="text" className="form-control" />
           
                </fieldset>
                <div>
<button className='btn btn-success m-5' type='submit'>Save</button></div>
            </Form>
        </div>

    )
}
</Formik>
    </div>
  )
}
