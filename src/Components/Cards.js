import React, { useEffect, useState } from 'react'
import Card from './Card'
import styled from 'styled-components'
import { LIST_GET } from '../Api';

const CardsSingle = styled.div`
    display: block;
    overflow: visible;
`;

const Cards = () => {

    const baseUrl = 'https://image.tmdb.org/t/p/'
    const fileSize = 'w342'
    const [image, setImage] = useState([]);

    useEffect(() => {
        const {url} = LIST_GET();
        fetch(url)
        .then(response => response.json())
        .then(dados => setImage(dados.results))
    }, [])

    const cardsJsx = [];

    image.forEach(film => {
        cardsJsx.push(
        <Card key={film.id} src={baseUrl + fileSize + film.poster_path} />
        )
    })

    return (
        <CardsSingle>
            {cardsJsx}
        </CardsSingle>
    )
}

export default Cards
