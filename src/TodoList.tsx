import { useState } from "react";

import{useForm} from "react-hook-form"
import ToDoList from './TodoList';
// function ToDoList(){
//     const [toDo, setToDo]= useState("")
//     const [toDoError, setToDoError] =useState("")
//     const onChange = (event:React.FormEvent<HTMLInputElement>) =>{
//         const{
//             currentTarget: {value},
//     } = event;
//     setToDoError("")
//     setToDo(value);
//     } 
//     const onSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
//         event.preventDefault();
//         if(toDo.length < 10){
//              return setToDoError("To do should be longer")
//         }
//         console.log("submit");
//     };
//     return <div>
//         <form onSubmit={onSubmit}>
//             <input  onChange={onChange} value={toDo} placeholder="Write a to do"/>
//             <button>Add</button>
//             {toDoError ! == ""? toDoError : null}
//         </form>
//     </div>
// }
function ToDoList(){
    const {register, watch, handleSubmit} = useForm();
    const onValid = (data:any) =>{
        console.log(data)

    }
    //register => onChange, value, useState를 모두대체했음 나를 위한 state를만들어줌 
    //watch => form의 입력값을 추적할 수 있음
    return <div>
           <form onSubmit={handleSubmit(onValid)}>
                <input {...register} placeholder="Write a to do"/>
                <button>Add</button>
            </form>
         </div>
}

export default ToDoList;