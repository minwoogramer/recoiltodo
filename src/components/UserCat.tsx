import { useRecoilState} from "recoil";
import { Categories, categoryState } from "../atoms";
import styled from "styled-components";

const Select = styled.select`
  font-size: 1rem;
  color: black;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
`;

function UsertCat() {
  const [ category, setCategory ] = useRecoilState(categoryState);
  const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <Select aria-label="label for the select" value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>TO DO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </Select> 
    </div>
  )
}

export default  UsertCat;