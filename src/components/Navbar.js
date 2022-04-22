import * as React from 'react'
import { Box, Stack,Flex,Divider, Container,Icon,Grid, IconButton} from '@chakra-ui/react';
import {FaBars} from 'react-icons/fa'

import { NavLink} from "react-router-dom";
import { configure } from '@testing-library/react';
import Sidebar from './SideBar';

function Navbar() {
    const [loading, setLoading] = React.useState(true)
    
//     React.useEffect(()=>{ 
//     const cambiarModo = () =>{
//         if (loading == true){
//           config.initialColorMode == 'light'
//         }else{

//         }
//     }
// },[])
  return (
          <Grid w='100%'>
        <Stack 
        direction="row" 
        bg='blue.300' 
        fontWeight='semibold'  
        h='40px' spacing='20px'>
           {/* <IconButton as={<SideBar/>}/> */}
          
           
            
            {/* <Button onClick={cambiarModo}/> */}
       <NavLink to="/Home">
       <Box fontSize='3xl' 
       color='red.500'>Gonzalo Angel Palacio</Box>
       </NavLink>
       <Divider orientation='vertical' />
       <NavLink to="/Projects">
           <Box fontSize='2xl'>Projects</Box>
       </NavLink>
       <NavLink to="/Contact">
           <Box fontSize='2xl'>Contact</Box>
       </NavLink>
       </Stack>
       </Grid>
     
  )
}

export default Navbar