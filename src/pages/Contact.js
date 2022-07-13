import React from 'react'
//import Nav from './../components/Nav';
import Cta from './../components/Cta'
import {Box, Text} from '@chakra-ui/react'


const Contact = () => {
  return (
    <Box w='full' h='100vh' >
        <Box bg='black !important' h={['25vh','25vh','35vh']} w='full' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
				<Text fontWeight='700' color='#fff' fontSize='2rem' >Contact Us</Text><br/>
                <Text fontWeight='700' color='#fff' fontSize='1.5rem' >Qwerty Inc</Text>
			</Box>
      <Box h={['75vh','75vh','65vh']}>
        <Cta/>
      </Box>
    </Box>
  )
}

export default Contact