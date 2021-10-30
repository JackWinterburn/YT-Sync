import { 
    IconButton, 
    Icon, 
    Slider, 
    SliderTrack, 
    SliderFilledTrack, 
    SliderThumb,
    HStack,
    Box
} from "@chakra-ui/react"
import { FaPlay } from "react-icons/fa"

export function Controls() {
    return (
        <HStack w="1280px">
            <IconButton aria-label="Play Video" icon={<Icon as={FaPlay} />} mr="3em"/>
            <Slider aria-label="slider-ex-1">
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb color="blue" boxSize={6}/>
            </Slider>
        </HStack>
    )
}