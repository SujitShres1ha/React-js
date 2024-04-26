import React from "react";

function Button({color}) {
  return <>
    <button onClick={()=>document.body.style.backgroundColor = color.toLowerCase()} className=" text-white bg-gray-600 p-2 rounded-xl justify-center w-20 h-10">{color}</button>
  </>;
}

export default Button;
