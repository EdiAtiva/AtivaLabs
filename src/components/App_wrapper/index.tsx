'use client';

import { useEffect, useState } from 'react';

export default function App_wrapper({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div
        style={{
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
          color: '#fff',
          fontSize: '2rem',
        }}
      >
        Carregando...
      </div>
    );
  }

  return <>{children}</>;
};