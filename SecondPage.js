import React from "react";
import './common.css'
const SecondPage = () => {
  return (
    <div>
      <h1 className="sig">Signin to your popX account</h1>
      <h2 className='sig-1'> Lorem ipsum dolor sit amet,
      consectetur adipiscing elit,</h2>
      <br></br>
      <h3 className='sig-2'> Email address <input type="text" placeholder="Enter email address"></input> </h3>
      <br></br>
      <h4 className='sig-3'> Enter password <input type="text" placeholder="Enter password"></input> </h4>
      <br></br>
      <button className='sig-4'> Login </button>
      <br></br>
      <br></br>
    </div>
  );
};

export default SecondPage;
