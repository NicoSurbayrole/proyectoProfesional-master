import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { Link as Linked } from 'react-router-dom';
import { ErrorMessage } from "@hookform/error-message";

import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("/signin", data)
      .then(() => navigate("/login"))
      .catch(() =>
        alert(
          "El email ingrsado ya esta asociado a una de nuestras cuentas, a continuación será redirigido para que inicie sesion"
        )
      )
      .then(() => navigate("/login"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Registrarse
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Nombre</FormLabel>
                    <Input
                      {...register("name", {
                        required: true,
                        pattern: {
                          value: /^([a-zA-Z-]+)(\s[a-zA-Z]+)*$/,
                          message: "Ingrese un nombre valido",
                        },
                      })}
                      type="text"
                    />
                    <ErrorMessage
                      errors={errors}
                      name="name"
                      render={({ message }) => <p>{message}</p>}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Apellido</FormLabel>
                    <Input
                      {...register("lastName", {
                        required: true,
                        pattern: {
                          value: /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/,
                          message: "Ingrese un apellido valido",
                        },
                      })}
                      type="text"
                    />
                    <ErrorMessage
                      errors={errors}
                      name="lastName"
                      render={({ message }) => <p>{message}</p>}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Ingrese un email valido",
                    },
                  })}
                  type="email"
                />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => <p>{message}</p>}
                />
              </FormControl>
              <FormControl id="adress" isRequired>
                <FormLabel>Direccion</FormLabel>
                <Input
                  {...register("address", { required: true })}
                  type="text"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Contraseña</FormLabel>
                <InputGroup>
                  <Input
                    {...register("password", { required: true, minLength: 8 })}
                    type={showPassword ? "text" : "password"}
                  />

                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ message }) => <p>Ingrese al menos 8 caracteres</p>}
                />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'red.400'}
                  color={'white'}
                  type="submit"
                  _hover={{
                    bg: 'red.500',
                  }}>
                  Completar Registro
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  ya estas registrado?
                  <Linked to="/login">
                    <Link color={'blue.400'}> Login</Link>
                  </Linked>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  );
}