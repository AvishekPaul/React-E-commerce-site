import { AddShoppingCartOutlined, Search } from "@material-ui/icons";
import { Link } from "react-router-dom";

import Badge from "@material-ui/core/Badge";
import React from "react";
import styled from "styled-components";
import { Mobile } from "../Responsive";

const Container = styled.div`
  height: 60px;
  background-color: #aee1f9;
  background-image: linear-gradient(315deg, #aee1f9 0%, #f6ebe6 74%);
  ${Mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${Mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${Mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid grey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${Mobile({ marginLeft: 0 })}
`;

const Input = styled.input`
  border: none;
  background-color: #f6ebe6;
  ${Mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${Mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${Mobile({ flex: 1, justifyContent: "center" })}
`;

// const MenuItem = styled.div`
//   font-size: 14px;
//   cursor: pointer;
//   margin-left: 25px;
// `;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>PAUL.</Logo>
        </Center>
        <Right>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "14px",
              cursor: "pointer",
              marginLeft: "20px",
              color: "black",
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "14px",
              cursor: "pointer",
              marginLeft: "20px",
              color: "black",
            }}
            to="/r"
          >
            Register
          </Link>

          <Link
            style={{
              textDecoration: "none",
              fontSize: "14px",
              cursor: "pointer",
              marginLeft: "20px",
              color: "black",
            }}
            to="/l"
          >
            Login
          </Link>

          <Link
            style={{
              textDecoration: "none",
              fontSize: "14px",
              cursor: "pointer",
              marginLeft: "20px",
              color: "black",
            }}
            to="/c"
          >
            <Badge badgeContent={2} color="primary">
              <AddShoppingCartOutlined />
            </Badge>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}
