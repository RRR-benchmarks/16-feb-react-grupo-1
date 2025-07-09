import React from 'react';
const CompFuncContenedor = () => {
  console.log(window.globalCount++);
  // Gestión del estado
  // Pasaríamos información a nuestros componentes hijos
  return <div>CompFuncContenedor</div>;
};
export default CompFuncContenedor;