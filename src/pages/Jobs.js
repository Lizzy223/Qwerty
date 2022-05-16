import {React, useState} from 'react'

import Footer from './../components/Footer'
import {JobList, JobLists} from './../components/JobList'
import{ Stack, InputGroup, InputLeftElement, Input, Flex, Button } from '@chakra-ui/react'
// import icon1 from '../assets/images/icon1.svg'
// import icon2 from '../assets/images/icon2.svg'
//import icon3 from '../assets/images/icon3.svg'
import {GoLocation, GoSearch } from 'react-icons/go'

const Jobs = () => {
  const [search, setSearch] = useState("")
  return (
    <div>
        
        <Stack direction={['column', 'row']} mt={'3rem'} p={'1.5rem'} >
          <Flex flex={1} align={'center'} justify={'center'}>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                
                children={GoSearch}
              />
              <Input color='#ccc' placeholder='search' />
            </InputGroup>
          </Flex>
          <Flex flex={1} align={'center'} justify={'center'}>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                
                children={GoLocation}
              />
              <Input placeholder='state'  color='#ccc' onChange={ e=>{setSearch(e.target.JobTitleue)} }/>
            </InputGroup>
          </Flex>
          <Flex flex={1} align={'center'} justify={'center'}>
            {/* <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                
                children={GoSearch}
              />
              <Input placeholder='Enter amount' />
            </InputGroup> */}
            <Button p={'1rem'} color={'#fff'} bg={'green'} cursor={'pointer'} >Search</Button>
          </Flex>
        </Stack>
        {
          JobList.filter((JobTitle) => {
            if (search === ""){
              return JobTitle
            } else if (JobTitle.name.toLowerCase().includes(search.toLocaleLowerCase())){
              return JobTitle
            }
          }).map((JobTitle, key) =>{
            return(
              <JobLists {...JobTitle.JobList}/>
            );
          })
        }
        {/* <JobLists/> */}
        <Footer/>
    </div>
  )
}

export default Jobs