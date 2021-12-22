const demoArea = document.getElementById('demoArea');

const vm = {
    world: "Hello World",
    htmlText: "<i>Hello</i> World",
    one: "One",
    two: "Two",
    truthy: true,
    falsy: false,
    className: "red bold",
    style: "text-decoration: underline",
    iterable: [1, 2, 3, 5, 7],
    tgt1: "Type in the field to left".toObservable(),
    tgt2: "Type in the field to left".toObservable()
};

// Test using all divs and inputs in the demo area
const bound = mi5.component.BoundComponent.injectBind(vm, "div, input", { parent: demoArea, observeAllViewModel: true });


