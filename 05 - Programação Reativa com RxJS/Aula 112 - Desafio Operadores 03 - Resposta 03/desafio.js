const { from, Observable } = require('rxjs');

function createPipeableOperator(operatorFn) {
    return function(source) {
        return Observable.create(subscriber => {
            const sub = operatorFn(subscriber);
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (e => subscriber.complete()),
            });
        });
    }
}

function primeiro() {
    return createPipeableOperator(function(subscriber) {
        return {
            next(v) {
                subscriber.next(v);
                subscriber.complete();
            }
        }
    })
}

function ultimo() {
    let ultimo;
    return createPipeableOperator(subscriber => ({        
        next(v) {
            ultimo = v;
        },
        complete() {
            subscriber.next(ultimo);
            subscriber.complete();
        }
    }));
}

from([1, 2, 3, 4, 5])
    .pipe(
        //primeiro(),
        ultimo()
    )
    .subscribe(console.log);