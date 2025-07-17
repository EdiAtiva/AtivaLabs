'use client'
import { breakpoints } from "@/utilities/break_points";
import { dark_blue } from "@/utilities/color_object";
import styled from "styled-components"

export const Video_cont = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20vh 0vh 20vh 0vh;
    user-select: none;
    flex-direction: column;
`;

export const Video_framer = styled.iframe`
    width: 80%;
    height: 40vh;
    border: solid 15px ${dark_blue};
    border-radius: 8px;
    @media(min-width: ${breakpoints.tablet}) {
        height: 80vh;
    }
`;

export const Text_wrapper = styled.div`
    width: 80%;
    text-align: justify;
    hyphens: auto;
    margin: 8vh 0vh 0vh 0vh;
`;