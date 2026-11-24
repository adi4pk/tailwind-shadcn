import { Button } from "@/components/ui/button";

export default function Ex7ShadcnButton() {
  return (
  <>
    <p>Exercițiul 7: de rezolvat</p>
    <div><Button variant="brand" className="text-white">test</Button>
      <Button variant="outline">Detalii</Button>                           {/* //varianta="outline" e folosit ca param-argument pentru <Button></Button> */}
      <Button variant="disabled" className="text-white bg-gray-80">Stoc epuizat</Button>
      <span> In cos:</span></div>

    <div>
      <Button variant="secondary" className="">secondary</Button>
      <Button variant="ghost" className="">ghost</Button>
      <Button variant="destructive" className="">destructive</Button>
      <Button variant="link" className="">link</Button>
      <Button size="sm" className="">sm</Button>
      <Button size="lg" className="">lg</Button>

    </div>
    
    </>
  );

}



//secondary ghost destructive link sm lg