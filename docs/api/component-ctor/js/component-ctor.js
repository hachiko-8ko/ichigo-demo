const demoArea = document.getElementById('demoArea');

/* Non-bound component examples */

class MyComponent extends mi5.component.Component {
    // Do nothing special ... not really a real-life scenario
}

const comp1 = new MyComponent().appendToParent(demoArea);
comp1.innerHTML = 'Component 1';
console.log(comp1.constructor.name); // MyComponent
console.log(comp1.id); // a random string

const divForComp2 = document.createElement('div');
divForComp2.innerHTML = 'Component 2';
divForComp2.id = 'div-for-comp2';
demoArea.appendChild(divForComp2);
const comp2 = new MyComponent({ selector: '#div-for-comp2' });
console.log(comp2.constructor.name); // MyComponent
console.log(comp2.id); // div-for-comp2

const divForComp3 = document.createElement('div');
divForComp3.innerHTML = 'Component 3';
divForComp3.id = 'div-for-comp3';
demoArea.appendChild(divForComp3);
const comp3 = new MyComponent({ element: divForComp3 });
console.log(comp3.constructor.name); // MyComponent
console.log(comp3.id); // div-for-comp3

const comp4 = new MyComponent({ type: 'div', innerHtml: 'Component 4' }).appendToParent(demoArea);
console.log(comp4.constructor.name); // MyComponent
console.log(comp4.id); // a random string

const comp5 = new MyComponent({ outerHtml: '<div id="component5">Component 5</div>' }).appendToParent(demoArea);
console.log(comp5.constructor.name); // MyComponent
console.log(comp5.id); // component5

const comp6 = new MyComponent('<div id="component6">Component 6</div>').appendToParent(demoArea);
console.log(comp6.constructor.name); // MyComponent
console.log(comp6.id); // component6

/* Bound component examples */

class MyBoundComponent extends mi5.component.BoundComponent {
    constructor(vm, options) {
        // Increment the number. Normally this wouldn't be done here but outside (actually, normally you wouldn't
        // have six components using the same view model unless they are expected to show the same data).
        // But this lets me be lazy so let's go for it.
        vm.num++;

        super(vm, options);
    }
}

// A very simple view model
const viewModel = {
    num: 0,
    description: '(bound version)'
};

const comp1b = new MyBoundComponent(viewModel);
comp1b.setTemplate('Component <i-v>num</i-v> <i-v>description</i-v>', true); // because no innerHTML on creation, use setTemplate to set the template text
comp1b.appendToParent(demoArea);
console.log(comp1b.constructor.name); // MyBoundComponent
console.log(comp1b.id); // a random string

const divForComp2b = document.createElement('div');
divForComp2b.innerHTML = 'Component <i-v>num</i-v> <i-v>description</i-v>';
divForComp2b.id = 'div-for-comp2b';
demoArea.appendChild(divForComp2b);
const comp2b = new MyBoundComponent(viewModel, { selector: '#div-for-comp2b' });
console.log(comp2b.constructor.name); // MyBoundComponent
console.log(comp2b.id); // div-for-comp2b

const divForComp3b = document.createElement('div');
divForComp3b.innerHTML = 'Component <i-v>num</i-v> <i-v>description</i-v>';
divForComp3b.id = 'div-for-comp3b';
demoArea.appendChild(divForComp3b);
const comp3b = new MyBoundComponent(viewModel, { element: divForComp3b });
console.log(comp3b.constructor.name); // MyBoundComponent
console.log(comp3b.id); // div-for-comp3b

const comp4b = new MyBoundComponent(viewModel, { type: 'div', innerHtml: 'Component <i-v>num</i-v> <i-v>description</i-v>' }).appendToParent(demoArea);
console.log(comp4b.constructor.name); // MyBoundComponent
console.log(comp4b.id); // a random string

const comp5b = new MyBoundComponent(viewModel, { outerHtml: '<div id="component5b">Component <i-v>num</i-v> <i-v>description</i-v></div>' }).appendToParent(demoArea);
console.log(comp5b.constructor.name); // MyBoundComponent
console.log(comp5b.id); // component5b

const comp6b = new MyBoundComponent(viewModel, '<div id="component6b">Component <i-v>num</i-v> <i-v>description</i-v></div>').appendToParent(demoArea);
console.log(comp6b.constructor.name); // MyBoundComponent
console.log(comp6b.id); // component6b
