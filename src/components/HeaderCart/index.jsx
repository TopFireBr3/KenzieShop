import React from "react";
import { useHistory } from "react-router-dom";
import { Divflex } from "./styled";

const Header = ({props, name}) => {
   const history = useHistory()
   function callback(elem) {

    history.push(elem)
   }
  return (
    <Divflex f="row" j="space-around" bc="gray" w="100%" a="center" >
      <Divflex  w="80%" j="space-between" a="center">
        <img src="https://i.pinimg.com/originals/37/c8/52/37c852e129f40ce5ce09e113ebd40c16.jpg" alt="Custon Store" />
        <button onClick={()=> callback(props)}>{name}</button>
      </Divflex>
      <button>Entrar</button>
    </Divflex>
  );
};

export default Header;
