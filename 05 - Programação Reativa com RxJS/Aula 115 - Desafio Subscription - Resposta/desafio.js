// Esperar 3000
// Gerar números de 500
const { timer, Subscription } = require('rxjs');

const obs = timer(3000, 500);

const sub = obs.subscribe(num => {
    console.log(`#1 Gerou o número ${num}`);
});

const sub2 = obs.subscribe(num => {
    console.log(`#2 Gerou o número ${num}`);
});

const subs = new Subscription();
subs.add(sub);
subs.add(sub2);

// sub.add(sub2); Pode fazer assim

// Deposi de 10000 chamar o unsubscribe
setTimeout(() => {
    subs.unsubscribe(); // Pode fazer assim
    // sub.unsubscribe();
    //sub2.unsubscribe();
}, 10000);