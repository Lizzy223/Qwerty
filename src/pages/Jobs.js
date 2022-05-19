import { React, useState } from "react";

import Footer from "./../components/Footer";
import { JobLists, JobList, JobContainer } from "./../components/JobList";
import {
	Stack,
	InputGroup,
	InputLeftElement,
	Input,
	Flex,
	Button,
	Box,
} from "@chakra-ui/react";
// import icon1 from '../assets/images/icon1.svg'
// import icon2 from '../assets/images/icon2.svg'
//import icon3 from '../assets/images/icon3.svg'
import { GoLocation, GoSearch } from "react-icons/go";

const Jobs = () => {
	const [searchData, setSearchData] = useState([]);
	const [title, setTitle] = useState("");

	const searchJobs = () => {
		const searchWord = {
			title: title,
		};
		const newSearch = JobList.filter((value) => {
			return value.JobTitle.toLowerCase().includes(
				searchWord.title.toLowerCase()
			);
		});
		if (searchWord.title === "") {
			setSearchData([]);
		} else {
			setSearchData(newSearch);
		}
		console.log(searchWord);
	};
	return (
		<div>
			<Stack direction={["column", "row"]} mt={"3rem"} p={"1.5rem"}>
				<Flex flex={1} align={"center"} justify={"center"}>
					<InputGroup>
						<InputLeftElement pointerEvents="none" children={GoSearch} />
						<Input
							color="#ccc"
							placeholder="search"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</InputGroup>
				</Flex>
				<Flex flex={1} align={"center"} justify={"center"}>
					<InputGroup>
						<InputLeftElement pointerEvents="none" children={GoLocation} />
						<Input placeholder="state" color="#ccc" />
					</InputGroup>
				</Flex>
				<Flex flex={1} align={"center"} justify={"center"}>
					<InputGroup>
						<InputLeftElement pointerEvents="none" children={GoSearch} />
						<Input placeholder="Enter amount" />
					</InputGroup>
					<Button
						p={"1rem"}
						color={"#fff"}
						bg={"green"}
						cursor={"pointer"}
						onClick={() => searchJobs()}
					>
						Search
					</Button>
				</Flex>
			</Stack>
			{searchData.length !== 0 && (
				<Box>
					<Stack>
						<Flex flexWrap={"wrap"}>
							{searchData.slice(0, 3).map((job, key) => {
								return (
									<JobContainer
										key={job.JobId}
										title={job.JobTitle}
										location={job.JobLocation}
										description={job.JobDescription}
										price={job.JobPrice}
									/>
								);
							})}
						</Flex>
					</Stack>
				</Box>
			)}
			{/* {JobList.filter((JobTitle) => {
				if (search === "") {
					return JobTitle;
				} else if (
					JobTitle.name.toLowerCase().includes(search.toLocaleLowerCase())
				) {
					return JobTitle;
				}
			}).map((JobTitle, key) => {
				return <JobLists {...JobTitle.JobList} />;
			})} */}

			<JobLists />
			<Footer />
		</div>
	);
};

export default Jobs;
