const BC = mi5.component.BoundComponent;
const vm = {
    planet: 'Betelgeuse',
    advertising: `
    <li>Luna</li>
    <li>Mars</li>
    <li>Jupiter System Union</li>
    <li>Republique Venus</li>
    `
};
const str = () => 'Earth';
const c1 = new BC(vm, { selector: '#testComponent1' });
const c2 = new BC(str, { selector: '#testComponent2' });
const c3 = new BC(vm, { selector: '#testComponent3' });
