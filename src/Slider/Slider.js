import React, { useRef } from 'react'
import styled from 'styled-components';
import Cards from '../Components/Cards'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import casaPapel from "../Assets/casa-de-papel.jpg"

const Sliderzin = styled.div`
    display: block;
    white-space: nowrap;
    overflow-x: visible;
    transition: 0.8s ease-in-out;
`;

const Wrapper = styled.div`
    display: flex;
    position: relative;
    padding: 0 4%;
    margin-top: 15px;
`

const ArrowForward = styled(IoIosArrowForward)`
    position: absolute;
    display: flex;
    font-size: 3rem;
    width: 4%;
    right: 0px;
    background: rgba(20,20,20,.5);
    align-self: center;
    z-index: 2;
    height: 100%;
    border-radius: 4px;
`

const ArrowBack = styled(IoIosArrowBack)`
    position: absolute;
    display: flex;
    font-size: 3rem;
    width: 4%;
    left: 0px;
    background: rgba(20,20,20,.5);
    align-self: center;
    z-index: 2;
    height: 100%;
    border-radius: 4px;
`

const Slider = () => {
    const slider = useRef()
    const [inicio, setInicio] = React.useState(0)

    function handleClick() {
        setInicio(inicio - 100)
        slider.current.style.transform = `translate(${inicio - 100}%)`
    }

    function handleClick2() {
        setInicio(inicio + 100)
        slider.current.style.transform = `translate(${inicio + 100}%)`
    }

    return (
        <Wrapper>
            <ArrowBack onClick={handleClick2}/>
            <Sliderzin ref={slider}>
                <Cards src={casaPapel}/>
            </Sliderzin>
            <ArrowForward onClick={handleClick}/>
        </Wrapper>
    )
}

export default Slider