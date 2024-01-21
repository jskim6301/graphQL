import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./components/ColorModeSwitcher"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
        <ColorModeSwitcher justifySelf="flex-end" />
          <Text>
            Ghibli GraphQL
          </Text>

    </Box>
  </ChakraProvider>
)
