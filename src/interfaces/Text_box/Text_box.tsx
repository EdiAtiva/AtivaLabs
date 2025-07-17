'use client'
import styled from 'styled-components';
import { breakpoints } from '@/utilities/break_points';
import { white } from '@/utilities/color_object';

interface Text_box_props {
  title: string
  texto: string
  color: string
};

const Box_container = styled.div<{ color: string }>`
    background-color: ${({ color }) => color};
    padding: 1.5rem 1.5rem 2rem;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
    margin-top: 4rem;
    color: ${white};
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;
    text-align: center;
    gap: 0.5rem;

    min-height: 280px;
    max-height: 320px;
    width: 100%;
    box-sizing: border-box;

    @media (min-width: ${breakpoints.laptop}) {
        padding: 2rem 2rem 2.5rem;
        min-height: 300px;
        max-height: 320px;
        max-width: 400px;
    }
`;

const Title_text = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0; 
    line-height: 1.2;

    @media (min-width: ${breakpoints.laptop}) {
     font-size: 1.5rem;
    }
`;

const Content_text = styled.p`
    font-size: 1rem;
    line-height: 1.8;
    text-align: justify;
    hyphens: auto;
    margin: 0;

    @media (min-width: ${breakpoints.laptop}) {
     font-size: 1rem;
    }
`;

export default function Text_box({ title, texto, color }: Text_box_props) {
  return (
    <Box_container color={color}>
      <Title_text>{title}</Title_text>
      <Content_text>{texto}</Content_text>
    </Box_container>
  )
};
