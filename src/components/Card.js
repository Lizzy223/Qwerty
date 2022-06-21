import React from 'react'
import { Box,  Icon, Text, Stack, Flex, Grid } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';




  
  const Feature = ({ title, text, icon }) => {
    return (
      <Stack w='100%' >
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'gray.100'}
          mb={1}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={'#333.600'}>{text}</Text>
      </Stack>
    );
  };
  
  export default function Card() {
    return (
      <Box p={10} justifyContent='center' alignItems='center'>
        <Grid templateColumns={['repeat(2,1fr)','repeat(2,1fr)','repeat(3,1fr)']}  justifyContent='center' alignItems='center' spacing={5} gap={5}>
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'Job updates'}
            text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
          />
          <Feature
            icon={<Icon as={FcDonate} w={10} h={10} />}
            title={'Curricullum Vitae & Cover letter tips'}
            text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
          />
          <Feature
            icon={<Icon as={FcInTransit} w={10} h={10} />}
            title={'Job interview tips'}
            text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
          />
           <Feature
            icon={<Icon as={FcInTransit} w={10} h={10} />}
            title={'Free Courses'}
            text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
          />
        </Grid>
      </Box>
    );
  }
  