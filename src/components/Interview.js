import { Flex, Stack, Box, FormControl, useColorModeValue, Heading, FormLabel, Input, Checkbox, Link, Text, Button,CircularProgress  } from '@chakra-ui/react'
import { useState } from 'react'

const Interview = () =>{
    const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");


        return(
        <>
            	<Flex
				minH={"100vh"}
				align={"center"}
				justify={"center"}
				bg={useColorModeValue("gray.50", "gray.800")}
			>
				<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
					<Stack align={"center"}>
						<Heading fontSize={"4xl"}>Sign in to your account</Heading>
					</Stack>
					<Box
						rounded={"lg"}
						bg={useColorModeValue("white", "gray.700")}
						boxShadow={"lg"}
						p={8}
					>
						<Stack spacing={4}>
							<FormControl id="email">
								<FormLabel>Email address</FormLabel>
								<Input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</FormControl>
							<FormControl id="password">
								<FormLabel>Password</FormLabel>
								<Input
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</FormControl>
							<Stack spacing={10}>
								<Stack
									direction={{ base: "column", sm: "row" }}
									align={"start"}
									justify={"space-between"}
								>
									<Checkbox>Remember me</Checkbox>
									<Link to="/forgotPassword" color={"blue.400"}>
										Forgot password?
									</Link>
									<Text>
										Don't have an account?{" "}
										<Link to="/register" color="blue">
											Sign Up
										</Link>{" "}
									</Text>
								</Stack>
								<Button
									bg={"green.400"}
									color={"white"}
									_hover={{
										bg: "green.500",
									}}
									p={2}
									onClick={(e) => logInUser(e)}
								>
									{loading ? <CircularProgress /> : "Sign in"}
								</Button>
								<Text>{message}</Text>
							</Stack>
						</Stack>
					</Box>
				</Stack>
			</Flex>
        </>
    );
}

export default Interview;