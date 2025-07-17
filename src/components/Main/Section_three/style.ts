'use client';

import styled from 'styled-components';
import { dark_blue, white } from '@/utilities/color_object';
import { breakpoints } from '@/utilities/break_points'; // se já tiver esse utilitário

export const Section_container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;

  margin: 5vh auto;
  max-width: 90%;
  width: 100%;
`;

export const Toggle_container = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const Button_group = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  border-radius: 2rem;
  overflow: hidden;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    border-radius: 1rem;
  }
`;

export const Toggle_button = styled.button<{ $active: boolean; color: string }>`
  flex: 1;
  min-width: 120px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 1rem;
  background-color: ${({ $active, color }) => ($active ? color : dark_blue)};
  color: ${({ $active }) => ($active ? dark_blue : white)};
  transition: 0.3s ease;
  cursor: pointer;

  &:first-child {
    border-radius: 2rem 0 0 2rem;

    @media (max-width: ${breakpoints.tablet}) {
      border-radius: 1rem 1rem 0 0;
    }
  }

  &:last-child {
    border-radius: 0 2rem 2rem 0;

    @media (max-width: ${breakpoints.tablet}) {
      border-radius: 0 0 1rem 1rem;
    }
  }
`;

export const Toggle_text = styled.p`
  font-size: 1rem;
  text-align: justify;
  line-height: 1.5;

  @media (max-width: ${breakpoints.mobileS}) {
    font-size: 0.95rem;
  }
`;
