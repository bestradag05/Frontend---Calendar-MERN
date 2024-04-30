import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand ">BegCode</span>

      <button className="btn btn-outline-danger">
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        <span> Salir</span>
      </button>
    </div>
  );
};

export default Navbar;
