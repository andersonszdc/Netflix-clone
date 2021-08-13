import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const CardsSingle = styled.div`
    display: inline-flex;
    overflow: hidden;
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
