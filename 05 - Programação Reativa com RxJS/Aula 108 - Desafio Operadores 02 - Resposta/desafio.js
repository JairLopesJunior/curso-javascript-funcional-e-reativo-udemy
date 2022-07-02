const { of, Observable } = require('rxjs');

function terminarCom(parteFinal) {
    return function(fonte) {
        return Observable.create(subscriber => {
            fonte.subscribe({
                next(v) {
                    if(Array.isArray(v)) {
                        subscriber.next(v.filter(el => el.endsWith(parteFinal)));
                    } else if(v.endsWith(parteFinal)) {
                        subscriber.next(v);
                    }
                },
                error(e) {
                    subscriber.error(e);
                },
                complete() {
                    subscriber.complete();
                }
            });
        });
    }
}

of(['Ana Silva', 'Maria Silva', 'Pedro Rocha'])
    .pipe(terminarCom('Silva'))
    .subscribe(console.log);