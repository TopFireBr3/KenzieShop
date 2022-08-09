import React from "react";
import Cart from "../../components/cart";
import HeaderCart from "../../components/HeaderCart";
import { Divflex, ThemeDiv } from "./styled";

const ShowCard = () => {
  return (
    <ThemeDiv f="column" w="100%" a="center" g="20px">
      <HeaderCart props="/" name="Loja" />
      <Divflex f="column" a="center" w="90%" j="space-between">
        <h2>Carrinho</h2>
        <Divflex>
          <Cart />
        </Divflex>
      </Divflex>
    </ThemeDiv>
  );
};

export default ShowCard;
