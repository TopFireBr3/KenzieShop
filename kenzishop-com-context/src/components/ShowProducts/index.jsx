import React, { useContext } from "react";
import Card from "./card";
import { Divflex } from "./styled";
import { CounterContext } from "../Providers/counter";

const ShowPraducts = () => {
  
  const carrinho = useContext(CounterContext)

  console.log(carrinho.products)

  return (
    <Divflex f="row" className="carrossel" h="430px" w="100vw" fw="nowrap" g="20px" a="center" j="start" ox="auto" >
      {carrinho.products.map((e, index) => (
        <Card key={index} produtos={e}></Card>
      ))}
    </Divflex>
  );
};

export default ShowPraducts;
