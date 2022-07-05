import React from "react";
import HeaderCart from "../../components/HeaderCart";
import ShowPraducts from "../../components/ShowProducts";
import { Divflex } from "./styled";

const Homepage = () => {
  return (
    <Divflex f="column" a="center" h="100vh"  w="100%" >
      <HeaderCart props="/ShowCart" name="Carrinho"/>
      <ShowPraducts />
    </Divflex>
  );
};

export default Homepage;
