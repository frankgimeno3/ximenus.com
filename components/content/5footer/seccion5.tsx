import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='flex flex-col bg-white bg-opacity-20 p-5'>
      <p className='w-full'>© 2023 Softwar3.com | Todos los derechos reservados | Aviso Legal | Política de Privacidad</p>
      <div className='flex flex-row'>
        <h3>Información de Contacto</h3>
        <p>Teléfono: [Número de teléfono]</p>
        <p>Correo Electrónico: [Correo electrónico]</p>
        <p>Dirección: [Dirección de la consultora en Barcelona]</p>
      </div>
    </footer>
  );
};

export default Footer;