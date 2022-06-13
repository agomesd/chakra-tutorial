import type { NextPage } from "next";
import { Container, Flex } from "@chakra-ui/react";
import { Details, Cart } from "../src/sections";

const Home: NextPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default Home;
