import { Button } from "@chakra-ui/react"
import { login } from '../services/login'

export const ButtonLogin = () => {
      return(
            <Button onClick={login} colorScheme='blue' size='sm' width='100%' p='25px' fontSize='30'>
                  Login
            </Button>
      )
}