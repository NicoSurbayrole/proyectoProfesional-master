import {
  Flex,
  Box,
  Image,
} from "@chakra-ui/react";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProductAddToCart({ data }) {
    return (
      <Flex p={10} w="full" alignItems="center" justifyContent="center">
        <Box
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="static"
        >
          <Link to={`/products/${data.id}`}>
            <Image
              w="max"
              h="max"
              src={data.image}
              alt={`Picture of ${data.name}`}
              roundedTop="lg"
            />
          </Link>
          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Link to={`/products/${data.id}`}>
                <Box
                  fontSize="medium"
                  fontWeight="bold"
                  as="h4"
                  lineHeight="normal"
                  textAlign="center"
                  isTruncated
                >
                  {data.name}
                </Box>
                <Box
                  fontSize="medium"
                  fontWeight="bold"
                  as="h4"
                  lineHeight="normal"
                  textAlign="center"
                  isTruncated
                  margin="2px 0px"
                >
                  {"$" + data.price}
                  <Box
                  display="inline-block"
                  margin= "0px 3px"
                >
                  <BsStar/>
                </Box>
                </Box>
              </Link>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  } 


export default ProductAddToCart;