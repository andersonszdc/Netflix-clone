import React from 'react'
import { IoMdArrowDropright } from "react-icons/io"
import { AiOutlineInfoCircle } from "react-icons/ai"
import styled from 'styled-components'

const UrlTitle = "https://occ-0-4906-420.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYrBv7onXUs7wdGSXnys3JMav_bnqDK4YCHGDxMQXkblsTQBTKNp7FHvdpqMIrfFInFoqFJnRxgyPjyiGBHExFGyZ_nW8rNUDdU4T_qeREkaSVNrBayeoqh7J-iye-ipsRPs_fml9oa3LVEYMxIQ7JYQHmrEJbjiaS11iOvClGWX.webp?r=cbf"

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

const Title = styled.img`
    margin-bottom: 45px;
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
        <div style={{padding: "0 4%"}}>
            <Title src={UrlTitle}></Title>
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
