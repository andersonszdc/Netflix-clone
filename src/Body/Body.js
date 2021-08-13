import React from 'react'
import { IoMdArrowDropright } from "react-icons/io"
import { AiOutlineInfoCircle } from "react-icons/ai"
import styled from 'styled-components'

const Button1 = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    border: 0px solid transparent;

    font-family: 'Netflix Sans Regular', sans-serif;
    font-weight: 500;
    font-size: 16px;

    margin-top: 20px;
`;

const Button2 = styled(Button1)`
    background-color: rgba(109, 109, 110, 0.7);
    color: white;
    margin-left: 12px;
`

const Title = styled.div`
    font-weight: 500;
    margin-top: 200px;
    margin-bottom: 50px;
    font-size: 2rem;
`

const Description = styled.p`
    width: 40vw;
    font-size: 19px;
    font-family: 'Netflix Sans Regular', 
`

const Title2 = styled.h2`
    margin-top: 100px;
    font-weight: 500;
    font-size: 19px;
    font-family: 'Netflix Sans Medium',
`

const Body = () => {
    return (
        <div>
            <Title>Título</Title>
            <Description>Um simples chef de San Francisco é o mais novo entre os inúmeros assassinos escolhidos para evitar que os poderes místicos de Wu caiam em mãos erradas.</Description>
            <div>
                <Button1>
                    <IoMdArrowDropright />Assistir
                </Button1>
                <Button2>
                    <AiOutlineInfoCircle />Mais informações
                </Button2>
            </div>
            <Title2>
                Populares na Netflix
            </Title2>
        </div>
    )
}

export default Body
