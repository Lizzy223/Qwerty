/* eslint-disable react/style-prop-object */
// eslint-disable-next-line 

import React from 'react'
import {
    Button,
    Heading,
    Stack,
    Box,
    Text,
    Grid,
  } from '@chakra-ui/react';
  
import Card from './../components/Card'
import Cta from './../components/Cta'
import Job from './../components/JobSection'
import { Link } from 'react-router-dom'


const Index = () => {
  return (
    <div>
      <Stack h={['50vh','50vh','100vh']}  m='auto' w='full' spacing={4} justifyContent='center' alignItems='center'>
        <Heading textTransform='capitalize' fontSize={['2rem','2rem','3rem']} textAlign='center' w='75%'>
           Find the <Text as='span' color='green'>Perfect Job</Text><br/>you deserve.
        </Heading>
        <Text textAlign='center' mt='1rem'  textOverflow=''>
        The job board is an exclusively for fresh graduates and job seekers. <Text as='br' display={['none','block','block']}/>
        We give interview tips and CV review to ensure you get that dream job.            
        </Text>
        <Button
            rounded={'full'}
            bg={'green'}
            color={'white'}
            w={['50%','50%','25%']}
            float={['left','none']}
            padding={['1rem','.2rem','1rem .75rem']}
            fontSize={['.75em','']}
            _hover={{
              bg: 'white',
              color:'green',
              border: '1px solid green'
            }}>
            <Link to='/register'>Get Started</Link>
          </Button>
          <Box w='100%' display={['none','block','block']}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="green" fill-opacity="1" d="M0,0L60,0C120,0,240,0,360,26.7C480,53,600,107,720,144C840,181,960,203,1080,192C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
          </Box>
      </Stack>
        {/* Job update */}

        

        {/* section */}
        <Grid spacing={4} mt='1rem' h='75vh'>
          <Text textTransform='capitalize' textAlign='center' color='black' fontWeight='600' fontSize={['2rem','2rem','3rem']} >One platform <br/> <br/> many <Text as='span' color='green'>solutions</Text>.</Text>
          <Card/>
        </Grid>
        <Box mt={['3rem','none']}  mb={['1rem','1rem']} h='100vh !important'>
          <Job/>
        </Box>
        <Box h='100vh'>
          <Cta/>
        </Box>
        
        


    {/* end of section */}

   
    </div>
  )
}

export default Index