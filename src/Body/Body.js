import React from 'react'
import { BiPlay } from "react-icons/bi"
import { AiOutlineInfoCircle } from "react-icons/ai"
import styled from 'styled-components'

const UrlFilm = "https://occ-0-4906-420.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYrBv7onXUs7wdGSXnys3JMav_bnqDK4YCHGDxMQXkblsTQBTKNp7FHvdpqMIrfFInFoqFJnRxgyPjyiGBHExFGyZ_nW8rNUDdU4T_qeREkaSVNrBayeoqh7J-iye-ipsRPs_fml9oa3LVEYMxIQ7JYQHmrEJbjiaS11iOvClGWX.webp?r=cbf"

const Button1 = styled.button`
    display: flex;
    padding: 3px 20px;
    border-radius: 5px;
    border: 0px solid transparent;
    align-items: center;

    font-family: 'Netflix Sans Regular', sans-serif;
    font-weight: 700;
    font-size: 1.2vw;
    gap: 5px;
    margin-top: 2vw;
    cursor: pointer;

    .assistir {
        font-size: 3vw;
    }

    &:hover {
        background-color: rgba(255,255,255,0.75);
    }
`;

const Button2 = styled(Button1)`
    background-color: rgba(109, 109, 110, 0.7);
    color: white;
    margin-left: 12px;

    .info {
        font-size: 2vw;
    }

    &:hover {
        background-color: rgba(109,109,110,0.4);
    }
`

const Film = styled.img`
    margin-bottom: 45px;
    width: 100%;
`

const Title = styled.div`
    width: 45%;
    font-size: 1.4vw;
    font-family: 'Netflix Sans Regular', 
`

const Title2 = styled.h2`
    margin-top: 5vw;
    font-weight: 500;
    font-size: 1.8vw;
    font-family: 'Netflix Sans Medium',
`

const Body = () => {
    return (
        <div style={{padding: "0 4%"}}>
            <Title>
                <Film src={UrlFilm}></Film>
                <p>Um simples chef de San Francisco é o mais novo entre os inúmeros assassinos escolhidos para evitar que os poderes místicos de Wu caiam em mãos erradas.</p>
            </Title>
            <div style={{display: "flex"}}>
                <Button1>
                    <BiPlay className="assistir" /> <p>Assistir</p>
                </Button1>
                <Button2>
                    <AiOutlineInfoCircle className="info" />
                    <p>Mais informações</p>
                </Button2>
            </div>
            <Title2>
                Populares na Netflix
            </Title2>
        </div>
    )
}

export default Body
