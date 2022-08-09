import React, { useContext } from "react";
import { CounterContext } from "../../Providers/counter";
import { Divflex } from "./styled";

const Card = ({ produtos }) => {
  const {Add_Product} = useContext(CounterContext)

  function callBack() {
    Add_Product(produtos);
    
  }
  return (
    <Divflex f="column" w="250px" h="380px" b="2px solid black" p="10px" br="20px"  bc="#fffffff6" a="center" m="0px 10px 0px 0px">
      <figure>
        <img src={produtos.img} alt={produtos.name} />
      </figure>
      <Divflex f="column" a="flex-start" t="start" w="250px" p="20px" >
        <h4>{produtos.name}</h4>
        <p>{produtos.description}</p>
        <span>R$: {produtos.price},00</span>
      </Divflex>
      <button onClick={callBack}>Adicionar</button>
    </Divflex>
  );
};

export default Card;
