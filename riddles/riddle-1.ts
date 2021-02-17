import { Observable, of } from "rxjs";

export interface Riddle1 {
    /**
     * Transform the given [value] into an Observable that emits the value and then completes.
     *
     * Use case: You want to transform some value to the reactive world.
     */
    solve(value: number): Observable<number>;
}

export class Riddle1Solution implements Riddle1 {
    solve(val: any): Observable<any> {
        return of(val);
    }
}

const r1 = new Riddle1Solution();

r1.solve(5);

// --------------------------------------------------------
// More concrete example below
//    |||    |||    |||    |||
//    vvv    vvv    vvv    vvv
// --------------------------------------------------------

const rd1: Riddle1 = {
    solve: (val: any): Observable<any> => {
        return of(val);
    },
};

rd1.solve("foobar");
