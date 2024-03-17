import { Text, Button, Container, Heading, Icon, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import './App.css'
import Carousel from './components/Carousel'


interface Image {
  id: number,
  src: string,
  link: string
}

function App() {
  const {colorMode, toggleColorMode} = useColorMode()
  const images = [
    {
      id: 1,
      src: "/1.png",
      link: "https://www.google.com"
    },
    {
      id: 2,
      src: "/2.png",
      link: "https://www.google.com"
    },
    {
      id: 3,
      src: "/3.png",
      link: "https://www.google.com"
    }


  ]  

  
  return (
    <>

      <header>
        <Button style={{top: 10, right: 10, position: "absolute"}} onClick={toggleColorMode} >
          <Icon as={colorMode === 'light' ? MoonIcon : SunIcon } />
        </Button>
      </header>
      <div>
        <Heading>Eetu Turtiainen</Heading>
        <p>Web Developer</p>
        <p>React / Typescript / NodeJS</p>
      
      </div>

      <div>
        <br />
        <Heading size="md">About me</Heading>

        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Mokkntes nascetur ridiculus mus mauris. Sit amet dictum sit amet. 
           Consequat id porta nibh venenatis. Porta nibh venenatis cras sed felis eget velit.
            Elit ullamcorper dignissim cras tincidunt lobortis. 
        </Text>
      </div>
      <Container>
        <br />
        <Heading size="md">Projects</Heading>
        <Text>Here are some of my projects</Text>
        <Carousel images={images} />
      </Container>


    </>
  )
}

export default App
