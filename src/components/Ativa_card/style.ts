'use client'
import styled from 'styled-components';
import Link from 'next/link';

export const Div_card = styled.div`
  width: 100%;  
  display: flex;
  justify-content: center;
  margin: 5vh 0vh 5vh 0vh;
`;

export const Card_link = styled(Link)`
  width: 100%;
  max-width: 50%;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  display: block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Card_container = styled.div<{ bg: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const Overlay = styled.div<{ color: string }>`
  background: ${props => props.color};
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 16vh;
  margin-bottom: 2vh;
`;

export const Title = styled.h3`
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
`;