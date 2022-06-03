import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { Mobile } from "../Responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #f6ebe6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h3`
  font-size: 50px;
  margin-bottom: 20px;
`;
const Descriptiion = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${Mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${Mobile({ width: "80%" })}
`;
const Input = styled.input`
  font-size: 18px;
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

export default function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Descriptiion>
        Get timely updates from your favorite products.
      </Descriptiion>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}
