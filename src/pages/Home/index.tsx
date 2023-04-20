import styled from "styled-components"
import CarImg from "../../assets/side-image.jpg"
import LogoImg from "../../assets/logo.svg"
import ImgEntrar from "../../assets/log-in.svg"
import Eye from "../../assets/eye.svg"
import { useState } from "react"
import { Link } from "react-router-dom"

const HomeForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

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

                        <Form>

                            <Label htmlFor="email">E-mail</Label>

                            <Input
                                id="email"
                                type="email"
                                placeholder="Digite seu E-mail"
                            />

                            <Label htmlFor="senha">Senha</Label>

                            <PasswordInputContainer>
                                <PasswordInput
                                    id="senha"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Digite sua senha"
                                />
                                <PasswordToggle type="button" onClick={handleShowPassword}>
                                    <img src={Eye} alt="Exibir senha" />
                                </PasswordToggle>
                            </PasswordInputContainer>

                            <DivInfoInput>

                                <Caixinha>

                                    <Check
                                        type="checkbox"
                                        id="checkbox"
                                    />
                                    
                                    <LabelCheck htmlFor="checkbox">Lembre-me</LabelCheck>

                                </Caixinha>

                                <Esqueceu>

                                    <A href="#">Esqueci minha senha</A>

                                </Esqueceu>

                            </DivInfoInput>

                            <Button>Entrar</Button>

                            <LinkCadastro>Não tem uma conta? <LinkEdit to="/cadastro">Registre-se</LinkEdit></LinkCadastro>

                        </Form>

                    </Formulario>

                </DivForm>

            </DivInfo>

            <ImageCar></ImageCar>

        </Main>

    )

}

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
    margin-bottom: 20px;
    color: #24221f;

    :hover {
        cursor: pointer;
    }
`

const A = styled.a`
    font-size: 12px;
    color: #ffc632;
    font-weight: bold;
    text-decoration: none;

    @media (max-width: 320px) {
        font-size: 10px;
    }
`

const LabelCheck = styled.label`
    color: #afb6c2;
    font-size: 12px;

    @media (max-width: 320px) {
        width: 100%;
    }

    @media (max-width: 320px) {
        font-size: 10px;
    }
`

const Check = styled.input`
    position: relative;
    appearance: none;
    -webkit-appearance: none;
    border: 1px solid #afb6c2;
    width: 15px;
    height: 15px;
    background-color: transparent;

    :checked {
        background: #ffc632;
    }

    ::before {
        content: '';
        position: absolute;
        top: 0px;
        left: 4px;
        width: 3px;
        height: 9px;
        border: solid #24221f;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        opacity: 0;
    }
    
    :checked::before {
        opacity: 1;
    }

    @media (max-width: 375px) {
        width: 20%;
    }
    
`

const Esqueceu = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 20px;

    @media (max-width: 375px) {
        width: 70%;
    }
`
const Caixinha = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
`

const DivInfoInput = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    margin-bottom: 10px;
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
    min-height: 95%;
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
    min-heigth: 100%;
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