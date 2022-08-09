import React, { useContext, useEffect, useState } from "react";
import { Divflex } from "./styled";
import { CounterContext } from "../../Providers/counter";

const Reduce = () => {
  const [price, setPrice] = useState(0);
  const cart = useContext(CounterContext)

  function soma() {
    setPrice(
      cart.carrinho?.reduce((acc, value) => {
        return acc + JSON.parse(value.price);
      }, 0)
    );
  }
  useEffect(() => {
    soma();
  }, [cart.carrinho]);

  return (
    <Divflex
      f="column"
      bc="#ECEBF7"
      h="180px"
      p="20px"
      br="20px"
      b="2px solid black"
      g="15px"
      a="center"
    >
      <h4>Resumo do pedido</h4>
      <p>Número de pedidos: {cart.carrinho.length}</p>
      <p>Total: R${price},00</p>
      <button>Finalizar Compra</button>
    </Divflex>
  );
};

export default Reduce;
