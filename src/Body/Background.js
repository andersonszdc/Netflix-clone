import React from 'react'
import styled from 'styled-components'

const UrlFundo = "https://occ-0-4906-420.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaKd32dWKMNPxW_lHqfzHGmBBww_6apUZSphyfDxWsz0aa4vKMIJ64mXxouXKXOzncqPa4nehjZ3VnNPDpeGNtkJHIub.webp?r=c30"

const BackgroundImg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    mask-image: linear-gradient(rgba(0, 0, 0, 1.0), transparent);
    mask-image: image(url(${UrlFundo}), skyblue);
`

const Background = () => {
    return (
        <BackgroundImg></BackgroundImg>
    )
}

export default Background
