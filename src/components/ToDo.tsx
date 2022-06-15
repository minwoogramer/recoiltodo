import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, IToDo, toDoState } from "../atoms";


const TodoItem = styled.li`
  display: flex;
  list-style-type: none;
  span{
    margin-left: 20px;
    margin-right: auto;
  }
`;

const Button = styled.button`
  color: white;
  background-color: transparent;
  border-radius: 10px;
  border: solid;
  margin: 0px 5px;
`;

function ToDo({text, category, id}:IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    const {currentTarget:{name}} = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id)
      const newToDo = {text, id, category:name as any};
      const newToDos = [...oldToDos];
      if(category === Categories.Delete) {
        newToDos.splice(targetIndex,1);
        return newToDos;
      } else {
      newToDos.splice(targetIndex,1,newToDo);
      return newToDos;
      }
    });
  }
  return(
    <TodoItem>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <Button name={Categories.TO_DO} onClick={onClick}>To Do</Button>)}
      {category !== Categories.DOING && (
        <Button name={Categories.DOING} onClick={onClick}>Doing</Button>)}
      {category !== Categories.DONE && (
        <Button name={Categories.DONE} onClick={onClick}>Done</Button>)}
      <Button name={Categories.Delete} onClick={onClick}>delete</Button>
    </TodoItem>
  )
}

export default ToDo;
      
      
    