import { Box } from '@mui/material';
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

export const HouseOverlay = styled.img.attrs({
    className: "house-overlay",
}) <HouseOverlayProps>`
    width: 1vw;
    height: auto;
    cursor: pointer !important;
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    z-index: 100;
    opacity: 0.9;
    &:hover {
        opacity: 0.5;
    }
`

export const RightContainer = styled(Box)`
    display: flex;
    flex-direction: column;

    padding: 1rem 1.5rem;

    justify-content: space-between;
    align-items: flex-start;

    height: 92.25vh;
    width: 60vw;

    background: #222222;
    border-radius: 10px;
    border: 1px solid #FFF;
    margin-left: 1.5rem;
`