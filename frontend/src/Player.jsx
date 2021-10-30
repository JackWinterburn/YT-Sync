import { useState } from "react"
import YouTube from 'react-youtube'
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
import { FaPlay, FaPause } from "react-icons/fa"

export function Player() {
    const [isPlaying, setIsPlaying] = useState(false)
    const playerOptions = {
        height: '780',
        width: '1280',

        // https://developers.google.com/youtube/player_parameters
        playerVars: {
          autoplay: 1,
          rel: 0,
          controls: 0,
          disablekb: 1,
        }
    };


    function onReady(e) {
        
    }

    function manageState(data) {
        if(data === 1 || data === 0) {setIsPlaying(true)}
        if(data === -1 || data === 2){setIsPlaying(false)}
    }

    return (
        <div>
            <YouTube 
                videoId="ZExYbUQ4R8c" 
                opts={playerOptions} 
                onReady={onReady}
                onStateChange={(e) => manageState(e.data)}
            />

            <HStack w="1280px" mt="1em">
                {
                    isPlaying ? 
                    <IconButton aria-label="Pause Video" icon={<Icon as={FaPause} />} mr="3em"/>
                    :
                    <IconButton aria-label="Play Video" icon={<Icon as={FaPlay} />} mr="3em"/>
                }
                <Slider aria-label="slider-ex-1">
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb color="blue" boxSize={6}/>
                </Slider>
            </HStack>   
        </div>
    )
}
