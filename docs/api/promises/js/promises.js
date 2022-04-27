mi5.using (mi5.promise.DeferredPromise, 'DeferredPromise');
mi5.using (mi5.promise.RepeatablePromise, 'RepeatablePromise');
mi5.using (mi5.observable.EventHandler, 'EventHandler');
mi5.using (mi5.util.html.div, 'div');

const demoArea = document.getElementById('demoArea');

const deferred = new DeferredPromise().then(s => s.toUpperCase()).then(s => demoArea.appendChild(div(s)));
deferred.resolve('some deferred data');

const repeatable = new RepeatablePromise().then(s => s.toUpperCase()).then(s => demoArea.appendChild(div(s)));
repeatable.resolve('called 1');
repeatable.resolve('called 2');
repeatable.resolve('called 3');

const emitter = new EventHandler();
emitter.subscribe(args => demoArea.appendChild(div(args.toUpperCase())), window);
emitter.invoke('event 1');
emitter.invoke('event 2');
emitter.invoke('event 3');
