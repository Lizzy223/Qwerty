import {
	Flex,
	Box,
	HStack,
	Button,
	Image,
	Text,
	Link,
	Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Name = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleNav = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Box
			boxShadow="0 0 6px 3px rgba(0,0,0,0.1)"
			bgColor="white"
			py={["1rem", "0"]}
		>
			<Flex
				justify={"space-between"}
				w="90%"
				mx="auto"
				h={["auto", "4.5rem"]}
				align="center"
			>
				<HStack spacing={[0, 6]} display={["block", "flex"]} w="full">
					<Box display={["block", "block"]}>
						<Image src="logo192.png" w="3rem" h="auto" />
					</Box>
					{/* menu items */}
					<Flex
						justify="space-between"
						w="full"
						align="center"
						pos={["absolute", "unset"]}
						bgColor="white"
						display={["block", "flex"]}
						h={["100vh", "auto"]}
						zIndex="5"
						left={isOpen ? "0" : "-100%"}
						top="75px"
						pt={["40px", "0"]}
						transition="left .5s ease"
					>
						<Stack
							spacing={6}
							fontSize=".9rem"
							fontWeight="500"
							textAlign={["center", "left"]}
							direction={["column", "row"]}
							mb={[6, "0"]}
						>
							<Link _hover={{ color: "orange" }}>
								<Text>Home</Text>
							</Link>
							<Link _hover={{ color: "orange" }}>
								<Text>Job</Text>
							</Link>
							<Link _hover={{ color: "orange" }}>
								<Text>Contact</Text>
							</Link>
						</Stack>
						<Stack
							spacing={[6, 4]}
							direction={["column", "row"]}
							align="center"
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
								w="fit-content"
							>
								Sign Up
							</Button>
						</Stack>
					</Flex>
				</HStack>
				<Box fontSize="1.2rem" display={["block", "none"]} onClick={toggleNav}>
					{isOpen ? <FaTimes /> : <FaBars />}
				</Box>
			</Flex>
		</Box>
	);
};

export default Name;
