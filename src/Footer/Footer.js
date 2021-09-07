import React from 'react'
import styled from 'styled-components'

const MainFooter = styled.footer`
    text-align: center;
    margin: 60px 0 10px 0;
    font-size: 0.8rem;
    a {
        color: #E56275;
    }
`

const Footer = () => {

    return (
        <MainFooter>
            <p>Obs.: este layout é apenas para fins didáticos | <a rel='noreferrer' target="_blank" href="https://github.com/andersonszdc">Andersonszdc</a> :)</p>
        </MainFooter>
    )
}

export default Footer
