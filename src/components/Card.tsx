import { Box, Center, Input } from "@chakra-ui/react"
import { ButtonLogin } from './Button'

export const Card = () => {
  return(
    <Box minHeight='100vh' bgColor='#441944'p='30px'>
      <Box bgColor='#c7b2e0' width='45vw' height='35vh' borderRadius='8px' p='15px' margin='auto'>
        <Center marginBottom='10px' fontSize='24px' fontWeight='500'>
          <h1>Entrar</h1>
        </Center>
        <Input placeholder="Email" mb='10px' type='email' borderColor='#555'/>
        <Input placeholder="Password" mb='8px' type='password' borderColor='#555'/>
        <Center>
          <ButtonLogin /> 
        </Center>
      </Box>
    </Box>
  )}