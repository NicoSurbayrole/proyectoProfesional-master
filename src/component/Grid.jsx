import { SimpleGrid, Box, Text, Heading } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
//import { Link } from "react-router-dom";
import ProductAddToCart from "../commons/ProductAddToCart";
import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
//import { useDispatch} from "react-redux";

function GridGeneral() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get("/products")
      .then((result) => result.data)
      .then((products) => {
        setProducts(products);
      })
      .catch((err) => console.log(err));
  }, []);

  // const dispatch = useDispatch();

  // const handleClick = (id) => {
  //   axios
  //     .get(`/products/${id}`)
  //     .then((result) => result.data)
  //     .then(() => {
  //       navigate(`/products/${id}`);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(4);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirtsProduct = indexOfLastProduct - productPerPage;
  // const currentProduct = products.slice(
  //   indexOfFirtsProduct,
  //   indexOfLastProduct
  // );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Box>
      {products.length === 0 ? (
        <Box textAlign="center" py={10} px={6}>
          <InfoIcon boxSize={"50px"} color={"blue.500"} />
          <Heading as="h2" size="xl" mt={6} mb={2}>
            No se han encontrado productos
          </Heading>
          <Text color={"gray.500"}>
            Por favor intenta ingresando otra especificación para buscar el
            producto solicitado
          </Text>
        </Box>
      ) : (
        <Box p={6}>
          <SimpleGrid spacing="30px" minChildWidth="300px">
          {products?.map((product, i) => (
              <ProductAddToCart
                data={product}
              />
            ))}
          </SimpleGrid>
          <Pagination
            productPerPage={productPerPage}
            totalProduct={products.length}
            paginate={paginate}
          />
        </Box>
      )}
    </Box>
  );
}

export default GridGeneral;