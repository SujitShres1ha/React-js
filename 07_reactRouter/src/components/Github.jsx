import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // let [data,setData] = useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then(res => res.json())
  //   .then(data => setData(data))
  // },[])
  const data = useLoaderData()
  return <div className="text-center m-4 bg-gray-600 text-white">Github followers:{data.followers}
  <img src={data.avatar_url} alt="image" width={300} />
  </div>;
}

export default Github;

export const dataLoader = async () => {
  const data = await fetch('https://api.github.com/users/SujitShres1ha')
  return data.json()
}
