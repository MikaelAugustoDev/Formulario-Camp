import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeForm } from "./Home"
import { FormCadastro } from "./Cadastro"


const AppRoutes = () => {

    return (

        <BrowserRouter>
        
            <Routes>

                <Route path="/" element={ <HomeForm/> }/>

                <Route path="/cadastro" element={ <FormCadastro/> }/>

            </Routes>

        </BrowserRouter>

    )

}

export { AppRoutes }