/* eslint-disable react/style-prop-object */
// eslint-disable-next-line 

import React from 'react'
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Center,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
import Card from './../components/Card'
import Cta from './../components/Cta'
import Nav from './../components/Nav'
import Job from './../components/JobSection'
import Footer from './../components/Footer'
import img from '../assets/images/img3.svg'
import { Link } from 'react-router-dom'


const Index = () => {
  return (
    <div>
        <Nav/>
        <Stack minH={['50vh','5vh','100vh']} direction={{ base: 'column', md: 'row' }}>
        <Flex p={2} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={3} w={'full'} maxW={'lg'} mt={['1rem','none','none']}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'green',
                  zIndex: -1,
                }}>
                Find the 
              </Text>
              <Text color={'green'} as={'span'}>
              &nbsp;  Perfect Job
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              The job board is an exclusively for fresh graduates and job seekers. We give interview tips and CV review to ensure you get that dream job.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'green'}
                color={'white'}
                w={['50%','100%','100%']}
                h={['50%','100%','100%']}
                float={['left','none']}
                padding={['.75rem','none']}
                fontSize={['.75em','']}
                _hover={{
                  bg: 'green.500',
                }}>
                <Link to='/register'>Get Started</Link>
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Center>
            <Image src={img} alt='' w={['75%','100%','100%']} h={['75%','100%','100%']} mt={['1rem','0rem','0']} layout='full' />
          </Center>
        </Flex>
      </Stack>

        {/* Job update */}

        

        {/* section */}
        <section className="section" id="trainers">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-heading">
                            <h2>What <em>We</em> Do</h2>
                            <p>Get legitimate and latest job opportnities without futher stress.</p>
                        </div>
                    </div>
                </div>
               
                <Card/>

            </div>
        </section>
        <Job/>
        <Cta/>
        <Footer/>


    {/* end of section */}

   
    </div>
  )
}

export default Index