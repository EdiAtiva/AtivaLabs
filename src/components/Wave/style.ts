import { breakpoints } from '@/utilities/break_points';
import styled, { keyframes } from 'styled-components';

const wave_move = keyframes`
    0% {
    transform: translateX(0);
    }
    50% {
    transform: translateX(-30%);
    }
    100% {
    transform: translateX(0);
    }
`;

export const WaveWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 120px;
    overflow: hidden;
    margin-top: -12vh;
    
    @media (min-width: ${breakpoints.mobileS}) {
        margin-top: -15vh;
    }
    @media (min-width: ${breakpoints.mobileM}) {
        margin-top: -15vh;
    }

    @media (min-width: ${breakpoints.mobileL}) {
        margin-top: -15vh;
    }

    @media (min-width: ${breakpoints.tablet}) {
        margin-top: -18vh;
    }

    @media (min-width: ${breakpoints.laptopM}) {
        margin-top: -6vh;
    }

    @media (min-width: ${breakpoints.laptopL}) {
        margin-top: -9vh;
    }

    @media (min-width: ${breakpoints.desktop4K}) {
        margin-top: -3%;
    }
`;

export const Wave = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 200%;
    background-repeat: repeat-x;
    background-size: contain;
    background-position: bottom left;
    animation-name: ${wave_move};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
`;