'use client';

import { WaveWrapper, Wave } from './style';

export default function Wave_anm() {
  return (
    <WaveWrapper>
      <Wave
        style={{
          backgroundImage: `url('/SVGs/wave5.svg')`,
          zIndex: 2,
          animationDuration: '50s',
          opacity: 1,
        }}
      />
      <Wave
        style={{
          backgroundImage: `url('/SVGs/wave6.svg')`,
          zIndex: 3,
          animationDuration: '30s',
          opacity: 1,
        }}
      />
    </WaveWrapper>
  );
};