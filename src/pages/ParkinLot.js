import { Button, Box, Text, Flex, VStack, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const data = [
	{
		id: 1,
		name: "First Corner",
		price: "60",
		img: "img1",
	},
	{
		id: 2,
		name: "Second Corner",
		price: "60",
		img: "img2",
	},
	{
		id: 3,
		name: "Third Corner",
		price: "60",
		img: "img3",
	},
	{
		id: 4,
		name: "Nice Space",
		price: "60",
		img: "img4",
	},
	{
		id: 5,
		name: "Near Cabin",
		price: "60",
		img: "img5",
	},
	{
		id: 6,
		name: "Texas point",
		price: "60",
		img: "img6",
	},
	{
		id: 7,
		name: "Gate area",
		price: "60",
		img: "img7",
	},
	{
		id: 8,
		name: "New avenue",
		price: "60",
		img: "img8",
	},
	{
		id: 9,
		name: "Lizzie point",
		price: "60",
		img: "img9",
	},
	{
		id: 10,
		name: "Go point",
		price: "60",
		img: "img10",
	},
	{
		id: 11,
		name: "Zero blocker",
		price: "100",
		img: "img11",
	},
	{
		id: 12,
		name: "Tight space",
		price: "100",
		img: "img12",
	},
	{
		id: 13,
		name: "Exit angle",
		price: "100",
		img: "img13",
	},
	{
		id: 14,
		name: "Immediate",
		price: "100",
		img: "img4",
	},
	{
		id: 15,
		name: "Truck only",
		price: "100",
		img: "img15",
	},
];

function ParkinLot() {
	const [isBooked, setIsBooked] = useState(false);
	const [price, setPrice] = useState(60);
	const [time, setTime] = useState(0);

	const booked = () => {
		setIsBooked(!isBooked);
		const intervals = setInterval(() => {
			setTime((time) => time + 1);
		}, 1000);
		return () => clearInterval(intervals);
	};

	const defaultTime = 1 * 60;

	useEffect(() => {
		const getOvertime = () => {
			if (time > defaultTime) {
				const increasedFee = setInterval(() => {
					setPrice(price + 15);
				}, 30000);
				return () => clearInterval(increasedFee);
			}
		};
		getOvertime();
	});
	return (
		<>
			<Box
				w="full"
				h="100vh"
				bgColor="black"
				px={16}
				bgImage="url(park3.jpg)"
				bgRepeat="no-repeat"
				// bgBlendMode="lighten"
				bgSize="cover"
			>
				<Box pt="2rem">
					<Text fontSize="2rem" fontWeight="bold" color="white">
						LoGo.
					</Text>
				</Box>
				<Flex w="full" h="80vh" align="center" justify="center">
					<VStack spacing={6}>
						<Text fontSize="3.5rem" fontWeight="bold" color="white">
							Welcome to Lizzie Lot
						</Text>
						<Text fontSize="1.1rem" fontWeight="400" color="white">
							Limited slot to park your car. Book Now!
						</Text>
						<Button
							fontSize="1rem"
							fontWeight="bold"
							borderRadius="10px"
							bgColor="red"
							color="white"
							h="3rem"
							w="250px"
						>
							Get a Slot
						</Button>
					</VStack>
				</Flex>
			</Box>
			<Box px={16} mb="2rem">
				<Text textAlign="center" fontSize="2rem" fontWeight="bold" my="2rem">
					Select your booking space
				</Text>
				<Grid templateColumns="repeat(5,1fr)" gap={5}>
					{data.map((item, i) => {
						return (
							<Flex
								alignItems="flex-end"
								bgImage={`${item.img}/jpg`}
								h="400px"
								w="full"
								bgColor="black"
								role="group"
								overflow="hidden"
								px="1rem"
								py="2rem"
							>
								<Box>
									<Text>{price}</Text>
									<Text>{`Time spent is ${new Date(time * 1000)
										.toISOString()
										.slice(11, 19)}`}</Text>
									<Text>{item.id}</Text>
									<Text fontSize="1.5rem" color="white">
										{item.name}
									</Text>
									<Text>{`$${item.price}USD`}</Text>
									<Button
										pos="relative"
										bottom="-90px"
										transition="all .5s ease"
										_groupHover={{
											bottom: "0",
										}}
										onClick={booked}
									>
										{isBooked ? "Exit Space" : "Book Space"}
									</Button>
								</Box>
							</Flex>
						);
					})}
				</Grid>
			</Box>
		</>
	);
}

export default ParkinLot;
