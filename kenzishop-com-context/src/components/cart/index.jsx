import  { useContext } from "react";
import { CounterContext } from "../Providers/counter";
import Product from "./Product";
import Reduce from "./Reduce";
import { Divflex, ThemeDiv } from "./styled";

const Cart = () => {
  const cart = useContext(CounterContext)

  return (
    <Divflex f="column" a="center" m="30px" g="30px" j="center">
      <ThemeDiv f="column-reverse" g="50px" j="center" >
        {cart.carrinho.length === 0 ? (
          <h3>Nenhum item no carrinho</h3>
        ) : (
          <>
            <Divflex f="column" g="1vh">
              {cart.carrinho.map((e, index) => (
                <Product key={index} produtos={e} index={index} />
              ))}
            </Divflex>
            <Reduce />
          </>
        )}
      </ThemeDiv>
    </Divflex>
  );
};

export default Cart;
