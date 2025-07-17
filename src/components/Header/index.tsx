'use client'
import { He_one_div, Header_div, Icons_div, Logo_div, Wave } from "./style";

export default function Header() {
  return (
    <div>
        <Header_div>
          <He_one_div>
            <Logo_div>
              <a href="/">
                <img src="/SVGs/white_logo.svg" width={100} height={40} />
              </a>
            </Logo_div>
            <Icons_div>
              <a href="https://www.instagram.com/ativa_tech/">
                <img src="/SVGs/insta_white_logo.svg" width={25} height={25} />
              </a>
              <a href="https://www.youtube.com/@ativa_tech">
                <img src="/SVGs/yt_white_logo.svg" width={25} height={25} />
              </a>
            </Icons_div>
          </He_one_div>
      </Header_div>
    </div>
  );
};