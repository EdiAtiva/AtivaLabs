'use client'

import { useState } from 'react';
import { yellow_temperance } from '@/utilities/color_object';
import {
  Section_container,
  Toggle_container,
  Button_group,
  Toggle_button,
  Toggle_text
} from './style';

export default function Section_three() {
  const [selected, setSelected] = useState<'metodologia' | 'abordagens'>('metodologia');

  const text = {
    metodologia:
      'Utilizamos estratégias que têm por objetivo incentivar os alunos a aprenderem de forma autônoma e participativa. O aluno é estimulado a buscar soluções de problemas reais, com práticas que estimulam o pensar, analisar e agir, responsáveis pela construção do conhecimento.',
    abordagens:
      'São diversas ferramentas inovadoras para promover uma experiência de aprendizado envolvente e eficaz. Gamificação, Cultura Maker, aprendizagem baseada em problemas e em projetos, sala de aula invertida e aprendizagem baseada em times (TBL) são algumas das abordagens que adotamos.',
  };

  return (
    <Section_container>
      <Toggle_container>
        <Button_group>
          <Toggle_button
            $active={selected === 'metodologia'}
            color={yellow_temperance}
            onClick={() => setSelected('metodologia')}
          >
            Metodologia
          </Toggle_button>
          <Toggle_button
            $active={selected === 'abordagens'}
            color={yellow_temperance}
            onClick={() => setSelected('abordagens')}
          >
            Abordagens
          </Toggle_button>
        </Button_group>
        <Toggle_text>{text[selected]}</Toggle_text>
      </Toggle_container>
    </Section_container>
  );
}
