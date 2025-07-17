import { div } from "framer-motion/client";
import { Body_div, Image_div, Section_wrapper, Text, Text_div, Title_div } from "./style";
import { Text_long } from "./Text";

export default function Section_two() {
    return(
        <Section_wrapper>
            <Title_div>
                <img src='/SVGs/ppet.svg'/>
            </Title_div>
            <Body_div>
                <Image_div>
                    <img src="/PNGs/blocks.png" alt="" />
                </Image_div>
                <Text_div>
                    <Text>
                       {Text_long} 
                    </Text>
                </Text_div>
            </Body_div>
        </Section_wrapper>
    )
};