import {
	Box,
	Center,
	Text,
	Stack,
	List,
	Flex,
	Spacer,
	Heading,
	useColorModeValue,
} from "@chakra-ui/react";

export const JobContainer = (props) => {
	const { title, location, description, price } = props;
	return (
		<Center py={3} m={"2rem"}>
			<Box
				maxW={"330px"}
				w={"full"}
				bg={useColorModeValue("white", "gray.800")}
				boxShadow={"2xl"}
				rounded={"md"}
				overflow={"hidden"}
			>
				<Stack
					textAlign={"center"}
					p={6}
					color={useColorModeValue("#333.800", "white")}
					align={"center"}
				>
					<Text
						fontSize={"sm"}
						fontWeight={500}
						bg={useColorModeValue("green.50", "green.900")}
						p={2}
						px={3}
						color={"green.500"}
						rounded={"full"}
					>
						{title}
					</Text>
					<Stack direction={"row"} align={"center"} justify={"center"}>
						<Text fontSize={"3xl"} color={"#333.300"} fontWeight={800}>
							{price}
						</Text>
						<Text color={"#333"}>/month</Text>
					</Stack>
				</Stack>

				<Box bg={useColorModeValue("#333.50", "#333.900")} px={6} py={10}>
					<List spacing={3}>
						<Text>{description}</Text>
					</List>
					<Text>{location}</Text>
				</Box>
			</Box>
			<Spacer />
		</Center>
	);
};

export const JobList = [
	{
		JobId: "1",
		JobTitle: "Dish Washer",
		JobLocation: "Alagbado",
		JobDescription: "Wash plates every evening ",
		JobPrice: "N30,000",
	},
	{
		JobId: "2",
		JobTitle: "Accountant",
		JobLocation: "MainLand",
		JobDescription: "Ensures all accounts are balances ",
		JobPrice: "N100,000",
	},
	{
		JobId: "3",
		JobTitle: "HR",
		JobLocation: "Lekki",
		JobDescription: "Oversee all employers",
		JobPrice: "N80,000",
	},
	{
		JobId: "4",
		JobTitle: "Data Analyst",
		JobLocation: "Surulere",
		JobDescription: "Collect, analyse data from customers",
		JobPrice: "N100,000",
	},
	{
		JobId: "5",
		JobTitle: "Dish Washer",
		JobLocation: "Alagbado",
		JobDescription: "Wash plates every evening ",
		JobPrice: "N30,000",
	},
	{
		JobId: "6",
		JobTitle: "Accountant",
		JobLocation: "MainLand",
		JobDescription: "Ensures all accounts are balances ",
		JobPrice: "N100,000",
	},
	{
		JobId: "7",
		JobTitle: "HR",
		JobLocation: "Lekki",
		JobDescription: "Oversee all employers",
		JobPrice: "N80,000",
	},
	{
		JobId: "8",
		JobTitle: "Data Analyst",
		JobLocation: "Surulere",
		JobDescription: "Collect, analyse data from customers",
		JobPrice: "N100,000",
	},
];

export const JobsBox = () => {
	return (
		<Stack>
			<Flex flexWrap={"wrap"}>
				{JobList.map((job) => (
					<JobContainer
						key={job.JobId}
						title={job.JobTitle}
						location={job.JobLocation}
						description={job.JobDescription}
						price={job.JobPrice}
					/>
				))}
			</Flex>
		</Stack>
	);
};
export function JobLists() {
	return (
		<Box
			minH={"50vh"}
			alignItems={"center"}
			justifyContent={"center"}
			m={"2rem"}
		>
			<Center>
				<Heading color={"#333"} p={["1.25rem", "2.5rem"]}>
					Job Updates
				</Heading>
			</Center>
			<JobsBox />
		</Box>
	);
}
