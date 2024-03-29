//Image carousel
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Image, Icon } from '@chakra-ui/react';
import {useState} from 'react';
import "../styles/Carousel.css"

const Carousel = ({images}) => {
    
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((activeIndex + 1) % images.length);

    }

    const handlePrev = () => {
        setActiveIndex((activeIndex - 1 + images.length) % images.length);

    }



  
  
    return (

        <Container style={{position: "relative"}}>
            <Button className='prevButton'
                    style={{    position: "absolute", 
                                left: -35,
                                height: "100%"

                            }} onClick={handlePrev}>
                                <Icon as={ArrowLeftIcon} />
                            </Button>
            <Box> 
                <Image 
                        style={{    borderRadius: "10px",
                                    height: "auto",
                                    objectFit: "cover"
                                }} 
                        
                        src={images[activeIndex].src} alt="carousel" />
            </Box>
            <Button className='nextButton'
                    onClick={handleNext}>
                                <Icon as={ArrowRightIcon} />
                            </Button>
            <a style={{position: "absolute", width: "100%", bottom: -30, left: 0}} href={images[activeIndex].link}>Open the project</a>

        </Container>
  )
}


export default Carousel