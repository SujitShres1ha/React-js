import React, { useEffect, useState } from "react";

function Github() {
  let [data,setData] = useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then(res => res.json())
    .then(data => setData(data))
  },[])
  return <div className="text-center m-4 bg-gray-600 text-white">Github followers:{data.followers}
  <img src={data.avatar_url} alt="image" width={300} />
  </div>;
}

export default Github;
