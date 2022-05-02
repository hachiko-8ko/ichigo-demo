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
const bound = mi5.component.BoundComponent.injectBind(vm, ".test", { observeAllViewModel: true });

// This is pretty tedious so I'm just going to use array indexes
bound[0].setTextTemplate("htmlText");
bound[1].setHtmlTemplate("htmlText");
bound[2].setValueAttribute("one");
bound[3].addWriteTarget('tgt1');
bound[3].addWriteEvent();
bound[4].setValueAttribute("tgt1");
bound[5].addBooleanAttributeMapping('disabled', 'truthy');
bound[6].addBooleanAttributeMapping('disabled', 'falsy', true);
bound[7].setCssStyle("style");
bound[8].setCssClass("className");
bound[9].addCssClassSwitch("red", "truthy");
bound[10].addCssClassSwitch("bold", "falsy", true);
bound[11].setVisibility("truthy");
bound[12].setVisibility("falsy");
bound[13].setLoop("iterable", "<span><i-v>.</i-v> </span>");

for (const b of bound) {
    b.render();
}
