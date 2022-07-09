import React from 'react'
import {Box, Text,} from '@chakra-ui/react'

const DashboardHomepage = () => {
  return (
    <Box >
        <Text>Welcome AB,</Text>
        <Box mt='1rem' display='flex' justifyContent='center' alignItems='center'>
            <Box p='2rem' borderRadius='8px' boxShadow='md'  display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                <Text fontWeight='500' fontSize='1.5rem'>Total no of Jobs applied:</Text>
                <Text fontWeight='500' fontSize='1.5rem'>0</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default DashboardHomepage