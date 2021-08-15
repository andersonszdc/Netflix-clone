import React, { useEffect, useRef } from 'react'
import styled, { keyframes, css } from 'styled-components';
import Cards from '../Components/Cards'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import casaPapel from "../Assets/casa-de-papel.jpg"
import cobraKai from "../Assets/cobra-kai.jpg"
import lucifer from "../Assets/lucifer.jpg"
import narcos from "../Assets/narcos.jpg"

const sliderzadaForward = (props) => keyframes`
from {
    transform: translate(${props.inicial}px)
}
to {
    transform: translate(${props.final}px)
}
`;

const sliderzadaBack = (props) => keyframes`
from {
    transform: translate(${props.final - 1275}px)
}
to {
    transform: translate(${props.inicial - 1275}px)
}
`;

const animationForward = (props) => css`
    animation: ${sliderzadaForward} 0.8s ease-in-out;
`;

const animationBack = (props) => css`
    animation: ${sliderzadaBack} 0.8s ease-in-out;
`;

const Sliderzin = styled.div`
    display: inline-flex;
    overflow: hidden;
    
    ${props => props.isClickedForward && animationForward(props)};
    ${props => props.isClickedBack && animationBack(props)};
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
    useEffect(() => {
        const widthSlider = slider.current.clientWidth
        console.log(widthSlider)
    }, [])
    const [isClickedForward, setIsClickedForward] = React.useState(false)
    const [isClickedBack, setIsClickedBack] = React.useState(false)
    const [inicial, setInicial] = React.useState(1275)
    const [final, setFinal] = React.useState(0)

    function handleClick() {
        setInicial(inicial - 1275)
        setFinal(final - 1275)
        setIsClickedForward(true)
        setTimeout(() => {
            setIsClickedForward(false)
            slider.current.style.transform = `translate(${final - 1275}px)`
        }, 800);
    }

    function handleClick2() {
        setInicial(inicial + 1275)
        setFinal(final + 1275)
        setIsClickedBack(true)
        setTimeout(() => {
            setIsClickedBack(false)
            slider.current.style.transform = `translate(${final + 1275}px)`
        }, 800);
    }

    return (
        <Wrapper>
            <Sliderzin ref={slider} inicial={inicial} final={final} isClickedForward={isClickedForward} isClickedBack={isClickedBack}>
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