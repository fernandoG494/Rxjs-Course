import { of } from "rxjs";

const obs$ = of(1, 2, 3, 4, 5, 6);

console.log("inicio observer");
obs$.subscribe(
  (value) => console.log(value),
  null,
  () => console.log("fin de secuencia")
);

console.log("fin observer");
