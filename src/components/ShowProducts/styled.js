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

  flex-wrap: ${(props) => props.fw};

  background-color: ${(props) => props.bc};

  p {
    font-size: 17px;
    margin: 0;
  }
  button {
    border-radius: 10px;
    width: 60%;
    background-color: rgba(0,0,0,0.4);
    color:white;
    height: 70px;
    font-size: 20px;
  }
  button:hover{
    background-color: #a7a4ba;
    color:black;
  }
  body {
    display: grid;
    place-items: center;
    height: 100vh;
  }

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;

    overflow-y: auto;
    justify-content: center;
    padding: 15px 0px 0px 0px;
  }
`;
