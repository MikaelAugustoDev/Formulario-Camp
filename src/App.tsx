import { createGlobalStyle } from "styled-components"
import { AppRoutes } from "./pages/routes"


function App() {

  return (

    <>

      <GlobalStyled/>

      <AppRoutes/>

    </>

  )
}

const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`

export default App