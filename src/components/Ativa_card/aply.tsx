'use client'
import {
  Card_link,
  Card_container,
  Overlay,
  Logo,
  Title,
  Div_card
} from './style'

export interface Ativa_card_props {
  title: string
  bg_image: string
  overlay_color: string
  href: string
}

export default function Ativa_card({
  title,
  bg_image,
  overlay_color,
  href
}: Ativa_card_props) {
  return (
    <Div_card>
      <Card_link href={href}>
        <Card_container bg={bg_image}>
          <Overlay color={overlay_color}>
            <Logo src="/SVGs/black_logo.svg" alt="Logo Ativa" />
            <Title>{title}</Title>
          </Overlay>
        </Card_container>
      </Card_link>
    </Div_card>
  )
};