'use client'
import Ativa_card from "./aply"

export default function Card_wrapper(){
  return (
    <div>
        <Ativa_card
            href="spcmk"
            bg_image= "/SVGs/cta1.svg"
            overlay_color = 'rgba(0,0,100,0.3)'
            title="Sala Maker"
        />
        <Ativa_card
            href="mkcst"
            bg_image= "/SVGs/cta2.svg"
            overlay_color = 'rgba(60,0,100,0.3)'
            title="Maker cast"
        />
        <Ativa_card
            href="spcmt"
            bg_image= "/SVGs/cta3.svg"
            overlay_color = 'rgba(0, 22, 100, 0.3)'
            title="Space Meta"
        />
    </div>
  )
};