import Section_four from "./Section_four";
import Section_one from "./Section_one";
import Section_three from "./Section_three";
import Section_two from "./Section_two";
import { Main_wrapper, Main_top_img, Capsule } from "./style";

export default function Main() {
    return(
        <div>
            <Capsule>
                <Main_wrapper>
                    <Section_one/>
                    <Section_two/>
                    <Section_three/>
                    <Section_four/>
                </Main_wrapper>    
            </Capsule>

        </div>
    )
};