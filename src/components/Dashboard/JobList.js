import {
    Box,
    Text,
    Stack,
    List,
    Grid,
    Flex,
    Link,
    useColorModeValue,
  } from "@chakra-ui/react";
  // import { Link } from "react-router-dom";
  
  export const JobContainer = (props) => {
    const { title, location, description, price } = props;
    return (
      <Link
        w={["full",'full','full', "full"]}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"base"}
        rounded={"md"}
        overflow={"hidden"}
        display="block"
        justify='center'
        href="dashboard/jobs/job-id"
      >
        <Stack textAlign={"center"} p={6} align={"center"}>
          <Text
            fontSize={"sm"}
            fontWeight={500}
            bg={useColorModeValue("green.50", "green.900")}
            p={2}
            color={"green.500"}
            rounded={"full"}
          >
            {title}
          </Text>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={["sm", "2xl"]} fontWeight={600}>
              {price}
            </Text>
            <Text color={"#000"}>/month</Text>
          </Stack>
        </Stack>
  
        <Box
          bg={useColorModeValue("#333.50", "#333.900")}
          pb="1rem"
          textAlign="center"
        >
          <List spacing={3}>
            <Text>{description}</Text>
          </List>
          <Text color="000">{location}</Text>
        </Box>
      </Link>
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
  
  export function JobLists() {
    return (
      <Box
        h={"100vh"}
        w="full"
        p={[0, 0, 6]}
        justifyContent="center"
        alignItems="center"
      >
        <Flex p="1rem">
          <Box>
            <Text
              fontWeight="600"
              color="gray.700"
              fontSize={["1.5rem", "1.5em", "2em"]}
              ml={["", "", "1rem", "3rem"]}
              mb="1rem"
            >
              Recommended Jobs
            </Text>
          </Box>
          {/* <Spacer/>
                  <Box>
                      <Text><Link to='/jobs'>Explore All Jobs &nbsp; <ArrowForwardIcon/></Link></Text>
                  </Box> */}
        </Flex>
        <Grid
          templateColumns={["repeat(2,1fr)", "repeat(2,1fr)", "repeat(3,1fr)",'repeat(4,1fr)']}
          w="full"
          justifyContent="center"
          alignItems="center"
          gap={[6, 7, 8]}
        >
          {JobList.map((job) => (
            <JobContainer
              key={job.JobId}
              title={job.JobTitle}
              location={job.JobLocation}
              description={job.JobDescription}
              price={job.JobPrice}
            />
          ))}
        </Grid>
      </Box>
    );
  }
  