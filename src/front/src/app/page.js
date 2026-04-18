'use client';
import React from 'react';
import LoginPage from './login/page'; // importa el login

export default function Page() {
  return (
    <div>
      <h1>Página principal</h1>
      <LoginPage /> {/* aquí renderizas el formulario */}
    </div>
  );
}
