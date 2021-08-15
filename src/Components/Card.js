import React from 'react'
import styled from 'styled-components'

const CardSingle = styled.div`
    display: inline-flex;
    padding: 0 2px;
    width: 20%;

    
    .img {
        width: 100%;
        border-radius: 4px;
    }
`;

const Card = (props) => {
    return (
        <CardSingle>
            <img className="img" src={props.src} alt="la casa de papel" />
        </CardSingle>
    )
}

export default Card
