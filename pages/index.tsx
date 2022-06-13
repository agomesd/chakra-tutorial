import type { NextPage } from "next";
import { Container, Flex } from "@chakra-ui/react";
import { Details, Cart } from "../src/sections";

const Home: NextPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default Home;
