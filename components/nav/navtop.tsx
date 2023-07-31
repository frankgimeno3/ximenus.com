import React from 'react';

const Navtop: React.FC = () => {
  return (
    <nav className='flex flex-row bg-white bg-opacity-20 p-5 justify-between'>
      <h2 className='text-4xl font-bold'>Softwar3.com</h2>
      <div className='flex flex-row align-center pt-2'>
      <button className='bg-cyan-900 hover:bg-cyan-800 mx-2 rounded-lg text-white px-3 py-1 text-md border border-gray-500 shadow'>Section 1</button>
      <button className='bg-cyan-900 hover:bg-cyan-800 mx-2 rounded-lg text-white px-3 py-1 text-md border border-gray-500 shadow'>Section 2</button>
      <button className='bg-cyan-900 hover:bg-cyan-800 mx-2 rounded-lg text-white px-3 py-1 text-md border border-gray-500 shadow'>Section 3</button>
      <button className='bg-cyan-900 hover:bg-cyan-800 mx-2 rounded-lg text-white px-3 py-1 text-md border border-gray-500 shadow'>Section 4</button>
      <button className='bg-cyan-900 hover:bg-cyan-800 mx-2 rounded-lg text-white px-3 py-1 text-md border border-gray-500 shadow'>Section 5</button>
      </div>
    </nav>
  );
};

export default Navtop;