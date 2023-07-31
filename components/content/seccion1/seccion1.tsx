import React from 'react';
import Navtop from '../../nav/navtop';
const Seccion1: React.FC = () => {
  return (
    <section>
      <Navtop/>
      <div className=' text-white p-5'>
      <h2 className='text-2xl'>Quiénes somos</h2>
      <p>Somos una consultora tecnológica con sede en Barcelona, especializada en el diseño y desarrollo de páginas web, aplicaciones web y aplicaciones móviles para empresas de todos los tamaños. Nuestro equipo de expertos está comprometido en brindarte soluciones digitales a medida que impulsen el crecimiento de tu negocio.</p>
      </div>
    </section>
  );
};

export default Seccion1;