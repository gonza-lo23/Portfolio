import { Image,Grid,Badge,Stack,Box,Text, StackDivider,HStack, GridItem, Button} from '@chakra-ui/react'
import * as React from 'react'
import { Link } from 'react-router-dom'
import Project from './Project'

function Body2() {

  const lo=(e,name)=>{
      e.preventDefault();
      window.open(`https://github.com/gonza-lo23/${name}`)
      
  }
  
  const projectos = [
    {id:'1',
    name:'qr-challenge',
    tipo:['html', 'css', 'grid'],
    img:'https://github.com/gonza-lo23/qr-challenge/blob/main/design/desktop-preview.jpg?raw=true',
    description:'Qr challenge from frontEnd mentor using css, grid,flex',
    
  },    
    {id:'2',
      name:'Projecto 2',
    tipo:['js', 'css', 'chakra'],
    img:"https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"},
    
    {id:'3',
      name:'Projecto 3',
    tipo:['js', 'css', 'chakra'],
    img:"https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
  },
    ]
  return (
    <Stack spacing={6}>
     <Grid 
      gridGap={6} 
      templateColumns='repeat(auto-fill,minmax(500px, 1fr))'>
      {projectos.map((data)=>{
      return(
        <Stack 
        key={data.id}
        bg='gray.200'
        borderRadius='md'
        borderColor='blackAlpha.700'
        borderWidth= '2px'
        padding={4}
        spacing={3}
        >
        <Stack spacing={1}>
        <Image 
        maxHeight={228}
        borderRadius='md' 
        src={data.img}
        objectFit='cover'
        />
        <Text fontSize='2xl'
        fontWeight='bolder'>{data.name}</Text>
        <HStack> 
          <Box alignItems='baseline'bg='yellow.200' borderRadius='sm' px='1' colorScheme='red'>
        {data.tipo[0]}
          </Box>           
          <Box alignItems='baseline' bg='red.200'borderRadius='sm' px='1' colorScheme='red'>
        {data.tipo[1]}
          </Box>  
          <Box alignItems='baseline' bg='blue.200'borderRadius='sm' px='1' colorScheme='red'>
        {data.tipo[2]}
          </Box>  
          </HStack>    
        </Stack>
        
        <Box borderRadius='sm' px='1' colorScheme='red'>
            {data.description}
            </Box> 
        <Button
        colorScheme="red.400"
        size='sm'
        textColor='blackAlpha.900'
        bg='orange.300'
        onClick={lo}
        >
         Show Project
        </Button>
        </Stack>
         
        )
})}
    
    </Grid>
    </Stack>
  )
}

export default Body2