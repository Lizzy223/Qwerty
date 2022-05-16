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
  } from '@chakra-ui/react';

  const JobContainer = (props) =>{
      const {title, location, description, price} = props;
      return(
    <Center py={6} m={'2rem'} >
        <Box
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
            <Text
              fontSize={'sm'}
              fontWeight={500}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              px={3}
              color={'green.500'}
              rounded={'full'}>
              {title}
            </Text>
            <Stack direction={'row'} align={'center'} justify={'center'}>              
              <Text fontSize={'3xl'} fontWeight={800}>
                {price}
              </Text>
              <Text color={'gray.500'}>/month</Text>
            </Stack>
          </Stack>
  
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
            <List spacing={3}>
              <Text>{description}</Text>              
            </List>
            <Text>{location}</Text>
          </Box>
        </Box>
        <Spacer/>
      </Center>
       );
  } 
  

  export const JobList = [
      {
          JobId:"1",
          JobTitle: 'Dish Washer',
          JobLocation: 'Alagbado',
          JobDescription: 'Wash plates every evening ',
          JobPrice:'N30,000'
      },
      {
        JobId:"2",
        JobTitle: 'Accountant',
        JobLocation: 'MainLand',
        JobDescription: 'Ensures all accounts are balances ',
        JobPrice:'N100,000'
    },
    {   
        JobId:"3",
        JobTitle: 'HR',
        JobLocation: 'Lekki',
        JobDescription: 'Oversee all employers',
        JobPrice:'N80,000'
    },
    {
        JobId:"4",
        JobTitle: 'Data Analyst',
        JobLocation: 'Surulere',
        JobDescription: 'Collect, analyse data from customers',
        JobPrice:'N100,000'
    },
    {
        JobId:"5",
        JobTitle: 'Dish Washer',
        JobLocation: 'Alagbado',
        JobDescription: 'Wash plates every evening ',
        JobPrice:'N30,000'
    },
    {
      JobId:"6",
      JobTitle: 'Accountant',
      JobLocation: 'MainLand',
      JobDescription: 'Ensures all accounts are balances ',
      JobPrice:'N100,000'
  },
  {   
      JobId:"7",
      JobTitle: 'HR',
      JobLocation: 'Lekki',
      JobDescription: 'Oversee all employers',
      JobPrice:'N80,000'
  },
  {
      JobId:"8",
      JobTitle: 'Data Analyst',
      JobLocation: 'Surulere',
      JobDescription: 'Collect, analyse data from customers',
      JobPrice:'N100,000'
  },
    ]

  export  function JobLists() {
    return (
      <Box
      
      minH={'50vh'}  
      alignItems={'center'}
      justifyContent={'center'}
      p={5} m={"2rem"}>
          <Center>
            <Heading color={'gray.500'} p={['1.25rem', '2.5rem']}>Job Updates</Heading>
          </Center>
          <Stack >
              <Flex flexWrap={'wrap'}>
              {
                 JobList.map(({JobId, JobTitle, JobLocation, JobDescription, JobPrice}) =>(
                     <JobContainer key={JobId} title={JobTitle} location={JobLocation} description={JobDescription} price={JobPrice} />
                 )

                 ) 
  }
            </Flex>
          </Stack>
      </Box>
    );
  }