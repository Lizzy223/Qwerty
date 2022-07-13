import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Text,
    Tooltip,
    useClipboard,
    CircularProgress,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react';
  import React, {useState} from 'react';
  import { BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs';
  import { MdEmail, MdOutlineEmail } from 'react-icons/md';
  import Api from '../Api/Api'

  
  export default function Cta() {
    const { hasCopied, onCopy } = useClipboard('example@example.com');
    const [email, setEmail] = useState("");
	const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	const submitFeedback = async (e) => {
		e.preventDefault();
		setLoading(true);
		const input = {
      name:name,
			email: email,
			feedback: feedback,
		};
		try {
			const data = await Api("users/feedback/add", "POST", input);
			console.log(data);
			if (data.status) {
				setLoading(false);
				setMessage(data.message);
				return;
			}
			setLoading(false);
			setMessage(data.Message);
		} catch (error) {
			console.error(error);
		}
	};
  
    return (
      <>
      <Box w='100%' h='75vh'  display='flex' align='center !important' justifyContent='center !important' pb='1rem' >
                <Stack w={['75%','50%']}  m='auto' alignItems='center' justifyContent='center' spacing={6}>
                    <Text fontWeight='700' color='#000' fontSize='2rem'>Send a Message</Text>
                    <VStack alignItems='flex-start' w='full'>
                        <FormLabel color='#000'>Name</FormLabel>
                        <Input type='password' placeholder='' borderColor='#000' value=''  />
                    </VStack>
                    <VStack alignItems='flex-start' w='full'>
                        <FormLabel color='#000'>Email</FormLabel>
                        <Input type='email' placeholder='' borderColor='#000' value=''  />
                    </VStack>
                    <VStack alignItems='flex-start' w='full'>
                        <FormLabel color='#000'>Message</FormLabel>
                        <Textarea type='password' placeholder='' borderColor='#000' value=''  />
                    </VStack>
                    <Button color='#fff' w='100%' bg='green' borderRadius='8px' border='none' _hover={{ color:'#A03CAE', bg:'#fff', border:'1px solid #A03CAE' }} >Submit</Button>
                    
                </Stack>
        </Box>
      </>
      );
  }