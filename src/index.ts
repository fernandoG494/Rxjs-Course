import { Observable } from "rxjs";

const obs$ = new Observable((subs) => {
  subs.next("Hola");
});

obs$.subscribe(console.log);
