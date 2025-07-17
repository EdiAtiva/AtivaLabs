import { Contacts_div, Footer_div, Logo_div, Text_div, Background_icon } from "./style";
import { Contact_item } from "@/interfaces/Contact/Contact_item";

export default function Footer() {
    return(
        <div>
            <img src="/SVGs/wave_footer.svg"/>
            <Footer_div>
                <Background_icon>
                    <img src="/SVGs/favicon.svg"/>
                </Background_icon>
                <Logo_div>
                    <img src='/SVGs/black_logo.svg'/>
                </Logo_div>
                <Text_div>
                    <h6 style={{ fontWeight: 'bold' }}>Nos acompanhe nas redes sociais</h6>
                </Text_div>
                <Contacts_div>
                    <Contact_item icon="/SVGs/insta_logo.svg" text="@ativa_tech"/>
                    <Contact_item icon="/SVGs/yt_logo.svg" text="https://www.youtube.com/@ativa_tech"/>
                    <Contact_item icon="/SVGs/phone_icon.svg" text="(81) 3196-9072"/>
                </Contacts_div>
            </Footer_div>
        </div>
    )
};