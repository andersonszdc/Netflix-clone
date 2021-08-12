import React, { useRef } from 'react'
import styled, { keyframes, css } from 'styled-components';
import Cards from '../Components/Cards'
import styles from './Slider.module.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import casaPapel from "../Assets/casa-de-papel.jpg"
import cobraKai from "../Assets/cobra-kai.jpg"
import lucifer from "../Assets/lucifer.jpg"
import narcos from "../Assets/narcos.jpg"

const sliderzada = (props) => keyframes`
from {
    transform: translate(${props.inicial}px)
}
to {
    transform: translate(${props.final}px)
}
`;

const animation = (props) => css`
    animation: ${sliderzada} 0.8s ease-in-out;
`;

const Sliderzin = styled.div`
    display: inline-flex;
    overflow: hidden;
    position: fixed;
    ${props => props.isClicked && animation(props)};
`;

const Slider = () => {

    const slider = useRef()
    const [isClicked, setIsClicked] = React.useState(false)
    const [inicial, setInicial] = React.useState(1275)
    const [final, setFinal] = React.useState(0)

    function handleClick() {

        setInicial(inicial - 1275)
        setFinal(final - 1275)

        console.log(inicial)
        console.log(final)

        setIsClicked(true)
        setTimeout(() => {
            setIsClicked(false)
            slider.current.style.transform = `translate(${final - 1275}px)`
        }, 800);
    }

    function handleClick2() {

        setInicial(inicial + 1275)
        setFinal(final + 1275)

        console.log(inicial)
        console.log(final)

        setIsClicked(true)
        setTimeout(() => {
            setIsClicked(false)
            slider.current.style.transform = `translate(${final + 1275}px)`
        }, 800);
    }

    return (
        <div className={styles.wrapper}>
            <Sliderzin ref={slider} inicial={inicial} final={final} isClicked={isClicked}>
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