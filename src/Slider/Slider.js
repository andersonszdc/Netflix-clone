import React, { useRef } from 'react'
import styled, { keyframes, css } from 'styled-components';
import Cards from '../Components/Cards'
import styles from './Slider.module.css'
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

const Slider = () => {
    const slider = useRef()
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
        <div className={styles.wrapper}>
            <Sliderzin ref={slider} inicial={inicial} final={final} isClickedForward={isClickedForward} isClickedBack={isClickedBack}>
                <Cards src={casaPapel}/>
                <Cards src={cobraKai}/>
                <Cards src={lucifer}/>
                <Cards src={narcos}/>
            </Sliderzin>
            <IoIosArrowBack onClick={handleClick2} className={styles.arrow2} />
            <IoIosArrowForward onClick={handleClick} className={styles.arrow} />
        </div>
    )
}

export default Slider