import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    CircularProgress,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import {Link , useNavigate } from 'react-router-dom'
  import {  useState } from 'react';
  import Api from '../Api/Api'
  //import { UserContext } from '../components/MainContext';
//import Nav from './../components/Nav';
import Footer from './../components/Footer'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      const [loading, setLoading] = useState(false);
      const [message, setMessage] = useState('')
      let navigate = useNavigate();
    
      const authenticateUser = async(e) =>{
        e.preventDefault();
        setLoading(true);
        const input = {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
        };
        console.log(input);
        try{
          const data = await Api('user/register', 'POST',input);
          console.log(data);
          if(data.status){
            setLoading(false);
            setMessage(data.message);
            navigate('/dashboard');
            return;
          }
          setLoading(false);
          setMessage(data.Message);
        } catch(error){
         
        }
      }
    
  return (
    <div>
        {/* <Nav/> */}
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features 
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={(e) => authenticateUser(e)} >
                  {loading ? <CircularProgress/> : 'Sign up'}   
                </Button>
                
              </Stack>
              <Stack pt={6}>
                {loading ? <Text>{message}</Text>  : 
                <Text align={'center'}>
                  Already a user? <Link to='/login' color={'blue.400'}>Login</Link>
                </Text>
                 }
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
        <Footer/>
    </div>
  )
}

export default Register

// ........



  
  