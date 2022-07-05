import styled from "styled-components";

export const Divflex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.f};
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};
  gap: ${(props) => props.g};
  text-align: ${(props) => props.t};

  overflow-x: ${(props) => props.ox};
  overflow-y: ${(props) => props.oy};

  width: ${(props) => props.w};
  height: ${(props) => props.h};

  padding: ${(props) => props.p};
  border: ${(props) => props.b};
  border-radius: ${(props) => props.br};

  margin-bottom: ${(props) => props.mb};
  margin: ${(props) => props.m};

  background-color: ${(props) => props.bc};

  width:260px;
  p {
    font-size: 17px;
    margin: 0;
  }

  span {
    font-size: 20px;
  }
  figure {
    border: 2px solid black;
    border-radius: 20px;
    background-color: white;
  }
  button {
    border-radius: 10px;
    width: 200px;
    height: 60px;
    font-size: 20px;
    background-color: rgba(0,0,0,0.4);
    color:white;
  }
  button:hover{
    background-color: #a7a4ba;
    color:black;
  }
  @media (min-width: 769px) {
    width:330px;
    height:190px;
  }
`;
