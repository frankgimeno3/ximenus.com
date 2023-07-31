import React from 'react';

const Seccion2: React.FC = () => {
  return (
    <section className='flex flex-col p-5 text-end'>
      <h2 className='text-2xl'>Nuestros Servicios</h2>
      <ul>
        <li>
          <strong>Páginas Web Personalizadas:</strong> Creamos páginas web modernas y atractivas que reflejan la identidad única de tu empresa. Desde páginas informativas hasta tiendas en línea, nuestro enfoque es siempre cautivar a tus clientes y mejorar la experiencia de usuario.
        </li>
        <li>
          <strong>Aplicaciones Web Avanzadas:</strong> Diseñamos y desarrollamos aplicaciones web escalables y robustas que te ayudarán a automatizar procesos, gestionar datos y mejorar la eficiencia de tu empresa. Nuestras soluciones a medida te permitirán estar un paso adelante en el competitivo mercado actual.
        </li>
        <li>
          <strong>Aplicaciones Móviles para iOS y Android:</strong> Lleva tu negocio al bolsillo de tus clientes con nuestras aplicaciones móviles personalizadas. Diseñamos apps que ofrecen una experiencia de usuario excepcional y que se adaptan a las necesidades específicas de tu empresa.
        </li>
      </ul>
    </section>
  );
};

export default Seccion2;