import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

// // recieve number, return number
// range(1,5)
// .pipe(map<number, number>(val => val * 10))
// .subscribe(console.log)

// // recieve number, return string
// range(1,5)
// .pipe(map<number, string>(val => (val * 10).toString()))
// .subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyUpCode$ = keyup$.pipe(map((event) => event.code));

const keyUpPluck$ = keyup$.pipe(pluck("key"));

const keyUpPluckObject$ = keyup$.pipe(pluck("target", "baseURI"));

const keyUpMapTo$ = keyup$.pipe(mapTo("tecla presionada"));

keyup$.subscribe(console.log);
keyUpCode$.subscribe((code) => console.log("map", code));
keyUpPluck$.subscribe((code) => console.log("pluck", code));
keyUpPluckObject$.subscribe((uri) => console.log("pluck object", uri));
keyUpMapTo$.subscribe((value) => console.log("map to", value));
