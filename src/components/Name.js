import {
  Flex,
  VStack,
  Box,
  HStack,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Name = () => {
  return (
    <>
      <Flex justify="space-between">
        {/* logo */}
        <Box display={["block", "none"]}>
          <Image src="logo192.png" w="3rem" h="auto" />
        </Box>
        <Flex
          bgColor="white"
          justify={["flex-start", "space-between"]}
          w="full"
          flexDirection={["column", "row"]}
          boxShadow="0 0 6px 3px rgba(0,0,0,0.1)"
          h={["100vh", "4.5rem"]}
          px="1rem"
          align={["center", "center"]}
          pos="absolute"
          top={['100px','0']}
        >
          <HStack spacing={6}>
            <Box display={["none", "block"]}>
              <Image src="logo192.png" w="3rem" h="auto" />
            </Box>

            {/* menu items */}
            <HStack
              spacing={[0, 6]}
              fontSize=".9rem"
              fontWeight="500"
              flexDirection={["column", "row"]}
            >
              <Link _hover={{ color: "orange" }}>Home</Link>
              <Link _hover={{ color: "orange" }}>Job</Link>
              <Link _hover={{ color: "orange" }}>Contact</Link>
            </HStack>
          </HStack>
          <HStack
            spacing={[0, 4]}
            pos={["abosolute", "unset"]}
            flexDirection={["column", "row"]}
          >
            <Button bgColor="transparent" border="none">
              Sign In
            </Button>
            <Button
              bgColor="green"
              border="none"
              p="0rem 1rem"
              borderRadius="6px"
              color="white"
            >
              Sign Up
            </Button>
          </HStack>
        </Flex>
        <Box fontSize="1.2rem" display={["block", "none"]}>
          <FaBars />
        </Box>
      </Flex>
    </>
  );
};

export default Name;
