const { of, Observable } = require('rxjs');

function terminadoCom(parteFinal) {
    return function(source) {
        return Observable.create(subscriber => {
            source.subscribe({
                next(v) {
                    if(v.includes(parteFinal)) {
                        subscriber.next(v);
                    }
                },
                complete() {
                    subscriber.complete();
                }
            })
        });
    }
}

of('Ana Silva', 'Maria Silva', 'Pedro Rocha')
    .pipe(terminadoCom('Silva'))
    .subscribe(console.log);