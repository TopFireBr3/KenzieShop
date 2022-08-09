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

  img {
    height: 6rem;
    width: 6rem;
    margin: 10px;
    border-radius: 10px;
  }
  p {
    font-size: 17px;
    margin: 0;
  }
  button {
    border-radius: 10px;
    width: 100px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    font-size: 20px;
  }
  button:hover{
    background-color: #a7a4ba;
    color:black;
  }
`;
