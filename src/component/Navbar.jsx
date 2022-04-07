import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, EditIcon} from '@chakra-ui/icons';
import { Link as Linked, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { setUser } from "../state/user";
import SearchInput from "./Search";


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [categories, setCategories] = useState([]);
  const usuario = useSelector((state) => state.user);
  const useRol = useSelector(state => state.user.rol)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("/categories")
      .then((result) => result.data)
      .then((categories) => {
        setCategories(categories);
      })
      .catch((err) => console.log(err));
  }, []);

  const handeLogOut = () => {
    axios.post("/logout").then(() => {
      dispatch(setUser({}));
      navigate("/");
    });
  };

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Linked to="/">
              <Box>PROPERTY HOUSE</Box>
            </Linked>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Menu>
                <MenuButton
                  as={Button}
                  bg="red.500"
                  color="white"
                  rightIcon={<ChevronDownIcon />}
                >
                  Ubicacion
                </MenuButton>
                <MenuList>
                  {categories?.map((category) => {
                    return (
                      <Linked key={category.id} to={`/categories/${category.id}`}>
                        <MenuItem fontSize="xl" fontWeight="bold">
                          {category.name}
                        </MenuItem>
                      </Linked>
                    );
                  })}
                </MenuList>
              </Menu>
              {useRol === "superadmin" || useRol === "admin" ? (
                <Linked to="/admin">
                  <Menu>
                    <MenuButton
                      as={Button}
                      bg="red.500"
                      color="white"
                      rightIcon={<EditIcon />}
                    >
                      Panel Admin
                    </MenuButton>
                  </Menu>
                </Linked>
              ) : (
                <></>
              )}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <SearchInput />
            </Flex>
            <Button
              variant={'solid'}
              bg='red.500'
              color="white"
              size={'sm'}
              mr={4}
            >
              Favoritos
            </Button>
            <Menu>
              {usuario.id ? (
                <>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar bg={"red.500"} size={"sm"} src={""} />
                    <p>{usuario.name}</p>
                  </MenuButton>{" "}
                </>
              ) : (
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} src={""} />{" "}
                </MenuButton>
              )}
              {usuario.id ? (
                <MenuList>
                  <MenuItem>Configuración</MenuItem>
                  <MenuItem onClick={handeLogOut}>Cerrar Sesión</MenuItem>
                </MenuList>
              ) :
                <MenuList>
                  <Linked to="login">
                    <MenuItem>Iniciar Sesión</MenuItem>
                  </Linked>
                  <Linked to="register">
                    <MenuItem>Registrarse</MenuItem>
                  </Linked>
                </MenuList>
              }
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}



export default Navbar;