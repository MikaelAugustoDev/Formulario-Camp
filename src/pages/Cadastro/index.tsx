import styled from "styled-components"
import CarImg from "../../assets/side-image.jpg"
import LogoImg from "../../assets/logo.svg"
import ImgEntrar from "../../assets/log-in.svg"
import Eye from "../../assets/eye.svg"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const FormCadastro = () => {

    let navigate = useNavigate();

    const [formulario, setFormulario] = useState({
        email: '',
        senha: ''
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const [isInputValid, setIsInputValid] = useState(false);
    const [nomeValue, setNomeValue] = useState("");
    const [nomeError, setNomeError] = useState("");

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const handleInputBlur = (inputValue: any, inputErrorSetter: any, regex: any) => {
        if (!regex.test(inputValue)) {
            inputErrorSetter("Por favor, insira um nome válido");
            setIsInputValid(false);
        } else {
            inputErrorSetter("");
            setIsInputValid(true);
        }
    };

    const handleInputChange = (event: any) => {
        setNomeValue(event.target.value);
    };


    const [emailValue, setEmailValue] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleInputBlurEmail = (inputValue: any, inputErrorSetter: any, regex: any) => {
        if (!regex.test(inputValue)) {
            inputErrorSetter("Por favor, insira um email válido");
            setIsInputValid(false);
        } else {
            inputErrorSetter("");
            setIsInputValid(true);
        }
    };

    const handleInputChangeEmail = (event: any) => {
        setEmailValue(event.target.value);
    };

    const [senhaValue, setSenhaValue] = useState("");
    const [senhaError, setSenhaError] = useState("");

    const handleInputBlurSenha = (inputValue: any, inputErrorSetter: any, regex: any) => {
        if (!regex.test(inputValue)) {
            inputErrorSetter("A senha deve conter 8 dígitos, letra maiúscula, minúscula e número");
            setIsInputValid(false);
        } else {
            inputErrorSetter("");
            setIsInputValid(true);
        }
    };

    const handleInputChangeSenha = (event: any) => {
        setSenhaValue(event.target.value);
    };

    const handleSubmit = (event: any) => {

        event.preventDefault();

        const regexNome = /^[A-Za-z\s]+$/;
        const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
        const regexSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

        handleInputBlur(nomeValue, setNomeError, regexNome);
        handleInputBlur(emailValue, setEmailError, regexEmail);
        handleInputBlur(senhaValue, setSenhaError, regexSenha);

        setIsFormValid(isInputValid && nomeError === "" && emailError === "" && senhaError === "" && nomeValue !== "" && emailValue !== "" && senhaValue !== "")
        if (isFormValid) {

            axios.post('https://apicadastromikael.onrender.com/cadastro', formulario)
                .then(response => {
                    console.log('POST bem-sucedido!');
                })
                .catch(error => {
                    console.error('Ocorreu um erro durante o POST:', error);
                });

            setNomeValue("");
            setNomeError("");
            setEmailValue("");
            setEmailError("");
            setSenhaValue("");
            setSenhaError("");
            navigate('/');
        }
    };

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        setIsFormValid(isInputValid && nomeError === "" && emailError === "" && senhaError === "" && nomeValue !== "" && emailValue !== "" && senhaValue !== "");
    }, [isInputValid, nomeError, emailError, senhaError, nomeValue, emailValue, senhaValue]);

    return (

        <Main>

            <DivInfo>

                <DivLogo>
                    <img src={LogoImg} />
                </DivLogo>

                <DivForm>

                    <Formulario>

                        <Title><img src={ImgEntrar} />Faça seu cadastro</Title>

                        <Form onSubmit={handleSubmit}>

                            <Label htmlFor="nome">Nome</Label>

                            <Input
                                id="nome"
                                type="text"
                                placeholder="Digite seu nome"
                                value={nomeValue}
                                onChange={handleInputChange}
                                onBlur={() => handleInputBlur(nomeValue, setNomeError, /^[A-Za-z\s]+$/)}
                                style={{ border: nomeError ? "1px solid red" : "1px solid" }}
                            />

                            {nomeError && <Error>{nomeError}</Error>}

                            <Label htmlFor="email">E-mail</Label>

                            <Input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Digite seu E-mail"
                                value={formulario.email}
                                onChange={(event) => {
                                    handleInputChangeEmail(event);
                                    handleChange(event);
                                }
                                }
                                onBlur={() => handleInputBlurEmail(emailValue, setEmailError, /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/)}
                                style={{ border: emailError ? "1px solid red" : "1px solid" }}
                            />
                            {emailError && <Error>{emailError}</Error>}

                            <Label htmlFor="senha">Senha</Label>

                            <PasswordInputContainer>
                                <PasswordInput
                                    id="senha"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Digite sua senha"
                                    name="senha"
                                    value={formulario.senha}
                                    onChange={(event) => {
                                        handleInputChangeSenha(event);
                                        handleChange(event);
                                    }
                                    }
                                    onBlur={() => handleInputBlurSenha(senhaValue, setSenhaError, /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)}
                                    style={{ border: senhaError ? "1px solid red" : "1px solid" }}
                                />
                                {senhaError && <Error>{senhaError}</Error>}

                                <PasswordToggle type="button" onClick={handleShowPassword}>
                                    <img src={Eye} alt="Exibir senha" />
                                </PasswordToggle>
                            </PasswordInputContainer>

                            <Button
                                type="submit"
                                onClick={handleSubmit}
                            >Cadastrar</Button>

                            <LinkCadastro>Já tem uma conta? <LinkEdit to="/">Conectar-se</LinkEdit></LinkCadastro>

                        </Form>

                    </Formulario>

                </DivForm>

            </DivInfo>

            <ImageCar></ImageCar>

        </Main>

    )

}

const Error = styled.div`
    color: red; 
    font-size: 12px; 
    margin-top: -20px;
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
    margin-top: 15px;
    margin-bottom: 20px;
    color: #24221f;

    :hover {
        cursor: pointer;
    }

    @media (max-width: 320px) {
        width: 100%;
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

    @media (max-width: 320px) {
        width: 100%;
    }
`

const PasswordInputContainer = styled.div`
    position: relative;
    width: 90%;
    height: 32px;
    margin-bottom: 30px;

    @media (max-width: 320px) {
        width: 100%;
    }
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
    min-height: 300px;
    display: flex;
    flex-direction: column;
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
    height: 500px;
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

    @media (max-width: 320px) {
        padding: 30px 10px;
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

export { FormCadastro }