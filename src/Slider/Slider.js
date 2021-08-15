import React, { useRef } from 'react'
import styled from 'styled-components';
import Cards from '../Components/Cards'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import casaPapel from "../Assets/casa-de-papel.jpg"
import cobraKai from "../Assets/cobra-kai.jpg"
import lucifer from "../Assets/lucifer.jpg"
import narcos from "../Assets/narcos.jpg"

const Sliderzin = styled.div`
    display: inline-flex;
    overflow: hidden;
    transition: 0.8s ease-in-out;
`;

const Wrapper = styled.div`
    align-items: center;
    display: inline-flex;
    margin-top: 15px;
`

const ArrowForward = styled(IoIosArrowForward)`
    position: absolute;
    font-size: 3rem;
    right: 0px;
    align-self: center;
`

const ArrowBack = styled(IoIosArrowBack)`
    position: absolute;
    font-size: 3rem;
    left: 0px;
    align-self: center;
`

const Slider = () => {
    const slider = useRef()
    const [inicio, setInicio] = React.useState(0)

    function handleClick() {
        setInicio(inicio - 25)
        slider.current.style.transform = `translate(${inicio - 25}%)`
    }

    function handleClick2() {
        setInicio(inicio + 25)
        slider.current.style.transform = `translate(${inicio + 25}%)`
    }

    return (
        <Wrapper>
            <Sliderzin ref={slider}>
                <Cards src={casaPapel}/>
                <Cards src={cobraKai}/>
                <Cards src={lucifer}/>
                <Cards src={narcos}/>
            </Sliderzin>
            <ArrowBack onClick={handleClick2}/>
            <ArrowForward onClick={handleClick}/>
        </Wrapper>
    )
}

export default Slider