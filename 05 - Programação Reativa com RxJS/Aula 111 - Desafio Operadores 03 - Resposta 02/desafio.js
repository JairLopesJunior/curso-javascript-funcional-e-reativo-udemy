const { from, Observable } = require('rxjs');

function createPipeableOperator(nextGenerator) {
    return function(source) {
        return Observable.create(subscriber => {
            source.subscribe({
                next: nextGenerator(subscriber)
            });
        });
    }
}

function primeiro() {
    return createPipeableOperator(subscriber => v => {
            subscriber.next(v);
            subscriber.complete();
    });
}

function ultimo() {
    return function(source) {
        return Observable.create(subscriber => {
            let ultimo;
            source.subscribe({
                next(v) {
                    ultimo = v;
                },
                complete() {
                    subscriber.next(ultimo);
                    subscriber.complete();
                }
            });
        });
    }
}

from([1, 2, 3, 4, 5])
    .pipe(
        primeiro(),
        //ultimo()
    )
    .subscribe(console.log);