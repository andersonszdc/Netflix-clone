import React from 'react'
import img from '../Assets/netflix_logo.png'
import { IoMdArrowDropdown } from "react-icons/io"
import { IoSearch } from "react-icons/io5"
import { FaBell } from "react-icons/fa"
import styled from 'styled-components'

const MainHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;

    .img {
        width: 100px;
    }
`;

const RightHeader = styled.div`
    display: flex;
    gap: 20px;
`;

const Header = () => {
    return (
        <MainHeader>
            <LeftHeader>
                <img className="img" src={img} alt="logo netflix"/>
                <nav>
                Navegar <IoMdArrowDropdown />
                </nav>
            </LeftHeader>
            <RightHeader>
                <div>
                    <IoSearch />
                </div>
                <div>
                    <FaBell />
                </div>
                <div>
                    Meu perfil
                </div>
            </RightHeader>
        </MainHeader>
    )
}

export default Header
