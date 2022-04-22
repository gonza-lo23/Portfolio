import React from 'react'
import  {Text, Image, Grid, VStack, Button, Box} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import Body2 from '../components/Body2'


function Hero() {
  return (
    <Grid
    placeItems="center"
    
    >
    <Image 
    src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
    borderRadius="full"
    alt=""/>
    <VStack padding={5}>
      <Text  fontWeight='bolder'fontSize='4xl'letterSpacing='wide'>Gonzalo Palacio</Text>
      <Text fontSize='2xl'>FrontEnd Developer with React </Text>
      
        <NavLink to={'/Contact'}>
        <Button bg='orange.300' >Let's Chat !!</Button>
        </NavLink>
    </VStack>
    </Grid>
  )
}

export default Hero