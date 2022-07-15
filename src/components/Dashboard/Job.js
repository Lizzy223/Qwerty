import { React, useState } from "react";

import { JobList, JobContainer, JobLists } from "./JobList";
import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Button,
  Box,
} from "@chakra-ui/react";
import { GoLocation, GoSearch } from "react-icons/go";
import { SearchIcon } from "@chakra-ui/icons";

const Jobs = () => {
  const [searchData, setSearchData] = useState([]);
  const [title, setTitle] = useState("");
  const [state, setState] = useState("");
  const [price, setPrice] = useState("");

  const searchJobs = () => {
    const searchWord = {
      title,
      price,
      state,
    };
    const newSearch = JobList.filter((value) => {
      return (
        value.JobTitle.toLowerCase().includes(searchWord.title.toLowerCase()) ||
        value.JobLocation.toLowerCase().includes(
          searchWord.state.toLowerCase()
        ) ||
        value.JobPrice.toLowerCase().includes(searchWord.state.toLowerCase())
      );
    });
    // setSearchData(newSearch);

    if (
      searchWord.title === "" &&
      searchWord.state === "" &&
      searchWord.price === ""
    ) {
      setSearchData([]);
    } else {
      setSearchData(newSearch);
    }
    if (searchWord.price === "") {
      setSearchData([]);
    } else {
      setSearchData(newSearch);
    }
    if (searchWord.location === "") {
      setSearchData([]);
    } else {
      setSearchData(newSearch);
    }
    console.log(searchWord);
  };
  return (
    <div>
      <Stack direction={["column", "row"]} display='flex'  mt={"3rem"} gap="0" w='full' justifyContent='center'>        
          <Flex>
            <InputGroup w="auto">
              <InputLeftElement
                pointerEvents="none"
                color="gray"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                type="text"
                placeholder="Search"
                value={title}
				color='#ccc'
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Flex>
          <Flex>
            <InputGroup w="auto">
              <InputLeftElement
                color="gray"
                pointerEvents="none"
                children={<GoLocation color="gray.300"/>}
              />
              <Input
			  type='text'
                placeholder="state"
                color="#ccc"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </InputGroup>
          </Flex>
          <Flex>
            <InputGroup w="auto">
              <InputLeftElement
                pointerEvents="none"
                color="gray"
                children={<GoSearch color="gray.300"/>}
              />
              <Input
                placeholder="Enter amount"
                value={price}
				type='text'
				color='#ccc'
                onChange={(e) => setPrice(e.target.value)}
              />
            </InputGroup>
          </Flex>

          <Flex>
            <Button
              p={"1rem"}
              color={"#fff"}
              bg={"green"}
              cursor={"pointer"}
              onClick={() => searchJobs()}
            >
              <GoSearch fontWeight="600" />
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
      <Box mt={["3rem", "none"]} mb={["1rem", "1rem"]} h="100vh">
        <JobLists />
      </Box>
    </div>
  );
};

export default Jobs;
