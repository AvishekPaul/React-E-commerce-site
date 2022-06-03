import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 550;
`;

export default function Announcemnet() {
  return (
    <Container>Super Deal! Free Shipping on Orders Over Tk. 500</Container>
  );
}
