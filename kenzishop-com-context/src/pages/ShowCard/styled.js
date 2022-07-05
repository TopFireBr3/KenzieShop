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

  h2 {
    border-radius: 10px;
    width: 200px;
    height: 70px;
    background-color: #a7a4ba;
    border: 2px solid black;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-size: 17px;
    margin: 0;
  }
  @media (min-width: 769px) {
    justify-content:center;
    width:100%;
    height:100% ;
  }

  `;
  export const ThemeDiv = styled.div`
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

  h2 {
    border-radius: 10px;
    width: 200px;
    height: 70px;
    background-color: #a7a4ba;
    border: 2px solid black;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-size: 17px;
    margin: 0;
  }
  @media (min-width: 769px) {

    width:100%;
    height:80% ;
  }
  `;