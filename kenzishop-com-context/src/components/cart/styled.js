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

  p {
    font-size: 17px;
    margin: 0;
  }
  h1 {
    border-radius: 10px;
    width: auto;
    height: 50px;
    background-color: #a7a4ba;
    border: 2px solid black;
    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  h3 {
    border-radius: 10px;
    width: 100px;
    height: 50px;
    background-color: #a7a4ba;
    border: 2px solid black;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  figure {
    display: flex;
    align-items: center;
  }
  @media (min-width: 769px) {
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

  p {
    font-size: 17px;
    margin: 0;
  }
  h1 {
    border-radius: 10px;
    width: auto;
    height: 50px;
    background-color: #a7a4ba;
    border: 2px solid black;
    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  h3 {
    border-radius: 10px;
    width: 200px;
    height: 100px;

    background-color: #a7a4ba;
    border: 2px solid black;

    display: flex;
  }

  figure {
    display: flex;
    align-items: center;
  }
  @media (min-width: 769px) {
    width: 100%;
    height: 100%;
    flex-direction: row;

    h3 {
      width: 300px;
      height: 150px;
    }
  }
`;
