mi5.using (mi5.observable.ObservableProperty, 'ObservableProperty');
mi5.using (mi5.observable.ObservableProxy, 'ObservableProxy');
mi5.using (mi5.observable.ObservableState, 'ObservableState');
mi5.using (mi5.util.html.div, 'div');

const demoArea = document.getElementById('demoArea');

const prop1 = new ObservableProperty('hello world');
prop1.subscribe(args => demoArea.appendChild(div(`{ObservableProperty} Old Value: ${args.oldValue}, New Value: ${args.newValue}`), window))

const prop2 = ObservableProxy.proximate({ planet: 'Earth', neighbors: ObservableProxy.proximate(['Moon']) });
prop2.subscribe(args => demoArea.appendChild(div(`{ObservableProxy} Old Value: ${args.oldValue}, New Value: ${args.newValue}`), window))
prop2.neighbors.subscribe(args => demoArea.appendChild(div(`{ObservableProxy.neighbors} Called: ${args.propertyName}, Old Value: [${args.oldValue}], New Value: [${args.newValue}]`)), window);

const prop3 = new ObservableState({ planet: 'Earth', neighbors: ['Moon'] });
prop3.subscribe(args => demoArea.appendChild(div(`{ObservableState} Old Value: ${JSON.stringify(args.oldValue)}, New Value: ${JSON.stringify(args.newValue)}`)), window);

prop1.value = 'goodbye world';
prop2.planet = 'Mars';
prop2.neighbors.pop();
prop2.neighbors.push('Phobos', 'Deimos');
prop3.setState((val) => {
    val.planet = 'Jupiter';
    val.neighbors = ['Europa'];
});
