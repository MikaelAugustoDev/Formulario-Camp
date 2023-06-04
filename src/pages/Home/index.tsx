import styled from "styled-components"
import CarImg from "../../assets/side-image.jpg"
import LogoImg from "../../assets/logo.svg"
import ImgEntrar from "../../assets/log-in.svg"
import Eye from "../../assets/eye.svg"
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const HomeForm = () => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const [formulario, setFormulario] = useState({
        email: '',
        senha: ''
    });

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const [error, setError] = useState('');

    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (event: any) => {

        event.preventDefault();

        axios.post('https://apicadastromikael.onrender.com/login', formulario)
            .then(response => {
                console.log(response.data.msg);
                setLoggedIn(true);
                navigate("/home")
            })
            .catch(error => {
                console.error(error);
                setError(error.response.data.msg);
            });
    }

    if (loggedIn) {
        return null
    }

    return (

        <Main>

            <DivInfo>

                <DivLogo>
                    <img src={LogoImg} />
                </DivLogo>

                <DivForm>

                    <Formulario>

                        <Title><img src={ImgEntrar} />Faça seu login</Title>

                        <P>Entre com suas informações de cadastro.</P>

                        <Form onSubmit={handleSubmit}>

                            <Label htmlFor="email">E-mail</Label>

                            <Input
                                id="email"
                                type="email"
                                placeholder="Digite seu E-mail"
                                name="email"
                                value={formulario.email}
                                onChange={handleChange}
                            />

                            <Label htmlFor="senha">Senha</Label>

                            <PasswordInputContainer>
                                <PasswordInput
                                    id="senha"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Digite sua senha"
                                    name="senha"
                                    value={formulario.senha}
                                    onChange={handleChange}
                                />
                                <PasswordToggle type="button" onClick={handleShowPassword}>
                                    <img src={Eye} alt="Exibir senha" />
                                </PasswordToggle>
                            </PasswordInputContainer>

                            <Error>{error}</Error>

                            <Button type="submit">Entrar</Button>

                            <LinkCadastro>Não tem uma conta? <LinkEdit to="/cadastro">Registre-se</LinkEdit></LinkCadastro>

                        </Form>

                    </Formulario>

                </DivForm>

            </DivInfo>

            <ImageCar></ImageCar>

        </Main>

    )

}

const Error = styled.span`
    color: red; 
    font-size: 12px; 
    width: 90%;
    text-align: center;
`

const LinkEdit = styled(Link)`
    text-decoration: none;
    color: #ffc632;
    font-weight: bold;
`

const LinkCadastro = styled.p`
    color: #ffc632;
    font-size: 12px;
    text-align: center;
`

const Button = styled.button`
    width: 90%;
    height: 50px;
    background: #ffc632;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #24221f;

    :hover {
        cursor: pointer;
    }
`

const Input = styled.input`
    background: none;
    border: 1px solid #afb6c2;
    width: 90%;
    height: 40px;
    border-radius: 5px;
    padding: 10px;
    color: #afb6c2;
    margin-bottom: 20px;

    :focus {
        outline: none;
        border: 1px solid #ffc632;
    }
`

const PasswordInputContainer = styled.div`
    position: relative;
    width: 90%;
    height: 32px;
    margin-bottom: 20px;
`;

const PasswordInput = styled(Input)`
    width: 100%;
`;

const PasswordToggle = styled.button`
    position: absolute;
    top: 70%;
    right: 10px;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
`;



const Label = styled.label`
    color: #afb6c2;
`

const Form = styled.form`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
`

const P = styled.p`
    color: #d4ccb6;
    font-size: 14px;
    width: 100%;
`

const Title = styled.h2`
    display: flex;
    align-items: center;
    width: 100%;
    color:  #d4ccb6;
    gap: 10px;
`

const Formulario = styled.div`
    background: #24221f;
    width: 90%;
    height: 85%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 90px;
    gap: 15px;

    @media (max-width: 425px) {
        padding: 50px 20px;
        width: 100%;
    }
`

const DivForm = styled.div`
    width: 100%;
    min-height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const DivLogo = styled.div`
    width: 100%;
    height: 5%;

    @media (max-width: 768px) {
        margin-bottom: 30px;
    }
`

const DivInfo = styled.div`
    width: 50%;
    min-heigth: 90%;
    background: #191816;
    padding: 20px;

    @media (max-width: 1024px) {
        width: 70%;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`
const ImageCar = styled.div`
    width: 50%;
    heigth: 100%;
    background-image: url("${CarImg}");
    background-position: center;
    background-size: cover;

    @media (max-width: 768px) {
        display: none;
    }
`

const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
`

export { HomeForm }