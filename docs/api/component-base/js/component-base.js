class MyComponent extends mi5.component.Component {
    log(evt) {
        console.log(evt.currentTarget.value || 'Clicked');
    }
}

const demoArea = document.getElementById('demoArea');

demoArea.appendChild(document.createElement('replace-me'));
demoArea.appendChild(document.createElement('replace-me'));
demoArea.appendChild(document.createElement('dont-replace-me'));
// Use the div helper to make it a one-liner
const newParent = demoArea.appendChild(mi5.html.div({ id: 'new-parent' }));
// Use the createElement helper to avoid involving extra setAttribute() or setProperty() calls
const input = demoArea.appendChild(mi5.html.createElement('input', { attributes: { i5_event: true, _input_: 'log' }}));

const newComponent1 = mi5.component.Component.inject('replace-me', '<div id="replacedComponent">I was replaced</div>', MyComponent)[0];
console.log('1: ', newComponent1.constructor.name);         // 1: MyComponent
console.log(newComponent1.content);                         // <div id="replacedComponent">I was replaced</div>
console.log(newComponent1.id);                              // replacedComponent
newComponent1.className = 'my-class my-other-class';
console.log(newComponent1.className);                       // my-class my-other-class
newComponent1.addClass('not-my-class');
console.log(newComponent1.classList);                       // ["my-class", "my-other-class", "not-my-class", value: "my-class my-other-class not-my-class"]

const newComponent2 = MyComponent.inject('dont-replace-me')[0];
console.log('2: ', newComponent2.constructor.name);         // 2: MyComponent
console.log(newComponent2.content.tagName);                 // DONT-REPLACE-ME
newComponent2.innerHTML = 'I was not replaced';
console.log(newComponent2.innerHTML);                       // I was not replaced
newComponent2.setStyle({ 'font-weight': 'bold'});
console.log(newComponent2.style);                           // {0:"font-weight", ....}
newComponent2.addEventListener('click', newComponent2.log.bind(this));
newComponent2.content.click();                              // Clicked
const sibling = newComponent2.append(mi5.html.div('musume')).appendChild(mi5.html.div('musuko'));
console.log(sibling.parentElement);                         // <dont-replace-me ...><div>musume</div><div>musuko</div></dont-replace-me>
MyComponent.inject('dont-replace-me div');                  // Make the siblings components
console.log([...newComponent2.getAllChildComponents()]);    // [MyComponent, MyComponent]

newComponent2.appendToParent(newParent);
console.log(newComponent2.content.parentElement);           // <div id="new-parent">...</div>

const newComponent3 = MyComponent.inject('input')[0];
newComponent3.value = 'I am a little teapot';
console.log(newComponent3.value);                           // I am a little teapot
console.log(newComponent3.content);                         // <input i5_event _input_="log" />
newComponent3.addInlineEventListeners();                    // Go ahead, type something

// All components created or injected are mapped
console.log(mi5.component.ComponentMap.components.get(input));     // MyComponent { content: input}
newComponent3.unmapComponent();
console.log(mi5.component.ComponentMap.components.get(input));     // undefined
