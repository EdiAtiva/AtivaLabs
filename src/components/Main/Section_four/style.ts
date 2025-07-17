'use client';

import { blue_sky } from '@/utilities/color_object';
import styled from 'styled-components';

export const Section_container = styled.section`
    background-color: ${blue_sky};
    padding: 1rem;
    overflow: hidden;
    margin-bottom: 15vh;

`;

export const Carousel_container = styled.div`
    overflow: hidden;
    width: 100%;
    position: relative;

    &::-webkit-scrollbar {
    display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

export const Carousel_wrapper = styled.div`
    display: flex;
    gap: 2rem;
    width: max-content;
`;

export const Logo = styled.img`
    height: 8vh;
    transition: transform 0.3s;
    cursor: pointer;
    flex-shrink: 0;

    &:hover {
    transform: scale(1.1);
    }
`;

interface Logo_item {
    src: string;
    link: string;
};

export const logos: Logo_item[] = [
    { src: '/PNGs/JocaClaudino.png',link: '#' },
    { src: '/PNGs/NovaFloresta.png',link: '#' },
    { src: '/PNGs/AlagoaGrande.png',link: '#' },
    { src: '/PNGs/MonteHorebe.png',link: '#' },
    { src: '/PNGs/LagoaTapada.png',link: '#' },
    { src: '/PNGs/SaoGabriel.png',link: '#' },
    { src: '/PNGs/Queimadas.png',link: '#' },
    { src: '/PNGs/Caraubas.png',link: '#' },
    { src: '/PNGs/Uirauna.png',link: '#' },
    { src: '/PNGs/Atalaia.png',link: '#' },
    { src: '/PNGs/Mipibu.png',link: '#' },
    { src: '/PNGs/Touros.png',link: '#' },
    { src: '/PNGs/SEEC.png',link: '#' },
];