import { useState, type ReactNode } from "react";
import "../index.css";

type ButtonProps={
  variant: "primary" | "outline";     //already a string type - string literal type
   disabled?: boolean;
   onClick?:()=>void;
  children: ReactNode;
}

 function Button({variant, disabled,onClick, children}:ButtonProps){

  const base = "rounded-md px-4 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 disabled:cursor-not-allowed disabled:opacity-50";
  const colors = variant === "primary"
    ? "bg-gray-900 text-white hover:bg-red-500"
    : "border border-gray-300 text-gray-900 hover:bg-gray-100";



  return (
    <button disabled={disabled} onClick={onClick} className={`${base} ${colors}`}>
      {children}
      </button>

  );
}


export default function Ex4Button() {

  const [count, setCount] = useState(0);

  // return <p>Exercițiul 4: de rezolvat</p>;
  return (
    <div className="flex gap-3 items-center border-[#646361] rounded-md border-1 p-0.5 ">
      <Button onClick={() => setCount(count+1)} variant="primary" >Adauga in cos</Button>
      <Button variant="outline">Detalii</Button>
      <Button disabled variant="primary">Stoc epuizat</Button>
      <span> In cos: {count}</span>

     
    </div>
  );

}
