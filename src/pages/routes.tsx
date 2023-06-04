import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeForm } from "./Home"
import { FormCadastro } from "./Cadastro"
import { Home } from "./Inicio"


const AppRoutes = () => {

    return (

        <BrowserRouter>
        
            <Routes>

                <Route path="/" element={ <HomeForm/> }/>

                <Route path="/cadastro" element={ <FormCadastro/> }/>

                <Route path="/home" element={ <Home/> }/>

            </Routes>

        </BrowserRouter>

    )

}

export { AppRoutes }