import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { Riddle5Solution } from '../solutions/riddle-5-solution';

describe('Riddle 5', () => {

  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should sum up two values', () => {
    const riddle5 = new Riddle5Solution();

    riddle5.solve(of(8), of(6)).subscribe(value => {
      expect(value).toBe(14);
    });
  });

  it('should sum up multiple values', () => {
    scheduler.run(({ cold, expectObservable }) => {

      const source1Marbles = ' --a-b--c----d-|';
      const source2Marbles = ' ---b-a-b-|';
      const expectedMarbles = '---ijk-(lm)-n-|';
      const sourceValues = { a: 4, b: 5, c: -2, d: 1 };
      const expectedValues = {
        i: 9, // a + b
        j: 10, // b + b
        k: 9, // b + a
        l: 2, // a + c
        m: 3, // c + b
        n: 6 // b + d
      };

      const source1$ = cold(source1Marbles, sourceValues);
      const source2$ = cold(source2Marbles, sourceValues);

      const riddle5 = new Riddle5Solution();
      const result$ = riddle5.solve(source1$, source2$);

      expectObservable(result$).toBe(expectedMarbles, expectedValues);
    });
  });
});
