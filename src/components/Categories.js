import styled from "styled-components";
import { categories } from "../assets/data";
import CategoryItem from "./CategoryItem";
import { Mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${Mobile({ padding: "0px", flexDirection: "column" })}
`;

export default function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
}
