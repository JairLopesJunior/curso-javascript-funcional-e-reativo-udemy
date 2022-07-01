const { Observable, noop } = require('rxjs');

const obs = Observable.create(subscriber => {
    subscriber.next('RxJS');
    subscriber.next('é');
    subscriber.next('bem');
    subscriber.next('poderoso!');

    if(Math.random() > 0.5) {
        subscriber.complete();
    } else {
        subscriber.error('Que problema?!?');
    }
});

obs
    .subscribe(
        valor => console.log(`Valor: ${valor}`),
        noop,
        () => console.log('Fim!')
    );

obs
    .subscribe({
        next(valor) {
            console.log(`Valor: ${valor}`);
        },
        error(msg) {
            console.log(`Erro: ${msg}`);
        },
        complete() {
            console.log('Fim!');
        }
    });