import React from 'react'
import styled from 'styled-components'

const CardSingle = styled.div`
    display: inline-flex;
    margin-right: 5px;

    .img {
        width: 250px;
        border-radius: 10px;
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
