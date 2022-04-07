import { Link as Linked } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Flex,
  Box,
  FormControl,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";

function Admin() {
  const useRol = useSelector((state) => state.user.rol);
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Panel de Admin</Heading>
        </Stack>
        <Box rounded={"lg"} boxShadow={"lg"} p={8} align={"center"}>
          <Stack spacing={4}>
            <FormControl id="text">
              <Linked to="/admin/agregar">
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"red.400"}
                  color={"white"}
                  _hover={{
                    bg: "red.500",
                  }}
                >
                  Agregar Producto
                </Button>
              </Linked>
            </FormControl>
            <FormControl id="text">
              <Linked to="/admin/editar">
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"red.400"}
                  color={"white"}
                  _hover={{
                    bg: "red.500",
                  }}
                >
                  Editar Producto
                </Button>
              </Linked>
            </FormControl>
            <FormControl id="text">
              <Linked to="/admin/eliminar">
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"red.400"}
                  color={"white"}
                  _hover={{
                    bg: "red.500",
                  }}
                >
                  Eliminar Producto
                </Button>
              </Linked>
            </FormControl>
            <FormControl id="text">
              <Linked to="/admin/crearcategoria">
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"red.400"}
                  color={"white"}
                  _hover={{
                    bg: "red.500",
                  }}
                >
                  Editar Categorias
                </Button>
              </Linked>
            </FormControl>
            {useRol === "superadmin" ? (
              <>
                <FormControl>
                  <Linked to="/admin/agregaradmin">
                    <Button
                      loadingText="Submitting"
                      size="lg"
                      bg={"red.400"}
                      color={"white"}
                      _hover={{
                        bg: "red.500",
                      }}
                    >
                      Agregar Admin
                    </Button>
                  </Linked>
                </FormControl>
                <FormControl>
                  <Linked to="/admin/deleteadmin">
                    <Button
                      loadingText="Submitting"
                      size="lg"
                      bg={"red.400"}
                      color={"white"}
                      _hover={{
                        bg: "red.500",
                      }}
                    >
                      Eliminar Admin
                    </Button>
                  </Linked>
                </FormControl>
              </>
            ) : (
              <></>
            )}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Admin;