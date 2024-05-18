import { count, Observable, Observer, Subject } from "rxjs";

// OBSERVER
const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.log("complete:"),
};

// OBSERVABLE
const interval$ = new Observable((subs) => {
  const intervalId = setInterval(() => {
    subs.next(Math.random());
  }, 1000);

  return () => clearInterval(intervalId);
});

/**
 * 1 - Casteo múltiple (muchas susbcripciones)
 * 2 - tambien es un susbcriber
 * 3 - Next, Error, Complete
 */

const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);

interval$.subscribe(subject$);

// const subs1 = interval$.subscribe((rnd) => console.log("1:", rnd));
// const subs2 = interval$.subscribe((rnd) => console.log("2:", rnd));

// const subs1 = subject$.subscribe((rnd) => console.log("1:", rnd));
// const subs2 = subject$.subscribe((rnd) => console.log("2:", rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
}, 3500);
