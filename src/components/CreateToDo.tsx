import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atoms";


interface IForm {
  toDo: string;
}

const Input = styled.input`
  text-align: center;
  font-size: 20px;
  width: 350px;
  color: white;
  padding: 10px 0px;
  border: none;
  background-color: transparent;
  border-bottom-style: dashed;
`;

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({toDo}:IForm) => {
    setToDos(oldToDos => [{ text:toDo, id:Date.now(), category: category }, ...oldToDos]);
    setValue("toDo", "");
  };
  return(
    <form onSubmit={handleSubmit(handleValid)}>
      <Input {...register("toDo", {
        required:"Please write a To Do",
      })} placeholder="Write a to do and Press enter."/>
    </form>
  )
}

export default CreateToDo;