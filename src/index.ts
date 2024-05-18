import { fromEvent } from "rxjs";

const src1$ = fromEvent(document, 'click');
const src2$ = fromEvent(document, 'keyup');

const observer = {
    next: value => console.log('next:', value),
};

src1$.subscribe(observer);
src2$.subscribe(observer);
