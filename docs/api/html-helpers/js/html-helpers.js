mi5.using (mi5.util.html, 'h');
const demoArea = document.getElementById('demoArea');
const demoForm = document.querySelector('form');

demoArea.appendChild(h.createElement('div', { innerHTML: 'Created with createElement' }));
demoArea.appendChild(h.createHtml('Created with createHtml'));
demoArea.appendChild(h.createFragment('<div>Created with createFragment</div><div>Fragments are nice because a single variable works with appendChild</div><div>Even when there are multiple child elements</div>'));
demoArea.appendChild(h.div('A div containing ')).appendChild(h.anchor('a link', 'https://github.com/hachiko-8ko/ichigo-demo'));
demoArea.appendChild(h.button('A button'));
demoArea.appendChild(h.span('A span'));
demoArea.appendChild(h.paragraph('A paragraph'));

demoForm.appendChild(h.createElement('input', { id: 'first', placeholder: 'First Name'}));
demoForm.appendChild(h.createElement('input', { id: 'last', placeholder: 'Last Name'}));

const inputs = demoForm.querySelectorAll('input');
const lastName = h.nodeListSelector(inputs, '#last');
h.setFormFieldValue(lastName, 'Doe');
