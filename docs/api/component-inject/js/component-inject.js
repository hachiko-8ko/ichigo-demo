const vm = new mi5.observable.ObservableProperty('Default Bound Component');

// Create as many default Bound Components as there are matching the [ichigo] selector.
// Using a keyword to avoid stubbing in values for the two middle inputs.
mi5.component.BoundComponent.injectBind(vm, mi5.util.kw('options', { observeViewModel: true }));

// Update them all
setTimeout(() => vm.value = 'Updated Bound Component', 5000);
setTimeout(() => vm.value = 'Pointless Exercise', 8000);
setTimeout(() => vm.value = 'Jelly Donut', 10000);

// I can't think of any other good examples at the moment. Injection is a powerful concept
// but it's really just one method.
