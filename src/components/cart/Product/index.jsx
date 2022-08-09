import { useContext } from "react";
import { CounterContext } from "../../Providers/counter";
import { Divflex, ThemeText } from "./styled";

const Product = ({ produtos, index }) => {
 
  const {Sub_Product} = useContext(CounterContext)

  return (
    <Divflex b="2px solid black" p="10px" br="20px" bc="#ECEBF7" w="290px">
      <figure>
        <img src={produtos.img} alt={produtos.name} />
       </figure>
      <ThemeText f="column" a="flex-start" t="start" w="45%"  p="15px" g="10px">
        <h4>{produtos.name}</h4>
        <p>{produtos.description}</p>
        <Divflex j="space-between" w="150px" a="center">
          <span>R$: {produtos.price},00</span>
          <button onClick={()=> Sub_Product(produtos.id, index)}>X</button>
        </Divflex>
      </ThemeText>
    </Divflex>
  );
};

export default Product;
