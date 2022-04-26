import * as React from 'react'
import {Stack, Box, StackDivider} from '@chakra-ui/react';
import Home from './components/Home'
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer';

function App() {
  return (
    <Stack>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/Home" element={<Home/>}></Route>
        <Route exact path="/Projects" element={<Projects/>}></Route>
        <Route exact path="/Contact" element={<Contact/>}></Route>
      </Routes>
      <Footer />
    </Stack>
    
    
  )
}

export default App;
