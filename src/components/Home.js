import { Box, 
    Container,
    GridItem,
    Stack,Text, Grid, Flex, HStack,StackDivider, VStack} from '@chakra-ui/react'
import React from 'react'
import Hero from '../components/Hero'
import Body2 from '../components/Body2'

function Home() {
 
  return (
    <Grid 
    className='home.principal'
    bg='orange.100'>
      <GridItem 
      className='home.hero'
      width='100%'>
      <Hero/>
      </GridItem>
    <GridItem 
    className='home.text'
    aling='center'
     h='50px'
     p='25'
     >
      <Text  
      align='center'
      bg='red.400'
      fontWeight='bolder'
      fontSize='4xl'
      letterSpacing='wide'
      p='-1'
      >
      Lastest Projects
      </Text>
      </GridItem> 
      <GridItem
      p='10'
      >
      <Body2/>
      </GridItem>  
      <GridItem 
    className='home.text'
    aling='center'
     h='50px'
     >
      <Text  
      align='center'
      bg='white'
      fontWeight='bolder'
      fontSize='4xl'
      letterSpacing='wide'
      >
      oloolookojkij
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