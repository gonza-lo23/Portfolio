import { Image,Grid,Badge,Stack,Box,Text, StackDivider, GridItem, Button} from '@chakra-ui/react'
import * as React from 'react'
import { Link } from 'react-router-dom'
import Project from './Project'

function Body2() {

  const lo=(e)=>{
      e.preventDefault();
      window.open('https://github.com/gonza-lo23?tab=repositories')
      
  }
  
  const projectos = [
    {id:'1',
    name:'Projecto 1',
    tipo:'js, css, chakra',
    img:"https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"},
    
    {id:'2',
      name:'Projecto 2',
    tipo:'js, css, chakra',
    img:"https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"},
    
    {id:'3',
      name:'Projecto 3',
    tipo:'js, css, chakra',
    img:"https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
  },
    ]
  return (
    <Stack spacing={6}>
     <Grid gridGap={6} templateColumns='repeat(auto-fill,minmax(250px, 1fr))'>
      {projectos.map((data)=>{
      return(
        <Stack 
        key={data.id}
        bg='gray.100'
        borderRadius='md'
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
        fontWeight= 'bolder'bgg='blue.400'>{data.name}</Text>
        <Badge borderRadius='sm' px='1' colorScheme='red'>
        {data.tipo}
          </Badge>       
        </Stack>
        <Button
        colorScheme="red.400"
        size='sm'
        variant='outline'
        bg='blue.200'
        onClick={lo}
        >
         Mostrar Projecto
        </Button>
        </Stack>
         
        )
})}
    
    </Grid>
    </Stack>
  )
}

export default Body2