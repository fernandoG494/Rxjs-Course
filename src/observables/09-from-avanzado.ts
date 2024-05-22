import { of, from } from 'rxjs';

const observer = {
    next: value => console.log('next:', value),
    complete: () => console.log('complete')
};

// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1, 2, 3, 4, 5]);
// const source$ = from('fernando');

const source$ = from(fetch('https://api.github.com/users/klerith'))

// source$.subscribe(observer)


source$.subscribe(async resp => {
    console.log(resp)
    const dataResp = await resp.json();
    console.log(dataResp);
})