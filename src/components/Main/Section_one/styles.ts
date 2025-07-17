'use client'
import { purple_light, yellow_temperance } from "@/utilities/color_object";
import { breakpoints } from "@/utilities/break_points";
import styled from "styled-components";

export const Text_container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
    padding: 2rem;
    background-color: ${yellow_temperance};    

    @media (min-width: ${breakpoints.laptop}) {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
    }
`;