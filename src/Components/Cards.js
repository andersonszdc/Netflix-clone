import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const CardsSingle = styled.div`
    display: block;
    overflow: hidden;
    width: 1210px;
`;

const Cards = (props) => {
    return (
        <CardsSingle>
            <Card src={props.src}/>
            <Card src={props.src}/>
            <Card src={props.src}/>
            <Card src={props.src}/>
            <Card src={props.src}/>
        </CardsSingle>
    )
}

export default Cards
