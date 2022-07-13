import React from 'react'
import { Box, Text,Grid } from '@chakra-ui/react';

const Details = [
  {
      id:1, 
      content:'50 Jobs ',
      header:'Marketing and sales',
  },
  {
      id:2, 
      content:'50 Jobs ',
      header:'Information and Technology',
  },
  {
      id:3, 
      content:'50 Jobs ',
      header:'Engineering',
  },
  {
      id:4, 
      content:'50 Jobs ',
      header:'Customer Care',
  },
  {
    id:5, 
    content:'50 Jobs ',
    header:'Human Resource and management',
  },
{
  id:6, 
  content:'50 Jobs ',
  header:'Product Management',
},
{
  id:7, 
  content:'50 Jobs ',
  header:'Human Resource and management',
},
{
id:8, 
content:'50 Jobs ',
header:'Product Management',
},
]
  
  const Feature = ({ header, content}) => {
    return (
      <Box w='full'  boxShadow='base' p='6' rounded='lg' bg='white' cursor='pointer' minH='8rem' alignItems='center' justifyContent='center' transistion='1s easein' _hover={{color:'#fff !important',bg:'green.100'}} >
        <Text fontWeight='600' fontSize={['1rem','1.3rem' ]}textAlign='center'>{header}</Text>
        <Text textAlign='center'>{content}</Text>
      </Box>
    );
  };
  
  export default function Card() {
    return (
      <Box p={10} justifyContent='center' alignItems='center'>
        <Grid templateColumns={['repeat(2,1fr)','repeat(2,1fr)','repeat(4,1fr)']}  justifyContent='center' alignItems='center' spacing={5} gap={5}>
            {Details.map((Detail) =>
            <Feature key={Detail.id} header={Detail.header} content={Detail.content} />
            )}
        </Grid>
      </Box>
    );
  }
  