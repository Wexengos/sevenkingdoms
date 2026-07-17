import styled from 'styled-components';

interface HouseOverlayProps {
    top: string;
    left: string;
    scale: number;
}

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
`

export const HouseOverlay = styled.img<HouseOverlayProps>`
    width: 1vw;
    height: auto;
    cursor: pointer;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    z-index: 100;
    opacity: 0.9;
    &:hover {
        opacity: 0.5;
    }
`