'use client';
import styled from "styled-components";
import { breakpoints } from "@/utilities/break_points";
//Eu posso encapsular. 

interface Contact_Props {
  icon: string;
  text: string;
  href?: string;
};

const Item_container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;


    @media(min-width: ${breakpoints.laptop}){
        font-size: large;
    }
    @media(min-width: ${breakpoints.laptopL}){
        font-size: x-large;
    }`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
`;

export function Contact_item({ icon, text, href }: Contact_Props) {
  const content = href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
      {text}
    </a>
  ) : (
    <span>{text}</span>
  );

  return (
    <Item_container>
      <Icon src={icon} alt="icon" />
      {content}
    </Item_container>
  );
};