import { Box, 
    Container,
    GridItem,
    Stack,Text, Grid, Flex, HStack,StackDivider, VStack} from '@chakra-ui/react'
import React from 'react'
import Hero from '../components/Hero'
import Body2 from '../components/Body2'

function Home() {
 
  return (
    <Grid className='home.principal'
    bg='blue.100'>
      <GridItem rowSpan='1' 
      className='home.hero'
      width='100%'>
      <Hero/>
      </GridItem>
    <GridItem 
    rowSpan='2' 
    aling='center'
    className='home.text'
     h='50px'
     p='25'
     >
      <Text  
      align='center'
      bg='red.200'
      fontWeight='bolder'
      fontSize='4xl'
      letterSpacing='wide'
      >
      Last Projects
      </Text>
      </GridItem> 
      <GridItem
      rowSpan='2' 
      p='10'
      >
      <Body2/>
      </GridItem>   
      </Grid>
    
  )
}

export default Home