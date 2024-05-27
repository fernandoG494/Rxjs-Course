import { fromEvent } from "rxjs";

const src1$ = fromEvent<PointerEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (value) => console.log("next:", value),
};

src1$.subscribe(observer);
src2$.subscribe((event) => {
  console.log(event);
  console.log(event.key);
});
