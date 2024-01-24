import React from "react";
import {useEffect, useState } from "react";

function UseEffect() {
  const [count, setCont] = useState(0);

    useEffect(()=> {
        console.log("count is :" , count)
    }, [ count])

  return (
    <div className=" flex justify-center p-20 ">
      <h1 className=" p-10 font-mono text-purple-950 bg-red-300 text-2xl">
        count: {count}
      </h1>

      <button
        className=" p-10 bg-slate-500 font-mono text-xl"
        onClick={() => setCont(count + 1)}
      >
        increamnt
      </button>

      <button
        className=" p-10 bg-slate-400 font-mono text-xl"
        onClick={() => setCont(count - 1)}
      >
        dereamne
      </button>
    </div>
  );
}

export default UseEffect;
