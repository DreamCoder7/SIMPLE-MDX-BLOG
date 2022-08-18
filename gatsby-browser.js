import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./src/themes/themes"

export default wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>{element}</ThemeProvider>
)
