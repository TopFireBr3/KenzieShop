import { createContext, useState } from "react";

export const CounterContext = createContext([]);

export const CounterProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState(
    JSON.parse(localStorage.getItem("Products")) || []
  );

  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Chapter 2",
      img: "https://cf.shopee.com.br/file/cf256203f536244013b0b3dd69bf579a",
      price: "40",
      description:
        "Blusa Masculina Com Capuz E Manga Comprida/Estampa Digital 3D Série Palhaço /Especial /Unissex /Primavera /Outono",
    },
    {
      id: "2",
      name: " Moleton Darling",
      img: "https://cf.shopee.com.br/file/695eaa61e0a22e86270edea1da73421d",
      price: "35",
      description:
        "Moletom Canguru Capuz Darling the fraxx Zero Two Anime Lançamento 2022 Moletom Flanelado Pronta Entrega",
    },
    {
      id: "3",
      name: "Camiseta Death Note",
      img: "https://cf.shopee.com.br/file/7bb9d724c742d88b9b60083e6b46b1fc",
      price: "39",
      description:
        "Camiseta Basica Camisa Death Note Apple Kira Light Yagami L Lawliet Anime Japanese Unissex",
    },
    {
      id: "4",
      name: "Moletom Unissex",
      img: "https://cf.shopee.com.br/file/81179b58f1d8766f5de74c14f749ea93",
      price: "80",
      description:
        "2022 Moletom Unissex Com Capuz E Manga Comprida Estampa 3d Pokemon",
    },
    {
      id: "5",
      name: "Camisa da nike",
      img: "https://images-ext-1.discordapp.net/external/c1EVJx12LvQjJdXj--p_29cmhcGF5PQYJUFTsrqTOb0/https/cf.shopee.com.br/file/943fb910dced9ea9117de2a010c86310?width=671&height=671",
      price: "69",
      description:
        "AS NOSSAS CAMISETAS POLO, LEVE & CONFORTÁVEL, SÃO CONFECCIONADAS EM ALTO PADRÃO DE QUALIDADE",
    },
  ]);

  const Add_Product = (produto) => {
    setCarrinho([...carrinho, produto]);
    localStorage.setItem("Products", JSON.stringify([...carrinho, produto]));
  };

  const Sub_Product = (id, index) => {
      const newList = carrinho.filter(
          (product, productIndex) => index !== productIndex
          );
          console.log(newList)
    localStorage.setItem("Products", JSON.stringify(newList));
    setCarrinho(newList);
  };

  return (
    <CounterContext.Provider value={{ carrinho, products, Add_Product, Sub_Product }}>
      {children}
    </CounterContext.Provider>
  );
};
