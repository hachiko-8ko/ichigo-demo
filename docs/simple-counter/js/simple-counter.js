'use strict';

const observable = (0).toObservable();

document.getElementById('counter')
    .bindComponent(observable)
    .setTextTemplate()
    .observe();

setInterval(() => observable.value++, 1000);
