import { asyncScheduler, range } from "rxjs";

const src$ = range(1, 10, asyncScheduler); // async = asyncScheduler

console.log("Inicio");
src$.subscribe(console.log);
console.log("Fin");
