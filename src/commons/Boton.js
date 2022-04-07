import { Select } from "@chakra-ui/react";
import { useState,useEffect } from "react";
import axios from "axios";

const Boton = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((result) => result.data)
      .then((products) => {
        setProducts(products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Select placeholder="Seleccionar el Producto">
        {products?.map ((product,i) => {
          return <option key={i} value={product.id}>{product.name}</option>
        })}
      </Select>
    </>
  );
};

export default Boton;