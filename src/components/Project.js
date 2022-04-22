import {Box,Grid, Image,Badge, HStack, Container} from "@chakra-ui/react"
import {NavLink} from "react-router-dom"

const Project = (props) =>{
    const property = {
        img1:'ksdf',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city  Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
      }
    return(
    <Container>
    <NavLink to={'/Contact'}>
    <Box
    borderWidth='1px'
    alignItems='center'
    padding={5}
    color='black'
    fontWeight='semibold'
    fontSize='2xl'
     w="full"
     h="100px"
    backgroundColor={props.bgg}
    >{props.text}
     <Image
     borderWidth='1px'
    boxSize="300px"
    borderRadius="full"
    src={props.img}
    />
       <Box p='6' borderWidth='1px' backgroundColor={props.bgg}>
        <HStack spacing={1}display='flex' alignItems='baseline' >
        <Badge borderRadius='full' px='2' colorScheme='teal'>
            React
          </Badge>
          <Badge borderRadius='full' px='2' colorScheme='red'>
            Chakra
          </Badge>
          <Badge borderRadius='full' px='2' colorScheme='purple'>
            Node
          </Badge>
         
        </HStack>
       
        </Box>
        <Box
        borderWidth='1px'
        backgroundColor={props.bgg}
        alignItems='center'
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {property.title}
        </Box>
        <Box>
          {props.descripcion}
        </Box>
          </Box>
          </NavLink>
          </Container>
   ) 
}

export default Project;