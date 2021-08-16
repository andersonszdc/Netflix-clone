import React, { useState } from 'react'
import styled from 'styled-components'
import { GoPlay } from 'react-icons/go'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BiLike, BiDislike } from 'react-icons/bi'
import { IoIosArrowDropdown } from 'react-icons/io'

const CardSingle = styled.div`
    display: inline-flex;
    flex-direction: column;
    padding: 0 2px;
    width: 20%;
    transition: 0.2s ease-in-out;
    border-radius: 4px;
    &:hover {
        transform: scale(1.4);
        box-shadow: rgb(0 0 0 / 75%) 0px 3px 10px;
    } 
    .img {
        width: 100%;
        border-radius: 4px;
    }

    @media(max-width: 1100px) {
        width: 25%;
    }

    @media(max-width: 800px) {
        width: 33%
    }
`;

const Buttons = styled.div`
    heigth: 50px;
    background-clor: white;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin: 10px 15px 0 15px;
    .icones {
        display: flex;
        gap: 5px;
    }
`

const Descriptions = styled.div`
    font-size: 10px;
    margin: 0 15px 15px 15px;
    .onePart {
        display: flex;
        gap: 10px;
        margin: 10px 0;
    }
    .ninentyEight {
        color: #3BA856;
    }
`

const Card = (props) => {

    const [HoverCard, SetHoverCard] = useState(false)

    return (
        <CardSingle onMouseOver={() => SetHoverCard(true) } onMouseLeave={() => SetHoverCard(false)}>
            <img className="img" src={props.src} alt="la casa de papel" />
            { HoverCard ?
            <div>
                <Buttons>
                    <div className="icones">
                        <GoPlay />
                        <AiOutlineCheckCircle />
                        <BiLike />
                        <BiDislike />
                    </div>
                    <IoIosArrowDropdown />
                </Buttons>
                <Descriptions>
                    <div className="onePart">
                        <p className="ninentyEight">98% relevante</p>
                        <p>2 Temporadas</p>
                    </div>
                    <div>
                        <p>Suspense no ar | Empolgantes | Assalto</p>
                    </div>
                </Descriptions>
            </div>
            : null }
        </CardSingle>
    )
}

export default Card
