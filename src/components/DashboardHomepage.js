import React from 'react'
import {Box, Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'

const DashboardHomepage = () => {
  return (
    <Box w='full'>
       
            <Tabs isFitted  variant='unstyled'>
                <TabList>
                    <Tab _focus={{outline:'none', border:'none'}} _selected={{ color: 'white', bg: 'green', border:'none' }}>Jobs</Tab>
                    <Tab _focus={{outline:'none', border:'none'}} _selected={{ color: 'white', bg: 'green', border:'none' }}>Interview Tips</Tab>
                    <Tab _focus={{outline:'none', border:'none'}} _selected={{ color: 'white', bg: 'green' , border:'none'}}>CV Review</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                    <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
       
    </Box>
  )
}

export default DashboardHomepage