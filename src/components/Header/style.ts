'use client';

import styled from 'styled-components';
import { breakpoints } from '@/utilities/break_points';
import { blue_sky } from '@/utilities/color_object';

export const Header_div = styled.div` 
    
    width: 100%;
    background-color: ${blue_sky};
    padding:2vh;
    z-index: 10;
`;

export const He_one_div = styled.div` 
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;;
`;

export const Logo_div = styled.div`
    user-select: none;
    @media (min-width: ${breakpoints.tablet}) {
        img {
            width: 30vw;
            height: 10vh;
        }
    }
`;

export const Icons_div = styled.div`
    display: flex;
    justify-content: space-around;
    width: 35%;
    align-items: center;
    user-select: none;

    a {
        transition: transform 0.2s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }


    @media (min-width: ${breakpoints.tablet}) {
        img {
            width: 8vw;
            height: 8vh;
        }
    }
`;

export const Wave = styled.img`
    width: 100%;
`;