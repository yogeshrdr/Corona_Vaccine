import React from 'react';

const Cont = (props) => {
  return ( 
<div className="w-full lg:w-3/12 px-4 text-center">
<div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
  <img src={props.image} alt="lg" />
</div>

<h5 className="text-xl mt-5 font-semibold text-gray-900">
{props.head}
</h5>
<p className="mt-2 mb-4 text-blue-900">
  {props.line}
</p>
</div>

           ) 
}

export default Cont;