'use client';

import { breakpoints } from "@/utilities/break_points";
import { yellow_temperance } from "@/utilities/color_object";
import styled from "styled-components";


const Footer_div = styled.div`
    position: relative;
    background-color: ${yellow_temperance};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    padding: 1vh;

`;

const Background_icon = styled.div`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 0;

        user-select: none;
    
        img {
            width: 100%;
            opacity: 0.1;
        }
`;

const Logo_div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 8vh;
    z-index: 1;
    user-select: none;

    img {
        width: 40%;
    }
`;

const Text_div = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
    margin-bottom: 5vh;
    margin-top: 5vh;
    z-index: 1;
    user-select: none;

    @media(min-width: ${breakpoints.laptop}){
        font-size: x-large;
    }
`;

const Contacts_div = styled.div`
    width: 100%;
    z-index: 1;
    margin-bottom: 5px;
`;

export {Footer_div,Logo_div,Contacts_div,Text_div, Background_icon};