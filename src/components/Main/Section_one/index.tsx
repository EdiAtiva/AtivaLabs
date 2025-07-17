import Text_box from "@/interfaces/Text_box/Text_box"
import { dark_blue } from "@/utilities/color_object"
import { text1, text2, text3 } from "./text_variables"
import { Text_container } from "./styles"

const box_data = [
  { title: "O Futuro", texto: text1 },
  { title: "Ativa Tech?", texto: text2 },
  { title: "Nossa Semente", texto: text3 }
]

export default function Section_one() {
    return(
        <div>
            <Text_container>
               {box_data.map((item) => (
                    <Text_box
                        key={item.title}
                        title={item.title}
                        texto={item.texto}
                        color={dark_blue}
                    />
                ))}
            </Text_container>
            <img src='/SVGs/wave_two.svg' style={{width:'100%', marginBottom: '5vh'}}/>
        </div>
    )
};