import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import SelectCat from "./UserCat";
import ToDo from "./ToDo";


const Container = styled.div`
  padding: 30px;
  min-height: 76vh;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  border: solid 3px;
  border-radius: 30px;
  h1 {
    font-size: 50px;
    margin-bottom: 50px;
  }
  div {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
`; 


function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  return (
    <Container>
      <h1>TODO LIST</h1>
      <div>
        <SelectCat />
        <CreateToDo />
      </div>
      {toDos?.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
    </Container>
  );
}


export default ToDoList;