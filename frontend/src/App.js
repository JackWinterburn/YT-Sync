import { Player } from "./Player"
import { Controls } from "./Controls"
import { VStack } from "@chakra-ui/react"

function App() {
  return (
    <VStack className="App" h="100vh">
      <Player />
      {/* <Controls /> */}
    </VStack>
  );
}

export default App;
