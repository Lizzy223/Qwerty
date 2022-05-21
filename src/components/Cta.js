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
      <Flex
        bg={useColorModeValue('green.100', 'green.900')}
        align="center"
        justify="center"
        id="contact">
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}>
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Heading
                fontSize={{
                  base: '4xl',
                  md: '5xl',
                }}>
                Get in Touch
              </Heading>
              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack
                  align="center"
                  justify="space-around"m b        
                  direction={{ base: 'row', md: 'column' }}>
                  <Tooltip
                    label={hasCopied ? 'Email Copied!' : 'Copy Email'}  closeOnClick={false} hasArrow>
                    <IconButton aria-label="email" variant="ghost" size="lg"  fontSize="3xl" icon={<MdEmail />}
                     _hover={{ bg: 'green', color: useColorModeValue('white', 'green.700'), }} onClick={onCopy} isRound />
                  </Tooltip>
  
                    
                  <Link href="https://twitter.com/QwertyInc3?s=20">
                    <IconButton
                      aria-label="twitter"
                      variant="ghost"
                      size="lg"
                      icon={<BsTwitter size="28px" />}
                      _hover={{
                        bg: 'green',
                        color: useColorModeValue('white', 'green.700'),
                      }}
                      isRound
                    />
                  </Link>
  
                  <Link href="#">
                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      icon={<BsLinkedin size="28px" />}
                      _hover={{
                        bg: 'green',
                        color: useColorModeValue('white', 'green.700'),
                      }}
                      isRound
                    />
                  </Link>
                </Stack>
  
                <Box
                  bg={useColorModeValue('white', 'green.700')}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue('green.700', 'whiteAlpha.900')}
                  shadow="base">
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>
  
                      <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Input type="text" name="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                      </InputGroup>
                    </FormControl>
  
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
  
                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your Email"
                        />
                      </InputGroup>
                    </FormControl>
  
                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>
  
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        resize="none"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                      />
                    </FormControl>
  
                    <Button
                      colorScheme="green"
                      bg="green.400"
                      color="white"
                      _hover={{
                        bg: 'green',
                      }}
                      onClick ={(e) =>submitFeedback(e) }
                      isFullWidth>
                      {loading ? <CircularProgress/> :'Send Message'}
                    </Button>
                    <Text>{message}</Text>
                  </VStack>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
    );
  }