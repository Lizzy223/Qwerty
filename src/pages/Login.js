import React from "react";
import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Button,
	CircularProgress,
	Text,
	Heading,
	useColorModeValue,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Api from "../Api/Api";
import { UserContext } from "../components/MainContext";
//import Nav from './../components/Nav';
import Footer from "./../components/Footer";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const { setUser } = useContext(UserContext);
	let navigate = useNavigate();

	const logInUser = async (e) => {
		e.preventDefault();
		setLoading(true);
		const input = {
			email: email,
			password: password,
		};
		try {
			const data = await Api("users/login", "POST", input);
			console.log(data);
			if (data.status) {
				setLoading(false);
				localStorage.setItem("user", JSON.stringify(data.data));
				setUser(data.data);
				navigate("/dashboard");
				return;
			}
			setLoading(false);
			setMessage(data.Message);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			{/* <Nav style={{background:"gray"}} /> */}
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
			<Footer />
		</div>
	);
};

export default Login;
