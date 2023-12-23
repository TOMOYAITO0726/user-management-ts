import React from 'react';
import './App.css';
import { Button, ChakraProvider } from '@chakra-ui/react';

export default function App() {
  return (
    <ChakraProvider>
        <Button colorScheme='teal'>ボタン</Button>
    </ChakraProvider>
  );
}

