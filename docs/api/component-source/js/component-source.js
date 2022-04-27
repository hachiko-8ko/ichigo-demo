mi5.using (mi5.component.BoundComponent, 'BoundComponent');
mi5.using (mi5.observable.ObservableState, 'ObservableState');

class DescendantComponent extends BoundComponent {
    constructor(vm, args) {
        super(vm, args);

        this.prop8 = "Eighth";
        this.prop9 = "Ninth".toObservable();

        // render() must be called AFTER the 2 previous lines of code or else this.prop8 and this.prop9 will be undefined
        // This next line is simplest, but you could also send { async: true } for injectBind() options.
        this.render();
    }
    prop10() {
        return "Tenth";
    }
}

const vm1 = {
    prop1: "First",
    prop2: "Second".toObservable(),
    prop3: () => "Third"
};

const vm2 = new ObservableState({ prop4: "Fourth" });
const vm3 = "Fifth";
const vm4 = "Sixth".toObservable();
const vm5 = () => "Seventh";
const vm6 = {
    iterable: [2, 3, 5, 7],
    description: 'is a prime'
};

const demoArea = document.getElementById('demoArea');
BoundComponent.injectBind(vm1, "#demo1");
BoundComponent.injectBind(vm2, "#demo2");
BoundComponent.injectBind(vm3, "#demo3");
BoundComponent.injectBind(vm4, "#demo4");
BoundComponent.injectBind(vm5, "#demo5");

// To avoid manually calling render in the constructor, you can do this:
// DescendantComponent.injectBind("Sir Not Used In This Example", "#demo6", { async: true });
DescendantComponent.injectBind("Sir Not Used In This Example", "#demo6");

BoundComponent.injectBind(vm6, "#demo7");