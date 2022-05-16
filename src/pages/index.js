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
    useBreakpointValue,
  } from '@chakra-ui/react';
  
import Card from './../components/Card'
import Cta from './../components/Cta'
import Job from './../components/Job'
import Footer from './../components/Footer'
//import img from '../assets/images/about-fullscreen-1-1920x700.jpg'
import img1 from "../assets/images/line-dec.png"
//import Carousel from './../components/Carousel'
import img from '../assets/images/img3.svg'
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'


const Index = () => {
  return (
    <div>
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={2} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={3} w={'full'} maxW={'lg'}>
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
              {/* <br />{' '} */}
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
                _hover={{
                  bg: 'green.500',
                }}>
                <Link to='/login'>Get Started</Link>
              </Button>
              <Button rounded={'full'}>How It Works</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image src={img} alt='' layout='full' />
        </Flex>
      </Stack>
        {/* <div className="main-banner" id="top">
                <video autoPlay muted loop id="bg-video">
                    <source src={img2} type="video/mp4" />
                </video>

                <div className="video-overlay header-text">
                    <div className="caption">
                        <h6>Fresh Graduates and Job Seekers</h6>
                        <h2>Find the perfect <em>Job</em></h2>
                        <div className="main-button">
                            <a href="contact.html">Contact Us</a>
                        </div>
                    </div>
                </div>
        </div> */}

        {/* Job update */}

        <Job/>

        {/* section */}
        <section className="section" id="trainers">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-heading">
                            <h2>What <em>We</em> Do</h2>
                            <img src={img1} alt=""/>
                            <p>Get legitimate and latest job opportnities without futher stress.</p>
                        </div>
                    </div>
                </div>
               
                <Card/>

            </div>
        </section>
        <Cta/>
        <Dashboard/>
        <Footer/>


    {/* end of section */}

   
    </div>
  )
}

export default Index