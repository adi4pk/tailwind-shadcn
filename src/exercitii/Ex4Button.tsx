import { useState, type ReactNode } from "react";
import "../index.css";

type ButtonProps={
  varianta: "primary" | "outline";     //already a string type - string literal type
   disableddd?: boolean;
   aaaonClick?:()=>void;
  children: ReactNode;
}

export default function Ex4Button() {

  const [count, setCount] = useState(0);

  // return <p>Exercițiul 4: de rezolvat</p>;
  return (
    <div className="flex gap-3 items-center border-[#646361] rounded-md border-1 p-0.5 ">
      <Button aaaonClick={() => setCount(count+1)} varianta="primary" >Adauga in cos</Button>   //wrap setCount into aaaonClick
      <Button varianta="outline">Detalii</Button>                           {/* //varianta="outline" e folosit ca param-argument pentru <Button></Button> */}
      <Button disableddd={false} varianta="primary">Stoc epuizat</Button>
      <span> In cos: {count}</span>

     
    </div>
  );

}

// in functie de ce trimitem din Ex4Button in parametrul varianta --> asta e ce va primi <button>

 function Button({varianta, disableddd,aaaonClick, children}:ButtonProps){      //can receive stuff wrapped into aaaonClick

  const base = "rounded-md px-4 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 disabled:cursor-not-allowed disabled:opacity-50";
  const colors = varianta === "primary"
    ? "bg-gray-900 text-white hover:bg-red-500"
    : "border border-gray-300 text-gray-900 hover:bg-gray-100";



  return (
    <button disabled={disableddd} onClick={aaaonClick} className={`${base} ${colors}`}>     //uses aaaonClick without knowning it's gonna setCount
      {children}
      </button>

  );
}


