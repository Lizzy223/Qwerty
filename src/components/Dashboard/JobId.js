import { Box, Stack,HStack,Spacer, Text} from '@chakra-ui/react'

const JobId=()=>{
    return(
        
        <Box w='full' h='100vh' >
			<Box bg='black !important' h={['25vh','25vh','35vh']} w='full' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
				<Text fontWeight='700' color='#fff' fontSize='2rem' >Fontend Developer</Text><br/>
                <Text fontWeight='700' color='#fff' fontSize='1.5rem' >Qwerty Inc</Text>
			</Box>
			<Stack mt='1rem' p='2rem'>   
                <HStack mb='1rem'>
                    <Text fontWeight='500' fontSize='1rem' >Lagos, Mainland</Text>
                    <Spacer/>
                    <Text fontWeight='500' fontSize='1rem'>N200,000 monthly</Text>
                </HStack>             
                <Text  fontWeight='500' fontSize='1rem' lineHeight='2rem'>
                    We are looking for a frontend develpoer with html, css, react and typescript stack who is willing to work remotely and delivers on time.
                    The perks of the job are access to health care, well paid jobs and 25days yearly leave. Resume should be sent to the email below with job title
                     as title.
                     &nbsp;<a mail-to='mail@harmonic.com' href='mail@harmonic.com'>mail@harmonic.com</a>
                </Text>
                <Text>Application Link: </Text>
			</Stack>
		</Box>
       
    )
}

export default  JobId;