'use client'

import { breakpoints } from "@/utilities/break_points";
import styled from "styled-components"

export const Section_wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
    margin-bottom: 10vh;

    @media (min-width: ${breakpoints.laptop}) {
        margin-top: 25vh;
        margin-bottom: 25vh;
    }
`;

export const Title_div = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    width: 80%;
    margin-bottom: 8vh;

    @media (min-width: ${breakpoints.tablet}) {
        width: 50%;
    }
`;

export const Body_div = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    width: 100%;
    padding: 5vh;
    gap: 2vh;
    @media (min-width: ${breakpoints.laptop}) {
        gap: 8vh;
    }
`;

export const Image_div = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    width: 30vh;
    
    @media (min-width: ${breakpoints.laptop}) {
        width: 100vh;
    }
    `;

export const Text_div = styled.div`
    width: 100%;
`;

export const Text = styled.p`
    font-size: 0.8rem;
    line-height: 1;
    text-align: justify;
    hyphens: auto;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: 1.2rem;
        line-height: 1.4;
    }
        @media (min-width: ${breakpoints.laptop}) {
            font-size: 1.2rem;
            line-height: 1.4;
            margin-right:5vh;
    }
`;