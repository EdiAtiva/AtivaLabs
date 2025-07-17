import { Text_wrapper, Video_cont, Video_framer } from "./style";
const text = 'Tendo em vista as possibilidades que a cultura maker emprega em relação ao aprendizado, se faz necessário a construção de um ambiente dedicado a criatividade e ao engate de soluções. O laboratório de aprendizado, ou sala maker é o convite para o mundo das ideias e um espaço para projetos inovadores. Criar com propósito. Resolver problemas, e sobretudo, errar, pois o erro constrói uma ponte sólida até os mais diversos conhecimentos'

export default function Video_Wrapper(){
 return (
    <Video_cont>
      <Video_framer src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen></Video_framer>
      <Text_wrapper>
        <h1>{text}</h1>
      </Text_wrapper>
    </Video_cont>
  );
};