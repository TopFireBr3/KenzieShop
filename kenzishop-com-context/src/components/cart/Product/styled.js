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
    padding: 10px;
    height: 100px;
    width:100px;
    border-radius: 10px;
  }
  p {
    font-size: 17px;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  span {
    font-size: 20px;
  }
  figure {
    height:auto;
    border: 2px solid black;
    border-radius: 20px;
    background-color: white;
  }
  button {
    border-radius: 10px;
    width: 50px;
    height: 50px;
    background-color: #a7a4ba;
    font-size: 20px;
  }
  @media (min-width: 769px) {

  }
`;


export const ThemeText = styled.div`
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
    padding: 10px;
    height: 100px;
    width:100px;
    border-radius: 10px;
  }
  p {
    font-size: 17px;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  h4 {

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
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
    width: 50px;
    height: 50px;
    background-color: rgba(0,0,0,0.4);
    color:white;
    font-size: 20px;
  }
  button:hover{
    background-color: #a7a4ba;
    color:black;
  }
  @media (min-width: 769px) {
    width:400px
    
  }
`;
