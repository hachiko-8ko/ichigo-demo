(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./Css/CssInlineRule"));
__export(require("./Css/CssRule"));
__export(require("./Css/CssRuleContract"));
__export(require("./Css/CssVariable"));
__export(require("./Css/GetCssRulesInElement"));
__export(require("./Html/CreateElement"));
__export(require("./Html/DeleteNodeContent"));
__export(require("./Html/ElementType"));
__export(require("./Html/EscapeHtml"));
__export(require("./Html/FindIndexInParent"));
__export(require("./Html/FormFieldValue"));
__export(require("./Html/ExtractNodeContent"));
__export(require("./Html/QuerySelectorNodeList"));
__export(require("./Html/ValidateUniqueDomIds"));
__export(require("./HtmlComponent/BoundComponent"));
__export(require("./HtmlComponent/Component"));
__export(require("./HtmlComponent/ComponentMap"));
__export(require("./HtmlComponent/Options/IExistingElementOptions"));
__export(require("./HtmlComponent/Options/IInnerHtmlOptions"));
__export(require("./HtmlComponent/Options/IExistingLookupOptions"));
__export(require("./HtmlComponent/Options/IOuterHtmlOptions"));
__export(require("./HtmlComponent/Options/IComponentBindingOptions"));
__export(require("./Observable/IObservable"));
__export(require("./Observable/ObservableAssign"));
__export(require("./Observable/ObservableBase"));
__export(require("./Observable/ObservableProperty"));
__export(require("./Observable/ObservableProxy"));
__export(require("./Observable/ObservableState"));
__export(require("./Router/PageRouter"));
__export(require("./Router/AdvancedPageRouter"));
__export(require("./System/Async/DynamicWebWorker"));
__export(require("./System/Async/DeferredPromise"));
__export(require("./System/Async/Delay"));
__export(require("./System/Async/RepeatablePromise"));
__export(require("./System/Collections/ArrayUtilities"));
__export(require("./System/Collections/OrderBy"));
__export(require("./System/EventHandler/ArrayChangedEventArgs"));
__export(require("./System/EventHandler/Delegate"));
__export(require("./System/EventHandler/EventHandler"));
__export(require("./System/EventHandler/PropertyChangedEventArgs"));
__export(require("./System/Types/Constructable"));
__export(require("./System/Types/KeywordArguments"));
__export(require("./System/Types/NoneType"));
__export(require("./System/Utility/Assert"));
__export(require("./System/Utility/CloneDeep"));
__export(require("./System/Utility/CloneObject"));
__export(require("./System/Utility/Elvis"));
__export(require("./System/Utility/IsInteger"));
__export(require("./System/Utility/IsPrimitive"));
__export(require("./System/Utility/GetUniqueId"));
__export(require("./System/Utility/ObjectFullAssign"));

},{"./Css/CssInlineRule":2,"./Css/CssRule":3,"./Css/CssRuleContract":4,"./Css/CssVariable":6,"./Css/GetCssRulesInElement":7,"./Html/CreateElement":12,"./Html/DeleteNodeContent":13,"./Html/ElementType":14,"./Html/EscapeHtml":15,"./Html/ExtractNodeContent":16,"./Html/FindIndexInParent":17,"./Html/FormFieldValue":18,"./Html/QuerySelectorNodeList":19,"./Html/ValidateUniqueDomIds":20,"./HtmlComponent/BoundComponent":21,"./HtmlComponent/Component":22,"./HtmlComponent/ComponentMap":23,"./HtmlComponent/Options/IComponentBindingOptions":24,"./HtmlComponent/Options/IExistingElementOptions":25,"./HtmlComponent/Options/IExistingLookupOptions":26,"./HtmlComponent/Options/IInnerHtmlOptions":27,"./HtmlComponent/Options/IOuterHtmlOptions":28,"./Observable/IObservable":29,"./Observable/ObservableAssign":34,"./Observable/ObservableBase":35,"./Observable/ObservableProperty":36,"./Observable/ObservableProxy":37,"./Observable/ObservableState":38,"./Router/AdvancedPageRouter":39,"./Router/PageRouter":40,"./System/Async/DeferredPromise":41,"./System/Async/Delay":42,"./System/Async/DynamicWebWorker":43,"./System/Async/RepeatablePromise":44,"./System/Collections/ArrayUtilities":45,"./System/Collections/OrderBy":46,"./System/EventHandler/ArrayChangedEventArgs":47,"./System/EventHandler/Delegate":48,"./System/EventHandler/EventHandler":49,"./System/EventHandler/PropertyChangedEventArgs":50,"./System/Types/Constructable":51,"./System/Types/KeywordArguments":52,"./System/Types/NoneType":53,"./System/Utility/Assert":54,"./System/Utility/CloneDeep":55,"./System/Utility/CloneObject":56,"./System/Utility/Elvis":57,"./System/Utility/GetUniqueId":58,"./System/Utility/IsInteger":59,"./System/Utility/IsPrimitive":60,"./System/Utility/ObjectFullAssign":61}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CssRule_1 = require("./CssRule");
/**
 * A simple, default Css Rule that is with an inline initializer in the constructor, useful for quick and dirty inline classes.
 */
class CssInlineRule extends CssRule_1.CssRule {
    constructor(selector, initial, parent) {
        super(parent);
        Object.assign(this, initial);
        this.selector$ = selector;
    }
}
exports.CssInlineRule = CssInlineRule;

},{"./CssRule":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ElementType_1 = require("../Html/ElementType");
const CreateElement_1 = require("../Html/CreateElement");
const Constructable_1 = require("../System/Types/Constructable");
const GetUniqueId_1 = require("../System/Utility/GetUniqueId");
const CssVariable_1 = require("./CssVariable");
/**
 * A Javascript CSS rule. Note the capitalization. This isn't the same as CSSRule. I'm considering renaming this to
 * CssJsRule but I'm hoping I think up something better. It has to be more generic than CssClass because, well, there's
 * more to CSS than class selectors.
 */
class CssRule {
    constructor(parent) {
        /** Storing this somewhere other than the HEAD would make it easy to drop the sheet on page change. */
        this.styleSheetParent$ = document.head;
        this.styleSheetId$ = GetUniqueId_1.getUniqueId();
        this.extends$ = [];
        this.nested$ = [];
        this.revert$ = false;
        this._constructed$ = false;
        this._selectors$ = [];
        if (parent) {
            this.styleSheetParent$ = parent;
        }
    }
    render$(parentSelector) {
        if (!this._constructed$) {
            // Remember, we cannot read properties of this in the constructor, because their population is emitted
            // after the super() call. But we don't want to clone this object and repeat this every time it's rendered.
            this._constructed$ = true;
            if (this.revert$) {
                this.all = "initial";
            }
            this._extendClass$();
            if (this.nested$) {
                if (!Array.isArray(this.nested$)) {
                    this.nested$ = [this.nested$];
                }
                for (const [idx, nest] of this.nested$.entries()) {
                    if (Constructable_1.constructorTypeGuard(nest)) {
                        this.nested$[idx] = new nest(this.styleSheetParent$);
                    }
                }
            }
            this._buildSelectors$(parentSelector);
        }
        // This creates a separate style element for each rule. That might seem pretty excessive, but it's the only way
        // to make it easy to update rules. The API for dealing with CSS in HTML5 is NAAAAAAASTY.
        let styleElement = this.styleSheetParent$.querySelector('#' + this.styleSheetId$);
        if (styleElement) {
            this.styleSheetParent$.removeChild(styleElement);
        }
        styleElement = this.styleSheetParent$.appendChild(CreateElement_1.createElement(ElementType_1.elementType.HTMLStyleElement, { id: this.styleSheetId$ }));
        const sheet = styleElement.sheet;
        this._buildRule$(sheet);
        if (this.nested$) {
            // We previously made this an array of constructed types.
            for (const nest of this.nested$) {
                nest.styleSheetParent$ = this.styleSheetParent$;
                for (const sel of this._selectors$) {
                    nest.render$(sel);
                }
            }
        }
        return this;
    }
    remove$() {
        const styleElement = this.styleSheetParent$.querySelector('#' + this.styleSheetId$);
        if (styleElement) {
            this.styleSheetParent$.removeChild(styleElement);
        }
    }
    /**
     * Implement "multiple inheritance".
     *
     * This checks only CSS properties. If you inherit from other CssRule classes that
     * themselves have extends$ set, those are not checked. I don't think there's enough
     * justification to bring recursion into this.
     *
     * Note that priority is in the opposite direction of normal inheritance priority.
     * Normally, when looking for a property, the runtime traverses the inheritance tree
     * and uses the first occurrence. In CSS, the LAST occurance takes priority.
     */
    _extendClass$() {
        if (!this.extends$) {
            return;
        }
        if (!Array.isArray(this.extends$)) {
            this.extends$ = [this.extends$];
        }
        for (const ex of this.extends$) {
            let traitSource;
            if (Constructable_1.constructorTypeGuard(ex)) {
                traitSource = new ex();
            }
            else {
                traitSource = ex;
            }
            const names = Array.from(new Set(findPropertyNames(traitSource)));
            for (const key of names) {
                // Filter out names with special meaning
                if (key.endsWith('$')) {
                    continue;
                }
                this[key] = traitSource[key];
            }
        }
    }
    _buildSelectors$(parentSelector) {
        parentSelector = (parentSelector || '');
        // If scopeElement$ is set, <style scoped> is simulated in a hacky way. It generates an random class name and adds
        // that to both the selector and the element. This similar to the way CSS Modules and Angular do it, except the
        // random selector comes during runtime instead of a custom build process.
        if (this.scopeElement$ && !this._fakeScopeClass$) {
            this._fakeScopeClass$ = this._fakeScopeClass$ || 'scope-' + GetUniqueId_1.getUniqueId();
            this.scopeElement$.classList.add(this._fakeScopeClass$);
        }
        for (let sel of this.selector$.split(',').map(m => m.trim())) {
            sel = (sel || '').replace('&', ''); // Ampersand tells us where to start (allows a space) but it's invalid CSS
            if (this._fakeScopeClass$) {
                if (!sel) {
                    this._selectors$.push(parentSelector + '.' + this._fakeScopeClass$);
                }
                else {
                    // produce an id like "div.autogen .otherclass, .autogen div .otherclass"
                    const words = sel.split(' ');
                    words[0] = parentSelector + words[0] + '.' + this._fakeScopeClass$;
                    this._selectors$.push(words.join(' ').trim());
                    // There is no CSS selector that matches an item and its children. It takes 2 rules.
                    this._selectors$.push((parentSelector + '.' + this._fakeScopeClass$ + ' ' + sel).trim());
                }
            }
            else if (!sel) {
                // A blank selector will fail
                if (parentSelector) {
                    this._selectors$.push(parentSelector);
                }
                else {
                    this._selectors$.push('body');
                }
            }
            else {
                this._selectors$.push(parentSelector + sel);
            }
        }
    }
    _buildRule$(sheet) {
        const ruleText = [];
        const variables = [];
        const names = Array.from(new Set(findPropertyNames(this)));
        for (const key of names) {
            // Filter out names with special meaning
            if (key.endsWith('$') || !this[key] || typeof this[key] === 'function') {
                continue;
            }
            // If Typescript was working correctly, we know that all properties that don't end in $ are RuleValue type.
            const val = this[key];
            if (typeof val === 'string') {
                ruleText.push(`${key}: ${val}`);
            }
            else if (val instanceof CssVariable_1.CssVariable) {
                variables.push(val);
                ruleText.push(`${key}: var(--${val.name})`);
            }
            else {
                // Nested properties, which extend the key and add more rules
                for (const np of Object.getOwnPropertyNames(val)) {
                    // Should never happen
                    if (np.endsWith('$')) {
                        continue;
                    }
                    const vp = val[np];
                    if (typeof vp === 'string') {
                        ruleText.push(`${key}-${np}: ${vp}`);
                    }
                    else {
                        variables.push(vp);
                        ruleText.push(`${key}-${np}: var(--${val.name})`);
                    }
                }
            }
        }
        const fullSelector = this._selectors$.join(', ');
        const fullText = ruleText.join('; \n');
        if (!fullText) {
            // tslint:disable-next-line:no-console
            console.warn(`No CSS properties defined for rule: ${this.constructor.name} on ${fullSelector}.`);
        }
        let fullRule = `${fullSelector} { \n${fullText}; \n}`;
        if (this.media$) {
            fullRule = `@media ${this.media$} { \n${fullRule}\n}`;
        }
        sheet.insertRule(fullRule, 0);
        // Add all the variable values
        let i = 1;
        for (const v of variables) {
            const varText = `${v.scope} { --${v.name}: ${v.value}; }`;
            sheet.insertRule(varText, i);
            i++;
        }
    }
}
exports.CssRule = CssRule;
function findPropertyNames(obj) {
    const result = [];
    result.push(...Object.getOwnPropertyNames(obj).filter(f => f !== 'constructor'));
    const proto = Object.getPrototypeOf(obj);
    if (proto && proto.constructor.name !== 'Object') {
        result.push(...findPropertyNames(proto));
    }
    return result;
}

},{"../Html/CreateElement":12,"../Html/ElementType":14,"../System/Types/Constructable":51,"../System/Utility/GetUniqueId":58,"./CssVariable":6}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This type is here for a bullshit reason, which is that if you want to require values to be all strings, this copypasta
 * must be included in the definition of the class. That's going far beyond time checking.
 * https://github.com/microsoft/TypeScript/issues/15300 (not just interfaces)
 */
class CssSimpleRule {
    constructor(initial) {
        if (initial) {
            Object.assign(this, initial);
        }
    }
}
exports.CssSimpleRule = CssSimpleRule;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constructable_1 = require("../System/Types/Constructable");
class CssStyleSheet {
    constructor(rules, parent) {
        this.rules = [];
        if (rules) {
            for (const rule of rules) {
                if (Constructable_1.constructorTypeGuard(rule)) {
                    this.rules.push(new rule(parent));
                }
                else {
                    rule.styleSheetParent$ = parent || rule.styleSheetParent$;
                    this.rules.push(rule);
                }
            }
        }
    }
    render() {
        for (const rule of this.rules) {
            rule.render$();
        }
    }
    remove() {
        for (const rule of this.rules) {
            rule.remove$();
        }
    }
}
exports.CssStyleSheet = CssStyleSheet;

},{"../System/Types/Constructable":51}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Use to define a CSS custom property.
 */
class CssVariable {
    constructor(name, value, scope = ':root') {
        this.scope = ':root';
        this.name = name;
        this.value = value;
        this.scope = scope;
    }
}
exports.CssVariable = CssVariable;

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCssRulesInElement(element) {
    const result = [];
    for (const style of element.querySelectorAll('style')) {
        for (const rule of style.sheet.cssRules) {
            // A very minimum of pretty printing. I may beef it up later.
            result.push(rule.cssText.replace(/\{/g, '\n    {\n   ').replace(/;/g, ';\n    '));
        }
    }
    return result.join('\n');
}
exports.getCssRulesInElement = getCssRulesInElement;

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This script contains extensions to provide additional functions used by Ichigo.
 * In your main process, import this script (import '/path/to/Ichigo/IchigoExtensionLoader') to add
 * these extensions to prototypes.
 */
require("./Extensions/ObservableExtensions");
require("./Extensions/ComponentExtensions");
require("./Extensions/ElementExtensions");

},{"./Extensions/ComponentExtensions":9,"./Extensions/ElementExtensions":10,"./Extensions/ObservableExtensions":11}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IComponentBindingOptions_1 = require("../HtmlComponent/Options/IComponentBindingOptions");
const BoundComponent_1 = require("../HtmlComponent/BoundComponent");
const ComponentMap_1 = require("../HtmlComponent/ComponentMap");
HTMLElement.prototype.getComponent = function _getComponent() {
    return ComponentMap_1.ComponentMap.components.get(this);
};
HTMLElement.prototype.bindComponent = function _bind(viewModel) {
    return new BoundComponent_1.BoundComponent(viewModel, new IComponentBindingOptions_1.ExistingElementBindingOptions({ element: this }));
};
HTMLElement.prototype.deleteComponent = function _deleteComponent() {
    const component = ComponentMap_1.ComponentMap.components.get(this);
    if (!component) {
        // tslint:disable-next-line:no-console
        console.error('Not a component');
        return;
    }
    if (component instanceof BoundComponent_1.BoundComponent) {
        component.dispose();
    }
    const parent = this.parentNode || document;
    parent.removeChild(this);
};

},{"../HtmlComponent/BoundComponent":21,"../HtmlComponent/ComponentMap":23,"../HtmlComponent/Options/IComponentBindingOptions":24}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateElement_1 = require("../Html/CreateElement");
/**
 * Set the parent for an element (join the parent's family as a new child), the opposite of appendChild. Fluent, for chaining, so
 * it's not a perfect analog (appendChild returns the argument while this returns the extended object ... though both are the child).
 */
HTMLElement.prototype.appendToParent = function _appendToParent(parent) {
    parent.appendChild(this);
    return this;
};
/**
 * Fluent version of appendChild, which returns the parent, not the child (the argument).
 */
HTMLElement.prototype.appendChildFluent = function _appendChildFluent(child) {
    this.appendChild(child);
    return this;
};
/**
 * Add the element after the current item, at the same level. Not fluent, so this is the same pattern as appendChild.
 */
HTMLElement.prototype.appendSibling = function _appendSibling(next) {
    const parent = this.parentNode || document;
    return parent.appendChild(next);
};
/**
 * Add the element after the current item, at the same level. Fluent.
 */
HTMLElement.prototype.appendSiblingFluent = function _appendSiblingFluent(next) {
    const parent = this.parentNode || document;
    parent.appendChild(next);
    return this;
};
/**
 * Replace the element. Not fluent, so this is the same pattern as appendChild. There is no fluent version because
 * this is deleting the extended object.
 */
HTMLElement.prototype.replaceWith = function _replaceWith(newElement) {
    const parent = this.parentNode || document;
    parent.replaceChild(newElement, this);
    return newElement;
};
/**
 * Swap two elements from their places in the DOM, returning the argument.
 */
HTMLElement.prototype.swap = function _swap(element) {
    const parent = this.parentNode || document;
    const elementParent = element.parentNode || document;
    const placeHolder = document.createElement('span');
    elementParent.replaceChild(placeHolder, element);
    parent.replaceChild(element, this);
    elementParent.replaceChild(this, placeHolder);
    return element;
};
/**
 * A wrapper around document.removeChild that uses the same API as the other functions here.
 * Included for the sake of consistency.
 */
HTMLElement.prototype.extract = function _extract() {
    const parent = this.parentNode || document;
    return parent.removeChild(this);
};
/**
 * Fluent version of addEventListener.
 */
HTMLElement.prototype.addEventListenerFluent = function _addEventListenerFluent(eventType, event, options) {
    this.addEventListener(eventType, event, options);
    return this;
};
/**
 * Fluent style adder.
 */
HTMLElement.prototype.addStyle = function _addStyle(property, value) {
    this.style.setProperty(property, value);
    return this;
};
/**
 * Fluent class adder.
 */
HTMLElement.prototype.addClass = function _addClass(classNames) {
    if (!Array.isArray(classNames)) {
        classNames = [classNames];
    }
    // Need to also allow classes in the "class1 class2" format
    for (const c of [].concat(...classNames
        .map(q => q.split(' '))
        .filter(q => q))) {
        this.classList.add(c);
    }
    return this;
};
/**
 * Create an element using the createElement helper function and add it to the fragment, returning the new element.
 */
DocumentFragment.prototype.createElement = function _createElement(tagName, properties, attributes) {
    const element = CreateElement_1.createElement(tagName, properties);
    this.appendChild(element);
    return element;
};
/**
 * Create an element using the createElement helper function and add it to the fragment. Fluent version, so it's easy to quickly add
 * a bunch of elements to the fragment.
 */
DocumentFragment.prototype.createElementFluent = function _createElementFluent(tagName, properties, attributes) {
    const element = CreateElement_1.createElement(tagName, properties);
    this.appendChild(element);
    return this;
};
/**
 * Take a document fragment and add its contents to a parent element. Cannot be fluent because at this point, the fragment is empty and
 * pretty useless, so this returns the parent argument (as good as any other option).
 */
DocumentFragment.prototype.appendToParent = function _appendToParent(parent) {
    parent.appendChild(this);
    return parent;
};

},{"../Html/CreateElement":12}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ObservableProperty_1 = require("../Observable/ObservableProperty");
/**
 * Quickly convert an object to a ObservableProperty.
 */
Object.prototype.toObservable = function (name) {
    return new ObservableProperty_1.ObservableProperty(this, { name });
};
/**
 * Quickly convert a string to an ObservableProperty.
 */
String.prototype.toObservable = function (name) {
    return new ObservableProperty_1.ObservableProperty(this, { name });
};
/**
 * Quickly convert a number to a ObservableProperty.
 */
Number.prototype.toObservable = function (name) {
    return new ObservableProperty_1.ObservableProperty(this, { name });
};
/**
 * Quickly convert a bool to a ObservableProperty.
 */
Boolean.prototype.toObservable = function (name) {
    return new ObservableProperty_1.ObservableProperty(this, { name });
};

},{"../Observable/ObservableProperty":36}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KeywordArguments_1 = require("../System/Types/KeywordArguments");
const ElementType_1 = require("./ElementType");
const ExtractNodeContent_1 = require("./ExtractNodeContent");
function createElement(tagName, properties = {}, attributes) {
    ({ tagName, properties = {}, attributes } = KeywordArguments_1.Kwarg.parseArgs({ tagName, properties, attributes })); // kwargline
    // Allow attributes to be sent on properties, providing a cleaner interface.
    // It allows you to send createElement('div', {attributes: { class: 'foo' }}) instead of createElement('div', null, { class: 'foo' });
    // Another option is to use Kwargs, but not everyone wants to.
    if (properties && 'attributes' in properties) {
        attributes = Object.assign(attributes || {}, properties.attributes);
        delete properties.attributes;
    }
    return create(tagName, properties, attributes);
}
exports.createElement = createElement;
function create(tag, properties = {}, attributes) {
    const element = (document.createElement(tag));
    if (attributes) {
        for (const attr of Object.getOwnPropertyNames(attributes)) {
            element.setAttribute(attr, attributes[attr]);
        }
    }
    // DOM properties take precedence over attributes, because in some cases, they override the initial value.
    Object.assign(element, properties);
    return element;
}
/**
 * Quick helper to create HTML from any HTML element provided.
 * Use like const div = createHtml<HTMLDivElement>("<div>Something</div>") or const custom = createHtml("<some-tag></some-tag>").
 * If multiple elements or a plain text string with no HTML is provided, then it will be wrapped in a div, so it can keep
 * returning an HTMLElement
 */
function createHtml(html, inline = false) {
    let wrapper;
    if (inline) {
        wrapper = span((html || '').trim());
    }
    else {
        wrapper = div((html || '').trim());
    }
    const nodes = wrapper.childNodes;
    // Multiple nodes, return the wrapping div
    // e.g. "This is a <em>test</em>" or "<div>Hello</div><div>World</div>"
    if (nodes.length !== 1) {
        return wrapper;
    }
    // If just a textnode (or empty), return a span. Text is incompatible with HTMLElement so can't return that
    // e.g. "Hello world"
    if (!wrapper.firstElementChild) {
        if (inline) {
            return wrapper; // This is a span
        }
        else {
            return span(wrapper.innerHTML);
        }
    }
    // Else return the single child.
    // e.g. "<div><div>Hello</div><div>World</div></div>"
    return wrapper.firstElementChild;
}
exports.createHtml = createHtml;
/**
 * Quick helper to create a document fragment with any html.
 */
function createFragment(html) {
    const wrapper = div((html || '').trim());
    return ExtractNodeContent_1.extractNodeContent(wrapper);
}
exports.createFragment = createFragment;
function div(htmlOrProperties = "", propertiesOrAttributes = {}, attributes) {
    ({ htmlOrProperties = "", propertiesOrAttributes = {}, attributes } = KeywordArguments_1.Kwarg.parseArgs({ htmlOrProperties, propertiesOrAttributes, attributes })); // kwargline
    return _internal(ElementType_1.elementType.HTMLDivElement, htmlOrProperties, propertiesOrAttributes, attributes);
}
exports.div = div;
function span(htmlOrProperties = "", propertiesOrAttributes = {}, attributes) {
    ({ htmlOrProperties = "", propertiesOrAttributes = {}, attributes } = KeywordArguments_1.Kwarg.parseArgs({ htmlOrProperties, propertiesOrAttributes, attributes })); // kwargline
    return _internal(ElementType_1.elementType.HTMLSpanElement, htmlOrProperties, propertiesOrAttributes, attributes);
}
exports.span = span;
function paragraph(htmlOrProperties = "", propertiesOrAttributes = {}, attributes) {
    ({ htmlOrProperties = "", propertiesOrAttributes = {}, attributes } = KeywordArguments_1.Kwarg.parseArgs({ htmlOrProperties, propertiesOrAttributes, attributes })); // kwargline
    return _internal(ElementType_1.elementType.HTMLParagraphElement, htmlOrProperties, propertiesOrAttributes, attributes);
}
exports.paragraph = paragraph;
function anchor(htmlOrProperties = "", hrefOrProperties = {}, propertiesOrAttributes = {}, attributes) {
    ({ htmlOrProperties = "", hrefOrProperties = {}, propertiesOrAttributes = {}, attributes } = KeywordArguments_1.Kwarg.parseArgs({ htmlOrProperties, hrefOrProperties, propertiesOrAttributes, attributes })); // kwargline
    const tmp = _internal(ElementType_1.elementType.HTMLAnchorElement, htmlOrProperties, propertiesOrAttributes, attributes);
    if (typeof hrefOrProperties === 'string') {
        tmp.href = String(hrefOrProperties || '');
    }
    return tmp;
}
exports.anchor = anchor;
function button(htmlOrProperties = "", propertiesOrAttributes = {}, attributes) {
    ({ htmlOrProperties = "", propertiesOrAttributes = {}, attributes } = KeywordArguments_1.Kwarg.parseArgs({ htmlOrProperties, propertiesOrAttributes, attributes })); // kwargline
    return _internal(ElementType_1.elementType.HTMLButtonElement, htmlOrProperties, propertiesOrAttributes, attributes);
}
exports.button = button;
// Common private functions for overloads. Prevents lots of copypasta.
// This works for everything because TypeScript is keeping the types valid. In pure JS, bugs could be created (for example, passing an inner
// element to a paragraph ... disallowed by TS but the code is there in the JS)
function _internal(type, htmlOrProperties = "", propertiesOrAttributes = {}, attributes) {
    if (htmlOrProperties instanceof HTMLElement) {
        return _ovr1(type, htmlOrProperties, propertiesOrAttributes, attributes);
    }
    else if (typeof htmlOrProperties === "object") {
        return _ovr3(type, htmlOrProperties, propertiesOrAttributes);
    }
    else {
        return _ovr2(type, String(htmlOrProperties || ''), propertiesOrAttributes, attributes);
    }
}
function _ovr1(type, innerElement, props, attrs) {
    const e = createElement(type, props, attrs);
    e.appendChild(innerElement);
    return e;
}
function _ovr2(type, innerHtml, props, attrs) {
    props = props || {};
    props.innerHTML = innerHtml;
    return createElement(type, props, attrs);
}
function _ovr3(type, props, attrs) {
    props = props || {};
    props.innerHTML = props.innerHTML || '';
    return createElement(type, props, attrs);
}

},{"../System/Types/KeywordArguments":52,"./ElementType":14,"./ExtractNodeContent":16}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Delete the contents of any html node.
 */
function deleteNodeContent(node) {
    const range = document.createRange();
    range.selectNodeContents(node);
    range.deleteContents();
}
exports.deleteNodeContent = deleteNodeContent;

},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A helper for CreateElement, roughly mapping to HtmlElement types, but not perfectly because it's impossible
 * (there's no perfect 1:1 relationship).
 */
var elementType;
(function (elementType) {
    elementType["HTMLAnchorElement"] = "a";
    elementType["HTMLAreaElement"] = "area";
    elementType["HTMLAudioElement"] = "audio";
    elementType["HTMLBRElement"] = "br";
    elementType["HTMLBaseFontElement"] = "basefont";
    elementType["HTMLBlockQuoteElement"] = "blockquote";
    elementType["HTMLButtonElement"] = "button";
    elementType["HTMLCanvasElement"] = "canvas";
    elementType["HTMLDataElement"] = "data";
    elementType["HTMLDataListElement"] = "datalist";
    elementType["HTMLDialogElement"] = "dialog";
    elementType["HTMLDivElement"] = "div";
    elementType["HTMLDListElement"] = "dl";
    elementType["HTMLEmbedElement"] = "embed";
    elementType["HTMLFieldSetElement"] = "fieldset";
    elementType["HTMLFormElement"] = "form";
    elementType["HTMLHeading1Element"] = "h1";
    elementType["HTMLHeading2Element"] = "h2";
    elementType["HTMLHeading3Element"] = "h3";
    elementType["HTMLHeading4Element"] = "h4";
    elementType["HTMLHeading5Element"] = "h5";
    elementType["HTMLHeading6Element"] = "h6";
    elementType["HTMLHRElement"] = "hr";
    elementType["HTMLImageElement"] = "image";
    elementType["HTMLInputElement"] = "input";
    elementType["HTMLLabelElement"] = "label";
    elementType["HTMLLegendElement"] = "legend";
    elementType["HTMLLIElement"] = "li";
    elementType["HTMLLinkElement"] = "link";
    elementType["HTMLMapElement"] = "map";
    elementType["HTMLMeterElement"] = "meter";
    elementType["HTMLModDelElement"] = "del";
    elementType["HTMLModInsElement"] = "ins";
    elementType["HTMLOListElement"] = "ol";
    elementType["HTMLObjectElement"] = "object";
    elementType["HTMLOptGroupElement"] = "optgroup";
    elementType["HTMLOptionElement"] = "option";
    elementType["HTMLOutputElement"] = "output";
    elementType["HTMLParagraphElement"] = "p";
    elementType["HTMLParamElement"] = "param";
    elementType["HTMLPictureElement"] = "picture";
    elementType["HTMLPreElement"] = "pre";
    elementType["HTMLProgressElement"] = "progress";
    elementType["HTMLQuoteElement"] = "q";
    elementType["HTMLScriptElement"] = "script";
    elementType["HTMLSelectElement"] = "select";
    elementType["HTMLSourceElement"] = "source";
    elementType["HTMLSpanElement"] = "span";
    elementType["HTMLStyleElement"] = "style";
    elementType["HTMLTableCaptionElement"] = "caption";
    elementType["HTMLTableDataCellElement"] = "td";
    elementType["HTMLTableHeaderCellElement"] = "th";
    elementType["HTMLTableColElement"] = "col";
    elementType["HTMLTableColGroupElement"] = "colgroup";
    elementType["HTMLTableElement"] = "table";
    elementType["HTMLTableRowElement"] = "tr";
    elementType["HTMLTableSectionBodyElement"] = "tbody";
    elementType["HTMLTableSectionFooterElement"] = "tfoot";
    elementType["HTMLTableSectionHeaderElement"] = "thead";
    elementType["HTMLTemplateElement"] = "template";
    elementType["HTMLTextAreaElement"] = "textarea";
    elementType["HTMLTimeElement"] = "time";
    elementType["HTMLTrackElement"] = "track";
    elementType["HTMLUListElement"] = "ul";
    elementType["HTMLVideoElement"] = "video";
})(elementType = exports.elementType || (exports.elementType = {}));

},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function escapeHtml(input) {
    // There isn't a built-in way to do this, still, so we need a helper function.
    // The article "You are probably misusing DOM text methods" convinced me to do it this way,
    // vs. createTextNode. Though createTextNode would probably work fine for setting innerHTML.
    if (!input) {
        return input;
    }
    const escapes = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "/": "&#x2F;",
        "=": "&#x3D;",
        '"': "&quot;",
        "'": "&#39;",
        "`": "&#x60;"
    };
    return input.replace(/[&<>"'`=\/]/g, s => escapes[s]);
}
exports.escapeHtml = escapeHtml;

},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get the contents of any html node as a DocumentFragment.
 */
function extractNodeContent(node) {
    const range = document.createRange();
    range.selectNodeContents(node);
    return range.extractContents();
}
exports.extractNodeContent = extractNodeContent;

},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findIndexInParent(element) {
    const parent = element.parentElement;
    if (parent) {
        return Array.from(parent.children).indexOf(element);
    }
}
exports.findIndexInParent = findIndexInParent;

},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NoneType_1 = require("../System/Types/NoneType");
/**
 * HTML is inconsistent. Getting the value of form fields is a bit complicated, not always element.value,
 * so here's a helper to make it easier.
 */
function getFormFieldValue(element) {
    // It would be really nice at this point if JS could see generic parameters.
    // If it could, then the code could say "if (input.type === 'checkbox' && TOutput !== boolean) throw new Error()"
    if (element.tagName.toLowerCase() === 'input') {
        const input = element;
        if (input.type.toLowerCase() === 'checkbox') {
            return getCheckboxValue(input);
        }
        if (input.type.toLowerCase() === 'number') {
            return getNumberInputValue(input);
        }
        else if (input.type.toLowerCase() === 'radio') {
            return getRadioValue(input);
        }
        else {
            return input.value;
        }
    }
    else if (element.tagName.toLowerCase() === 'select') {
        return getSelectValue(element);
    }
    else if (element.tagName.toLowerCase() === 'textarea') {
        return element.value;
    }
}
exports.getFormFieldValue = getFormFieldValue;
function getCheckboxValue(input) {
    return !!input.checked;
}
exports.getCheckboxValue = getCheckboxValue;
function getNumberInputValue(input) {
    if (input.value) {
        return Number(input.value);
    }
}
exports.getNumberInputValue = getNumberInputValue;
function getRadioValue(input) {
    // Radio buttons are weird. We want them to appear to be more normal.
    if (input.name) {
        return (document.querySelector(`input[name="${input.name}"]:checked`) || {}).value;
    }
    // If no name, fall back to this
    if (input.checked) {
        return input.value;
    }
}
exports.getRadioValue = getRadioValue;
function getSelectValue(select) {
    if (select.multiple) {
        return getMultiSelectValue(select);
    }
    else {
        return select.value;
    }
}
exports.getSelectValue = getSelectValue;
function getMultiSelectValue(select) {
    return Array.from(select.selectedOptions).filter(f => f.value).map(m => m.value);
}
exports.getMultiSelectValue = getMultiSelectValue;
// This is almost pointless. Just here for consistency.
function getSimpleFormValue(input) {
    if (input.tagName.toLowerCase() === 'select') {
        if (input.multiple) {
            throw new Error('Not valid for multi-selects');
        }
    }
    return input.value;
}
exports.getSimpleFormValue = getSimpleFormValue;
/**
 * Setting values is just as complicated as getting them, because HTML is inconsistent. You can't just say element.value = foo.
 * Here's a helper to make it easier.
 */
function setFormFieldValue(element, value) {
    // Here you can validate the type before setting or do some kind of conversion.
    // For multi-selects, can auto-wrap value in string.
    if (NoneType_1.isNone(value)) {
        value = '';
    }
    const stringValue = value.toString(); // used in most of the cases
    if (element.tagName.toLowerCase() === 'input') {
        const input = element;
        const type = input.type.toLowerCase();
        if (type === 'checkbox') {
            input.checked = value === true || stringValue.toLowerCase() === 'true';
        }
        else if (type === 'radio') {
            input.checked = stringValue === input.value;
        }
        else if (type === 'date') {
            if (!value) {
                return;
            }
            input.value = toDateString(new Date(stringValue));
        }
        else if (type === 'datetime' || type === 'datetime-local') {
            if (!value) {
                return;
            }
            const date = new Date(stringValue);
            if (isNaN(date.valueOf())) {
                return;
            }
            input.value = `${toDateString(date)}T${toTimeString(date)}`;
        }
        else {
            input.value = stringValue;
        }
    }
    else if (element.tagName.toLowerCase() === 'select') {
        const select = element;
        const options = Array.from(select.options);
        if (select.multiple) {
            if (!Array.isArray(value)) {
                checkOption(options, value);
                select.value = stringValue; // treating it like a non-multiple works
                return;
            }
            // Nonexistent options cannot be set. We should let the programmer know. Even though this takes CPU cycles.
            value.map(m => {
                checkOption(options, m);
            });
            for (const opt of options) {
                opt.selected = value.map(m => m.toString()).indexOf(opt.value) > -1;
            }
        }
        else {
            checkOption(options, value);
            select.value = stringValue;
        }
    }
    else if (element.tagName.toLowerCase() === 'textarea') {
        element.value = stringValue;
    }
    else {
        // tslint:disable-next-line:no-console
        console.warn(`Called setFormFieldValue on non-form field ${element.tagName} ${element.id || ''}`);
    }
    function checkOption(options, val) {
        // If you set the value of a select to something that is not an available option, nothing will happen.
        const hasOption = options.map(m => m.value).indexOf(val.toString()) > -1;
        if (!hasOption) {
            // tslint:disable-next-line:no-console
            console.warn(`Called setFormFieldValue with nonexistent option ${val.toString()} on select ${element.id}`);
        }
    }
    // These could be readable oneliners if we had padStart() but it's not worth bumping to ES2017 for one method
    function toDateString(date) {
        if (!isNaN(date.valueOf())) {
            return '';
        }
        const month = ('0' + (date.getUTCMonth() + 1).toString()).slice(-2);
        const day = ('0' + date.getUTCDate().toString()).slice(-2);
        return `${date.getUTCFullYear()}-${month}-${day}`;
    }
    function toTimeString(date) {
        if (!isNaN(date.valueOf())) {
            return '';
        }
        const hour = ('0' + date.getHours()).slice(-2);
        const minute = ('0' + date.getMinutes()).slice(-2);
        return `${hour}:${minute}`;
    }
}
exports.setFormFieldValue = setFormFieldValue;

},{"../System/Types/NoneType":53}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Here's a helper for one of the places where HTML5 falls over. If you get some html like <div id="1"></div><div id="2"></div>, it becomes
 * a NodeList. HTML5 by default does not provide a way to search this for a selector.
 */
function nodeListSelector(nodes, selector) {
    for (const node of nodes) {
        if (!('matches' in node)) {
            // Filter out text nodes
            continue;
        }
        if (node.matches(selector)) {
            return node;
        }
        const search = node.querySelector(selector);
        if (search) {
            return search;
        }
    }
}
exports.nodeListSelector = nodeListSelector;
/**
 * Here's a helper for one of the places where HTML5 falls over. If you get some html like <div id="1"></div><div id="2"></div>, it becomes
 * a NodeList. HTML5 by default does not provide a way to search this for a selector.
 */
function nodeListSelectorAll(nodes, selector) {
    // Because the browser can lose references when moving nodes, this can also take a regular array.
    // Because HTML5 has totally fallen over, it's not possible for the fixed nodeListSelectorAll
    // to match the output signature of querySelectorAll (NodeListOf<Element> instead of array).
    const results = [];
    for (const node of nodes) {
        if (!('matches' in node)) {
            // Filter out text nodes
            continue;
        }
        if (node.matches(selector)) {
            results.push(node);
        }
        const search = node.querySelectorAll(selector);
        results.push(...Array.from(search));
    }
    return results;
}
exports.nodeListSelectorAll = nodeListSelectorAll;

},{}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * If the document contains any duplicate IDs, throw an exception.
 */
function validateUniqueDomIds() {
    const ids = new Set();
    let i = 0;
    for (const foo of document.querySelectorAll('*[id]')) {
        ids.add(foo.id);
        i++;
        if (ids.size !== i) {
            throw new Error(`Duplicate DOM IDs found. The first duplicate id is ${foo}.`);
        }
    }
}
exports.validateUniqueDomIds = validateUniqueDomIds;

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateElement_1 = require("../Html/CreateElement");
const ElementType_1 = require("../Html/ElementType");
const EscapeHtml_1 = require("../Html/EscapeHtml");
const ExtractNodeContent_1 = require("../Html/ExtractNodeContent");
const FormFieldValue_1 = require("../Html/FormFieldValue");
const QuerySelectorNodeList_1 = require("../Html/QuerySelectorNodeList");
const IObservable_1 = require("../Observable/IObservable");
const ObservableProperty_1 = require("../Observable/ObservableProperty");
const ObservableState_1 = require("../Observable/ObservableState");
const Constructable_1 = require("../System/Types/Constructable");
const NoneType_1 = require("../System/Types/NoneType");
const Component_1 = require("./Component");
const ComponentMap_1 = require("./ComponentMap");
const KeywordArguments_1 = require("../System/Types/KeywordArguments");
/**
 * A super-basic component that allows configuration of data-binding functions using specially-named HTML attributes, as in Angular
 * or Vue.
 */
class BoundComponent extends Component_1.Component {
    constructor(viewModel, args) {
        super(args);
        this._attributeBindings = [];
        this._writeTargets = [];
        this._cssClassSwitches = [];
        this._replacements = [];
        this._async = false;
        this._defer = false;
        this._initialized = false;
        this.viewModel = viewModel;
        if (!window.customElements.get('i-v')) {
            window.customElements.define('i-v', TemplateReplacementValue);
        }
        const options = args || {};
        this._async = options.async || false;
        this._defer = options.defer || false;
        this._name = options.name;
        // Defined the default component class for the default loopPostProcess() method
        if (options.loopItemClass) {
            if (!Constructable_1.constructorTypeGuard(options.loopItemClass)) {
                throw new Error('loopItemClass is not a constructor');
            }
            if (!(options.loopItemClass instanceof BoundComponent.constructor)) {
                throw new Error('loopItemClass is not an bound component');
            }
        }
        this._loopItemClass = options.loopItemClass || BoundComponent;
        this._configureComponentBindings();
        this.setTemplate(this.content.innerHTML); // InnerHTML is currently only parsed and then the original text is thrown away.
        // Auto-add subscriptions based on settings.
        if (options.observeAllViewModel) {
            this.observeAll();
        }
        else if (options.observeViewModel) {
            this.observe();
        }
        if (options.observeTargets) {
            for (const tgt of options.observeTargets) {
                this.observe(tgt);
            }
        }
        if (options.observeAllTargets) {
            for (const tgt of options.observeAllTargets) {
                this.observeAll(tgt);
            }
        }
        if (this._async) {
            setTimeout(() => this.render(), 0);
        }
        else {
            this.render();
        }
        // Constructor initialization is done.
        this._initialized = true;
    }
    /**
     * Use this to convert elements to components. It's most useful for custom tags, for example, <my-component></my-component>.
     * It will become <div id="foo">Whatever the component content is</div>.
     * To replace the element (copying existing attributes) send the relevant options, plus {replace: true}.
     *
     * In almost every case, viewModel should be set. But it's not possible to change that and still be compatible with the base
     * class inject(). This is a typescript-only issue but it makes things ugly.
     *
     * Accepts Keyword Arguments. And practically demands their use to set viewModel.
     */
    static inject(selector = '[ichigo]', options, constructor, viewModel) {
        ({ selector = '[ichigo]', options, constructor, viewModel } = KeywordArguments_1.Kwarg.parseArgs({ selector, options, constructor, viewModel })); // kwargline
        const newConstructor = constructor || this;
        const opt = this._getOptions(options || {});
        const replacerFunction = (element) => {
            return this._replaceElementWithBoundComponent(element, viewModel, opt, newConstructor);
        };
        const converterFunction = (element) => {
            return this._convertElementToBoundComponent(element, viewModel, opt, newConstructor);
        };
        return this._inject(selector, opt, replacerFunction, converterFunction);
    }
    /**
     * Call to inject() with a cleaner argument order.
     */
    static injectBind(viewModel, selector = '[ichigo]', options, constructor) {
        ({ selector = '[ichigo]', options, constructor, viewModel } = KeywordArguments_1.Kwarg.parseArgs({ selector, options, constructor, viewModel })); // kwargline
        return this.inject(selector, options, constructor, viewModel);
    }
    static _replaceElementWithBoundComponent(existingElement, viewModel, options, constructor) {
        const opt = this._mergePropertiesAndAttributes(existingElement, options);
        const component = new constructor(viewModel, opt);
        this._replaceElement(existingElement, component);
        return component;
    }
    static _convertElementToBoundComponent(existingElement, viewModel, options, constructor) {
        // WARN: This cast may not be true. There's no way to check that the tags match.
        const opt = Object.assign({ element: existingElement }, options);
        return new constructor(viewModel, opt);
    }
    write(evt) {
        if (!this._writeTargets.length) {
            return;
        }
        const element = evt.currentTarget;
        if (!element) {
            return;
        }
        const value = FormFieldValue_1.getFormFieldValue(element);
        // There are two cases where value is undefined. Either the element is not a form element or it's an unnamed radio button
        // that is not selected. In both cases, we don't want to update the model with undefined, which is useless.
        // TODO: Is this justification valid?
        if (value === undefined) {
            return;
        }
        // WARN: Cannot type check this dynamically. TypeScript is build-time checking only. Runtime code can't even see the type.
        // If you want to be precise, all properties in _writeBindings should be FormItemValue, but as _writeBindings is populated
        // via string, there's no way to enforce that. So if you fill a string value from a multiple select, it'll produce bugs.
        // So be careful. It's on you.
        for (const bind of this._writeTargets) {
            if (bind.startsWith('this.')) {
                const target = this[bind];
                writeValue(target, () => this[bind] = value, this);
            }
            else if (bind === '.') {
                if (ObservableState_1.observableStateCheck(this.viewModel)) {
                    this.viewModel.value = value;
                }
                else {
                    // Assume that the view model is either FormFieldValue or a function that takes one.
                    writeValue(this.viewModel, () => this.viewModel = value, this.viewModel);
                }
            }
            else if (typeof this.viewModel === 'object') {
                if (ObservableState_1.observableStateCheck(this.viewModel)) {
                    // With observable state, we need to get the state, update it, and write the whole thing back.
                    // While it is possible to update a single property in some cases, it doesn't allow reuse of already-working code.
                    const tmp = this.viewModel.value;
                    const target = tmp[bind];
                    writeValue(target, () => tmp[bind] = value, tmp);
                    this.viewModel.value = tmp;
                }
                else {
                    const target = this.viewModel[bind];
                    writeValue(target, () => this.viewModel[bind] = value, this.viewModel);
                }
            }
        }
        function writeValue(target, writeToProperty, thisArg) {
            if (typeof target === 'function') {
                target.call(thisArg, value);
                return;
            }
            if (ObservableProperty_1.observablePropertyCheck(target)) {
                target.value = value;
                return;
            }
            // This needs to be a function to be flexible, because if target is a value type or immutable, writing
            // it directly replaces only the value without updating the model.
            writeToProperty();
        }
    }
    /**
     * Bind this.render() to the model passed in, or the view model if none passed in.
     */
    observe(model) {
        model = model || this.viewModel;
        if (IObservable_1.observableCheck(model)) {
            model.subscribe(this.render, this);
        }
        return this;
    }
    /**
     * Bind this.render() to all observable properties found in the model passed in,
     * or the view model if none passed in. This only goes one level deep, so it
     * won't pick up nested objects, but it's probably good enough in 60% of cases.
     */
    observeAll(model) {
        model = model || this.viewModel;
        if (!model) {
            return this;
        }
        this.observe(model);
        for (const m of Object.getOwnPropertyNames(model)) {
            this.observe(model[m]);
        }
        return this;
    }
    render() {
        // See if we need to defer rendering until after initialization
        if (this._defer && !this._initialized) {
            return this;
        }
        for (const item of this._attributeBindings) {
            if (item.bool) {
                // For boolean attributes, the very existence of the attribute means it is considered to be true.
                let val = this._getUntypedValue(item.source);
                if (item.negative) {
                    val = !val;
                }
                else {
                    val = !!val;
                }
                if (val) {
                    this.content.setAttribute(item.attribute, val);
                }
                else {
                    this.content.removeAttribute(item.attribute);
                }
            }
            else {
                this.content.setAttribute(item.attribute, this._getStringValue(item.source) || '');
            }
        }
        if (this._valueAttribute) {
            // Calls setFormFieldValue behind the scenes.
            this.value = this._getUntypedValue(this._valueAttribute);
        }
        if (this._cssClasses) {
            this.content.className = this._getStringValue(this._cssClasses) || '';
        }
        for (const item of this._cssClassSwitches) {
            // If truthy, add class, else delete it.
            let val = !!this._getUntypedValue(item.source);
            if (item.negative) {
                val = !val;
            }
            if (val) {
                this.content.classList.add(item.class);
            }
            else {
                this.content.classList.remove(item.class);
            }
        }
        if (this._cssStyle) {
            const val = this._getStringValue(this._cssStyle) || '';
            this.content.style.cssText = val;
            if (val && !this.content.style.cssText) {
                // tslint:disable-next-line:no-console
                console.warn(`Invalid style text in component: ${val}`);
            }
        }
        if (this._loop) {
            const iterable = this._getUntypedValue(this._loop.source);
            if (iterable && typeof iterable[Symbol.iterator] === 'function') {
                const previousContent = ExtractNodeContent_1.extractNodeContent(this.content);
                for (const row of iterable) {
                    const clone = document.importNode(this._loop.fragment, true);
                    // As soon as we add the clone to content, childNodes loses reference to its child nodes, so copy it.
                    const nodes = Array.from(clone.childNodes).slice();
                    this.content.appendChild(clone);
                    if (this._loop.postProcess) {
                        this.loopPostProcess(row, nodes, iterable, previousContent);
                    }
                }
            }
        }
        if (this._cssDisplay) {
            // If falsy, set display: none (saving previous value). If truthy, restore previous value (if block, flex, but not if none)
            let val = this._getUntypedValue(this._cssDisplay.source);
            if (this._cssDisplay.negative) {
                val = !val;
            }
            if (val) {
                this.content.style.setProperty('display', this._previousCssDisplaySetting || '');
            }
            else {
                if (this.content.style.display !== 'none') {
                    this._previousCssDisplaySetting = this.content.style.display || undefined;
                }
                this.content.style.setProperty('display', 'none');
            }
        }
        this._updateHtmlReplacements();
        return this;
    }
    setTemplate(templateText, update = false) {
        if (!templateText) {
            return this;
        }
        // This method is executed in the constructor. The update param should not be set.
        if (update && !this._initialized) {
            throw new Error('Update should not be true when called internally.');
        }
        // Since we're creating an element that's not on the page, we probably could avoid using a fragment,
        // but this is what fragments are for.
        const template = CreateElement_1.createElement(ElementType_1.elementType.HTMLTemplateElement);
        template.innerHTML = templateText;
        const clone = document.importNode(template.content, true);
        // If this is used to replace the existing template, we need to wipe out the previous values
        this._replacements.length = 0;
        // Working on a clone here, so we don't see the body being built step by step in the browser.
        for (const repl of clone.querySelectorAll('i-v')) {
            // If name is specified, component MUST be specified
            if (this._name && repl.getAttribute('component') !== this._name) {
                continue;
            }
            const noescape = repl.hasAttribute('noescape') && repl.getAttribute('noescape') !== 'false';
            this._replacements.push({
                element: repl,
                source: repl.innerHTML,
                noescape: noescape
            });
        }
        // See if we need to defer rendering until after initialization.
        // Note that this will lead to a FOUC, maybe milliseconds, maybe longer.
        if (!this._defer || this._initialized) {
            // Replace the completed values before adding to the visible page. This is slightly redundant, because this happens in the render()
            // step, but I hate it when I see a flash of unreplaced content on sites.
            // The reason this works is because _replacements references clone, which isn't visible until almost the last line.
            this._updateHtmlReplacements();
        }
        this.content.innerHTML = '';
        this.content.appendChild(clone);
        // Do a full update if requested to
        if (update) {
            this.render();
        }
        return this;
    }
    setHtmlTemplate(templateProperty = '.', update = false) {
        return this.setTemplate('<i-v noescape>' + templateProperty + '</i-v>', update);
    }
    setTextTemplate(templateProperty = '.', update = false) {
        return this.setTemplate('<i-v>' + templateProperty + '</i-v>', update);
    }
    setLoop(source = '.', fragment, skipPostProcess = false, update = false) {
        if (!source || !fragment) {
            throw new Error('Invalid arguments');
        }
        if (typeof fragment === 'string') {
            fragment = CreateElement_1.createFragment(fragment);
        }
        this._loop = { source, postProcess: !skipPostProcess, fragment };
        if (update) {
            this.render();
        }
        return this;
    }
    removeLoop(update = false) {
        this._loop = undefined;
        if (update) {
            this.render();
        }
        return this;
    }
    setValueAttribute(source = '.', update = false) {
        this._valueAttribute = source;
        if (update) {
            this.render();
        }
        return this;
    }
    setVisibility(source = '.', negative = false, update = false) {
        if (!source) {
            this._cssDisplay = undefined;
        }
        else {
            this._cssDisplay = { source, negative };
        }
        if (update) {
            this.render();
        }
        return this;
    }
    addAttributeMapping(attribute, source = '.', update = false) {
        if (!source || !attribute) {
            throw new Error('Invalid arguments');
        }
        // Don't bind a single property to multiple things
        if (!this._attributeBindings.find(f => f.attribute === attribute)) {
            this._attributeBindings.push({ attribute, source, bool: false, negative: false });
        }
        if (update) {
            this.render();
        }
        return this;
    }
    addBooleanAttributeMapping(attribute, source = '.', negative = false, update = false) {
        if (!source || !attribute) {
            throw new Error('Invalid arguments');
        }
        // Don't bind a single property to multiple things
        if (!this._attributeBindings.find(f => f.attribute === attribute)) {
            this._attributeBindings.push({ attribute, source, bool: true, negative });
        }
        if (update) {
            this.render();
        }
        return this;
    }
    removeAttributeMapping(attribute, update = false) {
        if (!attribute) {
            throw new Error('Invalid argument');
        }
        const filtered = this._attributeBindings.filter(f => f.attribute !== attribute);
        this._attributeBindings.length = 0;
        this._attributeBindings.push(...filtered);
        if (update) {
            this.render();
        }
        return this;
    }
    setCssClass(cls = '.', update = false) {
        this._cssClasses = cls;
        if (update) {
            this.render();
        }
        return this;
    }
    setCssStyle(style = '.', update = false) {
        this._cssStyle = style;
        if (update) {
            this.render();
        }
        return this;
    }
    addCssClassSwitch(cls, source = '.', negative = false, update = false) {
        if (!cls || !source) {
            throw new Error('Invalid arguments');
        }
        // Don't bind a single property to multiple things
        if (!this._cssClassSwitches.find(f => f.class === cls)) {
            this._cssClassSwitches.push({ class: cls, source, negative });
        }
        if (update) {
            this.render();
        }
        return this;
    }
    removeCssClassSwitch(cls, update = false) {
        if (!cls) {
            throw new Error('Invalid argument');
        }
        const filtered = this._cssClassSwitches.filter(f => f.class !== cls);
        this._cssClassSwitches.length = 0;
        this._cssClassSwitches.push(...filtered);
        if (update) {
            this.render();
        }
        return this;
    }
    addWriteEvent() {
        this.content.addEventListener('input', this.write.bind(this));
        return this;
    }
    addWriteTarget(target = '.', update = false) {
        if (!target) {
            throw new Error('Invalid argument');
        }
        // Don't bind a single property to multiple things
        if (!this._writeTargets.find(f => f === target)) {
            this._writeTargets.push(target);
        }
        if (update) {
            this.render();
        }
        return this;
    }
    removeWriteTarget(target, update = false) {
        if (!target) {
            throw new Error('Invalid argument');
        }
        const filtered = this._writeTargets.filter(f => f !== target);
        this._writeTargets.length = 0;
        this._writeTargets.push(...filtered);
        if (update) {
            this.render();
        }
        return this;
    }
    /**
     * Override this method to unbind a view from an observable.
     */
    dispose() {
        if (ComponentMap_1.ComponentMap.components) {
            ComponentMap_1.ComponentMap.components.delete(this.content);
        }
    }
    /**
     * Override this if you need to do something else after the loop is added to the DOM.
     */
    loopPostProcess(row, addedContent, allRows, previousContent) {
        // If the typescript part of the following were important, this would be a problem
        // if this were a derived class.
        const thisclass = this;
        this._loopItemClass.inject(QuerySelectorNodeList_1.nodeListSelectorAll(addedContent, '[i5_item], [\\00003Aitem], [data-i5_item]'), {
            replace: false,
            parent: this,
            async: this._async
        }, KeywordArguments_1.kw('viewModel', row));
    }
    _getStringValue(name, skipEscape = false) {
        const value = this._getUntypedValue(name);
        if (NoneType_1.isNone(value)) {
            return value;
        }
        else if (typeof value === 'string') {
            return skipEscape ? value : EscapeHtml_1.escapeHtml(value);
        }
        else {
            return skipEscape ? value.toString() : EscapeHtml_1.escapeHtml(value.toString());
        }
    }
    _getUntypedValue(name) {
        let source;
        // I'm pretty sure this is being validated during construction but be safe
        if (!name) {
            return;
        }
        let thisArg = this.viewModel;
        // If VM is a state, get the current state value.
        if (ObservableState_1.observableStateCheck(thisArg)) {
            thisArg = thisArg.value;
        }
        if (name.startsWith("this.")) {
            thisArg = this;
            name = name.slice(5);
            if (!(name in this)) {
                // tslint:disable-next-line:no-console
                console.warn(`this.${name} does not exist on view.`);
                return;
            }
            source = this[name];
        }
        else if (name === '.') {
            source = thisArg;
        }
        else if (typeof thisArg === 'object') {
            if (!(name in thisArg)) {
                // tslint:disable-next-line:no-console
                console.warn(`this.${name} does not exist on viewModel.`);
                return {};
            }
            source = thisArg[name];
        }
        // CONSIDER: Consider adding custom attributes to allow executing method with string parameters. i5_param01="val 1", i5_param02="val 2"
        if (typeof source === 'function') {
            return source.call(thisArg);
        }
        else if (ObservableProperty_1.observablePropertyCheck(source)) {
            return source.value;
        }
        else {
            return source;
        }
    }
    _updateHtmlReplacements() {
        for (const repl of this._replacements) {
            const newValue = this._getStringValue(repl.source, repl.noescape) || '';
            const element = repl.element;
            const currentValue = element.innerHTML;
            if (newValue !== currentValue) {
                element.innerHTML = newValue;
            }
        }
    }
    _configureComponentBindings() {
        const currentAttributes = Array.from(this.content.attributes)
            .filter(f => f.value || f.name === 'i5_input' || f.name === ':input')
            .map(m => ({
            name: m.name,
            value: m.value || ''
        }));
        // Technically it's invalid to add custom attributes to regular elements, so technically <replace-me :switch:redtext="warning">
        // is legal but if if it were a div, that would be illegal. So we'll allow <div data-i5_switch_redtext="warning">.
        // Note that the weird name handling of data attributes could break your code if you try to use this. You may need to do extra
        // work to make your code work, all in the name of strict adherence to standards. It's up to you.
        for (const attr of Object.getOwnPropertyNames(this.content.dataset)) {
            const value = this.content.dataset[attr];
            if (value || attr === 'i5_input') {
                currentAttributes.push({ name: attr, value: value || '' });
            }
        }
        let textHtmlSet = false;
        for (const prop of currentAttributes) {
            const type = this._parseAttributeName(prop.name);
            let negative = false;
            // Regular attributes will all match this.
            if (!type) {
                continue;
            }
            switch (type.type) {
                case "name":
                    this._name = this._name || prop.value;
                    break;
                case "boolNegative":
                    negative = true;
                // fall through
                case "bool":
                    if (!type.detail) {
                        throw new Error('Programming error');
                    }
                    this.addBooleanAttributeMapping(type.detail, prop.value, negative);
                    deferIfNeeded.call(this);
                    break;
                case "attr":
                    if (!type.detail) {
                        throw new Error('Programming error');
                    }
                    this.addAttributeMapping(type.detail, prop.value);
                    deferIfNeeded.call(this);
                    break;
                case "switchClassNegative":
                    negative = true;
                // fall through
                case "switchClass":
                    if (!type.detail) {
                        throw new Error('Programming error');
                    }
                    this.addCssClassSwitch(type.detail, prop.value, negative);
                    deferIfNeeded.call(this);
                    break;
                case "text":
                    if (textHtmlSet) {
                        throw new Error("Can't set i5_text and i5_html at same time");
                    }
                    textHtmlSet = true;
                    this.content.innerHTML = `<i-v>${prop.value}</i-v>`; // Use this as the template
                    deferIfNeeded.call(this);
                    break;
                case "html":
                    if (textHtmlSet) {
                        throw new Error("Can't set i5_text and i5_html at same time");
                    }
                    textHtmlSet = true;
                    this.content.innerHTML = `<i-v noescape>${prop.value}</i-v>`; // Use this as the template
                    deferIfNeeded.call(this);
                    break;
                case "value":
                    this.setValueAttribute(prop.value);
                    deferIfNeeded.call(this);
                    break;
                case "ifNegative":
                    negative = true;
                // fall through
                case "if":
                    this.setVisibility(prop.value, negative);
                    deferIfNeeded.call(this);
                    break;
                case "style":
                    this.setCssStyle(prop.value);
                    deferIfNeeded.call(this);
                    break;
                case "class":
                    this.setCssClass(prop.value);
                    deferIfNeeded.call(this);
                    break;
                case "input":
                    this.addWriteEvent();
                    if (!prop.value) {
                        break;
                        // Else fall through, using the value of the input attribute as a target attribute
                    }
                    else if (type.detail) {
                        this.setValueAttribute(prop.value);
                    }
                case "target":
                    this.addWriteTarget(prop.value);
                    deferIfNeeded.call(this);
                    break;
                case "loop":
                    // Grab the base content for the loop, pulling it out of the DOM.
                    this.setLoop(prop.value, ExtractNodeContent_1.extractNodeContent(this.content), type.detail === 'null');
                    deferIfNeeded.call(this);
                    break;
                case "item":
                    // Only used as a selector. Has no functionality
                    break;
                default:
                    throw new Error("Not Implemented Ichigo attribute: " + type.type);
            }
            function deferIfNeeded() {
                this._defer = this._defer || prop.value.startsWith('this.');
            }
        }
    }
    _parseAttributeName(name) {
        if (name.startsWith(':')) {
            // General ichigo shortcut
            name = 'i5_' + name.slice(1);
        }
        else if (name === 'i5_item') {
            // This is used to indicate an item component, nothing else.
            return;
        }
        else if (name === 'i5_event') {
            // This is used only in Component.addInlineEventListeners().
            return;
        }
        else if (!name.startsWith('i5_')) {
            return;
        }
        if (name.startsWith('i5_attr')) {
            if (name[7] !== ':' && name[7] !== '_') {
                throw new Error('Invalid attribute binding syntax');
            }
            if (name.length < 9) {
                throw new Error("Binding attribute name is missing.");
            }
            return { type: 'attr', detail: name.slice(8) };
        }
        else if (name.startsWith('i5_bool')) {
            let negative = false;
            if (name[7] !== ':' && name[7] !== '_' && name[7] !== '-' && name[7] !== '0') {
                throw new Error('Invalid attribute binding syntax');
            }
            if (name[7] === '-' || name[7] === '0') {
                negative = true;
                name = name.slice(0, 7) + name.slice(8);
            }
            if (name.length < 9) {
                throw new Error("Binding attribute name is missing.");
            }
            return { type: negative ? 'boolNegative' : 'bool', detail: name.slice(8) };
        }
        else if (name.startsWith('i5_switch')) {
            let negative = false;
            if (name[9] !== ':' && name[9] !== '_' && name[9] !== '-' && name[9] !== '0') {
                throw new Error('Invalid switch binding syntax');
            }
            if (name[9] === '-' || name[9] === '0') {
                negative = true;
                name = name.slice(0, 9) + name.slice(10);
            }
            if (name.length < 11) {
                throw new Error("Class switch name is missing.");
            }
            return { type: negative ? 'switchClassNegative' : 'switchClass', detail: name.slice(10) };
        }
        else if (name.startsWith('i5_if')) {
            let negative = false;
            if (name.slice(-1) === '-' || name.slice(-1) === '0') {
                negative = true;
            }
            return { type: negative ? 'ifNegative' : 'if' };
        }
        else if (name.startsWith('i5_loop')) {
            if (name === 'i5_loop:null') {
                return { type: 'loop', detail: 'null' };
            }
            return { type: 'loop' };
        }
        else if (name.startsWith('i5_target')) {
            return ({ type: 'target' });
        }
        else if (name.startsWith('i5_input')) {
            const twoWay = name.endsWith('_value') || name.endsWith(':');
            return ({ type: 'input', detail: twoWay ? '2way' : '' });
        }
        return { type: name.slice(3) };
    }
}
exports.BoundComponent = BoundComponent;
// Use a custom element to create a replacement tag that is not limited, as span is, to containing no block elements.
// No logic, no special display details.
// tslint:disable-next-line:max-classes-per-file
class TemplateReplacementValue extends HTMLElement {
    constructor() {
        super();
    }
}
exports.TemplateReplacementValue = TemplateReplacementValue;

},{"../Html/CreateElement":12,"../Html/ElementType":14,"../Html/EscapeHtml":15,"../Html/ExtractNodeContent":16,"../Html/FormFieldValue":18,"../Html/QuerySelectorNodeList":19,"../Observable/IObservable":29,"../Observable/ObservableProperty":36,"../Observable/ObservableState":38,"../System/Types/Constructable":51,"../System/Types/KeywordArguments":52,"../System/Types/NoneType":53,"./Component":22,"./ComponentMap":23}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateElement_1 = require("../Html/CreateElement");
const ElementType_1 = require("../Html/ElementType");
const FormFieldValue_1 = require("../Html/FormFieldValue");
const QuerySelectorNodeList_1 = require("../Html/QuerySelectorNodeList");
const KeywordArguments_1 = require("../System/Types/KeywordArguments");
const GetUniqueId_1 = require("../System/Utility/GetUniqueId");
const ComponentMap_1 = require("./ComponentMap");
/**
 * A class with a content property that points to something on the page, along with some of helper methods.
 *
 * This class is intended to be used as a base class for other classes, so it's marked abstract. It just doesn't
 * make sense to me to create Component with nothing customized. Just create an HTMLElement. The helpers aren't really
 * that impressive, when you consider that the tradeoff is having to reference obj.content to modify the DOM.
 */
class Component {
    constructor(args) {
        // Typescript doesn't understand that this.content is set in ALL of the private ctor functions.
        this.content = null;
        if (args && typeof args === 'string') {
            _ctor_string.call(this, args);
        }
        else if (args && args.selector) {
            _ctor_lookup.call(this, args);
        }
        else if (!args) {
            _ctor_empty.call(this);
        }
        else if (args.element) {
            _ctor_existingElement.call(this, args);
        }
        else if (args.outerHtml) {
            _ctor_outerHtml.call(this, args);
        }
        else {
            _ctor_innerHtml.call(this, args);
        }
        // containerType could be any string that can be used as the tag for the component. If it's a custom tag, the browser will see
        // as HTMLUnknownElement. If you want the browser to know about it, then pass a constructor in containerCustomElement
        if (args && args.customElement) {
            if (!this.content.tagName.includes('-')) {
                throw new Error('HTML Custom Elements require a dash in their tag.');
            }
            if (!window.customElements.get(this.content.tagName)) {
                window.customElements.define(this.content.tagName.toLowerCase(), args.customElement);
            }
        }
        // I've never seen customized built-in elements working in Chrome. YMMV
        if ('is' in this.content) {
            // tslint:disable-next-line:no-console
            console.warn('Customized built-in elements are not supported. This may fail.');
        }
        this.mapComponent();
        function _ctor_empty() {
            // No arguments
            // This is fine as long as TElement is DIV. No way to verify that as it's a typescript illusion. JS doesn't see type parameters.
            this.content = CreateElement_1.createElement(ElementType_1.elementType.HTMLDivElement, { id: GetUniqueId_1.getUniqueId() });
        }
        function _ctor_lookup(existingElement) {
            // Shortcut for existingElement.
            // The main reason it exists is that document.getElementById doesn't return the correct type (it's not generic),
            // so typescript freaks out and thinks it should be a STRING, in spite of the type definition not being anything
            // like that. It's just easier to use this than to remember "oh, right, i have to use document.querySelector(), which is generic".
            const element = (existingElement.parent || document).querySelector(existingElement.selector);
            if (!element) {
                throw new Error('Element selector could not find element.');
            }
            _ctor_existingElement.call(this, { element });
        }
        function _ctor_existingElement(existingElement) {
            this.content = existingElement.element;
            // First try attributes (which are the initial values)
            if (existingElement.attributes) {
                for (const attr of Object.getOwnPropertyNames(existingElement.attributes)) {
                    this.content.setAttribute(attr, existingElement.attributes[attr]);
                }
            }
            // Then overwrite with properties (which are current)
            if (existingElement.properties) {
                Object.assign(this.content, existingElement.properties);
            }
        }
        function _ctor_innerHtml(newElement) {
            // New element. User specifies the inner HTML for the content.
            // This could be an empty object like {}, practically the same as calling it with no args
            const props = { innerHTML: newElement.innerHtml || '' };
            Object.assign(props, newElement.properties);
            this.content = CreateElement_1.createElement(newElement.type || ElementType_1.elementType.HTMLDivElement, props, newElement.attributes);
            if (newElement.id) {
                this.content.id = newElement.id;
            }
            else if (!this.content.id) {
                this.content.id = GetUniqueId_1.getUniqueId();
            }
        }
        function _ctor_outerHtml(newElement) {
            // User specifies the full HTML for the content.
            // Note that it can't be type checked. JS can't see what TElement is.
            const tmpdiv = CreateElement_1.div(newElement.outerHtml.trim());
            if (tmpdiv.childNodes.length !== 1 || !tmpdiv.firstElementChild) {
                throw new Error('OuterHtml must contain exactly one HTMLElement');
            }
            this.content = tmpdiv.firstElementChild;
            // First try attributes (which are the initial values)
            if (newElement.attributes) {
                for (const attr of Object.getOwnPropertyNames(newElement.attributes)) {
                    this.content.setAttribute(attr, newElement.attributes[attr]);
                }
            }
            // Then overwrite with properties (which are current)
            if (newElement.properties) {
                Object.assign(this.content, newElement.properties);
            }
            // Specified ID takes precedence
            if (newElement.id) {
                this.content.id = newElement.id;
            }
        }
        function _ctor_string(newElement) {
            // String by itself is a shortcut for outerHtml
            _ctor_outerHtml.call(this, { outerHtml: newElement });
        }
    }
    /**
     * Use this to convert elements to components. It's most useful for custom tags, for example, <my-component></my-component>.
     * It will become <div id="foo">Whatever the component content is</div>.
     *
     * It doesn't have to be a custom tag. It could be a class, like <p class='bind-to-model"> (selector='.bind-to-model')
     * or <p ichigo> (selector='[ichigo]').
     *
     * To completely replace the existing element (copying existing attributes) send the relevant options, plus {replace: true}.
     *
     * Accepts Keyword Arguments.
     */
    static inject(selector = '[ichigo]', options, constructor) {
        ({ selector = '[ichigo]', options, constructor } = KeywordArguments_1.Kwarg.parseArgs({ selector, options, constructor })); // kwargline
        const newConstructor = constructor || this;
        const opt = this._getOptions(options);
        const replacerFunction = (element) => {
            return this._replaceElementWithComponent(element, opt, newConstructor);
        };
        const converterFunction = (element) => {
            return this._convertElementToComponent(element, newConstructor);
        };
        return this._inject(selector, opt, replacerFunction, converterFunction);
    }
    static _inject(selector = '[ichigo]', options, replacerFunction, converterFunction) {
        const results = [];
        const containers = this._lookUpContainersToInject(selector);
        for (const container of containers) {
            if (options.replace) {
                // Can't have dupe IDs being created if there are multiple containers. There are 3 places where ID can be set.
                if (containers.length > 1) {
                    delete options.id;
                    if ('properties' in options) {
                        delete options.properties.id; // DOM property
                    }
                    if ('attributes' in options) {
                        delete options.attributes.id; // HTML attribute
                    }
                }
                results.push(replacerFunction(container));
            }
            else {
                results.push(converterFunction(container));
            }
        }
        return results;
    }
    static _mergePropertiesAndAttributes(existingElement, options) {
        // This attempts to preserve the attributes set on the replaced element. That opens an ugly can of worms,
        // but it should make replacement components more useful because it allows them to vary.
        // It does make a brutal juggling act:
        // If the existing element has innerHTML, we want to take it.
        // If outerHTML is provided, the outerHTML's innerHTML should override the existing element's.
        // If the existing element has attributes, we want to take them.
        // If outerHTML is provided, the outerHTML's attributes should override them.
        // For any attributes passed in OPTIONS, they should override anything that came before.
        // For any properties passed in OPTIONS, they should override anything that came before.
        // Only the last 2 are handled in the component constructor. And if we're not careful, we could break them.
        const properties = { innerHTML: existingElement.innerHTML };
        const attributes = {};
        for (const attr of Array.from(existingElement.attributes)) {
            attributes[attr.name] = attr.value;
        }
        const opt = Object.assign({}, options);
        // This is ugly because it happens again in the constructor. No other clean way to parse the element attributes, though.
        if (opt.outerHtml) {
            const tmp = CreateElement_1.div(opt.outerHtml.trim());
            if (tmp.childNodes.length !== 1 || !tmp.firstElementChild) {
                throw new Error('OuterHtml must contain exactly one HTMLElement');
            }
            const tmp2 = tmp.firstElementChild;
            // The outer HTML attributes get picked up automatically when added to the DOM, so we really
            // just need to discard the matching properties and attributes of the existing element.
            delete properties.innerHTML;
            for (const attr of Array.from(tmp2.attributes)) {
                if (attr.name in attributes) {
                    delete attributes[attr.name];
                }
            }
        }
        opt.properties = Object.assign(properties, opt.properties);
        opt.attributes = Object.assign(attributes, opt.attributes);
        return opt;
    }
    static _getOptions(options) {
        let opt;
        if (options && typeof options === 'string') {
            // Shortcut for replacing the outer HTML
            opt = { replace: true, outerHtml: options };
        }
        else if (options) {
            // Typescript doesn't know that options !== 'string' (can't read "else if" clause)
            opt = options;
        }
        else {
            opt = { replace: false };
        }
        return opt;
    }
    static _replaceElement(existingElement, component) {
        if (existingElement.parentNode) {
            existingElement.parentNode.replaceChild(component.content, existingElement);
        }
        else {
            document.replaceChild(component.content, existingElement);
        }
    }
    static _replaceElementWithComponent(existingElement, options, constructor) {
        const opt = this._mergePropertiesAndAttributes(existingElement, options);
        const component = new constructor(options);
        this._replaceElement(existingElement, component);
        return component;
    }
    static _convertElementToComponent(existingElement, constructor) {
        return new constructor({ element: existingElement });
    }
    static _lookUpContainersToInject(selector = '[ichigo]') {
        if (selector === null) {
            // I've done this myself, which results in a silent failure if accidental.
            // tslint:disable-next-line:no-console
            console.warn('Injection selector is null.');
        }
        selector = selector || '[ichigo]';
        // Look up the elements to either replace or convert
        let containers;
        if (typeof selector === 'string') {
            containers = Array.from(document.querySelectorAll(selector));
        }
        else if (selector instanceof NodeList) {
            containers = Array.from(selector);
        }
        else if (Array.isArray(selector)) {
            containers = selector;
        }
        else if (typeof selector === 'object' && 'selector' in selector) {
            const parent = selector.parent || document;
            containers = Array.from(parent.querySelectorAll(selector.selector));
        }
        else {
            containers = [selector];
        }
        return containers;
    }
    get id() {
        return this.content.id;
    }
    set id(value) {
        this.content.id = value;
    }
    get innerHTML() {
        return this.content.innerHTML;
    }
    set innerHTML(value) {
        this.content.innerHTML = value;
    }
    get value() {
        // Will return undefined if content is not a form field type
        return FormFieldValue_1.getFormFieldValue(this.content);
    }
    set value(value) {
        // Will log a warning if content is not a form field type
        FormFieldValue_1.setFormFieldValue(this.content, value);
    }
    get className() {
        return this.content.className;
    }
    get classList() {
        return this.content.classList;
    }
    get style() {
        return this.content.style;
    }
    /**
     * Add an HTML event listener on the Component content. Fluent.
     */
    addEventListener(eventType, event, options) {
        this.content.addEventListener(eventType, event, options);
        return this;
    }
    /**
     * Search the HTML for i5_event or :event attributes and add event listeners according to inline custom attributes.
     * Filter by matching the componentFilter input with an attribute like component="componentFilter".
     * Enclose the event type in parentheses, and for the value, enter the name of a method in this component.
     * Example: <form :event (click)="submitTheForm"></form>
     */
    addInlineEventListeners(componentFilter) {
        // It would be nice if we could skip this initial filter, like angular does. But there is no CSS selector for
        // attribute name begins with or ends with. [attr^=] is for the VALUE beginning with something.
        // This includes the content itself in its check.
        for (const ele of QuerySelectorNodeList_1.nodeListSelectorAll([this.content], '[i5_event], [\\00003Aevent], [data-i5_event]')) {
            if (componentFilter && ele.getAttribute('component') !== componentFilter) {
                continue;
            }
            const currentAttributes = Array.from(ele.attributes);
            const eventDefinition = currentAttributes.find(f => f.name.startsWith('(') && f.name.endsWith(')') && f.name.length > 2);
            if (!eventDefinition || !eventDefinition.value) {
                throw new Error(`Event definition not declared for element ${ele.id || ele.tagName}`);
            }
            const method = this[eventDefinition.value];
            if (typeof method !== 'function') {
                throw new Error(`Handler method for element ${ele.id || ele.tagName} ${eventDefinition.value} does not exist`);
            }
            ele.addEventListener(eventDefinition.name.slice(1, -1), method.bind(this));
        }
        return this;
    }
    append(newChild) {
        if (guard(newChild)) {
            this.content.appendChild(newChild.content);
        }
        else {
            this.content.appendChild(newChild);
        }
        return this;
        function guard(obj) {
            return obj && 'content' in obj && obj.content instanceof Node;
        }
    }
    appendChild(newChild) {
        if (guard(newChild)) {
            return this.content.appendChild(newChild.content);
        }
        else {
            return this.content.appendChild(newChild);
        }
        function guard(obj) {
            return obj && 'content' in obj && obj.content instanceof Node;
        }
    }
    appendToParent(parent) {
        if (guard(parent)) {
            parent.content.appendChild(this.content);
        }
        else {
            parent.appendChild(this.content);
        }
        return this;
        function guard(obj) {
            return obj && 'content' in obj && obj.content instanceof Node;
        }
    }
    /**
     * Add the component to ComponentMap.
     */
    mapComponent() {
        // Throw an error if the content has already been related to a different component
        if (ComponentMap_1.getComponent(this.content)) {
            throw new Error('Content already referenced by a component');
        }
        ComponentMap_1.ComponentMap.components.set(this.content, this);
        return this;
    }
    /**
     * Remove the component from ComponentMap. Sometimes you might need to use this. But hopefully rarely, because it's using a WeakMap,
     */
    unmapComponent() {
        ComponentMap_1.ComponentMap.components.delete(this.content);
        return this;
    }
    /**
     * Return a list of components that are nested inside this component.
     */
    *getAllChildComponents() {
        for (const e of this.content.querySelectorAll('*')) {
            const component = ComponentMap_1.getComponent(e);
            if (component) {
                yield component;
            }
        }
    }
    setStyle(property, value) {
        if (typeof property === 'string' && value) {
            this.content.style.setProperty(property, value);
        }
        else {
            for (const prop of Object.getOwnPropertyNames(property)) {
                // TS just forgot that property is Record<string, string>.
                const val = property[prop];
                this.content.style.setProperty(prop, val);
            }
        }
        return this;
    }
    setClass(classNames) {
        if (!classNames) {
            return this;
        }
        if (typeof classNames === "string" && classNames.includes(" ")) {
            classNames = classNames.split(" ").filter(q => q !== "");
        }
        else if (typeof classNames === "string") {
            classNames = [classNames];
        }
        for (const name of classNames) {
            this.content.classList.add(name);
        }
        return this;
    }
}
exports.Component = Component;

},{"../Html/CreateElement":12,"../Html/ElementType":14,"../Html/FormFieldValue":18,"../Html/QuerySelectorNodeList":19,"../System/Types/KeywordArguments":52,"../System/Utility/GetUniqueId":58,"./ComponentMap":23}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The question needs to be asked: if you can add a component to a page by doing element.appendChild(component.content),
 * how do you do from document.getElementById('foo') and get to component, not component.content? This is how.
 *
 * var component = ComponentMap.components.get(document.getElementById('foo'));
 *
 * This will work as long as ComponentMap.components.set(content, component) has been called at some point.
 *
 * This is the approved way of doing it. Another possible solution would be the use of expando properties,
 * for example document.getElementById('foo').relatedComponent = component. This works and it's super simple,
 * but seems to be frowned upon ... it has been known to create memory leaks in the past. WeakMap is the object
 * specifically created for this use case, so that is used here.
 *
 * If extension methods are loaded, you can use the element.getComponent() shortcut.
 */
class ComponentMap {
}
ComponentMap.components = new WeakMap();
exports.ComponentMap = ComponentMap;
function getComponent(element) {
    if (typeof element === 'string') {
        const e = document.getElementById(element);
        if (!e) {
            return;
        }
        return ComponentMap.components.get(e);
    }
    else {
        return ComponentMap.components.get(element);
    }
}
exports.getComponent = getComponent;

},{}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:max-classes-per-file
/**
 * Try to provide some custom classes to help clean up the mess that TypeScript and VSCode provides whenever
 * the mess they call overloading explodes. If you mess up a property, the error message complains that
 * the object you provided doesn't include the various properties of the string object, which isn't helpful.
 */
class ComponentBindingOptions {
    constructor(opt) {
        Object.assign(this, opt);
    }
}
exports.ComponentBindingOptions = ComponentBindingOptions;
/**
 * Try to provide some custom classes to help clean up the mess that TypeScript and VSCode provides whenever
 * the mess they call overloading explodes. If you mess up a property, the error message complains that
 * the object you provided doesn't include the various properties of the string object, which isn't helpful.
 */
class ExistingElementBindingOptions extends ComponentBindingOptions {
    constructor(opt) {
        super(opt);
        Object.assign(this, opt);
        this.element = opt.element;
    }
}
exports.ExistingElementBindingOptions = ExistingElementBindingOptions;
/**
 * Try to provide some custom classes to help clean up the mess that TypeScript and VSCode provides whenever
 * the mess they call overloading explodes. If you mess up a property, the error message complains that
 * the object you provided doesn't include the various properties of the string object, which isn't helpful.
 */
class ExistingLookupBindingOptions extends ComponentBindingOptions {
    constructor(opt) {
        super(opt);
        Object.assign(this, opt);
        this.selector = opt.selector;
    }
}
exports.ExistingLookupBindingOptions = ExistingLookupBindingOptions;
/**
 * Try to provide some custom classes to help clean up the mess that TypeScript and VSCode provides whenever
 * the mess they call overloading explodes. If you mess up a property, the error message complains that
 * the object you provided doesn't include the various properties of the string object, which isn't helpful.
 */
class InnerHtmlBindingOptions extends ComponentBindingOptions {
    constructor(opt) {
        super(opt);
        Object.assign(this, opt);
    }
}
exports.InnerHtmlBindingOptions = InnerHtmlBindingOptions;
/**
 * Try to provide some custom classes to help clean up the mess that TypeScript and VSCode provides whenever
 * the mess they call overloading explodes. If you mess up a property, the error message complains that
 * the object you provided doesn't include the various properties of the string object, which isn't helpful.
 */
class OuterHtmlBindingOptions extends ComponentBindingOptions {
    constructor(opt) {
        super(opt);
        Object.assign(this, opt);
        this.outerHtml = opt.outerHtml;
    }
}
exports.OuterHtmlBindingOptions = OuterHtmlBindingOptions;

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Try to provide some custom classes to help clean up the mess that TypeScript and VSCode provides whenever
 * the mess they call overloading explodes. If you mess up a property, the error message complains that
 * the object you provided doesn't include the various properties of the string object, which isn't helpful.
 */
class ExistingElementOptions {
    constructor(opt) {
        Object.assign(this, opt);
        this.element = opt.element;
    }
}
exports.ExistingElementOptions = ExistingElementOptions;

},{}],26:[function(require,module,exports){
"use strict";
/**
 * Look up an existing element in the DOM and convert it to a component. This is just a way to simplify the lookup process vs doing
 * it manually before using IExistingElementOptions.
 * Note: Typescript can't verify your type annotations if you do it this way.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Try to provide some custom classes to help clean up the mess that TypeScript and VSCode provides whenever
 * the mess they call overloading explodes. If you mess up a property, the error message complains that
 * the object you provided doesn't include the various properties of the string object, which isn't helpful.
 */
class ExistingLookupOptions {
    constructor(opt) {
        Object.assign(this, opt);
        this.selector = opt.selector;
    }
}
exports.ExistingLookupOptions = ExistingLookupOptions;

},{}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Try to provide some custom classes to help clean up the mess that TypeScript and VSCode provides whenever
 * the mess they call overloading explodes. If you mess up a property, the error message complains that
 * the object you provided doesn't include the various properties of the string object, which isn't helpful.
 */
class InnerHtmlOptions {
    constructor(opt) {
        Object.assign(this, opt);
    }
}
exports.InnerHtmlOptions = InnerHtmlOptions;

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Try to provide some custom classes to help clean up the mess that TypeScript and VSCode provides whenever
 * the mess they call overloading explodes. If you mess up a property, the error message complains that
 * the object you provided doesn't include the various properties of the string object, which isn't helpful.
 */
class OuterHtmlOptions {
    constructor(opt) {
        Object.assign(this, opt);
        this.outerHtml = opt.outerHtml;
    }
}
exports.OuterHtmlOptions = OuterHtmlOptions;

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventHandler_1 = require("../System/EventHandler/EventHandler");
function observableCheck(obj) {
    // Not an exhaustive test but it's the important bit.
    return obj && typeof obj === 'object' && 'changeHandler' in obj && obj.changeHandler instanceof EventHandler_1.EventHandler;
}
exports.observableCheck = observableCheck;

},{"../System/EventHandler/EventHandler":49}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayChangedEventArgs_1 = require("../../System/EventHandler/ArrayChangedEventArgs");
const ObjectFullAssign_1 = require("../../System/Utility/ObjectFullAssign");
const ObservableBase_1 = require("../ObservableBase");
class TraitSource extends ObservableBase_1.ObservableBase {
    constructor(disableAsync) {
        super({ name: 'ArrayProxy', disableAsync });
    }
}
// tslint:disable-next-line:max-classes-per-file
class ArrayObservable extends Array {
    constructor(...args) {
        super(...args);
    }
    static getMergedObservable(args, disableAsync) {
        // This is where I really need multiple inheritance. This needs to inherit from Array
        // because it's extending a built-in class. It also needs to inherit from ObservableBase.
        // Three choices:
        // 1) 50 lines of clipboard inheritance.
        // 2) Cheat heavily by taking a trait approach. This means hackery to make TS happy.
        // 3) Do the same as 2 with the built-in Array class. Not a problem but with #2 the class name acts
        // as a hint that it's not a default array, which is better.
        // #2 wins.
        const arr = new ArrayObservable(...args);
        const result = ObjectFullAssign_1.objectFullAssign(arr, new TraitSource(disableAsync));
        Object.defineProperty(result, 'changeHandler', { enumerable: false });
        return result;
    }
    // Objects created through map, filter, etc, should be generic arrays.
    static get [Symbol.species]() {
        return Array;
    }
    // Needs to be public so the proxy can call it, but should not be called outside the API. Imagine it's internal.
    publishCollectionChanged(type, propertyName, args, oldValue, newValue, sender) {
        // This requires a cheat. It will fail if the object is created with new();
        this.changeHandler.invoke(new ArrayChangedEventArgs_1.ArrayChangedEventArgs({ type, propertyName, args, oldValue, newValue, sender }));
    }
    toJSON() {
        return this.slice();
    }
}
exports.ArrayObservable = ArrayObservable;

},{"../../System/EventHandler/ArrayChangedEventArgs":47,"../../System/Utility/ObjectFullAssign":61,"../ObservableBase":35}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IsInteger_1 = require("../../System/Utility/IsInteger");
class ArrayProxyHandler {
    get(target, key, proxy) {
        if (key in target) {
            const methodCalled = Reflect.get(target, key, proxy);
            // Silent pass-through of other methods
            if (ArrayProxyHandler.methodsToWatch.indexOf(key.toString()) === -1) {
                return methodCalled;
            }
            return (...args) => {
                // TODO: Need to evaluate performance of copies
                const before = target.slice(); // This could be useful but it could also be a performance problem.
                const returnVal = methodCalled.apply(target, args);
                const after = target.slice(); // This could be useful but it could also be a performance problem.
                target.publishCollectionChanged('call', key, args, before, after, proxy);
                return returnVal;
            };
        }
    }
    set(target, key, value, proxy) {
        // Problem: We want to capture only length and [indexer] calls, but JS has no consistent
        // way of defining [indexer]. What makes it worse is that if a string is an integer, it is
        // converted to a number. And JS does not include a built-in way to test if a number is an integer.
        // Solution: A regex-based check. Ick. Way to remind me I'm using JS.
        if (key && (key.toString() === 'length' || typeof key === 'number' || IsInteger_1.isPositiveIntegerString(key))) {
            // TODO: Need to evaluate performance of copies
            const before = target.slice(); // This could be useful but it could also be a performance problem.
            Reflect.set(target, key, value, proxy);
            const after = target.slice(); // This could be useful but it could also be a performance problem.
            target.publishCollectionChanged('set', key, [value], before, after, proxy);
            return true;
        }
        else {
            Reflect.set(target, key, value, proxy);
            return true;
        }
    }
    deleteProperty(target, key) {
        const before = target.slice(); // This could be useful but it could also be a performance problem.
        Reflect.deleteProperty(target, key);
        const after = target.slice(); // This could be useful but it could also be a performance problem.
        // Cannot report proxy as sender because proxy not sent to this method
        target.publishCollectionChanged('delete', key, [], before, after, null);
        return true;
    }
}
// These are all the methods, not counting custom setters, that mutate an array.
ArrayProxyHandler.methodsToWatch = ['copyWithin', 'fill', 'pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'];
exports.ArrayProxyHandler = ArrayProxyHandler;

},{"../../System/Utility/IsInteger":59}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PropertyChangedEventArgs_1 = require("../../System/EventHandler/PropertyChangedEventArgs");
const ObservableBase_1 = require("../ObservableBase");
const ObjectFullAssign_1 = require("../../System/Utility/ObjectFullAssign");
class ObjectObservable extends ObservableBase_1.ObservableBase {
    /**
     * This is the only way to produce an object observable, for reasons of safety.
     */
    static getMergedObservable(data, disableAsync) {
        // We need something with all the properties of the input object merged with the properties of this.
        // I don't want to actually modify the input object. Even though it SHOULD be throwaway, I don't know.
        // And I don't want to take the risk that something in the input, an unknown factor, will make this blow up.
        // I know that this class has only 2 levels of inheritance (currently) and contains nothing very complex at any level.
        const result = ObjectFullAssign_1.objectFullAssign(data, new ObjectObservable(disableAsync), true);
        Object.defineProperty(result, 'changeHandler', { enumerable: false });
        return result;
    }
    constructor(disableAsync) {
        super({ name: "ObjectProxy", disableAsync });
    }
    // Needs to be public so the proxy can call it, but should not be called outside the API. Imagine it's internal.
    publishPropertyChanged(type, propertyName, oldValue, newValue, sender) {
        this.changeHandler.invoke(new PropertyChangedEventArgs_1.PropertyChangedEventArgs({ type, propertyName, oldValue, newValue, sender }));
    }
    toJSON() {
        // This filters out the troublesome changeHandler field.
        return super.toJSON();
    }
}
exports.ObjectObservable = ObjectObservable;

},{"../../System/EventHandler/PropertyChangedEventArgs":50,"../../System/Utility/ObjectFullAssign":61,"../ObservableBase":35}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ObjectProxyHandler {
    constructor(_methodsToWatch, _watchSet, _watchDelete, _triggerOnlyOnChange) {
        this._methodsToWatch = _methodsToWatch;
        this._watchSet = _watchSet;
        this._watchDelete = _watchDelete;
        this._triggerOnlyOnChange = _triggerOnlyOnChange;
    }
    get(target, key, proxy) {
        if (key in target) {
            const methodCalled = Reflect.get(target, key, proxy);
            // Silent pass-through of non-watched methods
            if (this._methodsToWatch.indexOf(key.toString()) === -1 || typeof methodCalled !== 'function') {
                return methodCalled;
            }
            // Return a wrapper around the method that publishes the change
            return (...args) => {
                const returnVal = methodCalled.apply(target, args);
                target.publishPropertyChanged('call', key, undefined, args, proxy);
                return returnVal;
            };
        }
    }
    set(target, key, value, proxy) {
        if (this._watchSet) {
            const oldValue = Reflect.get(target, key, proxy);
            Reflect.set(target, key, value, proxy);
            // If to be triggered only on change, check oldValue and newValue
            if (this._triggerOnlyOnChange && oldValue === value) {
                return true;
            }
            target.publishPropertyChanged('set', key, oldValue, value, proxy);
            return true;
        }
        else {
            Reflect.set(target, key, value, proxy);
            return true;
        }
    }
    deleteProperty(target, key) {
        if (this._watchDelete) {
            const oldValue = Reflect.get(target, key);
            Reflect.deleteProperty(target, key);
            // Cannot report proxy as sender because proxy not sent to this method
            target.publishPropertyChanged('delete', key, oldValue, undefined, null);
            return true;
        }
        else {
            Reflect.deleteProperty(target, key);
            return true;
        }
    }
}
exports.ObjectProxyHandler = ObjectProxyHandler;

},{}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ObservableProperty_1 = require("./ObservableProperty");
/**
 * This is a simple implementation of Object.assign() that understands ObservableProperty,
 * so that it can update the value of the property without wiping out references to the
 * existing property with that key (which is what would happen if you used regular Object.assign()
 * on a non-proxied object).  It can also be used to read the value of an ObservableProperty.
 */
function observableAssign(target, ...sources) {
    target = target || {};
    for (const src of sources) {
        for (const key of Object.getOwnPropertyNames(src)) {
            const sprop = src[key];
            const tprop = target[key];
            let val;
            if (ObservableProperty_1.observablePropertyCheck(sprop)) {
                val = sprop.value;
            }
            else {
                val = sprop;
            }
            if (ObservableProperty_1.observablePropertyCheck(tprop)) {
                tprop.value = val;
            }
            else {
                target[key] = val;
            }
        }
    }
}
exports.observableAssign = observableAssign;

},{"./ObservableProperty":36}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventHandler_1 = require("../System/EventHandler/EventHandler");
/**
 * Common logic between the different observable classes. These implement IObservable. The invocation itself varies from class to class.
 */
class ObservableBase {
    constructor({ name, forwardTo, bubbleFrom, disableAsync } = {}) {
        this.changeHandler = new EventHandler_1.EventHandler();
        if (disableAsync) {
            this.changeHandler = new EventHandler_1.EventHandler(true);
        }
        if (forwardTo) {
            this.sendChangeEventsTo(forwardTo);
        }
        if (bubbleFrom) {
            for (const child of bubbleFrom) {
                this.receiveChangeEventsFrom(child);
            }
        }
        this.tagDelegate(name);
    }
    subscribe(callback, thisArg) {
        // Typescript has forgotten that EventHandler can accept an array.
        // In spite if the fact that this signature is identical.
        return this.changeHandler.subscribe(callback, thisArg);
    }
    /**
     * Subscribe the input's delegate to this object's changes.
     */
    sendChangeEventsTo(forwardTo) {
        // Join the other event handler to this, so that when this is invoked, so is the other.
        this.subscribe(forwardTo.changeHandler.delegate);
    }
    /**
     * Subscribe this object's delegate to the input object's changes.
     */
    receiveChangeEventsFrom(bubbleFrom) {
        // Subscribe to events raised on the other handler, so that when that is invoked, so is this
        // The same as forwardChangeEventsTo except that this is the target, not the source.
        bubbleFrom.subscribe(this.changeHandler.delegate);
    }
    unsubscribeCallback(callback) {
        return this.changeHandler.unsubscribeCallback(callback);
    }
    unsubscribeSender(sender) {
        return this.changeHandler.unsubscribeListener(sender);
    }
    unsubscribeDelegate(delegate) {
        return this.changeHandler.unsubscribeDelegate(delegate);
    }
    /**
     * This is probably frowned upon (see how TS doesn't like it), but it's valid JS.
     * It's only intended for troubleshooting, not real logic. There are times when you're
     * trying to identify exactly which delegates are subscribed, and this is really hard when
     * nothing has human-readable names.
     */
    tagDelegate(name) {
        if (name) {
            this.changeHandler.delegate._tag = name;
        }
    }
    dispose() {
        this.changeHandler.dispose();
    }
    toJSON() {
        const result = {};
        for (const x in this) {
            if (x !== "changeHandler" && x !== "privateProperty2") {
                result[x] = this[x];
            }
        }
        return result;
    }
}
exports.ObservableBase = ObservableBase;

},{"../System/EventHandler/EventHandler":49}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EscapeHtml_1 = require("../Html/EscapeHtml");
const PropertyChangedEventArgs_1 = require("../System/EventHandler/PropertyChangedEventArgs");
const NoneType_1 = require("../System/Types/NoneType");
const IsPrimitive_1 = require("../System/Utility/IsPrimitive");
const IObservable_1 = require("./IObservable");
const ObservableBase_1 = require("./ObservableBase");
/**
 * An ObservableProperty is a property that automatically raises a PropertyChanged event when it is modified. This is more
 * convenient than having to do it manually every time you need it.
 */
class ObservableProperty extends ObservableBase_1.ObservableBase {
    constructor(value, options = {}) {
        super(options);
        this.propertyName = "";
        this._triggerOnlyOnChange = false;
        options = options || {};
        this._value = value;
        this.propertyName = options.name || '';
        this._triggerOnlyOnChange = options.onlyWhenChanged || false;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        const old = this._value;
        this._value = value;
        if (this._triggerOnlyOnChange && old === value) {
            return;
        }
        this.publishPropertyChanged('set', this.propertyName, old, value, this);
    }
    /**
     * Get the value (if a string) that has had special HTML characters escaped.
     */
    get safeValue() {
        if (NoneType_1.isNone(this._value) || !IsPrimitive_1.isPrimitive(this._value)) {
            return "";
        }
        return EscapeHtml_1.escapeHtml(String(this._value));
    }
    toString() {
        return JSON.stringify(this._value);
    }
    toJSON() {
        return this._value;
    }
    publishPropertyChanged(type, propertyName, oldValue, newValue, sender) {
        this.changeHandler.invoke(new PropertyChangedEventArgs_1.PropertyChangedEventArgs({ type, propertyName, oldValue, newValue, sender }));
    }
}
exports.ObservableProperty = ObservableProperty;
function observablePropertyCheck(obj) {
    if (!IObservable_1.observableCheck(obj)) {
        return false;
    }
    // I don't like this because it should be checking if value is a setter,
    // and it isn't, because there is no way to check.
    // Object.getOwnPropertyDescriptor() doesn't catch inherited properties, of
    // which this is almost always one.
    // I have to fall back to a basic instance check.
    return obj && obj instanceof ObservableProperty;
}
exports.observablePropertyCheck = observablePropertyCheck;

},{"../Html/EscapeHtml":15,"../System/EventHandler/PropertyChangedEventArgs":50,"../System/Types/NoneType":53,"../System/Utility/IsPrimitive":60,"./IObservable":29,"./ObservableBase":35}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayObservable_1 = require("./Internal/ArrayObservable");
const ArrayProxyHandler_1 = require("./Internal/ArrayProxyHandler");
const ObjectObservable_1 = require("./Internal/ObjectObservable");
const ObjectProxyHandler_1 = require("./Internal/ObjectProxyHandler");
class ObservableProxy {
    static proximate(model, disableAsync, onlyIfChanged) {
        if (typeof model === 'function') {
            // We can't do functions, not that they would be very useful.
            // Yes, technically you should be able to define properties on a function. They are actual
            // objects.  In practice, however, Object.defineProperty() still makes them undefined.
            throw new Error('Unsupported type: function');
        }
        else if (Array.isArray(model)) {
            // An array proxy allows changes to an array to be observed. The down-side is that performance
            // is an order of magnitude slower than using an ObservableList.  The up-side is that it uses
            // more than an order of magnitude less code.
            return this.proximateArray(model, disableAsync, onlyIfChanged);
        }
        else if (typeof model === 'object') {
            return this.proximateObject(model, disableAsync, onlyIfChanged);
        }
        else {
            // If a simple value is returned, return a proxy having a value property.
            return this.proximateObject({ value: model }, disableAsync, onlyIfChanged);
        }
    }
    /**
     * A configurable version of proximate() called on an object. By making it generalized and configurable, this allows the caller to
     * track methods that are called, based on a configurable list.
     *
     * If the object is a complex object, where child objects are modified, not the main object, changes would not be caught.
     * One way to handle that is to make the child object a proxy. Another way is to access the child object only through methods
     * and use this.
     */
    static proximateObject(model, disableAsync, onlyIfChanged, methodsToWatch = [], watchSet = true, watchDelete = true) {
        if (typeof model === 'function') {
            // We can't do functions, not that they would be very useful.
            // Yes, technically you should be able to define properties on a function. They are actual
            // objects.  In practice, however, Object.defineProperty() still makes them undefined.
            throw new Error('Unsupported type: function');
        }
        // Add IObservable methods to the model so that it can raise events.
        // We must extend the original class (or at least the object).
        const target = ObjectObservable_1.ObjectObservable.getMergedObservable(model, disableAsync);
        const handler = new ObjectProxyHandler_1.ObjectProxyHandler(methodsToWatch || [], watchSet || false, watchDelete || false, onlyIfChanged || false);
        const proxy = new Proxy(target, handler);
        ObservableProxy._models.set(proxy, target);
        return proxy;
    }
    /**
     * Proximate an array.
     */
    static proximateArray(model, disableAsync, onlyIfChanged) {
        // Add IObservable methods to the model so that it can raise events.
        // We must extend the original array class (or at least the array object).
        const target = ArrayObservable_1.ArrayObservable.getMergedObservable(model, disableAsync);
        // The type here isn't accurate, but I have no good way to pass the key type without making this class only work for arrays.
        const handler = new ArrayProxyHandler_1.ArrayProxyHandler();
        const proxy = new Proxy(target, handler);
        ObservableProxy._models.set(proxy, target);
        return proxy;
    }
}
// The original target object needs to be stored somewhere so that the proxy can work.
// There's no reason that the user can't keep a copy but we shouldn't force that.
ObservableProxy._models = new WeakMap();
exports.ObservableProxy = ObservableProxy;

},{"./Internal/ArrayObservable":30,"./Internal/ArrayProxyHandler":31,"./Internal/ObjectObservable":32,"./Internal/ObjectProxyHandler":33}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EscapeHtml_1 = require("../Html/EscapeHtml");
const PropertyChangedEventArgs_1 = require("../System/EventHandler/PropertyChangedEventArgs");
const NoneType_1 = require("../System/Types/NoneType");
const CloneDeep_1 = require("../System/Utility/CloneDeep");
const IsPrimitive_1 = require("../System/Utility/IsPrimitive");
const IObservable_1 = require("./IObservable");
const ObservableBase_1 = require("./ObservableBase");
/**
 * An observable state that should only be accessed using the relevant methods, allowing atomic changes to multiple properties
 * in multiple objects, raising a single event.
 */
class ObservableState extends ObservableBase_1.ObservableBase {
    constructor(value, options = {}) {
        super(options);
        this.propertyName = "";
        if (value instanceof ObservableState) {
            this._value = CloneDeep_1.cloneDeep(value.value);
        }
        else {
            this._value = CloneDeep_1.cloneDeep(value);
        }
        options = options || {};
        this.propertyName = options.name || 'setState';
    }
    get value() {
        // I would prefer that this return Readonly<T> but getter and setter have to be the same type.
        // That means you would have to cast any value you set as a readonly, which is a PITA.
        return CloneDeep_1.cloneDeep(this._value);
    }
    /**
     * Overwrites the entire value.
     */
    set value(value) {
        this.setState(value, true);
    }
    getSafeValue(property) {
        // If value is primitive, then call this with no arguments.
        // That is the only case where it is allowed.
        if (!property) {
            if (!NoneType_1.isNone(this._value) && IsPrimitive_1.isPrimitive(this._value)) {
                return EscapeHtml_1.escapeHtml(String(this._value));
            }
            return "";
        }
        const tmp = this.value[property];
        if (NoneType_1.isNone(tmp) || !IsPrimitive_1.isPrimitive(tmp)) {
            return "";
        }
        return EscapeHtml_1.escapeHtml(String(tmp));
    }
    getValue(property) {
        // If value is primitive, then call this with no arguments.
        // That is the only case where it is allowed.
        if (!property) {
            if (!NoneType_1.isNone(this._value) && IsPrimitive_1.isPrimitive(this._value)) {
                return CloneDeep_1.cloneDeep(this._value);
            }
            return undefined;
        }
        return this.value[property];
    }
    getState() {
        return this.value;
    }
    setState(value, overWriteAll = false) {
        const oldValue = CloneDeep_1.cloneDeep(this._value);
        let newValue;
        let returnValue;
        // If the type is primitive, then a full overwrite is allowed
        if (IsPrimitive_1.isPrimitive(this._value)) {
            // Functions will execute but they won't change the value. The reason is the same reason that this makes no permanent change to bar:
            // var foo = function(str) { str = str.toUpperCase(); }; var bar = 'abc'; foo(bar); console.log(bar === 'abc');
            if (typeof value === 'function') {
                throw new Error('Cannot call setState with a function if state is primitive.');
            }
            overWriteAll = true;
        }
        if (overWriteAll) {
            newValue = _ovr1_overwriteAll.call(this, value);
        }
        else if (typeof value === 'function') {
            [newValue, returnValue] = _ovr3_functionArg.call(this, value);
        }
        else {
            if (!value || typeof value !== 'object') {
                throw new Error('value is not a partial state or a function');
            }
            newValue = _ovr2_partial.call(this, value);
        }
        this.publishPropertyChanged('call', this.propertyName, oldValue, newValue, this);
        return { oldValue, newValue, returnValue };
        function _ovr1_overwriteAll(_value) {
            // Overwrite the entire object.
            this._value = CloneDeep_1.cloneDeep(_value);
            return _value;
        }
        function _ovr2_partial(_value) {
            // Partial object: Overwrite only the keys provided
            const tmp = CloneDeep_1.cloneDeep(this._value);
            for (const key of Object.getOwnPropertyNames(_value)) {
                tmp[key] = _value[key];
            }
            this._value = CloneDeep_1.cloneDeep(tmp);
            return tmp;
        }
        function _ovr3_functionArg(_value) {
            // Execute the function provided and update the object as dictated
            // Maybe unnecessary but we want to avoid the caller exfiltrating the state using a function,
            // by accident. Of course, they can just access _value by casting as any,
            // but that's not accidental.
            const tmp = CloneDeep_1.cloneDeep(this._value);
            const _returnValue = _value.call(tmp, tmp);
            this._value = CloneDeep_1.cloneDeep(tmp);
            return [tmp, _returnValue];
        }
    }
    toString() {
        return JSON.stringify(this._value);
    }
    toJSON() {
        return this.value;
    }
    publishPropertyChanged(type, propertyName, oldValue, newValue, sender) {
        this.changeHandler.invoke(new PropertyChangedEventArgs_1.PropertyChangedEventArgs({ type, propertyName, oldValue, newValue, sender }));
    }
}
exports.ObservableState = ObservableState;
function observableStateCheck(obj) {
    if (!IObservable_1.observableCheck(obj)) {
        return false;
    }
    // I don't know if I should check for this or for getState() and setState()
    return obj && obj instanceof ObservableState;
}
exports.observableStateCheck = observableStateCheck;

},{"../Html/EscapeHtml":15,"../System/EventHandler/PropertyChangedEventArgs":50,"../System/Types/NoneType":53,"../System/Utility/CloneDeep":55,"../System/Utility/IsPrimitive":60,"./IObservable":29,"./ObservableBase":35}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateElement_1 = require("../Html/CreateElement");
const DeleteNodeContent_1 = require("../Html/DeleteNodeContent");
const ElementType_1 = require("../Html/ElementType");
const ArrayUtilities_1 = require("../System/Collections/ArrayUtilities");
const Constructable_1 = require("../System/Types/Constructable");
const Elvis_1 = require("../System/Utility/Elvis");
/**
 * If you click a link in a real web site, the browser asks the server for a page and it routes you to the relevant
 * page. But if you have a single page app running on a file, with no web server, like the one this framework
 * was built for, you need something to simulate that.
 *
 * The Advanced version of the router was created to provide the recursively-nested routes that you can get with Angular.
 * It functions. But I hate it. I don't like setting up routes in Angular because it takes editing too many files even
 * for simple sites. That said, for a very large and complex site it's nice to have the organization, so there's that.
 *
 * I found this to be complex and brittle and if you want to use the advanced features (it's pretty trivial to have three
 * columns, each populated via the route, for example), it can get hard to set up and easy to break (be careful not
 * to try to populate a router-outlet you just replaced). In terms of real use cases, I would prefer simple routes
 * and do the work in components.
 *
 * But this is here, if you want to use it.
 *
 * This class clears the route container, which is expected to be a static container in the wrapper HTML page, or the body.
 * When you give it the relevant route, it executes the callback or returns the view/HTML element you defined for the route,
 * and sticks it inside the container. Then it searches for child routes to put into child route containers, etc,
 * until it runs out of children.
 */
class AdvancedPageRouter {
    static get matchedRoute() {
        return this._matchedRoute || { route: '', params: new Map() };
    }
    static get params() {
        return this.matchedRoute.params;
    }
    static get historyMaxLength() {
        return this._historyMaxLength;
    }
    static set historyMaxLength(value) {
        if (this._history.length > value) {
            this._history.length = value;
        }
        this._historyMaxLength = value;
    }
    static get history() {
        return this._history;
    }
    static set notFound(value) {
        this._notFound = value;
    }
    static configure(routes) {
        this._routes = routes;
    }
    /**
     * Set up a top-level route, which is expected to route to the main app container. This is expected to contain
     * a child-container element, which contains lower level routes that are stored as children, added using the addRoute()
     * method.
     */
    static addAppRoute(payload, route = '*', urlRoutingEnabled = true) {
        if (urlRoutingEnabled) {
            // By default, allows going to a new page by changing the URL instead of having to issue route() commands.
            this.turnOnUrlRouting();
        }
        if (Constructable_1.constructorTypeGuard(payload) || typeof payload === 'function') {
            this.addRoute({
                route: route,
                payload: payload,
                routeContainer: 'page-router',
                staticRouterContainer: true
            });
        }
        else {
            this.addRoute({
                route: route,
                payload: () => payload,
                routeContainer: 'page-router',
                staticRouterContainer: true
            });
        }
    }
    static addRoute(route) {
        if (this._routes.find(q => q.route === route.route &&
            (q.routeContainer || 'child-container') === (route.routeContainer || 'child-container'))) {
            throw new Error("Route and container already exists.");
        }
        this._routes.push(route);
    }
    static deleteRoute(route) {
        if (!this._routes.find(q => q.route === route)) {
            throw new Error("Route not found.");
        }
        // Removing items is such a pain.
        const routes = this._routes;
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].route === route) {
                routes.splice(i, 1);
                continue;
            }
        }
    }
    static route(route, updateUrl = true) {
        if (!route) {
            // Allow actual links via the hash. Hash links don't force a page reload and they work w/o a web server.
            // To avoid having to call route() manually, you must call turnOnUrlRouting();
            route = window.location.hash.slice(1);
            // There is a problem, which is that setting the hash will trigger ANOTHER route chainge via the hashchange operation.
            // Removing the hash change and then restoring it later does nothing. It's still triggered.
            // This requires hackwork. So you see why this router is my least favorite part of this framework. It's a pile of hacks:
            // If this was triggered by a hash change and the route is the same, then don't do anything.
            // Clear the last route so that it doesn't interfere with the next hash change.
            if (route === this._lastRoute) {
                this._lastRoute = undefined;
                return;
            }
        }
        else if (updateUrl) {
            // If a route is sent in, then set the hash.
            window.location.hash = route;
            this._lastRoute = route;
        }
        else {
            this._lastRoute = route;
        }
        // Get a copy of routes, because (1) the list will be modified and (2) reduce accesses to static properties.
        // I'm not sure if async hash update events will all be in the same thread, but this isn't thread-safe.
        const routeCopy = this._routes.slice(0).map(m => ({ route: m }));
        // Find matching routes. Typically there will be 0 to 1 but the router allows multiples, one per container.
        const matches = [];
        const params = [];
        for (const r of routeCopy) {
            const searchResult = this._searchRoutes(route, r.route, routeCopy);
            if (searchResult) {
                params.push(searchResult);
                matches.push(r);
            }
        }
        if (!matches.length) {
            // tslint:disable-next-line:no-console
            console.log(`Route ${route} not found.`);
            this._renderNotFound();
            return;
        }
        // If parameters are found in multiple routes, the params are merged, but ONLY THE FIRST value for any param is kept
        // Params will be stored in a global collection. I'm not going to split them up and make the programmer hunt for them.
        const merged = new Map();
        for (const p of params) {
            for (const entry of p.entries()) {
                if (!merged.has(entry[0])) {
                    merged.set(entry[0], entry[1]);
                }
            }
        }
        /* Start writing data */
        this._matchedRoute = { route: route, params: merged };
        // Add route to history if it's different from the previous latest history
        if (this.history.length === 0 || this.history[this.history.length - 1] !== route) {
            this._history.push(route);
        }
        if (this.history.length > this.historyMaxLength) {
            this._history.shift();
        }
        const rcClone = this._routeContainers.slice(0);
        // Any containers from the previous iteration that are not matched in this one should be removed
        // Only keep ones where the staticRouterContainer flag is set
        for (const prev of rcClone
            .filter(rc => !matches.find(m => m.route === rc.route) || !rc.route.staticRouterContainer)) {
            if (prev.container) {
                prev.container.remove();
            }
            const index = rcClone.findIndex(f => f === prev);
            rcClone.splice(index, 1);
        }
        // Add route containers that aren't still there from the last iteration
        rcClone.push(...matches
            .filter(m => !rcClone.find(rc => rc.route === m.route)));
        // The containers need to be in order of matches, but previous iterations are there earlier.
        // This is too weird to work in the sort command, afaik
        const source = rcClone.slice(0);
        const sortedTarget = [];
        for (const match of matches) {
            const r = source.find(q => q.route === match.route);
            if (!r) {
                throw new Error('How did a route not get added to routeContainers?');
            }
            sortedTarget.push(r);
        }
        this._routeContainers = sortedTarget;
        for (const match of matches) {
            let routeGuards = [];
            if (Array.isArray(match.route.routeGuards)) {
                routeGuards = match.route.routeGuards;
            }
            else if (match.route.routeGuards) {
                routeGuards.push(match.route.routeGuards);
            }
            for (const rg of routeGuards) {
                const test = rg.checkValid(match.route);
                if (test === false) {
                    // tslint:disable-next-line:no-console
                    console.warn('Route permission denied');
                    continue;
                }
            }
            this._renderRoute(match);
        }
    }
    static back() {
        // If there isn't any history to go back to, don't go back.
        if (this.history.length < 2) {
            return;
        }
        this._history.pop(); // Current route sits at the top of the stack
        const route = this._history.pop(); // previous route
        if (route !== undefined) {
            this.route(route);
        }
    }
    static turnOnUrlRouting() {
        this._hashChange = (evt) => { this.route(); };
        window.addEventListener('hashchange', this._hashChange);
    }
    static _searchRoutes(url, route, routesToSearch) {
        let search = [];
        if (Array.isArray(route.route)) {
            search = route.route;
        }
        else {
            search = [route.route];
        }
        // Search the route strings and if you find one, return the match.
        // Note that if you have multiple routes in the array, with different params, the results will be only the first.
        // Seriously, don't do that. At least one of those routes is gibberish.
        for (const sch of search) {
            const matchResult = this._testRoute(sch, url || '');
            if (matchResult) {
                // If the route has children, then add them to the end of the match list to be tested
                // This works because JS is perfectly OK with modifying an array that you are iterating, unlike C#
                if (route.children) {
                    for (const child of route.children) {
                        routesToSearch.push({ route: child, parent: route });
                    }
                }
                return matchResult;
            }
        }
        return false;
    }
    static _testRoute(routeString, urlString) {
        const params = new Map();
        if (!routeString || !urlString) {
            return false;
        }
        routeString = routeString.toLowerCase();
        if (routeString.endsWith('/')) {
            routeString = routeString.slice(0, -1);
        }
        if (urlString.endsWith('/')) {
            urlString = urlString.slice(0, -1);
        }
        const routeArray = routeString.split('/');
        const urlArray = urlString.split('/');
        // If route ends in *, don't check anything further than that in the URL
        if (routeArray[routeArray.length - 1] === '*') {
            routeArray.length--;
            if (routeArray.length <= urlArray.length) {
                urlArray.length = routeArray.length;
            }
        }
        // Same number of / characters required.
        if (routeArray.length !== urlArray.length) {
            return false;
        }
        for (const [routeSegment, urlSegment] of ArrayUtilities_1.zip(routeArray, urlArray)) {
            // Parameters are allowed. Optional parameters are not.
            // The reason for no optional parameters is that finding a match between /a/:?param/b and /a/b is too complex.
            // Is 'b' a param value or part of the route. Basically, optional parameters only work at the route end.
            // I noticed that ASP.NET works that way, and I found it confusing that optional parameters only work at the end.
            // Just create a new route with the optional param left out.
            if (routeSegment.startsWith(':')) {
                if (params.has(urlSegment.slice(1))) {
                    throw new Error(`Route ${routeString} contains duplicates of the same parameter.`);
                }
                params.set(routeSegment.slice(1), urlSegment);
            }
            else if (routeSegment !== '*' && routeSegment !== urlSegment.toLowerCase()) {
                return false;
            }
        }
        return params;
    }
    static _renderRoute({ route, parent }) {
        const container = this._prepareRouterContainer(route, parent);
        if (!container) {
            return;
        }
        let view;
        if (Constructable_1.constructorTypeGuard(route.payload)) {
            view = new route.payload();
        }
        else if (route.payload) {
            view = route.payload();
        }
        // If a view was returned
        if (view && viewTypeGuard(view)) {
            container.appendChild(view.content);
        }
        else if (view) {
            container.appendChild(view);
        }
        function viewTypeGuard(test) {
            if ("content" in test && test.content instanceof HTMLElement) {
                return true;
            }
            return false;
        }
    }
    static _renderNotFound() {
        const container = CreateElement_1.createElement('not-found', { id: 'not-found' });
        DeleteNodeContent_1.deleteNodeContent(document.body);
        document.body.appendChild(container);
        container.appendChild(CreateElement_1.createElement(ElementType_1.elementType.HTMLDivElement, { innerHTML: this._notFound || "Quoth the Raven, 404" }));
    }
    static _prepareRouterContainer(route, parentRoute) {
        if (!this._matchedRoute) {
            throw new Error('ProgrammingError: _prepareRouterContainer called out of order.');
        }
        // Look for the route container for the route. If it exists, exit doing nothing. We'll keep it.
        const routeContainer = this._routeContainers.find(f => f.route === route);
        if (!routeContainer) {
            throw new Error("ProgrammingError: Forgot to add routes to route containers.");
        }
        let parent;
        // See if this route has a parent that is on the page
        parent = Elvis_1.e_(this._routeContainers.find(q => q.route === parentRoute)).container;
        if (parent && !document.body.contains(parent)) {
            parent = undefined;
        }
        // If the route has a container, that container exists in the dom, and the staticRouterContainer setting is true, exit
        if (route.staticRouterContainer && routeContainer.container && (parent || document.body).contains(routeContainer.container)) {
            return;
        }
        const containerId = Elvis_1.e_(route).routeContainer || 'child-container';
        // If the parent container doesn't exist in the dom, add to the body.
        if (!parent || !document.body.contains(parent)) {
            // I would think there's always a body element, but typescript seems to think it could be undefined
            // This didn't actually fix the TS error, though.
            if (!document.body) {
                document.createElement('body');
            }
            parent = document.body;
        }
        const currentIndex = this._routeContainers.findIndex(q => q.route === route);
        if (this._routeContainers
            .slice(0, currentIndex) // Only check earlier containers
            .find(q => !!q.container
            && q.container.tagName.toLowerCase() === containerId.toLowerCase()
            && !!parent.querySelector(containerId))) {
            // tslint:disable-next-line:no-console
            console.log(`Route: [${route.route}]. Container [${containerId}] added to DOM by another route. Skipping.`);
            return;
        }
        const newRouter = CreateElement_1.createElement(containerId); /* { id: containerId } */
        const oldRouter = parent.querySelector(containerId);
        if (oldRouter) {
            (oldRouter.parentElement || parent).replaceChild(newRouter, oldRouter);
        }
        else {
            parent.appendChild(newRouter);
        }
        // Update the route container record with the routing container we created.
        routeContainer.container = newRouter;
        return newRouter;
    }
}
AdvancedPageRouter._routes = [];
AdvancedPageRouter._history = [];
AdvancedPageRouter._historyMaxLength = 50;
AdvancedPageRouter._routeContainers = [];
exports.AdvancedPageRouter = AdvancedPageRouter;

},{"../Html/CreateElement":12,"../Html/DeleteNodeContent":13,"../Html/ElementType":14,"../System/Collections/ArrayUtilities":45,"../System/Types/Constructable":51,"../System/Utility/Elvis":57}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateElement_1 = require("../Html/CreateElement");
const DeleteNodeContent_1 = require("../Html/DeleteNodeContent");
const ElementType_1 = require("../Html/ElementType");
const ArrayUtilities_1 = require("../System/Collections/ArrayUtilities");
const Constructable_1 = require("../System/Types/Constructable");
const KeywordArguments_1 = require("../System/Types/KeywordArguments");
const NoneType_1 = require("../System/Types/NoneType");
/**
 * If you click a link in a real web site, the browser asks the server for a page and it routes you to the relevant
 * page. But if you have a single page app running on a file, with no web server, like the one this framework
 * was built for, you need something to simulate that.
 *
 * This class clears the route container, which is expected to be a static container in the wrapper HTML page, or the body.
 * When you give it the relevant route, it executes the callback or returns the view/HTML element you defined for the route,
 * and sticks it inside the container. The element returned can be wrapped in a layout view, like in ASP.Net.
 *
 * This is a simple version, without the recursive routes found in the advanced router. It was based more on ASP.Net or node.js
 * routing, where you have a flat set of routes and once you find a route, you're done.
 */
class PageRouter {
    static get allRoutes() {
        return this._routes;
    }
    static get matchedRoute() {
        return this._matchedRoute || { route: '', params: new Map(), config: { route: '' } };
    }
    static get params() {
        return this.matchedRoute.params;
    }
    static get historyMaxLength() {
        return this._historyMaxLength;
    }
    static set historyMaxLength(value) {
        if (this._history.length > value) {
            this._history.length = value;
        }
        this._historyMaxLength = value;
    }
    static get history() {
        return this._history;
    }
    static set notFound(value) {
        this._notFound = value;
    }
    /**
     * This must be called first before using it, because JS doesn't have static constructors like C#. It sets up the
     * route container, custom elements, and also allows one-step configuration of several other properties.
     *
     * Accepts Keyword Arguments.
     */
    static configure(routes = [], defaultLayout, defaultStaticLayout, notFound, defaultRoute, urlRoutingEnabled = true) {
        ({ routes, defaultLayout, defaultStaticLayout, notFound, defaultRoute, urlRoutingEnabled = true } = KeywordArguments_1.Kwarg.parseArgs({ routes, defaultLayout, defaultStaticLayout, notFound, defaultRoute, urlRoutingEnabled })); // kwargline
        this._configured = true;
        if (notFound) {
            this._notFound = notFound;
        }
        for (const rte of routes) {
            if (defaultLayout) {
                rte.layout = rte.layout || defaultLayout;
            }
            if (!NoneType_1.isNone(defaultStaticLayout) && NoneType_1.isNone(rte.staticLayout)) {
                rte.staticLayout = defaultStaticLayout;
            }
            this.addRoute(rte);
        }
        if (urlRoutingEnabled) {
            // By default, allows going to a new page by changing the URL instead of having to issue route() commands.
            this.turnOnUrlRouting();
        }
        this.routeContainer = document.querySelector('page-router') || document.body;
        if (!window.customElements.get('page-router')) {
            window.customElements.define('page-router', DivPage, { extends: 'div' });
        }
        if (!window.customElements.get('layout-body')) {
            window.customElements.define('layout-body', DivLayout, { extends: 'div' });
        }
        if (!window.customElements.get('not-found')) {
            window.customElements.define('not-found', DivNotFound, { extends: 'div' });
        }
        if (defaultRoute) {
            this.defaultRoute(defaultRoute);
        }
    }
    // Note: there is no removeRoute. There could be, but it's never needed.
    static addRoute(route) {
        let routes;
        if (Array.isArray(route.route)) {
            routes = route.route;
        }
        else {
            routes = [route.route];
        }
        for (const rte of routes) {
            if (this._routes.find(q => q.route === rte)) {
                throw new Error("Route already exists.");
            }
            const tmp = Object.assign({}, route);
            tmp.route = rte;
            this._routes.push(tmp);
        }
    }
    /**
     * If linked to a particular page (on the hash), go to it. Else, go to the route specified.
     */
    static defaultRoute(route) {
        if (window.location.hash) {
            PageRouter.route();
        }
        else {
            PageRouter.route(route);
        }
    }
    static route(route, updateUrl = true) {
        if (!this._configured) {
            throw new Error('PageRouter not configured. Call configure() first.');
        }
        if (!route) {
            // Allow actual links via the hash. Hash links don't force a page reload and they work w/o a web server.
            // To avoid having to call route() manually, you must call turnOnUrlRouting();
            route = window.location.hash.slice(1);
            // There is a problem, which is that setting the hash will trigger ANOTHER route chainge via the hashchange operation.
            // Removing the hash change and then restoring it later does nothing. It's still triggered.
            // This requires hackwork. Even the simple router has more hacks than I like.
            // If this was triggered by a hash change and the route is the same, then don't do anything.
            // Clear the last route so that it doesn't interfere with the next hash change.
            if (route === this._lastRoute) {
                this._lastRoute = undefined;
                return;
            }
        }
        else if (updateUrl) {
            // If a route is sent in, then set the hash.
            window.location.hash = route;
            this._lastRoute = route;
        }
        else {
            this._lastRoute = route;
        }
        let match;
        let searchResult = false;
        for (const rte of this._routes) {
            searchResult = this._testRoute(rte.route, route || '');
            if (searchResult) {
                match = rte;
                break;
            }
        }
        if (!match) {
            // tslint:disable-next-line:no-console
            console.log(`Route ${route} not found.`);
            this._renderNotFound();
            return;
        }
        const previousRoute = (this._matchedRoute || {}).config;
        this._matchedRoute = { route, params: searchResult || new Map(), config: match };
        // Add route to history if it's different from the previous latest history
        if (this.history.length === 0 || this.history[this.history.length - 1] !== route) {
            this._history.push(route);
        }
        if (this.history.length > this.historyMaxLength) {
            this._history.shift();
        }
        let routeGuards = [];
        if (Array.isArray(match.routeGuards)) {
            routeGuards = match.routeGuards;
        }
        else if (match.routeGuards) {
            routeGuards.push(match.routeGuards);
        }
        for (const rg of routeGuards) {
            const test = rg.checkValid(match);
            if (test === false) {
                // tslint:disable-next-line:no-console
                console.warn('Route permission denied');
                return;
            }
        }
        this._renderRoute(match, previousRoute);
    }
    static back() {
        // If there isn't any history to go back to, don't go back.
        if (this.history.length < 2) {
            return;
        }
        this._history.pop(); // Current route sits at the top of the stack
        const route = this._history.pop(); // previous route
        if (route !== undefined) {
            this.route(route);
        }
    }
    static turnOnUrlRouting() {
        this._hashChange = (evt) => { this.route(); };
        window.addEventListener('hashchange', this._hashChange);
    }
    static _testRoute(routeString, urlString) {
        const params = new Map();
        if (!routeString || !urlString) {
            return false;
        }
        routeString = routeString.toLowerCase();
        if (routeString.endsWith('/')) {
            routeString = routeString.slice(0, -1);
        }
        if (urlString.endsWith('/')) {
            urlString = urlString.slice(0, -1);
        }
        const routeArray = routeString.split('/');
        const urlArray = urlString.split('/');
        // Same number of / characters required.
        if (routeArray.length !== urlArray.length) {
            return false;
        }
        for (const [routeSegment, urlSegment] of ArrayUtilities_1.zip(routeArray, urlArray)) {
            // Parameters are allowed. Optional parameters are not.
            // The reason for no optional parameters is that finding a match between /a/:?param/b and /a/b is too complex.
            // Is 'b' a param value or part of the route. Basically, optional parameters only work at the route end.
            // I noticed that ASP.NET works that way and I found it confusing that optional parameters only work at the end.
            // Just create a new route with the optional param left out.
            if (routeSegment.startsWith(':')) {
                let name = routeSegment.slice(1);
                if (!name.includes('=')) {
                    params.set(name, urlSegment);
                }
                else {
                    // Handle the mapped static param case.
                    const val = name.split('=')[1];
                    name = name.split('=')[0];
                    if (val !== urlSegment) {
                        return false;
                    }
                }
                if (params.has(name)) {
                    throw new Error(`Route ${routeString} contains duplicates of the same parameter.`);
                }
                params.set(name, urlSegment);
            }
            else if (routeSegment !== urlSegment.toLowerCase()) {
                return false;
            }
        }
        return params;
    }
    static _renderRoute(route, previous) {
        // Calling PageRouter.route('the same url') will reload the contents from scratch.
        // Adjusting window.location will do nothing if the route is the same.
        // I think this is fine, after struggling in angular to reload the page and finding
        // it much harder.
        // Note if you change the location bar, Chrome forces a reload of Program.ts, nothing you can do
        // about it because Chrome is the one that discarded your state.
        let container = this.routeContainer;
        const keepLayout = route.layout && previous && route.staticLayout && route.layout === previous.layout;
        if (!keepLayout) {
            // Delete contents of page-router
            DeleteNodeContent_1.deleteNodeContent(container);
        }
        if (keepLayout) {
            container = document.querySelector('layout-body');
            if (!container) {
                throw new Error('<layout-body> element not found');
            }
        }
        else if (route.layout) {
            let layoutView;
            if (Constructable_1.constructorTypeGuard(route.layout)) {
                layoutView = new route.layout();
            }
            else if (route.payload) {
                layoutView = route.layout();
            }
            if (layoutView && viewTypeGuard(layoutView)) {
                container.appendChild(layoutView.content);
            }
            else if (layoutView) {
                container.appendChild(layoutView);
            }
            container = document.querySelector('layout-body');
            if (!container) {
                throw new Error('<layout-body> element not found');
            }
        }
        if (keepLayout) {
            // Delete contents of layout-body (but keep layout)
            DeleteNodeContent_1.deleteNodeContent(container);
        }
        let view;
        if (Constructable_1.constructorTypeGuard(route.payload)) {
            view = new route.payload();
        }
        else if (route.payload) {
            view = route.payload();
        }
        if (view && viewTypeGuard(view)) {
            container.appendChild(view.content);
        }
        else if (view) {
            container.appendChild(view);
        }
        function viewTypeGuard(test) {
            if ("content" in test && test.content instanceof HTMLElement) {
                return true;
            }
            return false;
        }
    }
    static _renderNotFound() {
        DeleteNodeContent_1.deleteNodeContent(this.routeContainer);
        this.routeContainer.appendChild(CreateElement_1.createElement(ElementType_1.elementType.HTMLDivElement, { id: 'not-found', innerHTML: this._notFound || "Quoth the Raven, 404" }));
    }
}
PageRouter.routeContainer = document.body;
PageRouter._configured = false;
PageRouter._routes = [];
PageRouter._history = [];
PageRouter._historyMaxLength = 50;
exports.PageRouter = PageRouter;
// tslint:disable:max-classes-per-file
// A class is required but you're not allowed to use the existing class because it can't
// be constructed (invalid constructor). And you are ONLY allowed to extend HTMLElement.
// AND they must be unique.
class DivPage extends HTMLElement {
    constructor() {
        super();
    }
}
class DivLayout extends HTMLElement {
    constructor() {
        super();
    }
}
class DivNotFound extends HTMLElement {
    constructor() {
        super();
    }
}

},{"../Html/CreateElement":12,"../Html/DeleteNodeContent":13,"../Html/ElementType":14,"../System/Collections/ArrayUtilities":45,"../System/Types/Constructable":51,"../System/Types/KeywordArguments":52,"../System/Types/NoneType":53}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A deferred promise is a wrapper around a promise that allows it to be triggered later. In pure JS, this is harder
 * than it needs to be, and it takes a weird hack to make it work. This class is little more than a wrapper around
 * said hack.
 *
 * Otherwise, this uses a real promise internally, so aside from the wrapping object, it has no special logic. I chose
 * not to re-implement the Promise API synchronously, so it uses the same microtask queue.
 *
 * The wrapping API is tweaked a little to avoid some common pitfalls that are caused by flaws in the Promise
 * design. For example, having onfulfilled and onrejected in the same step means that errors in the fulfilled
 * half will not be caught by the error handler.  Rather than say "don't use that input" like most instructors,
 * I just got rid of it (it's still accessible on the output property, if you want to use it ... but don't).
 */
class DeferredPromise {
    constructor(onfulfilled, throwOnUnhandledError = false) {
        this.throwOnUnhandledError = throwOnUnhandledError;
        /** Use this to invoke the callback */
        // tslint:disable-next-line:no-empty TS doesn't know that the properties are replaced in the promise in the constructor
        this.resolve = function _dummy() { };
        /** Use this to reject the promise right out. Which is probably useless but you never know. */
        // tslint:disable-next-line:no-empty TS doesn't know that the properties are replaced in the promise in the constructor
        this.reject = function _dummy() { };
        // This is the weird hack that is the basis of this class. It's a closure, but reversed, as the
        // enclosed property is an internal reference accessed outside rather than an outside reference
        // accessed inside.
        this._promise = new Promise((_resolve, _reject) => {
            this.resolve = _resolve;
            this.reject = _reject;
        });
        // Make sure that there is always something at the first level, even if it's just returning the result.
        // We want the default behavior to allow the following:
        // const waitable = new DeferredPromise(); event.subscribe(waitable.resolve); const r = await waitable.output; console.log(r);
        // If you leave out the initial callback, you'll get undefined instead of what the event sends.
        if (onfulfilled) {
            this.then(onfulfilled, throwOnUnhandledError);
        }
        else {
            this.then(res => res, throwOnUnhandledError);
        }
    }
    /**
     * Use in async/await code. The following will work if a result is returned.
     * const result = await deferred.output;
     * console.log(result);
     */
    get output() {
        return this._promise;
    }
    /** Then() only has one option, because it's too easy to forget that the onrejected callback doesn't handle the onfulled callback. */
    then(onfulfilled, throwOnUnhandledError = this.throwOnUnhandledError) {
        if (onfulfilled) {
            this._promise = this._promise.then(onfulfilled);
        }
        // This is to keep a promise from, by default, eating up all errors. It's ugly.
        // It means a lot of extra steps. It makes sure that by default, the last step is always a catch.
        if (throwOnUnhandledError) {
            this._promise = this._promise.catch(err => { throw (err); });
        }
        return this;
    }
    catch(onrejected, throwOnUnhandledError = this.throwOnUnhandledError) {
        if (onrejected) {
            this._promise = this._promise.catch(onrejected);
        }
        // Again this is a mess, but the catch handler above could throw
        if (throwOnUnhandledError) {
            this._promise = this._promise.catch(err => { throw (err); });
        }
        return this;
    }
}
exports.DeferredPromise = DeferredPromise;

},{}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function delay(time) {
    return (result) => new Promise(resolve => setTimeout(() => resolve(result), time));
}
exports.delay = delay;

},{}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeferredPromise_1 = require("./DeferredPromise");
/**
 * Creates a dedicated web worker that communicates via deferreds. It can execute whatever function
 * you give it. TaskStart() acts kind of like doing new Thread() and Thread.Start() in one step.
 * It is possible to do all this manually, but this helper class makes it a fairly trivial operation.
 *
 * Hackwork is used to avoid the need to create a specialized web worker js file. The worker created takes a
 * function and arguments, executes them in its own thread, and returns the result.
 *
 * Further hackwork is needed because web works have no access to modules, no access to closures, and can only
 * communiate in strings. The function to be executed needs to be passed as a string in the message between
 * threads.
 *
 * While it is possible to create a version that does not need to eval() the function string on every execution,
 * this requires the caller to manually code everything that you see in here the constructor. No helpers are allowed
 * (no access to other objects). If you wanted to do everything yourself, you could just make a web worker the right
 * way, without the helper.
 */
class DynamicWebWorker {
    constructor() {
        this.deferredId = 0;
        this.deferreds = new Map();
        function setupFunc() {
            const ctx = self;
            // Set up what happens when a message is sent to the worker.
            // If you're willing to write all this, but remember to define your fn function
            // before onmessage, you can skip the eval() step.
            ctx.onmessage = function (evt) {
                const { id, fn, args } = evt.data;
                try {
                    // This hack allows a single dedicated web worker to handle any function. Because
                    // the worker has no access to closures, it has no access to complex objects. It
                    // can only get the function to execute in the message, which contains simple objects
                    // only, strings and numbers. So it has to be serialized and then deserialized.
                    // The only way to deserialize it is to eval() it. Pretty horriffic.
                    // tslint:disable-next-line:prefer-const
                    let inputFunc;
                    // tslint:disable-next-line:no-eval
                    eval("inputFunc = " + fn + ";");
                    const argarray = JSON.parse(args) || [];
                    const result = inputFunc(...argarray); // Evaluate the function
                    // Send the response back.
                    ctx.postMessage({ id, result: JSON.stringify(result) });
                }
                catch (err) {
                    ctx.postMessage({ id, error: err });
                }
            };
        }
        this._setUpWorker(setupFunc);
    }
    /**
     * Starting a task returns a deferred promise that is resolved when the worker thread has completed its task.
     *
     * Remember that closures DO NOT WORK. Pass your arguments (which must be JSON.stringifiable).
     */
    taskStart(fn, ...args) {
        const id = this.deferredId++;
        const msg = {
            id,
            fn: fn.toString(),
            args: JSON.stringify(args)
        };
        const deferred = new DeferredPromise_1.DeferredPromise();
        this.deferreds.set(id, deferred);
        this.worker.postMessage(msg);
        return deferred.output
            .then(resp => JSON.parse(resp || ''))
            .catch(err => { throw (err || new Error('Unknown error')); });
    }
    _setUpWorker(callback) {
        // Here's the main hack and it's a doozy.
        // Normally, you are required to create a special worker.js file for web workers and link
        // to them when loading the page. Obviously that makes it impossible to define them at runtime.
        // To get around the limitation, this encodes the worker as an object URL (which requires conversion
        // to a string) and loads that.
        this.worker = new Worker(URL.createObjectURL(new Blob(['(' + callback.toString() + ')();'])));
        this.worker.onmessage = evt => {
            const { id, result, error } = evt.data;
            const deferred = this.deferreds.get(id);
            if (!deferred) {
                throw new Error("Deferred promise is missing.");
            }
            if (error) {
                deferred.reject(error);
            }
            else {
                deferred.resolve(result);
            }
            this.deferreds.delete(id);
        };
    }
}
exports.DynamicWebWorker = DynamicWebWorker;

},{"./DeferredPromise":41}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeferredPromise_1 = require("./DeferredPromise");
/**
 * The promise API is nice, mostly, but the main thing preventing use of a promise as an event handler is that
 * it only executes once. After that point, it is resolved, and there is no way to flip it back.
 *
 * The repeatable promise keeps the promise API and creates the illusion that the promise is repeated by
 * rebuilding the chain each time. It's really a deferred factory but it pretends to be a deferred. I'm sure
 * this has a performance penalty.
 *
 * You should not attach actual promises into the then() chain, because they can't be repeated. The Promise type isn't
 * allowed but there are ways to get around the TS compiler. The TS type definition for Promise and PromiseLike isn't
 * completely correct, anyway, so it's easy to get used to using the any type and make broken code.
 *
 * You cannot async/await a repeatable promise itself but you can await a single resolution. Async/await is sugar that
 * creates a regular, non-repeatable, promise.
 */
class RepeatablePromise {
    constructor(onfulfilled, onUnhandledError, // This adds a callback at the end (or 2nd from the end, see next option)
    throwOnUnhandledError = false // This keeps a promise from, by default, eating up all errors. It adds a final catch that throws if hit.
    ) {
        this.onUnhandledError = onUnhandledError;
        this.throwOnUnhandledError = throwOnUnhandledError; // This keeps a promise from, by default, eating up all errors. It adds a final catch that throws if hit.
        this.callbacks = [];
        // Make sure that there is always something at the first level, even if it's just returning the result. Useful for async/await code.
        if (onfulfilled) {
            this.then(onfulfilled);
        }
        else {
            this.then(res => res);
        }
    }
    // The following should work:
    // const repeatable = new RepeatablePromise(); const r = await repeatable.resolve(); console.log(r);
    resolve(args) {
        const promise = this.build();
        promise.resolve(args);
        return promise.output;
    }
    reject(args) {
        const promise = this.build();
        promise.reject(args);
        return promise.output;
    }
    // Then() only has one option, because it's too easy to forget that the onrejected callback doesn't handle the onfulled callback.
    then(onfulfilled) {
        this.callbacks.push({ onfulfilled: onfulfilled });
        return this;
    }
    catch(onrejected) {
        this.callbacks.push({ onrejected: onrejected });
        return this;
    }
    build() {
        let promise;
        for (const cb of this.callbacks) {
            if (!promise) {
                // We know that the first is always onfulfilled and is never undefined
                if (!cb.onfulfilled) {
                    throw new Error("Bug in RepeatablePromise constructor. First onfulfilled is null.");
                }
                promise = new DeferredPromise_1.DeferredPromise(cb.onfulfilled, false);
            }
            else if (cb.onfulfilled) {
                promise.then(cb.onfulfilled);
            }
            else if (cb.onrejected) {
                promise.catch(cb.onrejected);
            }
        }
        if (!promise) {
            throw new Error("Bug in RepeatablePromise constructor. No callbacks, not even the default first onfulfilled.");
        }
        if (this.onUnhandledError) {
            promise.catch(this.onUnhandledError);
        }
        if (this.throwOnUnhandledError) {
            promise.catch(err => { throw (err); });
        }
        return promise;
    }
}
exports.RepeatablePromise = RepeatablePromise;

},{"./DeferredPromise":41}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Return elements of array a lined up with elements of array b. Both arrays don't have to be the same length.
 */
function zip(a, b) {
    if (a.length >= b.length) {
        return a.map((element, index) => [element, b[index]]);
    }
    else {
        return b.map((element, index) => [a[index], b]);
    }
}
exports.zip = zip;
/**
 * Return a cartesian join (cross join) between arrays a and b.
 */
function cartesian(a, b) {
    /// typescript prevents a direct use of concat, so do this manually with a loop
    const results = [];
    for (const item of a) {
        results.push(...b.map(q => [item, q]));
    }
    return results;
}
exports.cartesian = cartesian;
/**
 * Generate a range of integers, counting up by 1, for the given length. Stolen from Python.
 */
function range(length) {
    return Array.from({ length: length }, (value, key) => key);
}
exports.range = range;
/**
 * Given an array of items and other arrays, flatten them out into a single array.
 */
function* traverse(arr) {
    if (!Array.isArray(arr)) {
        yield arr;
    }
    else {
        for (const row of arr) {
            yield* traverse(row);
        }
    }
}
exports.traverse = traverse;

},{}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Make it easier to create simple comparison functions on (possibly complex) objects. Typical use: arr.sort(orderBy(o => o.id))
 */
function orderBy(propertyFn) {
    return function (first, second) {
        const firstValue = propertyFn(first);
        const secondValue = propertyFn(second);
        if (firstValue < secondValue) {
            return -1;
        }
        if (firstValue > secondValue) {
            return 1;
        }
        return 0;
    };
}
exports.orderBy = orderBy;

},{}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayChangedEventArgs {
    constructor(args) {
        /**
         * The type of operation (method, set, delete)
         */
        this.type = '';
        this.propertyName = '';
        this.args = [];
        Object.assign(this, args);
    }
}
exports.ArrayChangedEventArgs = ArrayChangedEventArgs;

},{}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RepeatablePromise_1 = require("../Async/RepeatablePromise");
/**
 * A delegate object is used by the EventHandler. It contains enough information to execute a callback synchronously or asynchronously
 * (using a promise). It also adds some strings to help in troubleshooting, because searching a recursive array of complex objects can make
 * it a bear to find out why a callback isn't being executed.
 */
class Delegate {
    constructor(callback, thisArg) {
        // In many cases (for example, when using fat arrow functions), thisArg is
        // not needed. But in most others, it is an annoying bug that requires troubleshooting
        // to figure out what the caller forgot. I've wavered between making it required and not.
        if (!thisArg) {
            // tslint:disable-next-line:no-console
            console.warn('Delegate created without thisArg. Did you mean to?');
        }
        this.thisArg = thisArg;
        if (thisArg && typeof thisArg === 'object' && 'constructor' in thisArg) {
            this.callbackOwnerName = thisArg.constructor.name;
        }
        if (!callback) {
            throw new Error("callback is required");
        }
        // The typescript compiler should handle this check but can't at runtime.
        if (typeof callback !== 'function') {
            throw new Error("callback must be a callback function");
        }
        this.callback = callback;
        this.callbackName = callback.name;
        if (this.callbackOwnerName && this.callbackName) {
            this.name = `${this.callbackOwnerName}.${this.callbackName}()`;
        }
        else if (this.callbackName) {
            this.name = this.callbackName + '()';
        }
        else if (this.callbackOwnerName) {
            this.name = this.callbackOwnerName + '.__lambda__()';
        }
        this.promise = new RepeatablePromise_1.RepeatablePromise(callback.bind(thisArg));
    }
}
exports.Delegate = Delegate;

},{"../Async/RepeatablePromise":44}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayUtilities_1 = require("../Collections/ArrayUtilities");
const Delegate_1 = require("./Delegate");
/**
 * I chose to use C# style events, not JS/TS, because the JS/TS way of doing delegates/custom events is a NIGHTMARE. Sure,
 * CustomEvent works, but on the TS side the code required to make TSC happy with valid javascript is awful and non-intuitive.
 * On the JS side, you have the problem that every handler picks it up, not just the ones that are bound to the relevant HTML
 * element, so elements need to pass the source as an argument and check it (like jquery and $(document).on()).
 *
 * After getting it working, all I could think about was how bad the code was, so I rewrote it avoiding the JS pattern entirely.
 *
 * This can be synchronous (callbacks) or asynchronous (promises).  When it is async, the code executes after the current synchronous
 * events run to completion. This could create bugs in synchronous code, but is best for browser events. This handler is primarily used for
 * browser events, so async is default.
 *
 * But if you're triggering async events in code and stepping through it in Chrome, what you see won't make sense, because the async
 * events won't occur until right away. It can be hard to troubleshoot.
 */
// tslint:disable-next-line:ban-types
class EventHandler {
    constructor(_disableAsync = false) {
        this._disableAsync = _disableAsync;
        this.delegate = [];
    }
    subscribe(callback, thisArg) {
        // If this receives a delegate (which is an array of delegates), add it.
        // When this is invoked, that delegate will also be invoked.
        if (Array.isArray(callback)) {
            _ovr1_delegate.call(this, callback);
            return;
        }
        // Got a single callback
        // Only allow a single instance of the same callback.
        if (this.find({ callback, thisArg, firstMatch: true }).length) {
            return;
        }
        const newDele = new Delegate_1.Delegate(callback, thisArg);
        this.delegate.push(newDele);
        // IF this is asynchronous, return the promise so it can be chained.
        // Chaining won't work on sync code, so do not in that case.
        if (!this._disableAsync) {
            return newDele.promise;
        }
        function _ovr1_delegate(delegate) {
            // Only allow a single instance of the same delegate.
            if (this.delegate.find(q => q === delegate)) {
                return;
            }
            this.delegate.push(delegate);
            return;
        }
    }
    unsubscribeCallback(callback) {
        // Only searches non-delegates
        const index = this.delegate.findIndex(q => !Array.isArray(q) && q.callback === callback);
        if (index >= 0) {
            this.delegate.splice(index, 1);
        }
    }
    unsubscribeListener(sender) {
        // First try to unsubscribe the default delegate. Can't do anything if it has a different name, though.
        if ("delegate" in sender) {
            this.unsubscribeDelegate(sender.delegate);
        }
        // Only searches non-delegates
        let index = 0;
        while (index >= 0) {
            index = this.delegate.findIndex(q => !Array.isArray(q) && q.thisArg === sender);
            if (index >= 0) {
                this.delegate.splice(index, 1);
            }
        }
    }
    unsubscribeDelegate(delegate) {
        let index = 0;
        while (index >= 0) {
            index = this.delegate.findIndex(q => q === delegate);
            if (index >= 0) {
                this.delegate.splice(index, 1);
            }
        }
    }
    invoke(args) {
        for (const listener of ArrayUtilities_1.traverse(this.delegate)) {
            if (!this._disableAsync) {
                // Async version. Does not work well with the chrome debugger.
                listener.promise.resolve(args);
            }
            else {
                listener.callback.call(listener.thisArg, args);
            }
        }
    }
    find({ callback, thisArg, firstMatch } = {}) {
        const results = [];
        for (const listener of ArrayUtilities_1.traverse(this.delegate)) {
            if (match(listener)) {
                results.push(listener);
                if (firstMatch) {
                    break;
                }
            }
        }
        return results;
        function match(listener) {
            if (callback && thisArg) {
                return listener.callback === callback && listener.thisArg === thisArg;
            }
            if (callback) {
                return listener.callback === callback;
            }
            if (thisArg) {
                return listener.thisArg === thisArg;
            }
            return true;
        }
    }
    clear() {
        this.delegate.length = 0;
    }
    dispose() {
        this.clear(); // Clears the delegate
        this.delegate = undefined; // Makes sure this can't be used again
    }
}
exports.EventHandler = EventHandler;

},{"../Collections/ArrayUtilities":45,"./Delegate":48}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Event arguments expected on any Change event.
 */
class PropertyChangedEventArgs {
    constructor(args) {
        /**
         * The type of change operation (set, delete) (potentially method)
         */
        this.type = '';
        Object.assign(this, args);
    }
}
exports.PropertyChangedEventArgs = PropertyChangedEventArgs;

},{}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determine if an object is a constructor that is newable.
 * THIS CANNOT DETECT ANONYMOUS CLASSES. Sorry, but JS doesn't have a non-destructive way
 * to check if any function is a constructor other than to try to new() it and blow up/not blow up.
 * This function depends on there being a prototype with a named constructor.
 */
function constructorTypeGuard(obj) {
    return obj && obj.prototype && obj.prototype.constructor.name;
}
exports.constructorTypeGuard = constructorTypeGuard;

},{}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IsInteger_1 = require("../Utility/IsInteger");
/**
 * This module provides an implementation of keyword arguments, as seen in Python and C#. It makes configurable
 * functions so much quicker and easier than flat arguments (forcing you to put undefined manually in different
 * slots) or options objects (takes more time to produce, especially if you need to new it up).
 *
 * Call functions having keyword arguments using this syntax:
 * callme(arg1, arg2, kw('something', kw1), kw('somethingElse', kw2))
 *
 * To make them work, in the function itself, you need to copy and paste. For example:
 * ({ arg1, arg2, something, somethingElse } = Kwarg.parse({ arg1, arg2, something, somethingElse }));
 */
class Kwarg {
    constructor(a, b) {
        if (!a) {
            throw new Error('Argument null exception');
        }
        this.name = a;
        this.value = b;
    }
    /**
     * Remember this template:
     * ({ } = Kwarg.parseArgs({ }));
     * Include default values in the first object, not the second.
     *
     * If you want to capture rest parameters, use this:
     * ({ $rest$ } = Kwarg.parseArgs({ , ...rest }));
     *
     * If you want allowUnknownKeyword to be true, use this:
     * ({ $$kw$$ } = Kwarg.parseArgs({ }, true));
     */
    static parseArgs(args, allowUnknownKeyword = false) {
        // It would be nice if this could take the arguments object, but sadly arguments stores only an array of values,
        // no keys. If JS were sane, it would be a Map, not an array. Two steps forward, one step back.
        // Parsing the string definition for the function is not my cup of tea, so just no.
        const obj = {};
        const names = Object.getOwnPropertyNames(args);
        // Get data by argument order
        for (const arg of names) {
            if (args[arg] instanceof Kwarg) {
                obj[arg] = undefined;
            }
            else {
                obj[arg] = args[arg];
            }
        }
        const kwvar = {};
        obj['$$kw$$'] = kwvar;
        // Check for rest parameters.
        // I was going to have this on/off configurable, but it shouldn't hurt performance.
        const arr = [];
        obj['$rest$'] = arr;
        // Rest parameters are stored as array keys, { '0': a, '1': b, 'nonRest': 'something else'}
        for (const arg of Object.getOwnPropertyNames(args).filter(f => IsInteger_1.isPositiveIntegerString(f))) {
            if (!(args[arg] instanceof Kwarg)) {
                arr.push(args[arg]);
            }
        }
        const keywordsUsed = {};
        // Get data by keyword name
        // Have to iterate the list twice, to avoid wiping out data if the order is swapped
        for (const arg of names) {
            if (args[arg] instanceof Kwarg) {
                const tmp = args[arg];
                if (tmp.name in obj) {
                    obj[tmp.name] = tmp.value;
                }
                else {
                    if (allowUnknownKeyword) {
                        kwvar[tmp.name] = tmp.value;
                    }
                    else {
                        throw new Error(`Got an unexpected keyword argument '${tmp.name}'`);
                    }
                }
                if (tmp.name in keywordsUsed) {
                    throw new Error(`Got multiple values for keyword argument + '${tmp.name}'`);
                }
                keywordsUsed[tmp.name] = true;
            }
        }
        return obj;
    }
    // Turn an object into an array of keyword arguments.
    // Needs to return any[] because it's going to be shoved into arbitrary argument lists
    static unpack(args) {
        const results = [];
        for (const arg of Object.getOwnPropertyNames(args)) {
            results.push(kw(arg, args[arg]));
        }
        return results;
    }
    isMatch(key) {
        return this.name === key;
    }
}
exports.Kwarg = Kwarg;
function kw(a, b) {
    if (!a) {
        throw new Error('Argument null exception');
    }
    if (typeof a === 'string') {
        // Overload 1
        return new Kwarg(a, b);
    }
    else if (Array.isArray(a)) {
        // Overload 2
        return new Kwarg(a[0], a[1]);
    }
    else {
        // Overload 3
        // This should be an object with only one key/value pair.
        const props = Object.getOwnPropertyNames(a);
        if (!props.length) {
            throw new Error('Argument null exception');
        }
        if (props.length > 1) {
            throw new Error('Invalid map object: multiple keys');
        }
        return new Kwarg(props[0], a[props[0]]);
    }
}
exports.kw = kw;
function kwargsToObject(arr) {
    const options = {};
    for (const arg of arr) {
        options[arg.name] = options[arg.value];
    }
    return options;
}
exports.kwargsToObject = kwargsToObject;

},{"../Utility/IsInteger":59}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNone(test) {
    return (test == null || test === undefined);
}
exports.isNone = isNone;

},{}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Dead simple assertion that'll work anywhere. This is NOT the difficult part of unit testing.
 */
function assert(test, message) {
    if (!test) {
        throw new Error(message || 'Failed');
    }
}
exports.assert = assert;

},{}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cloneDeep(obj, hash = new WeakMap()) {
    if (Object(obj) !== obj) {
        return obj; // primitive types
    }
    if (hash.has(obj)) {
        return hash.get(obj); // reference to object previously seen
    }
    let result;
    if (obj instanceof Set) {
        result = new Set();
        Array.from(obj, val => result.add(cloneDeep(val, hash)));
    }
    else if (obj instanceof Map) {
        result = new Map();
        Array.from(obj, ([key, val]) => result.add(cloneDeep(key, hash), cloneDeep(val, hash)));
    }
    else if (Array.isArray(obj)) {
        result = Array.from(obj);
    }
    else if (obj instanceof Date) {
        result = new Date(obj);
    }
    else if (obj instanceof RegExp) {
        result = new RegExp(obj.source, obj.flags);
    }
    else if (typeof obj === 'function') {
        // This is awful code, but it's the only way to clone a standalone function (vs a method which has a descriptor).
        // In general, you probably don't want to use cloneDeep on functions. You'll see it's NOT used on internal methods.
        result = new Function('return ' + obj.toString())();
    }
    else if (Object.getPrototypeOf(obj)) {
        result = Object.create(Object.getPrototypeOf(obj));
    }
    else {
        result = Object.create(null);
    }
    hash.set(obj, result); // Keep track of objects previously cloned
    for (const key of Object.getOwnPropertyNames(obj)) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, key);
        if (descriptor && descriptor.writable === false) {
            continue;
        }
        if (typeof obj[key] === 'function' && !(key in result)) {
            // Handle methods that aren't in the prototype.
            // This doesn't recursively follow because there's nothing recursive to do.
            if (descriptor) {
                Object.defineProperty(result, key, descriptor);
                hash.set(obj[key], result[key]);
                // NOTE that cloneDeep is NOT called recursively here. It all ends at the method.
                // If extra keys are thrown onto a function, they probably will not be cloned.
                // In my experience, extra keys on functions didn't work right, so no big loss.
            }
        }
        else if (descriptor && (descriptor.get || descriptor.set)) {
            // Handle custom getters/setters. These are local and hopefully work just like methods.
            // In many cases, this is redundant with Object.create(), but is necessary to allow objects with manually-added custom getters.
            Object.defineProperty(result, key, descriptor);
            // NOTE that cloneDeep is NOT called recursively here. It all ends at the getter/setter.
            // ALSO hash not updated; this is not possible, because it will map the value it gets, not the getter.
        }
        else {
            result[key] = cloneDeep(obj[key], hash);
        }
    }
    return result;
}
exports.cloneDeep = cloneDeep;

},{}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// I don't know for sure if this will work in all cases.
// It gets deeper into the guts of JS object than I have experience with.
function cloneObject(obj) {
    if (!obj || typeof obj !== 'object') {
        return;
    }
    const result = Object.create(Object.getPrototypeOf(obj));
    for (const key of Object.getOwnPropertyNames(obj)) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, key);
        if (descriptor) {
            Object.defineProperty(result, key, descriptor);
        }
    }
    return result;
}
exports.cloneObject = cloneObject;

},{}],57:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NoneType_1 = require("../Types/NoneType");
/**
 * Recent Typescript has added a null coalescing operator (?., aka the Elvis operator) but NPM issues
 * prevent me from upgrading.  But this returns undefined if you access anything that doesn't exist.
 *
 * Naturally this breaks VSCode intellisense, because it returns any. Only MS can do keep the right type.
 *
 * If you do return a partial version of the type, TS throws an error because it could be missing (umm... that's what Partial means...).
 *
 * A true elvis operator would also work on strings/numbers/etc. This cannot do that, because JS can't tell the difference between a
 * null string and a null object. Null is null.
 */
function e_(item) {
    if (NoneType_1.isNone(item)) {
        return {};
    }
    return item;
}
exports.e_ = e_;

},{"../Types/NoneType":53}],58:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayUtilities_1 = require("../Collections/ArrayUtilities");
/**
 * A pseudo-random prefix plus the number of seconds since the unix epoch. The random part should be random enough to cover
 * multiple ids created in a millisecond.
 */
function getUniqueId() {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';
    let result = 'u' + String(new Date().getTime()) + '-';
    for (const _ of ArrayUtilities_1.range(8)) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
exports.getUniqueId = getUniqueId;

},{"../Collections/ArrayUtilities":45}],59:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tell if a given string is a positive integer.
 * Use for detecting array keys.
 */
function isPositiveIntegerString(str) {
    if (!str || typeof str !== 'string') {
        return false;
    }
    if (str === '0') {
        return true;
    }
    return /^[1-9]\d*$/.test(str);
}
exports.isPositiveIntegerString = isPositiveIntegerString;

},{}],60:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * I don't know how accurate this is but it seems pretty good
 */
function isPrimitive(obj) {
    return Object(obj) !== obj;
}
exports.isPrimitive = isPrimitive;

},{}],61:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CloneObject_1 = require("./CloneObject");
const NoneType_1 = require("../Types/NoneType");
/**
 * Object.assign() can be used for simple copies of properties, but it misses getters,
 * setters, and inherited properties. It only gets the local values.
 *
 * This should hopefully resolve that, but I don't know for sure. This is very sketchy.
 * The results are completely flat, because you can't have multiple inheritance hierarchy
 * in a language without multiple inheritance. Because this flattens objects, it is guaranteed
 * to break anything that makes super calls.
 *
 * If returnClone is true, a clone of the target object will be modified and returned, leaving
 * the original untouched.
 */
function objectFullAssign(target, source, returnClone = false) {
    if (NoneType_1.isNone(target)) {
        target = {};
    }
    if (!source || typeof source !== 'object' || typeof target !== 'object') {
        return target;
    }
    if (returnClone) {
        target = CloneObject_1.cloneObject(target);
    }
    const names = Array.from(new Set(findThePropertyNames(source)));
    for (const key of names) {
        const descriptor = findThePropertyDescriptor(source, key);
        if (descriptor) {
            Object.defineProperty(target, key, descriptor);
        }
    }
    return target;
    function findThePropertyNames(obj) {
        const result = [];
        result.push(...Object.getOwnPropertyNames(obj).filter(f => f !== 'constructor'));
        const proto = Object.getPrototypeOf(obj);
        if (proto && proto.constructor.name !== 'Object') {
            result.push(...findThePropertyNames(proto));
        }
        return result;
    }
    function findThePropertyDescriptor(obj, key) {
        const result = Object.getOwnPropertyDescriptor(obj, key);
        if (result) {
            return result;
        }
        const proto = Object.getPrototypeOf(obj);
        if (proto && proto.constructor.name !== 'Object') {
            return findThePropertyDescriptor(proto, key);
        }
    }
}
exports.objectFullAssign = objectFullAssign;

},{"../Types/NoneType":53,"./CloneObject":56}],62:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../src/Api");
const TestbenchView_1 = require("../tests/TestbenchView");
const Test000_1 = require("./Test000");
const Test001_1 = require("./Test001");
const Test002_1 = require("./Test002");
const Test003_1 = require("./Test003");
const Test004_1 = require("./Test004");
const Test005_1 = require("./Test005");
const Test006_1 = require("./Test006");
const Test007_1 = require("./Test007");
const Test008_1 = require("./Test008");
const Test009_1 = require("./Test009");
const Test010_1 = require("./Test010");
const Test011_1 = require("./Test011");
const Test012_1 = require("./Test012");
const Test013_1 = require("./Test013");
const Test014_1 = require("./Test014");
/**
 * This is a very basic page that I use to see if everything is working. It's what passes for unit tests without
 * an installable unit testing framework.
 */
function main() {
    Api_1.PageRouter.configure([
        { route: 'test/:id=0', payload: Test000_1.Test000 },
        { route: 'test/:id=1', payload: Test001_1.Test001 },
        { route: 'test/:id=2', payload: Test002_1.Test002 },
        { route: 'test/:id=3', payload: Test003_1.Test003 },
        { route: 'test/:id=4', payload: Test004_1.Test004 },
        { route: 'test/:id=5', payload: Test005_1.Test005 },
        { route: 'test/:id=6', payload: Test006_1.Test006 },
        { route: 'test/:id=7', payload: Test007_1.Test007 },
        { route: 'test/:id=8', payload: Test008_1.Test008 },
        { route: 'test/:id=9', payload: Test009_1.Test009 },
        { route: 'test/:id=10', payload: Test010_1.Test010 },
        { route: 'test/:id=11', payload: Test011_1.Test011 },
        { route: 'test/:id=12', payload: Test012_1.Test012 },
        { route: 'test/:id=13', payload: Test013_1.Test013 },
        { route: 'test/:id=14', payload: Test014_1.Test014 },
    ], TestbenchView_1.TestbenchView, true, '<div>There is no page here.</div>', 'test/0');
    // TODO: How can I unit test the router itself? Can't use this test harness, obviously.
}
main();

},{"../src/Api":1,"../tests/TestbenchView":81,"./Test000":63,"./Test001":64,"./Test002":65,"./Test003":66,"./Test004":67,"./Test005":68,"./Test006":69,"./Test007":70,"./Test008":71,"./Test009":72,"./Test010":73,"./Test011":74,"./Test012":75,"./Test013":76,"./Test014":77}],63:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../src/Api");
const TestCaseView_1 = require("./TestCaseView");
const TestCaseViewModel_1 = require("./TestCaseViewModel");
// tslint:disable:max-classes-per-file
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'Test the TestCase base classes',
            descriptionHtml: `<p>This test case base class runs tests and outputs stuff to the console, which can be
            included in the actual page (so it's not necessary to open the dev tools console, though
            that's still pretty useful.)</p>
            <p>If you don't see "Test successful," then it failed, with an error in the log. Hard to
            show the log in the page if the page is broken, so have to check the log after all.</p>`
        });
    }
}
class Test000 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            let logElement = document.getElementById('consoleLog');
            if (logElement === null) {
                throw new Error("Rendering failed.");
            }
            this.console.log("Hello world.");
            // Component rendering is asynchronous (on the microtask queue), so the assert has to be later
            setTimeout(() => {
                try {
                    logElement = document.getElementById('consoleLog');
                    if (logElement === null) {
                        throw new Error("Rendering failed.");
                    }
                    Api_1.assert(logElement.innerHTML.includes("Hello world."), "Log should update the page.");
                    this.log(`TEST ${this.viewModel.testNumber}: Test successful`);
                }
                catch (err) {
                    this.log("ERROR: " + err);
                    throw err;
                }
            }, 100);
        }
        catch (err) {
            this.log("ERROR: " + err);
            throw err;
        }
    }
}
exports.Test000 = Test000;

},{"../src/Api":1,"./TestCaseView":79,"./TestCaseViewModel":80}],64:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../src/Api");
const TestCaseView_1 = require("./TestCaseView");
const TestCaseViewModel_1 = require("./TestCaseViewModel");
// tslint:disable:max-classes-per-file
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'Assorted HTML helpers',
            descriptionHtml: `<p>Create various elements using createElement and its related functions div(), span(), etc.
                You can easily create any element using createElement() and then add it using the vanilla JS appendChild().</p>

                <p>A few other assorted HTML helpers are here. Some of these are redundant because pieces of the test bench
            depend on them. But what the hey.</p>`
        });
    }
}
class Test001 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            // Add elements using the createElement helper
            this.testArea.appendChild(Api_1.createElement("div", { id: 'div1', innerHTML: 'DIV' }));
            test('div1', 'DIV', 'createElement should create div.');
            this.testArea.appendChild(Api_1.createElement("span", { id: 'span1', innerHTML: 'SPAN' }));
            test('span1', 'SPAN', 'createElement should create span.');
            // Add elements using frequently used element creation helpers. DIV and SPAN can take inner html or an element
            const nestedParagraph = Api_1.createElement(Api_1.elementType.HTMLParagraphElement, { id: "divChild", innerHTML: "Nested paragraph" });
            this.testArea.appendChild(Api_1.div(nestedParagraph, { id: 'divParent' }));
            test('divParent', 'DIV', 'div() helper should create a div');
            Api_1.assert(!!nestedParagraph, 'Div should be created and appended with appendChild.');
            Api_1.assert(nestedParagraph.parentElement === this.testArea.querySelector('#divParent'), 'Parent of child should be the target of appendChild');
            this.testArea.appendChild(Api_1.span('Span helper', { id: 'spanHelper' }));
            test('spanHelper', 'SPAN', 'span() helper should create a span');
            // Other helpers just take inner html
            this.testArea.appendChild(Api_1.paragraph('Paragraph helper', { id: 'paragraphHelper' }));
            test('paragraphHelper', 'P', 'paragraph() helper should create a p');
            this.testArea.appendChild(Api_1.anchor('github', 'https://github.com/', { id: 'anchorHelper' }));
            test('anchorHelper', 'A', 'anchor() helper should create an a');
            Api_1.assert(Api_1.e_(this.testArea.querySelector('#anchorHelper')).href === 'https://github.com/', 'Anchor href should take the second argument');
            this.testArea.appendChild(Api_1.button('Click me and nothing will happen', { id: 'buttonHelper', style: 'display: block;' }, { readonly: true }));
            test('buttonHelper', 'BUTTON', 'button() helper should create a button');
            const btn = document.getElementById('buttonHelper');
            if (!btn) {
                throw new Error('Where did the button go?');
            }
            Api_1.assert(btn.style.display === 'block', 'Style property should set style');
            Api_1.assert(btn.getAttribute('readonly') === 'true', 'Attributes input should set attributes');
            // Create HTML by providing a raw HTML string
            const foo = 12345;
            this.testArea.appendChild(Api_1.createHtml(`<p id="rawwr">Element ${foo} created through raw HTML.</p>`));
            test('rawwr', 'P', 'Raw element should create the html element provided');
            // Escape some HTML
            this.viewModel.str = Api_1.escapeHtml('<br>');
            Api_1.assert(this.viewModel.str === '&lt;br&gt;', 'escapeHtml() should escape the HTML');
            // Extract content and put it elsewhere
            const fromEle = Api_1.createHtml('<div><p id="e1">I am some content</p></div>');
            const toEle = Api_1.div({ id: 'e2' });
            this.testArea.appendChild(fromEle);
            this.testArea.appendChild(toEle);
            const extracted = Api_1.extractNodeContent(fromEle);
            toEle.appendChild(extracted);
            const tgt1 = document.getElementById('e2');
            if (!tgt1) {
                throw new Error();
            }
            const tgt2 = tgt1.querySelector('#e1');
            Api_1.assert(!!tgt2, 'extractNodeContent() should remove the html from the source location, and appendChild should add them into the new location.');
            Api_1.assert(Api_1.e_(tgt2).innerHTML === 'I am some content', 'The content moved to the new location should match the original content.');
            // Delete content
            const delEle = Api_1.createHtml('<div><p id="e3">Something that should be deleted</p></div>');
            this.testArea.appendChild(delEle);
            Api_1.deleteNodeContent(delEle);
            Api_1.assert(!document.getElementById('e3'), "deleteNodeContent() should remove the html from the source location.");
            // Create a raw document fragment and add it
            const fragment = Api_1.createFragment(`<p id="rawwr">Fragment created through raw HTML.</p>`);
            this.testArea.appendChild(fragment);
            Api_1.assert(Api_1.e_(this.testArea.querySelector('#rawwr')).tagName === 'P', 'Raw fragment should create the html element provided');
            this.log(`TEST ${this.viewModel.testNumber}: Test successful`);
            function test(id, tag, error) {
                Api_1.assert(Api_1.e_(document.getElementById('testArea').querySelector('#' + id)).tagName === tag, error);
            }
        }
        catch (err) {
            this.log("ERROR: " + err);
            throw err;
        }
    }
}
exports.Test001 = Test001;

},{"../src/Api":1,"./TestCaseView":79,"./TestCaseViewModel":80}],65:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../src/Api");
const TestCaseView_1 = require("./TestCaseView");
const TestCaseViewModel_1 = require("./TestCaseViewModel");
// tslint:disable:max-classes-per-file
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'Miscellaneous Helpers',
            descriptionHtml: `<p>Various misc helper functions, such as range(), zip(), cartesian(),
            isNone(), and getUniqueId. The biggest thing on this page is the best possible implementation
            of keyword arguments, which isn't quite awful. Keyword arguments are a good compromise between
            quick entry and configurability, while JS's two options are only one or the other.</p>`
        });
    }
}
class Test002 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            Api_1.assert(Api_1.isNone(null), "isNone() should return true for null.");
            Api_1.assert(Api_1.isNone(undefined), "isNone() should return for undefined.");
            Api_1.assert(!Api_1.isNone("abc"), "isNone() should return false for truthy values.");
            Api_1.assert(!Api_1.isNone(""), "isNone() should return false for an empty string (a falsy value).");
            // TODO: The elvis helper is no longer needed in TS (you can use ?.). Except I can't get typescript updated.
            Api_1.assert(Api_1.e_(null).something === undefined, "null reference should not throw");
            Api_1.assert(Api_1.e_(undefined).something === undefined, "undefined reference should not throw");
            const z = Api_1.zip(['a', 'b', 'c'], ['d', 'e']);
            this.log(z);
            Api_1.assert(z[0][0] === 'a', 'zip() should combine element 0 from both arrays');
            Api_1.assert(z[0][1] === 'd', 'zip() should combine element 0 from both arrays');
            Api_1.assert(z[2][0] === 'c', 'zip() should combine element 1 from both arrays');
            Api_1.assert(z[2][1] === undefined, "If an array isn't long enough, undefined should be used.");
            const c = Api_1.cartesian(['a', 'b', 'c'], ['d', 'e']);
            this.log(c);
            Api_1.assert(c[0][0] === 'a', 'cartesian() should combine element 0 from both arrays');
            Api_1.assert(c[0][1] === 'd', 'cartesian() should combine element 0 from both arrays');
            Api_1.assert(c[1][0] === 'a', 'cartesian() should combine element 0 from array 1 and element 1 from array 2');
            Api_1.assert(c[1][1] === 'e', 'cartesian() should combine element 0 from array 1 and element 1 from array 2');
            Api_1.assert(c[2][0] === 'b', 'cartesian() should combine element 1 from array 1 and element 0 from array 2');
            Api_1.assert(c[2][1] === 'd', 'cartesian() should combine element 1 from array 1 and element 0 from array 2');
            Api_1.assert(c[3][0] === 'b', 'cartesian() should combine element 1 from both arrays');
            Api_1.assert(c[3][1] === 'e', 'cartesian() should combine element 1 from both arrays');
            const r = Api_1.range(10);
            this.log(r);
            Api_1.assert(r.length === 10, 'range() should create a range with the length given');
            Api_1.assert(r[0] === 0, 'range() should start at 0');
            Api_1.assert(r[9] === 9, 'range() should end at length - 1');
            const t = Array.from([...Api_1.traverse([0, 1, 2, [3, 4], [5, [6, 7, [8]]], 9])]);
            this.log(t);
            Api_1.assert(t[0] === 0, 'traverse() should start at the first item in the nested array');
            Api_1.assert(t[9] === 9, 'traverse() should end at the last item in the nested array (not the deepest)');
            // This is not an exhaustive test, but that would be impossible.
            const id1 = Api_1.getUniqueId();
            const id2 = Api_1.getUniqueId();
            Api_1.assert(id1 !== id2, "getUniqueId() should not produce the same id twice");
            const sortMe = ['a', 'Z', 'B', 'x', 'c', 'Y'];
            sortMe.sort(Api_1.orderBy(a => a.toUpperCase()));
            this.log(sortMe);
            Api_1.assert(JSON.stringify(sortMe) === '["a","B","c","x","Y","Z"]', "orderBy can be used to sort an array");
            // Assertion helper for the next test
            let assertYourself = "";
            const log = (arg) => {
                // tslint:disable-next-line:no-console
                console.log(arg);
                this.testArea.appendChild(Api_1.span(arg));
                this.testArea.appendChild(Api_1.createElement('br'));
                assertYourself += arg;
            };
            // And now, the main event....
            // Keyword arguments in JS.
            // It isn't as clean in TS but can be made to work.
            // Functions can be called using keyword arguments using the kw() function. For instance, consider the following function:
            function parrot(voltage, state = 'a stiff', action = 'voom', type = 'Norwegian Blue') {
                // Three redundant items here.
                // This redundantly has to list the parameters (in JS, a simple copy/paste from above) at the start.
                // It then has to list the parameters again, on the right.
                // On the left, the default values need to be repeated.
                // This sucks but it's the cleanest I can get in JS. If the reflection were a little better, I could do more.
                ({ voltage, state = 'a stiff', action = 'voom', type = 'Norwegian Blue' } = Api_1.Kwarg.parseArgs({ voltage, state, action, type }));
                assertYourself = ""; // Clear the test assertion.
                log("-- This parrot wouldn't " + action + " ");
                log("if you put " + voltage + " volts through it.");
                log("-- Lovely plumage, the " + type);
                log("-- It's " + state + "!");
                log('---------------------------------------');
            }
            // Parrot() could be called in any of the following ways:
            // (The function kw() takes an one-key object, a 2 element array, or a string and a value.)
            parrot(1000);
            Api_1.assert(assertYourself.includes('put 1000 volts'), "Normal JS positional arguments work as usual");
            parrot(Api_1.kw({ action: 'VOOOOOM' }), Api_1.kw('voltage', 1000000));
            Api_1.assert(assertYourself.includes("wouldn't VOOOOOM") && assertYourself.includes("put 1000000 volts"), "Keyword arguments can be used and can be specified as one-key objects or as two arguments");
            parrot('a thousand', Api_1.kw(['state', 'pushing up the daisies']));
            Api_1.assert(assertYourself.includes("It's pushing up the daisies!") && assertYourself.includes("put a thousand volts"), "Keyword arguments can be combined with positional arguments and tuple keyword arguments can be used");
            parrot('a million', 'bereft of life', 'jump');
            Api_1.assert(assertYourself.includes("It's bereft of life!") && assertYourself.includes("put a million volts") && assertYourself.includes("parrot wouldn't jump"), "Multiple positional arguments can be filled");
            // The following 3 cases would be invalid:
            // parrot();                                                // required argument missing caught in Typescript
            //                                                          JS is fine with an undefined argument so don't ask it for help.
            // parrot(kw({ voltage: 110 }), kw({ voltage: 220 }));      // duplicate keyword
            // parrot(kw({ actor: 'John Cleese' }));                    // unknown keyword (control with allowUnknownKeyword)
            // The following are valid but you really shouldn't do them, as they are bad practice.
            // It's not possible to catch them as errors, though. It's based on info unknown to JavaScript (specifically, argument details).
            parrot(Api_1.kw({ voltage: 5.0 }), 'dead'); // non-keyword argument following keyword
            // This works as written, but it's ugly. Code has no idea about order of arguments so cannot trap it.
            parrot(Api_1.kw({ type: 'Finnish Pink' }), 'dead'); // non-keyword argument following keyword
            // This passes undefined for voltage, because that slot has a keyword in it.
            // Code has no idea about order of arguments so cannot trap it.
            parrot(110, Api_1.kw({ voltage: 220 })); // duplicate value for argument
            // The later keyword overrides the non-keyword argument.
            // If the function has defaults in the header, throwing would cause unexpected exceptions on valid code.
            // Code cannot tell if an argument's value is a default set by JS (fine) or a user value (bad), so can't trap the bad case.
            // When Kwargs.parseArgs() is called, a property named $$kw$$ receives an object containing all keyword arguments except for
            // those corresponding to a formal parameter. But if allowUnknownKeyword is false, an error is thrown instead.
            // When Kwargs.parseArgs() is called with rest parameters included in the argument list, a property named $rest$ contains the
            // non-keyword rest arguments. Note that there is no way to indicate in the function signature that keyword
            // arguments are allowed to be included in the rest paramete, so they arer.
            // In JS, rest parameters must appear last.
            function cheeseshop(kind, ...rest) {
                let $rest$;
                let $$kw$$;
                ({ kind, $rest$, $$kw$$ } = Api_1.Kwarg.parseArgs(Object.assign({ kind }, rest), true));
                log('-- Do you have any ' + kind + '?');
                log("-- I'm sorry, we're all out of " + kind);
                for (const arg of $rest$) {
                    log(arg);
                }
                log('------');
                for (const kwvar of Object.getOwnPropertyNames($$kw$$)) {
                    log(kwvar + ' : ' + $$kw$$[kwvar]);
                }
                log('---------------------------------------');
            }
            // It could be called like this:
            cheeseshop("Limburger", "It's very runny, sir.", "It's really very, VERY runny, sir.", Api_1.kw({ shopkeeper: "Michael Palin" }), Api_1.kw({ client: "John Cleese" }), Api_1.kw({ sketch: "Cheese Shop Sketch" }));
            Api_1.assert(assertYourself.includes("Do you have any Limburger?") && assertYourself.includes("It's very runny, sir.") && assertYourself.includes("It's really very, VERY runny, sir.") && assertYourself.includes("sketch : Cheese Shop Sketch"), "Rest arguments ($rest$, acts like *args) and rest keyword arguments ($$kw$$, acts like **kw) can be used");
            // Arbitrary argument lists are supported in JavaScript by ...rest parameters, so do not need special handling.
            // Note that rest parameters MUST be the final argument, so while it is have keyword arguments, it isn't possible
            // to indicate in the function definition that arbitrary keyword arguments are allowed.
            // These lists can be unpacked by the ...spread operator, so again, does not need special handling.
            // In the same fashion, objects can deliver keyword arguments with the ...spread operator and the Kwarg.unpack() function:
            const dict = { action: "VOOM", voltage: "four million", state: "bleedin' demised" };
            // This kind of TypeScript coercion is needed when there is one or more required parameters. It is NOT pretty.
            // On stack overflow, there are several ways given to indicate min-length arrays. NONE are valid TS.
            // In pure JS, these two lines are just parrot(...Kwarg.unpack(dict));
            const unpacked = Api_1.Kwarg.unpack(dict);
            parrot(unpacked[0], ...unpacked.slice(1));
            Api_1.assert(assertYourself.includes("This parrot wouldn't VOOM") && assertYourself.includes("put four million volts") && assertYourself.includes("It's bleedin' demised!"), "Objects can be unpacked into separate keyword arguments using Kwarg.unpack");
            this.log(`TEST ${this.viewModel.testNumber}: Test successful`);
        }
        catch (err) {
            this.log("ERROR: " + err);
            throw err;
        }
    }
}
exports.Test002 = Test002;

},{"../src/Api":1,"./TestCaseView":79,"./TestCaseViewModel":80}],66:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../src/Api");
const TestCaseView_1 = require("./TestCaseView");
const TestCaseViewModel_1 = require("./TestCaseViewModel");
// tslint:disable:max-classes-per-file
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'Deferred Promises',
            descriptionHtml: `
            <h2>Intro</h2>
            <p>The deferred promise is like a regular javascript promise, except that the deferred promise can be triggered manually at any point after it's creation. Regular promises start immediately and just hold their response.</p>
            <p>The deferred promise is implemented as a wrapper around a regular promise, so it uses the same microtask queue.</p>
            <p>The API is similar to the Promise() API, but is tweaked a little bit for usability. For example, having onfulfilled() and onrejected() in then() means that errors in onfulfilled() are not caught. Experienced JS programmers recommend not using onrejected(). I left it out ... why invite disaster when catch() exists?</p>

            <h2>Usage</h2>
            <p>Create a new deferred with "new DeferredPromise()." The API is as follows:</p> 

            <pre>
            class DeferredPromise {
                constructor(
                    onfulfilled?: (value: any) => PromiseLike,
                    throwOnUnhandledError: boolean
                );

                then(
                        onfulfilled?: (value: any) => PromiseLike,
                        throwOnUnhandledError: boolean
                    ): this;
                catch(
                        onrejected?: (reason: any) => PromiseLike,
                        throwOnUnhandledError: boolean
                ): this;

                resolve(args?: any): void;
                reject(args?: any): void;

                get output(): Promise;
            }
            </pre>

            <p>The use of then() and catch() should look very familiar to you if you've used promises before. If it doesn't, google it.</p>

            <p>To invoke the promise, call resolve() on the deferred promise with whatever args you want to pass it.</p>
            <p>Promise.resolve('Something').then(s => someFunction(s))<br />
            is almost the same as <br />
            new DeferredPromise().then(s => someFunction(s)),<br />
            except that the latter is not executed until you call promise.resolve(). Actually, I lie. In that example, resolve() is called somewhere in both cases. It's a garbage example. The point is, in a deferred someFunction() is executed later.</p>

            <h3>Construction</h3>

            <p>Unlike with an unwrapped Promise, you can actually create a DeferredPromise by using new DeferredPromise(). This resolves one of the inconsistencies in the Promise API. One of the things I like about where JS is going is that classes are generally newable.</p>

            <p>The deferred promise takes an optional callback as an input, so that new DeferredPromise(() => console.log('Got it')) is the same as "new DeferredPromise().then(() => console.log('Got it'))."</p>

            <p>Promises, except when used in an async/await context, have an issue with unhandled exceptions. In normal code, an unhandled exception throws in the browser console. In promises, an unhandled exception is silently swallowed. The only way of handling this is to include a catch() step, which will force errors to drop to the catch, and all is good ... unless an error is thrown in the catch. Oops. Having the opposite error handling behavior is a flaw in the promise API, so by default, throwOnUnhandledError adds an extra catch onto every step to throw an error in the browser console.</p>

            <small>I would have preferred to add this only at the end of the chain, but the DeferredPromise doesn't know where the end of the chain is, only the beginning.</small>

            <small>This is messy but it means you don't need to worry that exceptions will be swallowed. It breaks the then().then().catch() pattern so it's not enabled by default.</small>

            <p>It is possible to set throwOnUnhandledError on a step-by-step basis, but it's probably not extremely useful.</p>

            <h3>Async/await</h3>
            <p>Async/await in JS is syntactic sugar around promises, so to make this work, you need access to the actual inner promise that is being wrapped in the DeferredPromise(). This is made accessible through the "output" accessor. You can use it like this:</p>

            <pre>
                this.deferred = new DeferredPromise().then(() => fetchSomething());
                const result = await this.deferred.output;
                setSomethingEqualTo(result);
            </pre>

            <p>Then when something else, such as a mouse-click or the result of some other async operation triggers this.deferred.resolve(), the code picks up again at the await.</p>

            <h2>Warning</h2>
            <p>Tests are async and will keep running. Wait for tests to complete before leaving page.</p>
            `
        });
    }
}
class Test003 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            new Api_1.DeferredPromise(() => this.testArea.appendChild(Api_1.paragraph("Waitable test 1", { id: 'waitTest1' }))).resolve();
            new Api_1.DeferredPromise().then(() => this.testArea.appendChild(Api_1.paragraph("Waitable test 2", { id: 'waitTest2' }))).resolve();
            const waitDefer = new Api_1.DeferredPromise().then(() => this.testArea.appendChild(Api_1.paragraph("Waitable test 3", { id: 'waitTest3' })));
            setTimeout(() => waitDefer.resolve(), 500);
            // Testing errors is hard in a pattern where you don't want to see exceptions
            const none = null;
            new Api_1.DeferredPromise(() => {
                none.nullReferenceException();
            })
                .then(() => this.testArea.appendChild(Api_1.paragraph("FORCED ERROR FAILED", { id: 'catchTest1' })))
                .catch(() => this.testArea.appendChild(Api_1.paragraph("CAUGHT ERROR", { id: 'catchTest1' })))
                .resolve();
            new Api_1.DeferredPromise(() => {
                none.nullReferenceException();
            }, true)
                .then(() => this.testArea.appendChild(Api_1.paragraph("FORCED ERROR FAILED", { id: 'catchTest2' })))
                .catch(s => this.testArea.appendChild(Api_1.paragraph('Automatic message: ' + s.message, { id: 'catchTest2' })))
                .resolve();
            new Api_1.DeferredPromise(() => {
                none.nullReferenceException();
            })
                .then(() => this.testArea.appendChild(Api_1.paragraph("FORCED ERROR FAILED", { id: 'catchTest3' })), true)
                .catch(s => this.testArea.appendChild(Api_1.paragraph('Automatic message: ' + s.message, { id: 'catchTest3' })))
                .resolve();
            new Api_1.DeferredPromise(() => {
                none.nullReferenceException();
            }, true)
                .then(() => this.testArea.appendChild(Api_1.paragraph("FORCED ERROR FAILED", { id: 'catchTest4' })))
                .catch(() => none.nullReferenceException()) // error thrown in catch
                .catch(() => this.testArea.appendChild(Api_1.paragraph("CAUGHT ERROR IN CATCH", { id: 'catchTest4' })))
                .resolve();
            new Api_1.DeferredPromise(() => {
                none.nullReferenceException();
            })
                .then(() => this.testArea.appendChild(Api_1.paragraph("FORCED ERROR FAILED", { id: 'catchTest5' })))
                .catch(() => none.nullReferenceException(), true) // error thrown in catch
                .catch(() => this.testArea.appendChild(Api_1.paragraph("CAUGHT ERROR IN CATCH", { id: 'catchTest5' })))
                .resolve();
            new Api_1.DeferredPromise(() => this.log("This should never be called"))
                .then(() => this.testArea.appendChild(Api_1.paragraph("FORCED ERROR FAILED", { id: 'rejectTest1' })))
                .catch(s => this.testArea.appendChild(Api_1.paragraph("CAUGHT ERROR: " + s, { id: 'rejectTest1' })))
                .reject('REJECTED MANUALLY');
            // This isn't a perfect test because this project is currently generating ES2015, and TSC turns async/await into a generator.
            const waitAsync = new Api_1.DeferredPromise(() => "AWAITED");
            // Async/await test
            function test() {
                return __awaiter(this, void 0, void 0, function* () {
                    const awaited = yield waitAsync.output;
                    document.getElementById('testArea').appendChild(Api_1.paragraph("ASYNC/AWAIT: " + awaited, { id: 'awaitTest1' }));
                });
            }
            setTimeout(() => test(), 0);
            setTimeout(() => waitAsync.resolve(), 10);
            this.log('Async test initiated (2 test sets).');
            // Testing async stuff, ick
            setTimeout(() => {
                try {
                    // 100ms after creation, waitDefer should not have been invoked.
                    const wait1 = document.getElementById('waitTest3');
                    Api_1.assert(!wait1, "Waitable should wait before resolution.");
                    this.log(`TEST ${this.viewModel.testNumber}: Test set 1 successful.`);
                }
                catch (err) {
                    this.log("ERROR: " + err);
                    throw err;
                }
            }, 10);
            setTimeout(() => {
                try {
                    const wait1 = document.getElementById('waitTest1');
                    Api_1.assert(!!wait1, "Waitable constructor should activate when resolve() called.");
                    const wait2 = document.getElementById('waitTest2');
                    Api_1.assert(!!wait2, "Waitable then() should activate when resolve called().");
                    const wait3 = document.getElementById('waitTest3');
                    Api_1.assert(!!wait3, "Deferred should not need to be resolved immediately.");
                    const error1 = document.getElementById('catchTest1');
                    Api_1.assert(Api_1.e_(error1).innerHTML === "CAUGHT ERROR", "Catch() should be executed on an error");
                    const error2 = document.getElementById('catchTest2');
                    Api_1.assert(Api_1.e_(error2).innerHTML.includes('nullReferenceException'), "Automatic throwOnUnhandledError should be thrown with the default error message text");
                    const error3 = document.getElementById('catchTest3');
                    Api_1.assert(Api_1.e_(error3).innerHTML.includes('nullReferenceException'), "Instance-level automatic throwOnUnhandledError should be executed on error");
                    const error4 = document.getElementById('catchTest4');
                    Api_1.assert(Api_1.e_(error4).innerHTML === "CAUGHT ERROR IN CATCH", "throwOnUnhandledError should catch errors thrown in a catch() statement");
                    const error5 = document.getElementById('catchTest5');
                    Api_1.assert(Api_1.e_(error5).innerHTML === "CAUGHT ERROR IN CATCH", "Error in catch() should be caught with instance-level throwOnUnhandledError");
                    const error6 = document.getElementById('rejectTest1');
                    Api_1.assert(Api_1.e_(error6).innerHTML === "CAUGHT ERROR: REJECTED MANUALLY", "Reject() should force execution of catch() block");
                    const asyncawait = document.getElementById('awaitTest1');
                    Api_1.assert(Api_1.e_(asyncawait).innerHTML === "ASYNC/AWAIT: AWAITED", "Async/await() should act as expected (note: implementation varies by TypeScript ES version)");
                    this.log(`TEST ${this.viewModel.testNumber}: Test set 2 successful.`);
                }
                catch (err) {
                    this.log("ERROR: " + err);
                    throw err;
                }
            }, 1000);
        }
        catch (err) {
            this.log("ERROR: " + err);
            throw err;
        }
    }
}
exports.Test003 = Test003;

},{"../src/Api":1,"./TestCaseView":79,"./TestCaseViewModel":80}],67:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../src/Api");
const TestCaseView_1 = require("./TestCaseView");
const TestCaseViewModel_1 = require("./TestCaseViewModel");
// tslint:disable:max-classes-per-file
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'Repeatable Promises',
            descriptionHtml: `
            <h2>Intro</h2>
            <p>The promise is almost like an event emitter, and with the introduction of the DeferredPromise class,
            which allows invocation at a later point in time, this is more true. But there is one thing that makes
            promises inadequate as event emitters: promises can only be resolved once. The resolve once behavior is
            fundamental to the entire concept of the promise.</p>

            <p>But they're so nice, otherwise. The promise API is so useful for chaining asynchronous event handlers,
            and it makes the async/await syntax possible, and as much as I like the promise API, the async/await API
            is far better. You can't have it without promises, though.</p>

            <p>And so the RepeatablePromise was born. The repeatable promise is a fiction that pretends to be a promise
            by showing a similar API. In fact, it is a factory class. Wwhat it does is build a new promise every time you
            call it, which involves a performance hit but is better than nothing it all. Sure, nothing at all is really darn
            fast, but it has a tendency to be useless.</p>

            <h2>Usage</h2>
            <p>Create a new repeatable with "new RepeatablePromise()." The API is as follows:</p>

            <pre>
            class RepeatablePromise {
                constructor(
                    onfulfilled?: (value: any) => PromiseLike,
                    onUnhandledError?: (value: any) => PromiseLike,
                    throwOnUnhandledError: boolean
                );

                then(
                        onfulfilled?: (value: any) => PromiseLike
                    ): this;
                catch(
                        onrejected?: (reason: any) => PromiseLike
                ): this;

                resolve(args?: any): Promise;
                reject(args?: any): Promise;

                build(): DeferredPromise;
            }
            </pre>

            <p>The use of then() and catch() should look very familiar to you if you've used promises before. If it doesn't, google it.</p>

            <p>To invoke the promise, call resolve() on the repeatable promise with whatever args you want to pass it. You can do this as many times as you need to.</p>

            <p>The build() method gives a hint about how the RepeatablePromise class works, as it is a DeferredPromise factory. The build() method is public so that if you want to use it as a promise builder, you can go right on and do it.</p>

            <h3>Construction</h3>

            <p>The repeatable promise takes an optional callback as an input, so that new RepeatablePromise(() => console.log('Got it')) is the same as "new RepeatablePromise().then(() => console.log('Got it'))."</p>

            <p>Promises, except when used in an async/await context, have an issue with unhandled exceptions. In normal code, an unhandled exception throws in the browser console. In promises, an unhandled exception is silently swallowed. The only way of handling this is to include a catch() step, which will force errors to drop to the catch, and all is good ... unless an error is thrown in the catch. Oops. Having the opposite error handling behavior is a flaw in the promise API, so by default, throwOnUnhandledError adds an extra catch onto the very end that throws if the error is unhandled.</p>

            <p>If you want to declare, during construction, a catch block to be called on any unhandled error, you can spedify the onUnhandledError input. This is sugar for promise.then().then().catch(myCallback) (this would have been done in the DeferredPromise if it were possible).</p>

            <h3>Async/await</h3>
            <p>Async/await in javascript is syntactic sugar around promises, so to make this work, you need access to the actual inner promise that is being wrapped in the RepeatablePromise.  This is returned from the resolve method. You can use it like this:</p>

            <pre>
                this.repeatable = new RepeatablePromise().then(() => fetchSomething());
                this.someMethod = function() {
                    const result = await this.repeatable.resolve();
                    setSomethingEqualTo(result);
                }
            </pre>

            <p>Then when something else, such as a mouse-click or the result of some other async operation calls someMethod(), the promise is resolved and acted upon.</p>

            <p>Again, tests are async and will keep running. Wait for tests to complete before leaving page. From this point on, most of
            the test cases are async.</p>
            `
        });
    }
}
class Test004 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            // The tests for deferred must also work for repeable.
            new Api_1.RepeatablePromise(() => this.testArea.appendChild(Api_1.paragraph("Waitable test 1", { id: 'waitTest1' }))).resolve();
            new Api_1.RepeatablePromise().then(() => this.testArea.appendChild(Api_1.paragraph("Waitable test 2", { id: 'waitTest2' }))).resolve();
            const waitDefer = new Api_1.RepeatablePromise().then(() => this.testArea.appendChild(Api_1.paragraph("Waitable test 3", { id: 'waitTest3' })));
            setTimeout(() => waitDefer.resolve(), 500);
            // Testing errors is hard in a pattern where you don't want to see exceptions
            const none = null;
            new Api_1.RepeatablePromise(() => {
                none.nullReferenceException();
            })
                .then(() => this.testArea.appendChild(Api_1.paragraph("FORCED ERROR FAILED", { id: 'catchTest1' })))
                .catch(() => this.testArea.appendChild(Api_1.paragraph("CAUGHT ERROR", { id: 'catchTest1' })))
                .resolve();
            new Api_1.RepeatablePromise(() => {
                none.nullReferenceException();
            }, null, true)
                .then(() => this.testArea.appendChild(Api_1.paragraph("FORCED ERROR FAILED", { id: 'catchTest2' })))
                .catch(s => this.testArea.appendChild(Api_1.paragraph('Automatic message: ' + s.message, { id: 'catchTest2' })))
                .resolve();
            new Api_1.RepeatablePromise(() => {
                none.nullReferenceException();
            }, null, true)
                .then(() => this.testArea.appendChild(Api_1.paragraph("FORCED ERROR FAILED", { id: 'catchTest4' })))
                .catch(() => none.nullReferenceException()) // error thrown in catch
                .catch(() => this.testArea.appendChild(Api_1.paragraph("CAUGHT ERROR IN CATCH", { id: 'catchTest4' })))
                .resolve();
            new Api_1.RepeatablePromise(() => this.log("This should never be called"))
                .then(() => this.testArea.appendChild(Api_1.paragraph("FORCED ERROR FAILED", { id: 'rejectTest1' })))
                .catch(s => this.testArea.appendChild(Api_1.paragraph("CAUGHT ERROR: " + s, { id: 'rejectTest1' })))
                .reject('REJECTED MANUALLY');
            // This isn't a perfect test because this project is currently generating ES2015, and TSC turns async/await into a generator.
            const waitAsync = new Api_1.RepeatablePromise(() => "AWAITED");
            // Async/await test
            function test() {
                return __awaiter(this, void 0, void 0, function* () {
                    const awaited = yield waitAsync.resolve();
                    document.getElementById('testArea').appendChild(Api_1.paragraph("ASYNC/AWAIT: " + awaited, { id: 'awaitTest1' }));
                });
            }
            setTimeout(() => test(), 0);
            // Tests for repeatable functionality
            let i = 1;
            const repeater1 = new Api_1.RepeatablePromise(() => {
                this.testArea.appendChild(Api_1.paragraph("Repeated: " + i, { id: "repeatTest" + i }));
                i++;
            });
            repeater1.resolve();
            repeater1.resolve();
            new Api_1.RepeatablePromise(() => {
                none.nullReferenceException();
            }, () => this.testArea.appendChild(Api_1.paragraph("CAUGHT ERROR", { id: 'catchTest7' })))
                .then(() => this.testArea.appendChild(Api_1.paragraph("FORCED ERROR FAILED", { id: 'catchTest7' })))
                .resolve();
            const repeater3 = new Api_1.RepeatablePromise().then(() => this.testArea.appendChild(Api_1.paragraph("Build test", { id: 'repeatTest3' })));
            const wait4 = repeater3.build();
            wait4.resolve();
            this.log('Async test initiated (2 test sets).');
            // Testing async stuff is super annoying
            setTimeout(() => {
                try {
                    // 100ms after creation, waitDefer should not have been invoked.
                    const wait1 = document.getElementById('waitTest3');
                    Api_1.assert(!wait1, "Waitable should wait before resolution.");
                    this.log(`TEST ${this.viewModel.testNumber}: Test set 1 successful.`);
                }
                catch (err) {
                    this.log("ERROR: " + err);
                    throw err;
                }
            }, 10);
            setTimeout(() => {
                try {
                    const wait1 = document.getElementById('waitTest1');
                    Api_1.assert(!!wait1, "Waitable constructor should activate when resolve() called.");
                    const wait2 = document.getElementById('waitTest2');
                    Api_1.assert(!!wait2, "Waitable then() should activate when resolve called().");
                    const wait3 = document.getElementById('waitTest3');
                    Api_1.assert(!!wait3, "Deferred should not need to be resolved immediately.");
                    const error1 = document.getElementById('catchTest1');
                    Api_1.assert(Api_1.e_(error1).innerHTML === "CAUGHT ERROR", "Catch() should be executed on an error");
                    const error2 = document.getElementById('catchTest2');
                    Api_1.assert(Api_1.e_(error2).innerHTML.includes('nullReferenceException'), "Automatic throwOnUnhandledError should be thrown with the default error message text");
                    const error4 = document.getElementById('catchTest4');
                    Api_1.assert(Api_1.e_(error4).innerHTML === "CAUGHT ERROR IN CATCH", "throwOnUnhandledError should catch errors thrown in a catch() statement");
                    const error6 = document.getElementById('rejectTest1');
                    Api_1.assert(Api_1.e_(error6).innerHTML === "CAUGHT ERROR: REJECTED MANUALLY", "Reject() should force execution of catch() block");
                    const asyncawait = document.getElementById('awaitTest1');
                    Api_1.assert(Api_1.e_(asyncawait).innerHTML === "ASYNC/AWAIT: AWAITED", "Async/await() should act as expected (note: implementation varies by TypeScript ES version)");
                    const repeat1 = document.getElementById('repeatTest1');
                    Api_1.assert(!!repeat1, 'Repeated should execute when resolved');
                    const repeat2 = document.getElementById('repeatTest2');
                    Api_1.assert(!!repeat2, 'Repeated should execute again when resolved again');
                    const repeat3 = document.getElementById('repeatTest3');
                    Api_1.assert(!!repeat3, 'Repeated build() should return a deferred, which should be executable');
                    const error7 = document.getElementById('catchTest7');
                    Api_1.assert(Api_1.e_(error7).innerHTML === "CAUGHT ERROR", "Catch() 7 should be caught by the general exception handler.");
                    this.log(`TEST ${this.viewModel.testNumber}: Test set 2 successful.`);
                }
                catch (err) {
                    this.log("ERROR: " + err);
                    throw err;
                }
            }, 1000);
        }
        catch (err) {
            this.log("ERROR: " + err);
            throw err;
        }
    }
}
exports.Test004 = Test004;

},{"../src/Api":1,"./TestCaseView":79,"./TestCaseViewModel":80}],68:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../src/Api");
const TestCaseView_1 = require("./TestCaseView");
const TestCaseViewModel_1 = require("./TestCaseViewModel");
// tslint:disable:max-classes-per-file
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'Event Handler',
            descriptionHtml: `
            <h2>Intro</h2>
            <p>An event handler is an object containing a subscribe() method and an invoke() method.
            When the invoke() method is called, any delegates that are subscribed are executed. At it's heart, that's
            all it is. The basic design comes from C# event handlers, as does the name (personally, I would prefer "event
            emitter", because to me the subscribing delegate listeners are "handling" the event, but who am I to argue
            with Microsoft).</p>

            <h2>Usage</h2>
            <p>The API is as follows:</p>

            <pre>
            type DelegateType = { callback: IAction1<any>, thisArg: any, promise: RepeatablePromise };
            type RepeatablePromise = RecursiveArray<DelegateType>;

            class EventHandler<TArgs> {
                delegate: RecursiveDelegate;

                subscribe(delegate: RecursiveDelegate): void;
                subscribe(callback: IAction1<TArgs>): void;

                invoke(args?: TArgs): void;

                unsubscribeCallback(callback: IAction1<TArgs>): void;
                unsubscribeDelegate(delegate: RecursiveDelegate): void;
                unsubscribeListener(listener: any): void;
                clear(): void;

                dispose(): void;
            }
            </pre>

            <p>You can subscribe one or more callbacks, either individually or all at the same time. You can also subscribe other delegates, which themselves can be made of multiple callbacks. This is useful to have one delegate invocation trigger multiple event handlers.  You can keep going ad-infinitum. You can subscribe a delegate to itself, if you want to crash the browser.</p>

            <p>The RecursiveDelegate is an array of DelegateType, or an array of arrays of DelegateType, or an array of array of arrays of DelegateType, etc.</p>

            <p>You shoulds include thisArg for the listener that should execute the callback. This is not absolutely required for extremely simple callbacks, but the majority of callbacks do require the thisArg to function, and it's really easy to leave out, making for confusing errors. If this were C#, I might have marked that override as obsolete so you'd get a warning.</p>

            <p>By default, the EventHandler is asynchronous, using promises to execute the delegate. To create a synchronous event handler, send false into the constructor, new EventHandler(false).</p>

            <h2>Warning</h2>
            <p>Tests are async and will keep running. Wait for tests to complete before leaving page.</p>
            `
        });
    }
}
class Test005 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            const handler1 = new Api_1.EventHandler();
            handler1.subscribe(args => this.testArea.appendChild(Api_1.createElement('p', args)), this);
            handler1.invoke({ id: 'handler1', innerHTML: 'TEST 1' });
            handler1.invoke({ id: 'handler2', innerHTML: 'TEST 2' });
            const handler2 = new Api_1.EventHandler(true);
            handler2.subscribe(args => {
                args.id = args.id + 's';
                args.innerHTML = args.innerHTML + ': SYNC';
                this.testArea.appendChild(Api_1.createElement('p', args));
            }, this);
            handler2.invoke({ id: 'handler3', innerHTML: 'TEST 3' });
            // You can subscribe delegates to other delegates, the same as callbacks.
            handler1.subscribe(handler2.delegate);
            handler1.invoke({ id: 'handler4', innerHTML: 'TEST 4' });
            handler1.unsubscribeDelegate(handler2.delegate);
            handler1.invoke({ id: 'handler5', innerHTML: 'TEST 5' });
            const listener1 = {
                callback: function (args) {
                    args.id = args.id + 'c';
                    args.innerHTML = args.innerHTML + ': CALLBACK';
                    document.getElementById('testArea').appendChild(Api_1.createElement('p', args));
                }
            };
            handler1.clear();
            handler1.subscribe(listener1.callback, listener1);
            handler1.invoke({ id: 'handler6', innerHTML: 'TEST 6' });
            handler1.unsubscribeListener(listener1);
            handler1.invoke({ id: 'handler7', innerHTML: 'TEST 7' });
            handler1.subscribe(listener1.callback, listener1);
            handler1.unsubscribeCallback(listener1.callback);
            handler1.invoke({ id: 'handler8', innerHTML: 'TEST 8' });
            // Handler 2 should call handler 1 which calls the callback on handler 1.
            handler1.subscribe(listener1.callback, listener1);
            handler2.subscribe(handler1.delegate);
            handler2.invoke({ id: 'handler9', innerHTML: 'TEST 9' });
            // The delegate is a real reference, not a copy, so if you unsub the callback, it should also unsub from handler2.
            handler1.unsubscribeCallback(listener1.callback);
            handler2.invoke({ id: 'handler10', innerHTML: 'TEST 10' });
            this.log('Async test initiated (1 test set).');
            // Testing async stuff is super annoying
            setTimeout(() => {
                try {
                    const test1 = document.getElementById('handler1');
                    Api_1.assert(!!test1, 'invoke() should execute the callback with the arguments provided.');
                    const test2 = document.getElementById('handler2');
                    Api_1.assert(!!test2, 'invoke() should be repeatable.');
                    const test3 = document.getElementById('handler3s');
                    Api_1.assert(!!test3, 'Synchronous invoke() should execute the listener.');
                    const test4a = document.getElementById('handler4');
                    Api_1.assert(!!test4a, 'invoke() when chained should still function.');
                    const test4b = document.getElementById('handler4s');
                    Api_1.assert(!!test4b, 'invoke() when chained should execute the secondary observable');
                    const test5 = document.getElementById('handler5s');
                    Api_1.assert(!test5, 'Unsubscribed delegates should not be triggered by invoke.');
                    const test6 = document.getElementById('handler6c');
                    Api_1.assert(!!test6, 'Dumb callbacks should be chainable just like observables.');
                    const test6b = document.getElementById('handler6');
                    Api_1.assert(!test6b, 'Clear() should unsubscribe all listeners.');
                    const test7 = document.getElementById('handler7c');
                    Api_1.assert(!test7, 'Should be able to unsubscribe callbacks by listener.');
                    const test8 = document.getElementById('handler8c');
                    Api_1.assert(!test8, 'Should be able to unsubscribe specific callbacks.');
                    const test9 = document.getElementById('handler9sc');
                    Api_1.assert(!!test9, 'When unsubscribing a callback from a secondary listener, it should also be unsubscribed from the primary.');
                    const test10 = document.getElementById('handler10sc');
                    Api_1.assert(!test10, 'When unsubscribing a delegate from a secondary listener, it should also be unsubscribed from the primary.');
                    this.log(`TEST ${this.viewModel.testNumber}: Test successful`);
                }
                catch (err) {
                    this.log('ERROR: ' + err);
                    throw err;
                }
            }, 1000);
        }
        catch (err) {
            this.log('ERROR: ' + err);
            throw err;
        }
    }
}
exports.Test005 = Test005;

},{"../src/Api":1,"./TestCaseView":79,"./TestCaseViewModel":80}],69:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../src/Api");
const TestCaseView_1 = require("./TestCaseView");
const TestCaseViewModel_1 = require("./TestCaseViewModel");
// tslint:disable:max-classes-per-file
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'Observable Property',
            descriptionHtml: `
            <h2>Usage</h2>
            <p>An observable property is a field that, when you set its value, raises an event on its event handler.</p>
            <p>And really, it's no more complicated than that. You would use it like the following:</p>
            <pre><code>
                var prop = new ObservableProperty<int>(41);
                prop.subscribe(someComponent.render, someComponent);
                prop.value += 1;
            </code></pre>
            <p>Now someComponent refreshes to show the answer to the ultimate question of life, the universe, and everything. You should try to use safeValue, which is a non-null, HTML-escaped string, for any displayed properties. By default, injection
            should not occur. If it is necessary to inject the value directly into the HTML, use value.</p>

            <h2>Warning</h2>
            <p>Tests are async and will keep running. Wait for tests to complete before leaving page.</p>
            `
        });
    }
}
class Test006 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            const observable1 = new Api_1.ObservableProperty(1, { name: "A Number" });
            Api_1.assert(observable1.value === 1, "Observable value should return initial value");
            observable1.subscribe(args => this.testArea.appendChild(Api_1.paragraph(`New:${args.newValue}. Old:${args.oldValue}`, { id: "test" + args.oldValue })), observable1);
            observable1.value = 2;
            observable1.value = 3;
            // See later for assert
            Api_1.assert(observable1.toString() === "3", "toString should return the string representation of the internal value");
            const observable2 = new Api_1.ObservableProperty("Dog", { name: "Dog Lover" });
            const observable3 = new Api_1.ObservableProperty("Cat", { name: "Cat Lover" });
            const observable4 = new Api_1.ObservableProperty("Hamustaa", { name: "Discordian" });
            function callback(args, id) {
                document.getElementById('testArea').appendChild(Api_1.paragraph(`I am ${this.value}. Event value: ${args.newValue}`, { id: "forwardTest" + id }));
            }
            // Passing around this in javascript is bloody annoying.
            // But usually we aren't linking directly to the observable and trying to manually send in enclosed values.
            // Not THIS redundant all the time.
            observable2.subscribe(args => callback.call(observable2, args, 1), observable2);
            observable3.subscribe(args => callback.call(observable3, args, 2), observable3);
            observable4.subscribe(args => callback.call(observable4, args, 3), observable4);
            observable3.sendChangeEventsTo(observable2);
            observable3.receiveChangeEventsFrom(observable4);
            // 4 is sending to 3, which is sending to 2. So modifying 4 will trigger all 3 callbacks.
            observable4.value = "Boa Constrictor";
            const observable5 = new Api_1.ObservableProperty("");
            observable5.subscribe(args => this.testArea.appendChild(Api_1.createElement("div", { innerHTML: observable5.safeValue, id: "escape1" })), observable5);
            observable5.value = "<p>paragraph should be escaped</p>";
            const observable6 = new Api_1.ObservableProperty("");
            observable6.subscribe(args => this.testArea.appendChild(Api_1.createElement("div", { innerHTML: observable6.value, id: "escape2" })), observable6);
            observable6.value = "<p>paragraph should not be escaped</p>";
            // If OnlyWhenChanged is true, then no event is invoked when the new value is the same as the old value.
            const observable7 = new Api_1.ObservableProperty('Foo', { onlyWhenChanged: true });
            observable7.subscribe(args => this.testArea.appendChild(Api_1.paragraph(`New:${args.newValue}. Old:${args.oldValue}`, { id: "noop" })), observable7);
            observable7.value = 'Foo';
            const observable8 = {
                prop: new Api_1.ObservableProperty("Foo")
            };
            observable8.prop.subscribe((args) => this.testArea.appendChild(Api_1.paragraph(`New:${args.newValue}. Old:${args.oldValue}`, { id: "assign" })), observable8);
            Api_1.observableAssign(observable8, { prop: "BAR", notprop: "BAZ" }); // very simple test
            Api_1.assert(observable8.notprop === "BAZ", "All properties copied by observableAssign");
            this.log('Async test initiated (1 test set).');
        }
        catch (err) {
            this.log("ERROR: " + err);
            throw err;
        }
        // Testing async stuff is super annoying
        setTimeout(() => {
            try {
                const test1 = document.getElementById('test1');
                Api_1.assert(!!test1, 'changing value should execute the callback.');
                Api_1.assert(Api_1.e_(test1).innerHTML === "New:2. Old:1", "Correct arguments should be passed");
                const test2 = document.getElementById('test2');
                Api_1.assert(!!test2, 'changing value should execute the callback repeatedly.');
                const test3 = document.getElementById('forwardTest1');
                const test4 = document.getElementById('forwardTest2');
                Api_1.assert(!!test4, "When receiving change events, observable should be invoked by an event on the sender, using the same arguments");
                Api_1.assert(!!test3, "When sending change events, observable invocation should trigger an event on the receiver, using the same arguments");
                Api_1.assert(Api_1.e_(document.getElementById('escape1')).innerHTML === "&lt;p&gt;paragraph should be escaped&lt;/p&gt;", "safeValue should be escaped for string observables");
                Api_1.assert(Api_1.e_(document.getElementById('escape2')).querySelector('p').innerHTML === "paragraph should not be escaped", "value should not be escaped");
                Api_1.assert(document.getElementById('noop') === null, "No update when value not changed if onlyWhenChanged set");
                Api_1.assert(document.getElementById('assign').innerHTML === "New:BAR. Old:Foo", "Observable assign assigns full object without losing subscribers");
                this.log(`TEST ${this.viewModel.testNumber}: Test successful`);
            }
            catch (err) {
                this.log('ERROR: ' + err);
                throw err;
            }
        }, 1000);
    }
}
exports.Test006 = Test006;

},{"../src/Api":1,"./TestCaseView":79,"./TestCaseViewModel":80}],70:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../src/Api");
const TestCaseView_1 = require("./TestCaseView");
const TestCaseViewModel_1 = require("./TestCaseViewModel");
// tslint:disable:max-classes-per-file
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'Observable (Roxy) by Proxy',
            descriptionHtml: `
            <p>A clean aproach for the programmer is to use ES2015 proxies. Proxies have been around for enough years
            that they should be supported by all browsers.  They have the benefit of being able to trap access to an
            object in a way that is invisible. They have the disadvantage of being orders of magnitude slower than
            direct access. But we're everywhere using promises, which are an order of magnitude slower than callbacks, so
            clearly CPU cycles are cheap these days. For normal GUI operations, high performance isn't needed.</p>

            <p>The way you create proxies in JavaScript is nasty stuff, and requires the original proxied object to
            be stored somewhere. This is hidden way from you by the ObservableProxy.proximate() method, which takes an
            object and returns the proxied observable version.</p>

            <p>Proxied observables do not have any helper methods like the observable property's safeValue. To the user, they
            appear to be simple POJOs, where get just returns a string. You have to remember to escape it yourself (this isn't
            to say I won't make an extension method at some point).</p>

            <pre><code>
                const observable = ObservableProxy.proximate<IUltimateQuestion>({ theAnswer: 41 });
                observable.subscribe(someComponent.render, someComponent);
                observable.theAnswer += 1;
            </code></pre>

            <p>As you can see, other than the factory method needed to create such an observable, you can access the object's keys as normal.  There's no need to access any special value property like there is with the ObservableProperty class.</p>

            <p>The place where it really shines is on arrays.  The amount of code required to create an ObservableList object is
            considerable (I have it right here), and such an object cannot be accessed using the obj[indexer] syntax, because that
            is built-in and can't be overridden. But on the other hand, this looks almost like a normal array:</p>

            <pre><code>
                const observable = ObservableProxy.proximate<number[]>([0, 1, 2]);
                observable.subscribe(someComponent.render, someComponent);
                observable.push(3, 4);
                observable[4] = 42;
            </code></pre>

            <h2>Warning</h2>
            <p>Tests are async and will keep running. Wait for tests to complete before leaving page.</p>
            `
        });
    }
}
class Test007 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            // test this as a better-connected way to schedule async asserts, since I'm doing so much of them
            const asyncAsserts = new Api_1.DeferredPromise(Api_1.delay(1000), true);
            // This is the expected way to produce an observable.
            const observable1 = Api_1.ObservableProxy.proximate({ num1: 1, num2: 2 });
            Api_1.assert(observable1.num1 === 1 && observable1.num2 === 2, 'Observable should match initial values');
            observable1.subscribe(args => this.testArea.appendChild(Api_1.paragraph(`New:${args.newValue}. Old:${args.oldValue}.`, { id: "obs1test" + args.oldValue })));
            observable1.num1 = 2;
            observable1.num1 = 3;
            asyncAsserts.then(() => Api_1.assert(document.getElementById('obs1test1').innerHTML === 'New:2. Old:1.', 'Callback 1 executed with correct arguments'));
            asyncAsserts.then(() => Api_1.assert(document.getElementById('obs1test2').innerHTML === 'New:3. Old:2.', 'Callback 2 executed with correct arguments'));
            // It is possible to build a proxy of a simple value (anything but an object or function). The proximate() method must still
            // return an object, however. It does this by putting the value into a property named 'value.'
            const observable1a = Api_1.ObservableProxy.proximate(1);
            Api_1.assert(observable1a.value === 1, "Observable.value loaded with initial value.");
            observable1a.subscribe(args => this.testArea.appendChild(Api_1.paragraph(`Key: ${args.propertyName}. New:${args.newValue}. Old:${args.oldValue}.`, { id: "observable1a" })));
            observable1a.value = 111;
            asyncAsserts.then(() => Api_1.assert(document.getElementById('observable1a').innerHTML === 'Key: value. New:111. Old:1.', 'Observable.value triggers callback'));
            // Of course, you could do THIS, but it won't do what you're expecting. proximate() makes a COPY (two actually), so changes
            // do not make it to the original object. So don't do this.
            const dontDoThis = { num1: 1, num2: 2 };
            const dontDoThisObservable = Api_1.ObservableProxy.proximate(dontDoThis);
            dontDoThisObservable.num1 = 3;
            Api_1.assert(dontDoThis.num1 === 1, 'Original object is not affected');
            const observable2 = Api_1.ObservableProxy.proximate({ name: "Dog" });
            const observable3 = Api_1.ObservableProxy.proximate({ name: "Cat" });
            const observable4 = Api_1.ObservableProxy.proximate({ name: "Cactus" });
            function callback(args, id) {
                document.getElementById('testArea').appendChild(Api_1.paragraph(`I am ${this.name}. Event value: ${args.newValue}`, { id: "forwardTest" + id }));
            }
            // Passing around "this" in javascript is bloody annoying.
            // But usually we aren't linking directly to the observable and trying to manually send in enclosed values.
            // Not THIS redundant (using call()) all the time.
            observable2.subscribe(args => callback.call(observable2, args, 1), observable2);
            observable3.subscribe(args => callback.call(observable3, args, 2), observable3);
            observable4.subscribe(args => callback.call(observable4, args, 3), observable4);
            observable3.sendChangeEventsTo(observable2);
            observable3.receiveChangeEventsFrom(observable4);
            // 4 is sending to 3, which is sending to 2. So modifying 4 will trigger all 3 callbacks.
            observable4.name = "Boa Constrictor";
            asyncAsserts.then(() => Api_1.assert(document.getElementById('forwardTest1').innerHTML === 'I am Dog. Event value: Boa Constrictor', 'Two subscribe layers deep succeeded'));
            asyncAsserts.then(() => Api_1.assert(document.getElementById('forwardTest2').innerHTML === 'I am Cat. Event value: Boa Constrictor', 'One subscribe layer deep succeeded'));
            asyncAsserts.then(() => Api_1.assert(document.getElementById('forwardTest3').innerHTML === 'I am Boa Constrictor. Event value: Boa Constrictor', 'Original subscribe succeeded'));
            // Key deletions are also trapped
            const observable5 = Api_1.ObservableProxy.proximate({ world: 'Mars' });
            observable5.subscribe(args => this.testArea.appendChild(Api_1.paragraph(`Type:${args.type}. Key:${args.propertyName}.`, { id: "observable5" })));
            delete observable5.world;
            asyncAsserts.then(() => Api_1.assert(document.getElementById('observable5').innerHTML === 'Type:delete. Key:world.', 'Proxy raises event on delete'));
            // A more generalized proximate function can allow you to track arbitrary method calls on an object. This lets you track changes
            // to inner objects without having to proxy those inner objects.
            class ComplexObject {
                constructor() {
                    this._arr = [1, 2, 3, 4, 5];
                }
                add(val) {
                    this._arr.push(val);
                }
                get(i) {
                    return this._arr[i];
                }
            }
            const observable6 = Api_1.ObservableProxy.proximateObject(new ComplexObject(), false, false, ['add']);
            observable6.subscribe(args => this.testArea.appendChild(Api_1.paragraph(`Type:${args.type}. Key:${args.propertyName}. Args:${JSON.stringify(args.newValue)}.`, { className: 'observable6-no' })));
            const observable6a = Api_1.ObservableProxy.proximateObject(new ComplexObject(), false, false, ['add']);
            observable6a.subscribe(args => this.testArea.appendChild(Api_1.paragraph(`Type:${args.type}. Key:${args.propertyName}. Args:${JSON.stringify(args.newValue)}.`, { className: 'observable6-yes' })));
            Api_1.assert(observable6.get(4) === 5, 'get method call returns expected value');
            asyncAsserts.then(() => Api_1.assert(document.querySelector('.observable6-no') === null, "Subscribe not called on unwatched method"));
            observable6a.add(6);
            asyncAsserts.then(() => Api_1.assert(document.querySelector('.observable6-yes').innerHTML === "Type:call. Key:add. Args:[6].", "Subscribe called on watched method"));
            // Arrays are very simple, and each method that modifies the array triggers an event.
            // Note that something that modifies an item contained inside the array, without modifing the array itself,
            // is not trapped. To handle this case, you must load the array with observable children, grandchildren, etc, or
            // use a state observable.
            const arr = Api_1.ObservableProxy.proximate(['a', 'b', 'c']);
            let idx = 0;
            arr.subscribe(args => {
                this.testArea.appendChild(Api_1.paragraph(`Operation:${args.type} ${args.propertyName}. <span>Now:[${args.newValue}]</span>`, { id: 'array' + idx }));
                idx += 1;
            });
            arr[3] = 'd';
            asyncAsserts.then(() => arrayTest(0, 'a,b,c,d', 'set'));
            arr.length = 3;
            asyncAsserts.then(() => arrayTest(1, 'a,b,c', 'length'));
            arr.push('D');
            asyncAsserts.then(() => arrayTest(2, 'a,b,c,D', 'push'));
            arr.splice(1, 1, 'B');
            asyncAsserts.then(() => arrayTest(3, 'a,B,c,D', 'splice'));
            arr.shift();
            asyncAsserts.then(() => arrayTest(4, 'B,c,D', 'shift'));
            arr.unshift('A');
            asyncAsserts.then(() => arrayTest(5, 'A,B,c,D', 'unshift'));
            arr.reverse();
            asyncAsserts.then(() => arrayTest(6, 'D,c,B,A', 'reverse'));
            arr.pop();
            asyncAsserts.then(() => arrayTest(7, 'D,c,B', 'pop'));
            arr.sort();
            asyncAsserts.then(() => arrayTest(8, 'B,D,c', 'sort'));
            arr.fill('Q', 0, 2);
            asyncAsserts.then(() => arrayTest(9, 'Q,Q,c', 'fill'));
            arr.copyWithin(0, 2);
            asyncAsserts.then(() => arrayTest(10, 'c,Q,c', 'copyWithin'));
            delete arr[0];
            asyncAsserts.then(() => arrayTest(11, ',Q,c', 'delete'));
            function arrayTest(int, expected, name) {
                Api_1.assert(document.querySelector(`#array${int} span`).innerHTML === `Now:[${expected}]`, `Array ${name} triggers observable`);
            }
            // To make a proxied observable synchronous, set disableAsync to true. This will execute
            // the callbacks in a synchronous way. Note in this example how the current value matches
            // the newValue, when if this were async, the current value would always be Remus.
            // Note that when a proxy is synchronous, subscribe() does not return a promise (obviously) but
            // instead returns undefined. Synchronous subscribe is not thenable.
            let idx2 = 0;
            const observable7 = Api_1.ObservableProxy.proximate({ name: 'World' }, true);
            observable7.subscribe(args => {
                this.testArea.appendChild(Api_1.paragraph(`New:${args.newValue}. Current:${observable7.name}.`, { id: "syncObservable" + idx2 }));
                idx2 += 1;
            });
            observable7.name = 'Vulcan';
            Api_1.assert(document.getElementById('syncObservable0').innerHTML === 'New:Vulcan. Current:Vulcan.', 'Callback called synchronously 1');
            observable7.name = 'Romulus';
            Api_1.assert(document.getElementById('syncObservable1').innerHTML === 'New:Romulus. Current:Romulus.', 'Callback called synchronously 2');
            observable7.name = 'Remus';
            Api_1.assert(document.getElementById('syncObservable2').innerHTML === 'New:Remus. Current:Remus.', 'Callback called synchronously 3');
            const observable8 = Api_1.ObservableProxy.proximate({ name: 'Foo' }, false, true);
            observable8.subscribe(args => {
                this.testArea.appendChild(Api_1.paragraph(`New:${args.newValue}.`, { id: "noop" }));
            });
            observable8.name = 'Foo';
            asyncAsserts.then(() => Api_1.assert(document.getElementById('noop') === null, 'No update when value not changed if onlyWhenChanged set'));
            const arr2 = Api_1.ObservableProxy.proximate([1, 2, 3], true);
            arr2.subscribe(args => {
                this.testArea.appendChild(Api_1.paragraph(`New:${args.newValue.length}. Current:${arr2.length}.`, { id: "syncObservable" + idx2 }));
                idx2 += 1;
            });
            arr2.push(4);
            Api_1.assert(document.getElementById('syncObservable3').innerHTML === 'New:4. Current:4.', 'Callback called synchronously (array 1)');
            arr2.push(5);
            Api_1.assert(document.getElementById('syncObservable4').innerHTML === 'New:5. Current:5.', 'Callback called synchronously (array 2)');
            this.log(`TEST ${this.viewModel.testNumber}: Sync tests succeeded`);
            this.log('Starting async tests');
            asyncAsserts.then(() => this.log(`TEST ${this.viewModel.testNumber}: Async tests succeeded`));
            asyncAsserts.catch(err => {
                this.log('ASYNC TESTS FAILED: ' + err.message);
                throw (err);
            });
            asyncAsserts.resolve();
        }
        catch (err) {
            this.log("ERROR: " + err);
            throw err;
        }
    }
}
exports.Test007 = Test007;

},{"../src/Api":1,"./TestCaseView":79,"./TestCaseViewModel":80}],71:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../src/Api");
const TestCaseView_1 = require("./TestCaseView");
const TestCaseViewModel_1 = require("./TestCaseViewModel");
// tslint:disable:max-classes-per-file
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'Observable State',
            descriptionHtml: `<p>The state observable, an idea I stole from React, solves one of the basic problems of
            observable objects which may have references, using a somewhat clunky convention. This can be a fair tradeoff.
            The trade is such: by only reading the state using designated methods (value, getState, getValue, getSafeValue)
            and only writing to the state using setState(), you can be sure that changes to any referenced object are trapped.</p>

            <p>For example, if you have an object containing an array of objects, normally to raise an event when a property of
            one of those objects is modified, then that object must be observable. That can't always be done, especially if
            you don't control the source of the referenced object. But when every change has to go through setState(),
            it can be trapped there.</p>

            <p>The state in a state observable is an immutable clone of the data provided. Every time you get the object or
            write to the object, it is cloned. In terms of performance, it's probably even slower than a proxy, but in most
            use cases you won't even notice.</p>

            <p>The methods getValue(key) and getSafeValue(key) return the value of the key you provide. The .value getter
            and getState() method return the entire state.</p>

            <p>The setter .value replaces the entire state, as does the setState(val, true) method when overwriteAll is true.
            The method setState( { key: val } ) method replaces only the keys you provide, and the method setState( callback )
            method executes the callback on the value.  In all cases, setState returns the before and after values as
            { oldValue, newValue }.  When a callback is used, a 'returnValue' key returns any value returned from the callback.</p>

            <h2>Warning</h2>
            <p>Tests are async and will keep running. Wait for tests to complete before leaving page.</p>
            `
        });
    }
}
class Test008 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            // this seems to be working out well
            const asyncAsserts = new Api_1.DeferredPromise(Api_1.delay(1000), true);
            const testObject = {
                place: 'motels',
                howMany: 200,
                header: '<h1>200 Motels</h1>',
                caps: function () {
                    return `${this.howMany} ${this.place}`.toUpperCase();
                },
                get getter() {
                    return this.caps();
                },
                voices: [
                    { name: 'Flo' },
                    { name: 'Eddie' },
                    { name: 'Jimmie Carl Black' },
                    { name: 'Jim Pons' }
                ]
            };
            // Demonstrating setState
            testObject.year = 1971;
            const observable1 = new Api_1.ObservableState(testObject);
            // Both for legibility and to avoid pulling the value 4 times
            const v1 = observable1.value;
            Api_1.assert(v1.place === 'motels' && v1.howMany === 200 && v1.voices.length === 4, 'value should return the original data');
            Api_1.assert(v1 !== testObject, 'value should not return the actual referenced object');
            const v1b = observable1.getState();
            Api_1.assert(v1b.place === 'motels' && v1b.howMany === 200 && v1b.voices.length === 4, 'getState should return the original data');
            Api_1.assert(observable1.getSafeValue('header') === '&lt;h1&gt;200 Motels&lt;&#x2F;h1&gt;', 'getSafeValue gets the HTML-escaped value if a string');
            Api_1.assert(observable1.getValue('header') === '<h1>200 Motels</h1>', 'getValue is not HTML-escaped');
            Api_1.assert(Array.isArray(observable1.getValue('voices')), 'getValue gets the value having the supplied key');
            Api_1.assert(observable1.value.caps() === '200 MOTELS', 'Logic such as methods can be stored/cloned');
            Api_1.assert(observable1.value.getter === '200 MOTELS', 'Custom getters can be stored/cloned, though they suck');
            // You can set single keys using a partial object
            const updated1a = observable1.setState({ place: 'Motels' });
            Api_1.assert(observable1.value.place === 'Motels', 'setState updates the key provided');
            Api_1.assert(observable1.value.howMany === 200, 'setState leaves other keys as-is');
            Api_1.assert(updated1a.oldValue.place === 'motels' && updated1a.newValue.place === 'Motels', 'setState returns old and new values');
            // You can also update using a callback, which is good when you need to do incremental modifications.
            // TypeScript is not very good about this, though. It forgets the type of the state object and forces
            // a verbose cast.
            const updated1b = observable1.setState((val) => val.howMany += 1);
            Api_1.assert(observable1.getValue('howMany') === 201, 'Callback was executed');
            Api_1.assert(updated1b.oldValue.howMany === 200 && updated1b.newValue.howMany === 201 && updated1b.returnValue === 201, 'setState returns old, new, and return values for callback input');
            // When setState is called with overwriteAll set to true, or when using the setter, the entire object is replaced.
            observable1.setState({
                place: 'gore motel',
                howMany: 1,
                header: '<h1>Gore Motel</h1>',
                caps: function () {
                    return `${this.howMany} ${this.place}`.toUpperCase();
                },
                get getter() {
                    return this.caps();
                },
                voices: []
            }, true);
            Api_1.assert(observable1.value.place === 'gore motel', 'setState with an entire object');
            Api_1.assert(observable1.value.year === undefined, 'setState with overwriteAll true replaces everything, even unlisted properties');
            observable1.value = {
                place: 'fugitive motel',
                howMany: 1,
                header: '<h1>Fugitive Motel</h1>',
                caps: function () {
                    return `${this.place}`.toUpperCase();
                },
                get getter() {
                    return this.caps();
                },
                voices: [
                    { name: 'Guy Garvey' },
                    { name: 'Craig Potter' },
                    { name: 'Mark Potter' },
                    { name: 'Pete Turner' }
                ]
            };
            Api_1.assert(observable1.value.place === 'fugitive motel', 'value setter');
            // Remember, value is a clone of the internal state. You cannot use it to modify the state.
            observable1.value.howMany = 1000;
            Api_1.assert(observable1.value.howMany === 1, 'Internal state is read-only');
            const observable2 = new Api_1.ObservableState(testObject);
            observable2.subscribe(args => this.testArea.appendChild(Api_1.paragraph(`New:${args.newValue.howMany}. Old:${args.oldValue.howMany}.`, { id: "obs2test" + args.oldValue.howMany })));
            observable2.setState({ howMany: 300 });
            observable2.setState({ howMany: 400 });
            observable2.setState((prev) => prev.howMany = prev.howMany / 2);
            asyncAsserts.then(() => Api_1.assert(document.getElementById('obs2test200').innerHTML === 'New:300. Old:200.', 'Callback 1 executed with correct arguments'));
            asyncAsserts.then(() => Api_1.assert(document.getElementById('obs2test300').innerHTML === 'New:400. Old:300.', 'Callback 2 executed with correct arguments'));
            asyncAsserts.then(() => Api_1.assert(document.getElementById('obs2test400').innerHTML === 'New:200. Old:400.', 'Callback 3 executed with correct arguments'));
            // And now, to demonstrate the reason the state observable exists. The following test would take a bit more work to
            // get functioning using ordinary observables. Voices would need to be an array of observables, not simple objects.
            // We'll also demonstrate the cloning of a state observable.
            const observable3 = new Api_1.ObservableState(observable2);
            observable3.subscribe(args => this.testArea.appendChild(Api_1.paragraph(`Voices:${args.newValue.voices.map((m) => m.name).join(', ')}`, { id: "obs3test" })));
            observable3.setState((obj) => {
                obj.voices[0].name = 'Mark Volman';
                obj.voices[1].name = 'Howard Kaylan';
            });
            asyncAsserts.then(() => Api_1.assert(document.getElementById('obs3test').innerHTML === 'Voices:Mark Volman, Howard Kaylan, Jimmie Carl Black, Jim Pons', 'Callback executed with nested modification'));
            // The same forward/bubble events exist as on other observables
            const observable4 = new Api_1.ObservableState({ name: "Dog" });
            const observable5 = new Api_1.ObservableState({ name: "Cat" });
            const observable6 = new Api_1.ObservableState({ name: "Cactus" });
            function callback(args, id) {
                document.getElementById('testArea').appendChild(Api_1.paragraph(`I am ${this.value.name}. Event value: ${args.newValue.name}`, { id: "forwardTest" + id }));
            }
            // Passing around "this" in javascript is bloody annoying.
            observable4.subscribe(args => callback.call(observable4, args, 1), observable4);
            observable5.subscribe(args => callback.call(observable5, args, 2), observable5);
            observable6.subscribe(args => callback.call(observable6, args, 3), observable6);
            observable5.sendChangeEventsTo(observable4);
            observable5.receiveChangeEventsFrom(observable6);
            // 4 is sending to 3, which is sending to 2. So modifying 4 will trigger all 3 callbacks.
            observable6.value = { name: "Boa Constrictor" };
            asyncAsserts.then(() => Api_1.assert(document.getElementById('forwardTest1').innerHTML === 'I am Dog. Event value: Boa Constrictor', 'Two subscribe layers deep succeeded'));
            asyncAsserts.then(() => Api_1.assert(document.getElementById('forwardTest2').innerHTML === 'I am Cat. Event value: Boa Constrictor', 'One subscribe layer deep succeeded'));
            asyncAsserts.then(() => Api_1.assert(document.getElementById('forwardTest3').innerHTML === 'I am Boa Constrictor. Event value: Boa Constrictor', 'Original subscribe succeeded'));
            // To make an observable synchronous, set disableAsync to true. This will execute the callbacks in a synchronous way. Note
            // in this example how the current value matches the newValue, when if this were async, the current value would always be Remus.
            let idx = 0;
            const observable7 = new Api_1.ObservableState({ name: 'World' }, { disableAsync: true });
            observable7.subscribe(args => {
                this.testArea.appendChild(Api_1.paragraph(`New:${args.newValue.name}. Current:${observable7.getSafeValue('name')}.`, { id: "syncObservable" + idx }));
                idx += 1;
            });
            observable7.value = { name: 'Vulcan' };
            Api_1.assert(document.getElementById('syncObservable0').innerHTML === 'New:Vulcan. Current:Vulcan.', 'Callback called synchronously 1');
            observable7.value = { name: 'Romulus' };
            Api_1.assert(document.getElementById('syncObservable1').innerHTML === 'New:Romulus. Current:Romulus.', 'Callback called synchronously 2');
            observable7.value = { name: 'Remus' };
            Api_1.assert(document.getElementById('syncObservable2').innerHTML === 'New:Remus. Current:Remus.', 'Callback called synchronously 3');
            // The observable object can be a primitive object.
            const observable8 = new Api_1.ObservableState("World");
            observable8.value = 'Mars';
            Api_1.assert(observable8.value === 'Mars', 'State can be a primitive object');
            // You can call getValue() and getSaveValue() with no args.
            Api_1.assert(observable8.getValue() === 'Mars', 'getValue() called with no args for a primitive object');
            observable8.value = '<>';
            Api_1.assert(observable8.getSafeValue() === '&lt;&gt;', 'getSafeValue() called with no args for a primitive object');
            // SetState can be used, it cannot be called with either a partial (primitives don't have partial object properties to set) or
            // a method (it will execute, but primitives are immutable and mostly value types, so if you replace them, changes are lost).
            observable8.setState('Jupiter', true);
            Api_1.assert(observable8.getValue() === 'Jupiter', 'setState() called with overwriteAll for a primitive object');
            observable8.setState('Saturn');
            Api_1.assert(observable8.getValue() === 'Saturn', 'On primitive types, overwriteAll is set automatically');
            this.log('Starting async tests');
            asyncAsserts.then(() => this.log(`TEST ${this.viewModel.testNumber}: Async tests succeeded`));
            asyncAsserts.catch(err => {
                this.log('ASYNC TESTS FAILED: ' + err.message);
                throw err;
            });
            asyncAsserts.resolve();
            this.log(`TEST ${this.viewModel.testNumber}: Sync tests succeeded`);
        }
        catch (err) {
            this.log("ERROR: " + err);
            throw err;
        }
    }
}
exports.Test008 = Test008;

},{"../src/Api":1,"./TestCaseView":79,"./TestCaseViewModel":80}],72:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../src/Api");
const TestCaseView_1 = require("./TestCaseView");
const TestCaseViewModel_1 = require("./TestCaseViewModel");
// tslint:disable:max-classes-per-file
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'Components',
            descriptionHtml: `<p>A component is the base class that implements IContent, an object whose "content"
            property is an HTMLElement that is the representation of the object on the page. Most of the class
            is made up of helpers to make construction easy and to access common functions, like innerHTML, without
            having to type obj.content.HTML.</p>

            <h2>Usage</h2>
            <pre><code>
            abstract class Component<TElement> {
                content: TElement;
                get id(): string;
                set id(value);
                get innerHTML(): string;
                set innerHTML(value);

                constructor();
                constructor(lookupExistingElement: IExistingLookupOptions);
                constructor(existingElement: IExistingElementOptions<TElement>);
                constructor(newElement: IInnerHtmlOptions);
                constructor(newElement: IOuterHtmlOptions);
                constructor(newElement: string);

                addEventListener(eventType: string, event: (evt: Event) => any, options?: AddEventListenerOptions): this;
                addInlineEventListeners(componentFilter?: string): this;

                append<T>(newChild: T): this;

                appendChild<T>(newChild: T): T;

                setStyle(property: string, value: string): this;
                setStyle(style: { [string]: string }): this;

                setClass(className: string): this;
                setClass(classNames: string[]): this;

                appendToParent(parent: Node): this;
            }
            </code></pre>

            <p>The component is just a base class, so you must inherit from it. All the work is in the constructor. You can pass it an
            existing element, enough info to look up an element, a tag name and the inner HTML, the full outer HTML (either as an object
            or a string). The rest are just helper methods that access the "content" object, which is a reference to the element you
            passed in the constructor.</p>

            <p>The one exception to this rule is the addInlineEventListeners() method, which acts upon custom attributes. If you create
            an element with a property named either i5_event or :event, along with an event name in parentheses set equal to a method
            on the component, it is translated into an addEventListener() call.</p>

            <pre><code>
            <button type="button" i5_event (click)="something">Click Me</button>
            </code></pre>

            <p>This is the same as button.addEventListener('click', component.something.bind(component));</p>
            `
        });
    }
}
/**
 * This class has nothing to add to the component. Makes it faster to unit test.
 * Normally you would probably set this to something specific.
 */
class PassThroughComponent extends Api_1.Component {
    constructor(args) {
        super(args);
    }
}
class Test009 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            const comp1 = new PassThroughComponent();
            Api_1.assert(comp1.content.tagName === "DIV", "Default should be div component.");
            const comp2 = new PassThroughComponent({ id: 'comp2' });
            Api_1.assert(comp2.content.id === 'comp2', "Id should match containerId");
            Api_1.assert(comp2.id === comp2.content.id, "Id helper should return content element id");
            this.testArea.appendChild(comp2.content);
            Api_1.assert(!!this.testArea.querySelector('#comp2'), "Should be able to add content to page");
            comp2.innerHTML = "Hello component 2";
            Api_1.assert(comp2.content.innerHTML === "Hello component 2", "innerHTML setter should set content HTML");
            const comp3 = new PassThroughComponent({ id: 'comp3', innerHtml: 'Hello component 3', type: Api_1.elementType.HTMLSpanElement });
            Api_1.assert(comp3.content.innerHTML === "Hello component 3", "innerHtml setting should set initial HTML");
            Api_1.assert(comp3.content.tagName === "SPAN", "Should create tag type provided in constructor");
            const adiv = Api_1.div("Some existing element");
            const comp4 = new PassThroughComponent({ element: adiv });
            Api_1.assert(comp4.content === adiv, "When containerElement specified, it should become the content of the component");
            Api_1.assert(Api_1.ComponentMap.components.get(comp4.content) === comp4, "ComponentMap should return component when provided component content");
            const comp4a = comp4.append(Api_1.div("A new child", { id: 'comp4a' }));
            Api_1.assert(!!comp4.content.querySelector('#comp4a'), "Append() should append to content");
            Api_1.assert(comp4a === comp4, "Append() should return reference to component.");
            const div2 = Api_1.div("A new child", { id: 'comp4b' });
            const comp4b = comp4.appendChild(div2);
            Api_1.assert(!!comp4.content.querySelector('#comp4b'), "appendChild() should append to content");
            Api_1.assert(comp4b === div2, "appendChild() should return reference to child.");
            const div3 = Api_1.div("Another element", { id: 'comp5a' });
            const comp5 = new PassThroughComponent({ element: div3 });
            const comp5a = comp5.setClass('a-class').setClass('b-class c-class').setClass(['d-class', 'e-class']).setStyle('border', 'solid').setStyle({ color: 'blue' });
            Api_1.assert(comp5a === comp5, "setClass() and setStyle() should return reference to child");
            for (const c of ['a-class', 'b-class', 'c-class', 'd-class', 'e-class']) {
                Api_1.assert(Array.from(div3.classList).includes(c), "setClass() should add class to content");
            }
            Api_1.assert(div3.style.border === 'solid', "setStyle() should set style of content");
            Api_1.assert(div3.style.color === 'blue', "setStyle() should set style of content");
            comp5.appendToParent(this.testArea);
            Api_1.assert(!!this.testArea.querySelector('#comp5a'), "appendToParent() should add content as child of target element");
            class SomeCustomElement extends HTMLElement {
                constructor() {
                    super();
                    this.innerHTML = "CUSTOM!";
                }
            }
            const comp6 = new PassThroughComponent({ id: 'comp6', type: 'custom-element', customElement: SomeCustomElement }).appendToParent(this.testArea);
            Api_1.assert(comp6.innerHTML === 'CUSTOM!', 'Custom element constructor should be called.');
            const comp7 = new PassThroughComponent({ outerHtml: '<span id="comp7" style="display: block;">Hello component 7</span>' }).appendToParent(this.testArea);
            Api_1.assert(comp7.content.innerHTML === "Hello component 7", "outerHtml setting should set initial HTML");
            Api_1.assert(comp7.content.tagName === "SPAN", "Should create tag type provided in outerHTML");
            // Here's something a little fancy.
            // There are already ways to add events, with no need to resort to shortcuts. But event shortcuts
            // are common in javascript frameworks. Take angular, which stores method call as a string, which is executed.
            // Now shudder.
            // In Ichigo, we add an i5_event or :event attribute to the HTML (both are acceptable ... it just depends on if you
            // mind non-standard attribute format or not), and then the event type in parentheses, which is set equal to a method in
            // the component.  This method is called with the event as its only argument, as in the following examples:
            // <div i5_event (click)="doSomething"></div>
            // <input :event (input)="writeSomething" />
            // The following is invalid and will throw: <button :event (click)="modifySometing(evt.currentTarget, someClosure)"></button>
            // It will throw because that string is not a method name on the component (unless you have weird methods).
            let comp8clicked;
            class Comp8Test extends Api_1.Component {
                constructor() {
                    super('<div id="comp8" i5_event (click)="simpleTest">Click Me</div>');
                    this.addInlineEventListeners();
                }
                simpleTest(evt) {
                    comp8clicked = 'I was clicked';
                }
            }
            const comp8 = new Comp8Test().appendToParent(this.testArea);
            comp8.content.click();
            Api_1.assert(!!comp8clicked, 'Click event should be wired to method');
            this.log(`TEST ${this.viewModel.testNumber}: Test successful`);
        }
        catch (err) {
            this.log("ERROR: " + err);
            throw err;
        }
    }
}
exports.Test009 = Test009;

},{"../src/Api":1,"./TestCaseView":79,"./TestCaseViewModel":80}],73:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../src/Api");
const TestCaseView_1 = require("./TestCaseView");
const TestCaseViewModel_1 = require("./TestCaseViewModel");
// tslint:disable:max-classes-per-file
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'Bound Component',
            descriptionHtml: `<p>A bound component is a component that has its 1- or 2-way databinding configured by custom HTML attributes beginning with the string "i5_" (or :, which is either valid or invalid depending on which spec you read). The main inspiration, and most of the ideas, are taken from AngularJS and Vue, though Ichigo's templating language is much more basic and does not involve special tokens like {} or {{}}.</p>

            <p>As usual in HTML5, bound components can be constructed in JavaScript code or a combination of JavaScript and HTML. There is even partial support for custom element tags, though this is done by replacing the element, not building a shadow root.</p>

            <p>(A shadow root webcomponent helper is a task for another day, when I feel up to it. The standard has changed and many pages about it are now incorrect, so it's a chore.)</p>

            <h2>Usage</h2>
            <pre><code>
            class BoundComponent<TElement extends HTMLElement = HTMLElement, TModel = any> extends Component<TElement> implements IView<TElement, TModel> {
                static inject<TElement extends HTMLElement, TModel>(selector?: string | HTMLElement | NodeListOf<HTMLElement> | HTMLElement[] | {
                    parent?: Element;
                    selector: string;
                }, options?: BoundInjectOptions<TModel>, constructor?: Constructable<BoundComponent<TElement, TModel>>, viewModel?: TModel): Array<BoundComponent<TElement, TModel>>;

                static injectBind<TElement extends HTMLElement, TModel>(viewModel?: TModel, selector?: string | HTMLElement | NodeListOf<HTMLElement> | HTMLElement[] | {
                    parent?: Element;
                    selector: string;
                }, options?: BoundInjectOptions<TModel>, constructor?: Constructable<BoundComponent<TElement, TModel>>): Array<BoundComponent<TElement, TModel>>;

                constructor(viewModel: TModel);
                constructor(viewModel: TModel, existingElement: IExistingElementOptions<TElement> & IComponentBindingOptions);
                constructor(viewModel: TModel, existingElement: IExistingLookupOptions & IComponentBindingOptions);
                constructor(viewModel: TModel, newElement: IInnerHtmlOptions & IComponentBindingOptions);
                constructor(viewModel: TModel, outerElement: IOuterHtmlOptions & IComponentBindingOptions);
                constructor(viewModel: TModel, newElement: string);

                write(evt: Event): void;
                observe(model?: any): this;
                observeAll(model?: any): this;
                render(): this;
                setTemplate(templateText: string, update?: boolean): this;
                setHtmlTemplate(templateProperty?: string, update?: boolean): this;
                setTextTemplate(templateProperty?: string, update?: boolean): this;
                setLoop(source: string, fragment: DocumentFragment | string, skipPostProcess?: boolean, update?: boolean): this;
                removeLoop(update?: boolean): this;
                setValueAttribute(source?: string | undefined, update?: boolean): this;
                setVisibility(source?: string | undefined, negative?: boolean, update?: boolean): this;
                addAttributeMapping(attribute: string, source?: string, update?: boolean): this;
                addBooleanAttributeMapping(attribute: string, source?: string, negative?: boolean, update?: boolean): this;
                removeAttributeMapping(attribute: string, update?: boolean): this;
                setCssClass(cls?: string | undefined, update?: boolean): this;
                setCssStyle(style?: string | undefined, update?: boolean): this;
                addCssClassSwitch(cls: string, source?: string, negative?: boolean, update?: boolean): this;
                removeCssClassSwitch(cls: string, update?: boolean): this;
                addWriteEvent(): this;
                addWriteTarget(target?: string, update?: boolean): this;
                removeWriteTarget(target: string, update?: boolean): this;
                dispose(): void;
                protected loopPostProcess(row: any, addedContent: Node[], allRows: Iterable<any>, previousContent: DocumentFragment): void;
            }
            </code></pre>

            <p>The most basic constructor looks like this: new BoundComponent(viewModel).  The view model is any data type.  Normally it is expected to be an observable object, but it could be a simple string or number, if needed.</p>

            <p>You can also convert components using the static BoundComponent.inject() method, which is convenient if you need to convert many elements at once.</p>

            <p>The most important part of the bound component is the ability to set an HTML template for the content. This is done using by using HTML templates, behind the scenes.  What this means is that you should pass valid HTML, either in the innerHTML of the content or as the argument of parseTemplate(). Now, special replacement tags like {} or \${} (I wish template literals were actual templates, then I could use them) are not part of HTML. The way you indicate replacements is with i-v tags, for example &lt;i-v&gt;viewModelVariableName&lt;/i-v&gt;. ViewModelVariableName must be a property of the viewModel you sent in.</p>

            <p>If you send in a simple data type, not an object, you can reference it by a period by itself ('.') as in "Hello &lt;i-v&gt;.&lt;/i-v&gt;"</p>

            <p>To avoid HTML escaping replacement values, include the noescape attribute, &lt;i-v noescape&gt;. If you need to nest components, indicate which component owns a replacement by using &lt;i-v component="name"&gt;, where name is defined in the component attributes.</p>

            <p>There are so many custom properties in the bound component that I can't really go through them here. I'll summarize them and you can look through the test cases. The following are custom element attributes:</p>

            <ul>
            <li> i5_name="" or :name="" - Name for the component, used to bind specific &lt;i-v component="name"&gt; tags when there are nested components
            <li> i5_text="property" or :text="property" - Set innerHTML to escaped property
            <li> i5_html="property" or :html="property" - Set innerHTML to unescaped property
            <li> i5_value="property" or :value="property" - Set form field value to property
            <li> i5_attr_attributeName="property" or i5_attr:attributeName="property" or :attr:attributeName="property" - Set attribute attributeName to property
            <li> i5_bool_attributeName="property" or i5_bool:attributeName="property" or :bool:attributeName="property" - Add boolean attribute attributeName if property is truthy
            <li> i5_bool0_attributeName="property" or i5_bool-:attributeName="property" or :bool-:attributeName="property" - Remove boolean attribute attributeName if property is truthy
            <li> i5_style="property" or :style="property" - Set style string to property
            <li> i5_class="property" or :class="property" - Set classList string to property
            <li> i5_switch_className="property" or i5_switch:className="property" or :switch:className="property" - If property is truthy, add className. If falsy, remove className
            <li> i5_switch0_className="property" or i5_switch-:className="property" or :switch-:className="property" - Reverse of previous option
            <li> i5_if="property" or :if="property" - If property is truthy, display:none applied. If falsy, removed (and possibly reset if switched on then off)
            <li> i5_if0="property" or :if-="property" - Reverse of previous option
            <li> i5_loop="property" or :loop="property" - Repeat element once for each item in property, calling loopPostProcess() after
            <li> i5_loop_null="property" or i5_loop:null="property" or :loop:null="property" - The same, but loopPostProcess() is not called
            <li> i5_item or :item (no value) - Indicate a the item in a loop that should be converted into a component
            <li> i5_input or :input (no value) - Bind input events on form field to the BoundComponent.write() method
            <li> i5_target="property" or :target="property" - BoundComponent.write() should send input data to property
            <li> i5_target1="property", i5_target2="property", :target1="property", etc - The same, but write to multiple targets
            <li> i5_input="property" or :input="property" - Shortcut for i5_input i5_target="property"
            </ul>

            <p>"Property" can be an object property, observable property, or parameterless function name. Can be prefixed with "this." to reference the component itself. These custom attributes can be used as attributes, data attributes, or passed in the constructor.</p>

            <h2>Warning</h2>
            <p>Tests are async and will keep running. Wait for tests to complete before leaving page.</p>
            `
        });
    }
}
class Test010 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            const basicViewModel = {
                name: "World",
                list: ["World", "Underworld"],
                cssClass: 'does-nothing',
                cssClasses: 'class-1 class-2',
                rawHtml: "Hello <em>World</em>",
                truthiness: true,
                trumpiness: false,
                nothing: null,
                block: "display: block",
                bold: "font-weight: bold",
                sampleMethod: function () { return this.name; },
                sampleMethod2: function () { return this.cssClass; },
                sampleMethod3: function () { return `Hello <em>${this.name}</em>`; },
                writable: null,
                writable2: null,
                writerMethod: function (arg) { this.writable = arg; },
                lastListItem: function () { return this.list[this.list.length - 1]; }
            };
            const asyncAsserts = new Api_1.DeferredPromise(Api_1.delay(1000), true);
            // Create the most basic template using pure JS and a simple HTML template.
            // This shows the template replacement format, using <i-v> tags.
            const comp1 = new Api_1.BoundComponent(basicViewModel, { element: Api_1.createElement(Api_1.elementType.HTMLDivElement, { innerHTML: 'Hello <i-v>name</i-v>' }) }).appendToParent(this.testArea);
            Api_1.assert(comp1.innerHTML === 'Hello <i-v>World</i-v>', 'Simple HTML replacement should populate i-v tags.');
            // The viewModel can be a simple object and can be referenced by '.'
            const comp2 = new Api_1.BoundComponent("World", { innerHtml: 'Hello <i-v>.</i-v>' }).appendToParent(this.testArea);
            Api_1.assert(comp2.innerHTML === 'Hello <i-v>World</i-v>', 'Period should indicate the viewModel itself.');
            // Attributes amd other can be set using special attributes. More on this later.
            const comp3 = new Api_1.BoundComponent(basicViewModel, {
                id: 'comp3',
                innerHtml: 'Hello <i-v>name</i-v>',
                attributes: {
                    i5_class: 'cssClass'
                }
            }).appendToParent(this.testArea);
            Api_1.assert(comp3.classList.toString() === 'does-nothing', "CSS class attribute should be set");
            // Like its base class, Component, it can be created with no rendering arguments, only the viewModel (which is required).
            // If you do this, you'll need to pass in any dynamic attributes after the fact.
            const comp4 = new Api_1.BoundComponent(basicViewModel)
                .appendToParent(this.testArea)
                .setTemplate('Hello <i-v>name</i-v>')
                .setCssClass('cssClass', true);
            Api_1.assert(comp4.innerHTML === 'Hello <i-v>World</i-v>', 'setTemplate should replace the HTML template.');
            Api_1.assert(comp4.classList.toString() === 'does-nothing', "CSS class attribute should be set");
            // The normal way to create a component is not like the examples given before, but to
            // reference an existing HTML DOM element. While it is possible to set the properties
            // entirely in JS code, there's no need for a bound component without HTML attributes.
            // Note that the TS has to take our word for it that the element is HTMLDivElement.
            this.testArea.appendChild(Api_1.createHtml('<div id="comp5" i5_class="cssClass">Hello <i-v>name</i-v></div>'));
            const comp5 = new Api_1.BoundComponent(basicViewModel, { element: document.getElementById('comp5') });
            Api_1.assert(comp5.innerHTML === 'Hello <i-v>World</i-v>', 'Simple HTML replacement should populate i-v tags.');
            Api_1.assert(comp5.classList.toString() === 'does-nothing', "CSS class attribute should be set");
            // This is a shortcut for the same thing (with a small twist). It gets extra speed because the type isn't checked.
            // So it has a minus, which is that TS doesn't get the type.
            this.testArea.appendChild(Api_1.createHtml('<div id="comp5a" i5_class="cssClass">Hello <i-v>name</i-v></div>'));
            const comp5a = new Api_1.BoundComponent(basicViewModel, { parent: this.testArea, selector: '#comp5a' });
            Api_1.assert(comp5a.innerHTML === 'Hello <i-v>World</i-v>', 'Simple HTML replacement should populate i-v tags.');
            Api_1.assert(comp5a.classList.toString() === 'does-nothing', "CSS class attribute should be set");
            // You could also create a new component using new HTML, using almost the same code, using the outerHtml overload.
            // Again, TS has to take our word for it that we're using a DIV, because it's not like it knows.
            // This does make for the quickest unit testing, however, so I will use it extensively.
            const comp6 = new Api_1.BoundComponent(basicViewModel, { outerHtml: '<div id="comp6" i5_class="cssClass">Hello <i-v>name</i-v></div>' }).appendToParent(this.testArea);
            Api_1.assert(comp6.innerHTML === 'Hello <i-v>World</i-v>', 'Simple HTML replacement should populate i-v tags.');
            Api_1.assert(comp6.classList.toString() === 'does-nothing', "CSS class attribute should be set");
            // Property names can reference data fields but they can also reference methods. If a method is referenced, it is executed
            // and the result is inserted. The method is called with no arguments.
            // Also, outerHtml is so easy to set that you may want to use this shortcut.
            // CONSIDER: Offer a way to set arguments. This can easily get hairy.
            const comp7 = new Api_1.BoundComponent(basicViewModel, '<div id="comp7" i5_class="sampleMethod2">Hello <i-v>sampleMethod</i-v></div>').appendToParent(this.testArea);
            Api_1.assert(comp7.innerHTML === 'Hello <i-v>World</i-v>', 'Methods should be called when referenced');
            Api_1.assert(comp7.classList.toString() === 'does-nothing', "Methods should be called when referenced");
            // Values are by default escaped.
            const comp8 = new Api_1.BoundComponent(basicViewModel, '<div id="comp8">Escaped: <i-v>rawHtml</i-v></div>').appendToParent(this.testArea);
            Api_1.assert(comp8.innerHTML === 'Escaped: <i-v>Hello &lt;em&gt;World&lt;/em&gt;</i-v>', "By default replacements should be HTML escaped");
            // You can skip the HTML escape process by adding a noescape property to the i-v element.
            const comp9 = new Api_1.BoundComponent(basicViewModel, '<div id="comp9">Not escaped: <i-v noescape>rawHtml</i-v></div>').appendToParent(this.testArea);
            Api_1.assert(comp9.content.querySelector('i-v').innerHTML === 'Hello <em>World</em>', "If noescape set, replacements should not be HTML escaped");
            // Escaped text can be set directly by using the i5_text attribute, instead of using the HTML template.
            // This makes a simple one-element template
            const comp10 = new Api_1.BoundComponent(basicViewModel, { outerHtml: '<div id="comp10" i5_text="rawHtml"></div>' }).appendToParent(this.testArea);
            Api_1.assert(comp10.innerHTML === '<i-v>Hello &lt;em&gt;World&lt;/em&gt;</i-v>', "Text property should set escaped HTML");
            // The non-escaped HTML can also be set directly by the i5_html attribute, instead of using the HTML template.
            // This makes a simple one-element template.
            const comp11 = new Api_1.BoundComponent(basicViewModel, '<div id="comp11" i5_html="rawHtml"></div>').appendToParent(this.testArea);
            // The HTML in this case is -- <i-v noescape="">Hello <em>World</em></i-v> -- which may be browser specific.
            Api_1.assert(comp11.content.firstElementChild.innerHTML === 'Hello <em>World</em>', 'HTML property should set unescaped HTML');
            // One will probably use the shortcut text and html properties with methods, however, in places where the HTML needs to be
            // very dynamic. Just like always, methods are fine.
            const comp12 = new Api_1.BoundComponent(basicViewModel, { outerHtml: '<div id="comp12" i5_html="sampleMethod3"></div>' }).appendToParent(this.testArea);
            Api_1.assert(comp12.content.firstElementChild.innerHTML === 'Hello <em>World</em>', 'Methods should be called when referenced');
            // And just like always, simple models can be accessed by '.'
            const comp13 = new Api_1.BoundComponent("Hello <em>World</em>", '<div id="comp13" i5_html="."></div>').appendToParent(this.testArea);
            Api_1.assert(comp13.content.firstElementChild.innerHTML === 'Hello <em>World</em>', 'Simple objects should be referenced by period');
            // Form fields are pretty nasty because the HTML standard doesn't have a standard way to set the value.
            // To make setting them as easy as it is to set the HTML, the i5_value property is introduced.
            this.testArea.appendChild(Api_1.createFragment(`<div>
                <input id="comp14a" i5_value="name" />
                <select id="comp14b" i5_value="name">
                    <option value="Sun">Sun</option>
                    <option value="Moon">Moon</option>
                    <option value="Stars">Stars</option>
                    <option value="World">World</option>
                    <option value="Underworld">Underworld</option>
                </select>
                <select id="comp14c" i5_value="list" multiple size="2">
                    <option value="World">World</option>
                    <option value="Underworld">Underworld</option>
                    <option value="Sun">Sun</option>
                    <option value="Moon">Moon</option>
                    <option value="Stars">Stars</option>
                </select>
            </div>`));
            const comp14a = new Api_1.BoundComponent(basicViewModel, { element: document.getElementById('comp14a') });
            const comp14b = new Api_1.BoundComponent(basicViewModel, { element: document.getElementById('comp14b') });
            const comp14c = new Api_1.BoundComponent(basicViewModel, { element: document.getElementById('comp14c') });
            Api_1.assert(comp14a.value === 'World', 'Input value can be set');
            Api_1.assert(comp14b.value === 'World', 'Single select value can be set');
            const setsAreEqual = (a, b) => a.size === b.size && [...a].every(v => b.has(v));
            Api_1.assert(setsAreEqual(new Set(comp14c.value), new Set(['World', 'Underworld'])), 'Multi select value can be set');
            // You can set attributes by using i5_attr_attribute or i5_attr:attribute.
            // One looks nicer in HTML but isn't valid JS. The other is less clear but is valid.
            // You can set boolean attributes by using i5_bool_attribute or i5_bool:attribute
            const comp15a = new Api_1.BoundComponent(basicViewModel, '<input id="comp15a" i5_value="name" i5_bool:disabled="truthiness" i5_attr:style="block" />').appendToParent(this.testArea);
            Api_1.assert(comp15a.value === 'World', 'Value should set value');
            Api_1.assert(comp15a.style.display === 'block', 'Attr should set attribute');
            Api_1.assert(comp15a.content.hasAttribute('disabled'), 'Attr should set boolean attribute');
            // Same thing, different style
            const comp15b = new Api_1.BoundComponent(basicViewModel, {
                id: 'comp15b',
                type: Api_1.elementType.HTMLInputElement,
                attributes: {
                    // tslint:disable-next-line:object-literal-key-quotes
                    i5_value: 'name',
                    // tslint:disable-next-line:object-literal-key-quotes
                    i5_attr_style: 'block',
                    'i5_bool:disabled': 'truthiness'
                }
            }).appendToParent(this.testArea);
            Api_1.assert(comp15b.value === 'World', 'Value should set value');
            Api_1.assert(comp15b.style.display === 'block', 'Attr should set attribute');
            Api_1.assert(comp15b.content.hasAttribute('disabled'), 'Attr should set boolean attribute');
            // Boolean attributes are ones that take effect if they even exist, regardless of their values.
            // They can be negates by adding ! to the end, i5_bool!:attribute
            // Also there's a different way to set style. While it is possible to set style through attributes, this is probably not normal.
            // Mainly because attributes are the initial value, not the current value.
            // You can set only one style string, mainly because it gives you an easy way to remove previous styles.
            const comp15c = new Api_1.BoundComponent(basicViewModel, '<input id="comp15c" i5_value="name" i5_bool-:disabled="nothing" i5_style="block" />').appendToParent(this.testArea);
            Api_1.assert(comp15c.content.hasAttribute('disabled'), 'Null attr should set negated boolean attribute');
            Api_1.assert(comp15c.style.display === 'block', 'Style should set style');
            // You can set the classList with i5_class, which we've already seen. If there are multiple classes, include them
            // separated by space, just like you do in HTML. This lets you turn classes on or off.
            // You can also swtich classes on or off based on truthy/falsy values using i5_switch:class (or i5_switch_class).
            const comp16 = new Api_1.BoundComponent(basicViewModel, '<div id="comp16" i5_class="cssClasses" i5_switch_class-3="nothing" i5_switch:class-4="truthiness">Hello World</div>').appendToParent(this.testArea);
            Api_1.assert(comp16.className === 'class-1 class-2 class-4', 'Can switch classes on or off and set multiple classes');
            // A negative switch is follewed by a - or a 0 before the first colon.
            const comp16a = new Api_1.BoundComponent(basicViewModel, '<div id="comp16a" i5_switch0_class-3="trumpiness" i5_switch-:class-4="trumpiness" i5_switch-:class-5="truthiness">Hello World</div>').appendToParent(this.testArea);
            Api_1.assert(comp16a.className === 'class-3 class-4', 'Negative switches reverse switch logic');
            // i5_if can be used to make a component element visible or invisible, using display: none.
            const comp17a = new Api_1.BoundComponent(basicViewModel, '<div id="comp17a" i5_if="truthiness">Hello World</div>').appendToParent(this.testArea);
            const comp17b = new Api_1.BoundComponent(basicViewModel, '<div id="comp17b" i5_if="trumpiness">Hello World</div>').appendToParent(this.testArea);
            Api_1.assert(comp17a.style.display === '', 'i5_if is true, element is displayed');
            Api_1.assert(comp17b.style.display === 'none', 'i5_if is false, element is not displayed');
            // If i5_if is switched off and then on, the original value of display is restored.
            // This is needed because, aside from using classes (which are probably a MUCH better solution),
            // there is no simple 'not-display-none' style, but instead a host of values for the display property.
            // We haven't tested observables yet so this test will toggle manually.
            const comp17c = new Api_1.BoundComponent(basicViewModel, '<input id="comp17c" i5_style="block" value="Hello World"/>').appendToParent(this.testArea);
            comp17c.setVisibility('trumpiness');
            comp17c.setVisibility('truthiness');
            Api_1.assert(comp17c.style.display === 'block', 'i5_if is true, element display property is restored');
            // The most common piece of event-based functionality is writing to a variable. In most cases, this
            // triggers an input event. According to the HTML5 specification, the input event is triggered
            // on any input, select, or textarea, but real life browsers may vary. For example, in Edge,
            // the input event isn't supported through most of its history.
            // Use the built-in attribute i5_target="propertyName" to indicate what properties the built-in
            // write method should set. If propertyName indicates a method, then that method is called
            // with the value.
            // The following mean the same thing:
            const comp18a = new Api_1.BoundComponent(basicViewModel, '<input id="comp18a" style="display: block;" i5_input i5_target="writable"/>').appendToParent(this.testArea);
            // Shortcut combining the event and the target
            const comp18b = new Api_1.BoundComponent(basicViewModel, '<input id="comp18b" style="display: block;" i5_input="writable"/>').appendToParent(this.testArea);
            comp18a.value = 'First test';
            comp18a.content.dispatchEvent(new Event('input', { bubbles: true }));
            Api_1.assert(basicViewModel.writable === 'First test', 'Input works');
            comp18b.value = 'Second test';
            comp18b.content.dispatchEvent(new Event('input', { bubbles: true }));
            Api_1.assert(basicViewModel.writable === 'Second test', 'Input shortcut can take target as an argument');
            // The property 'writable' can be replaced by a method call
            const comp18c = new Api_1.BoundComponent(basicViewModel, '<input id="comp18c" style="display: block;" i5_input="writerMethod"/>').appendToParent(this.testArea);
            const comp18d = new Api_1.BoundComponent((x) => basicViewModel.writerMethod(x), '<input id="comp18d" style="display: block;" i5_input="."/>').appendToParent(this.testArea);
            comp18c.value = 'Fourth test';
            comp18c.content.dispatchEvent(new Event('input', { bubbles: true }));
            Api_1.assert(basicViewModel.writable === 'Fourth test', 'Write method can call methods');
            comp18d.value = 'Fifth test';
            comp18d.content.dispatchEvent(new Event('input', { bubbles: true }));
            Api_1.assert(basicViewModel.writable === 'Fifth test', 'Write method can call functions');
            // Often you want to set both the input and the value to the same thing.
            // You can use i5_input_value="foo" as a shortcut for i5_input="foo" and i5_value="foo"
            const comp18e = new Api_1.BoundComponent(basicViewModel, '<input id="comp18e" style="display: block;" i5_input_value="writable"/>').appendToParent(this.testArea);
            Api_1.assert(comp18e.value === 'Fifth test', 'i5_input_value sets value before');
            comp18e.value = 'Sixth test';
            comp18e.content.dispatchEvent(new Event('input', { bubbles: true }));
            Api_1.assert(basicViewModel.writable === 'Sixth test', 'i5_input still works');
            Api_1.assert(comp18e.value === 'Sixth test', 'i5_input_value sets value after');
            // The i5_target attribute can be replicated to write to multiple targets.
            // Everything after the "target", so i5_target1, i5_targetwhatever are valid.
            const comp19 = new Api_1.BoundComponent(basicViewModel, '<input id="comp19" style="display: block;" i5_input i5_target1="writable" i5_target2="writable2" />').appendToParent(this.testArea);
            comp19.value = 'Sixth test';
            comp19.content.dispatchEvent(new Event('input', { bubbles: true }));
            Api_1.assert(basicViewModel.writable === 'Sixth test' && basicViewModel.writable2 === 'Sixth test', 'Write method can write to multiple targets');
            // The basic loop, calling the built-in method BoundComponent.loopPostProcess.
            // Without any injection of loop item components (which I will get to shortly), the default loopPostProcess method does nothing.
            // I will need to detour into injection to go over the default post process method.
            const comp20a = new Api_1.BoundComponent(['One', 'Two', 'Three'], '<div id="comp20a" i5_loop=".">Random <span>span content</span>. </div>').appendToParent(this.testArea);
            const comp20b = new Api_1.BoundComponent(basicViewModel, '<div id="comp20b" i5_loop="list">Random <span>span content</span>. </div>').appendToParent(this.testArea);
            Api_1.assert(comp20a.content.querySelectorAll('span').length === 3, "Inner loop content should be replicated");
            Api_1.assert(comp20b.content.querySelectorAll('span').length === 2, "Inner loop content should be replicated");
            let loopcalled21a = 0;
            // To do your own logic, override the method loopPostProcess. loopPostProcess() is called once for each row in the iterable.
            class LoopComponent1 extends Api_1.BoundComponent {
                loopPostProcess(row, addedContent, allRows, previousContent) {
                    loopcalled21a++; // simple counter
                    Api_1.nodeListSelector(addedContent, 'span').innerHTML = row; // fill first span in the added content with current value
                    const rows = Array.from(allRows);
                    // If the last item in the iterable, add a period. This logic depends on the items being unique.
                    if (rows.indexOf(row) === rows.length - 1) {
                        Api_1.nodeListSelectorAll(addedContent, 'span')[1].innerHTML = '.';
                    }
                }
            }
            const comp21a = new LoopComponent1(['One', 'Two', 'Three'], '<div id="comp21a" i5_loop=".">A <span>span content</span><span>,</span> </div>').appendToParent(this.testArea);
            Api_1.assert(loopcalled21a === 3, 'Manual loop was called once per row');
            Api_1.assert(comp21a.innerHTML === "A <span>One</span><span>,</span> A <span>Two</span><span>,</span> A <span>Three</span><span>.</span> ", 'Manual loop should get the correct inputs and be able to modify the output.');
            // But even though that's possible, doing everything manually isn't ideal.
            // What would be ideal is if there were a way to componentize each item, doing replacements, etc.
            // DETOUR AHEAD
            // So now we make a detour into injection, because the default way to include variation in
            // the loop is by making them a component, by injecting component code.
            // By default, the existing element is kept and converted into a component.
            this.testArea.appendChild(Api_1.div(`<div>Down in here is a component:
                <div ichigo id="inject01a">Hello <i-v>name</i-v> #1</div>
                <div ichigo i5_style="bold">Hello <i-v>name</i-v> #2</div>
            </div>`));
            const firstInject = document.getElementById('inject01a');
            // This is the same as calling inject(viewmodel, '[ichigo]');
            const injected = Api_1.BoundComponent.inject(Api_1.kw('viewModel', basicViewModel));
            Api_1.assert(injected[0].innerHTML === 'Hello <i-v>World</i-v> #1', 'Inject should replace first.');
            Api_1.assert(injected[0].content === firstInject, 'Inject with keep=true should keep the existing element in place.');
            Api_1.assert(injected[1].innerHTML === 'Hello <i-v>World</i-v> #2', 'Inject should replace second.');
            // Using the default selector of [ichigo] is probably not a good idea, because it doesn't allow multiple
            // components ... or multiple tests. Let me clean up.
            function injectClean() {
                for (const e of document.querySelectorAll('[ichigo]')) {
                    e.removeAttribute('ichigo');
                }
            }
            injectClean();
            // The strength of the inject method, however, isn't as a shortcut for the regular constructor.
            // It's as a way to replace custom tags.
            this.testArea.appendChild(Api_1.div(`
                <inject-test-2 id="inject02a">Hello <i-v>name</i-v> #1</inject-test-2>
                <inject-test-2 i5_style="bold">Hello <i-v>name</i-v> #2</inject-test-2>
                <inject-test-3 id="inject02b">Hello <i-v>name</i-v> #3 </inject-test-3>
                <inject-test-3>Hello <i-v>name</i-v> #4 </inject-test-3>
                <div ichigo id="eraseMe" i5_style="bold">Something <i-v>to be replaced</i-v></div>
                <div id="id04d">Also <i-v>to be replaced</i-v></div>
            `));
            const injected2 = Api_1.BoundComponent.inject('inject-test-2', { replace: true }, Api_1.kw('viewModel', basicViewModel));
            const injected2b = Api_1.BoundComponent.inject('inject-test-3', { type: 'span', replace: true }, Api_1.kw('viewModel', basicViewModel));
            Api_1.assert(injected2[0].content.tagName === 'DIV' && injected2b[0].content.tagName === 'SPAN', 'Elements (including custom tags) are replaced when replace is true');
            Api_1.assert(injected2[1].style.cssText === 'font-weight: bold;', 'Existing attributes are kept even when replace is true and are attribute template logic is applied');
            const injected2c = Api_1.BoundComponent.inject('[ichigo]', { outerHtml: '<span i5_style="bold">The new <i-v>name</i-v></span>', id: 'inject02c', replace: true }, Api_1.kw('viewModel', basicViewModel));
            Api_1.assert(injected2c[0].innerHTML === 'The new <i-v>World</i-v>', 'When OuterHtml passed, the current innerHTML of the element is discarded');
            Api_1.assert(injected2c[0].id === 'inject02c', 'OuterHtml options also work with injection');
            Api_1.assert(injected2c[0].content.tagName === 'SPAN', 'OuterHtml inject still works without using custom tags');
            Api_1.assert(injected2c[0].style.cssText === 'font-weight: bold;', 'OuterHtml inject keeps existing attributes if not overridden');
            const injected2d = Api_1.BoundComponent.inject('#id04d', '<span id="inject02d" i5_style="bold">Also the new <i-v>name</i-v></span>', Api_1.kw('viewModel', basicViewModel));
            Api_1.assert(injected2d[0].id === 'inject02d' && injected2d[0].innerHTML === 'Also the new <i-v>World</i-v>', 'OuterHtml replace shortcut also works');
            injectClean();
            // When selector is a string, the elements are picked up using document.querySelectorAll().
            // If you are re-using selectors, this will pick up stuff you don't want to use.
            // Feel free to do your own query and pass in the results, or simply an array of elements to replace.
            this.testArea.appendChild(Api_1.div(`
                <div class="inject-selector-1">Hello <i-v>name</i-v> #1</div>
                <div class="inject-selector-1">Hello <i-v>name</i-v> #2</div>
            `, { id: 'inject03a' }));
            this.testArea.appendChild(Api_1.div(`<div class="inject-selector-1">Hello <i-v>.</i-v> #3</div>`, { id: 'inject03b' }));
            this.testArea.appendChild(Api_1.div('Hello <i-v>.</i-v> #4', { id: 'inject03c' }));
            const injected3 = Api_1.BoundComponent.inject(document.getElementById('inject03a').querySelectorAll('.inject-selector-1'), Api_1.kw('viewModel', basicViewModel));
            const injected3b = Api_1.BoundComponent.inject(document.getElementById('inject03b').querySelectorAll('.inject-selector-1'), Api_1.kw('viewModel', "Sekai"));
            const injected3c = Api_1.BoundComponent.inject(document.getElementById('inject03c'), Api_1.kw('viewModel', "WARUDO"));
            Api_1.assert(injected3[0].content.querySelector('i-v').innerHTML === 'World' && injected3b[0].content.querySelector('i-v').innerHTML === 'Sekai', 'Injection applied to NodeList when passed');
            Api_1.assert(injected3c[0].content.querySelector('i-v').innerHTML === 'WARUDO', 'Injection applied to single element when passed');
            // The final piece of the injection recipe is what component is injected.
            // Most of these tests are using the default BoundComponent class, but in the wild,
            // this will most commonly be the relevant view class, such as OrderView or BlogEntryView.
            this.testArea.appendChild(Api_1.div(`
                <inject-test-4>Hello <i-v>name</i-v></inject-test-4>
                <inject-test-5>Hello <i-v>name</i-v></inject-test-5>
            `));
            class InjectTestComponent extends Api_1.BoundComponent {
                constructor(vm, args) {
                    const tmp = Object.assign({}, vm, { name: 'Derived Class' }); // Change name
                    super(tmp, args);
                }
            }
            // These are both ways to do the same thing
            const injected4 = InjectTestComponent.inject('inject-test-4', { replace: true }, Api_1.kw('viewModel', basicViewModel));
            const injected4b = Api_1.BoundComponent.inject('inject-test-5', { replace: true }, InjectTestComponent, Api_1.kw('viewModel', basicViewModel));
            Api_1.assert(injected4[0].innerHTML === 'Hello <i-v>Derived Class</i-v>' && injected4b[0].innerHTML === 'Hello <i-v>Derived Class</i-v>', 'Can replace component class in inject()');
            // END DETOUR
            // And now that we understand injection, we can finally handle loop items using the default looper.
            // This uses the default BoundComponent for the top-level, using a string[] viewModel, and the same class for the
            // item-level, using a string viewModel (not validated by TypeScript).
            const comp22 = new Api_1.BoundComponent(['One', 'Two', 'Three'], `<div id="comp22" i5_loop="."><span i5_item><i-v>.</i-v> </span></div>`).appendToParent(this.testArea);
            Api_1.assert(comp22.innerHTML === '<span i5_item=""><i-v>One</i-v> </span><span i5_item=""><i-v>Two</i-v> </span><span i5_item=""><i-v>Three</i-v> </span>', 'BoundComponent template processed each line individually');
            // Of course, the component can be any class that inherits BoundComponent
            class LoopComponent2 extends Api_1.BoundComponent {
            }
            const comp23a = new Api_1.BoundComponent(['One', 'Two', 'Three'], {
                outerHtml: `<div id="comp23a" i5_loop="."><span i5_item><i-v>.</i-v> </span></div>`
            }).appendToParent(this.testArea);
            Api_1.assert(comp23a.content.querySelector('span[i5_item]').innerHTML === '<i-v>One</i-v> ', 'Successfully use derived class');
            // In these cases, when you have a view class for the top-level component, you probably
            // don't want to use the default BoundComponent class for the loop items. Set the loopItemClass to
            // indicate a class to use (of course, if you don't use the default looper, you can do whatever).
            // The important point in some contexts is that the parent component is passed on options.parent.
            // Use it in the occasional case where a child needs to know its parent.
            // If you want to have different components for different children (for example, a title component followed by
            // an image component), either encapsulate them in a parent component or don't use the default class/loop.
            // When the content is looped, before render() is called, the innerHTML is blank. It would be possible to keep the
            // template content, but in the case of an async component, that would create a flash of unprocessed content. The way
            // it's being done here, it goes from blank to having data. Much cleaner.
            // WARNING: By default, render() (which contains the loopPostProcess() call) is called in the constructor of BoundComponent.
            // If your child component depends on logic set up in the initialization of the parent component, this will produce bugs.
            // Lifecycle: Main CTOR() => Main super() => Main render() => Loop inject => Item CTOR() => Item CTOR end => Main super end => Main CTOR body (TypeScript field initialization) => Main CTOR end
            // As you can see from the lifecycle, any logic in the item CTOR is called before Main CTOR body.
            // It can be fixed in two ways. One is to set async: true in the options, creating an async component.
            // The second is to set defer: true and call render() manually when appropriate.
            // Currently neither of these is default.
            let loopcounter23b = 0;
            class LoopComponent3 extends Api_1.BoundComponent {
                constructor(vm, options) {
                    super(vm, options);
                    // Not deferred or async, so if this referenced the parent component, the loopcounter field would be undefined.
                    this.index = loopcounter23b++;
                    this.content.dataset.id = this.index.toString();
                }
            }
            const comp23b = new LoopComponent2(['One', 'Two', 'Three'], new Api_1.OuterHtmlBindingOptions({
                outerHtml: `<div id="comp23b" i5_loop="."><span i5_item><i-v>.</i-v> </span></div>`,
                loopItemClass: LoopComponent3,
                async: false // Not using async render because it makes testing suck (this is default)
            })).appendToParent(this.testArea);
            Api_1.assert(comp23b.content.querySelector('span[i5_item]:nth-child(2)').dataset.id === '1', 'Successfully call constructor of derived class');
            loopcounter23b = 0;
            const comp23c = new LoopComponent2(['One', 'Two', 'Three'], new Api_1.OuterHtmlBindingOptions({
                outerHtml: `<div id="comp23c" i5_loop="."><span i5_item><i-v>.</i-v> </span></div>`,
                loopItemClass: LoopComponent3,
                defer: true
            })).appendToParent(this.testArea);
            Api_1.assert(comp23c.innerHTML === '', "Defer true prevents calling of the render() method");
            comp23c.render();
            Api_1.assert(comp23c.innerHTML === comp23b.innerHTML, "Render can be called at any time after, even outside the derived constructor");
            // If you want to do nothing after creation, the easiest way is to supply an empty method, as in the example i5_loop:null="."
            const comp24 = new LoopComponent2(['One', 'Two', 'Three'], new Api_1.OuterHtmlBindingOptions({
                outerHtml: `<div id="comp24" i5_loop:null="."><span i5_item><i-v>.</i-v> </span></div>`,
                loopItemClass: LoopComponent3
            })).appendToParent(this.testArea);
            Api_1.assert(comp24.innerHTML === '<span i5_item=""><i-v>.</i-v> </span><span i5_item=""><i-v>.</i-v> </span><span i5_item=""><i-v>.</i-v> </span>', 'Null loop handler does not inject any component');
            // At this time, I decided to add a way to access properties of the view, rather than the viewModel, by
            // prefixing them with "this." This would need to be in a derived class, because none of the methods
            // base class are applicable.
            // WARNING: Normally, render() is called in the constructor of BoundComponent. In the super() call of your class.
            // This will cause problems in most cases where properties are accessed. To handle this, using this.properties
            // triggers automatic { defer: true } behavior.
            // To handle it, you can set async to true or you can call render() at the end of the constructor.
            class LoopComponent4 extends Api_1.BoundComponent {
                constructor(vm, options) {
                    super(vm, options);
                    this.index = 0;
                    // If you look at the JS that TS generates, you'll see that this.index = 0 isn't called until after super().
                    // In render() (called in super()), index is undefined.
                    this.index = options.parent.viewModel.indexOf(vm);
                }
            }
            const comp25a = new LoopComponent2(['One', 'Two', 'Three'], new Api_1.OuterHtmlBindingOptions({
                outerHtml: `<div id="comp25a" i5_loop="."><span i5_item i5_attr:data-id="this.index"><i-v>.</i-v> </span></div>`,
                loopItemClass: LoopComponent4
            })).appendToParent(this.testArea);
            Api_1.assert(comp25a.innerHTML === '<span i5_item="" i5_attr:data-id="this.index"><i-v>.</i-v> </span><span i5_item="" i5_attr:data-id="this.index"><i-v>.</i-v> </span><span i5_item="" i5_attr:data-id="this.index"><i-v>.</i-v> </span>', 'Render() not called automatically when "this." used.');
            // You can use fields without difficulty if async is true
            const comp25b = new LoopComponent2(['One', 'Two', 'Three'], new Api_1.OuterHtmlBindingOptions({
                outerHtml: `<div id="comp25b" i5_loop="."><span i5_item i5_attr:data-id="this.index"><i-v>this.index</i-v>: <i-v>.</i-v> </span></div>`,
                loopItemClass: LoopComponent4,
                async: true
            })).appendToParent(this.testArea);
            // This is why I hate testing with async. Throw a debugger in and this will fail:
            this.log('Async test initated for 25b.');
            asyncAsserts.then(() => Api_1.assert(document.querySelector('#comp25b span:nth-child(2)').dataset.id === '1', 'this.index can be accessed asynchronously'));
            // If you want to do a synchronous call, do it this way.
            class LoopComponent5 extends LoopComponent4 {
                constructor(vm, options) {
                    super(vm, options);
                    this.render(); // Now it's safe to call render.
                }
            }
            const comp25c = new LoopComponent2(['One', 'Two', 'Three'], new Api_1.OuterHtmlBindingOptions({
                outerHtml: `<div id="comp25c" i5_loop="."><span i5_item i5_attr:data-id="this.index"><i-v>this.index</i-v>: <i-v>.</i-v> </span></div>`,
                loopItemClass: LoopComponent5
            })).appendToParent(this.testArea);
            Api_1.assert(document.querySelector('#comp25c span:nth-child(2)').dataset.id === '1', 'this.index can be accessed if render() called in constructor');
            // I warned you against having replacement values that return other components, because the process of refreshing the data
            // (if an observable is in play) will delete your references. And the timing can be tricky.
            // That said, there should be no issues with nesting a component inside  (the static portion of) another component. Don't
            // loop, because loops are all dynamic.
            // But there will be issues without additional work.
            // In the following example, you'll see that without filtering i-v tags, the replacement in comp-2 will want to print
            // [Object object]. Which will break comp-2's replacement.
            // But by setting the name and matching it up in the "component" property of the i-v tags, the replacements are filtered to
            // only certain components.
            this.testArea.appendChild(Api_1.div(`
                <comp-1 i5_name="comp-1">
                    Hello <i-v component="comp-1">name</i-v>
                    <comp-2>This is <i-v component="comp-2">.</i-v></comp-2>
                </comp-1>
            `));
            const comp26a = Api_1.BoundComponent.inject('comp-1', { replace: true, type: Api_1.elementType.HTMLDivElement, id: 'comp26a' }, Api_1.kw('viewModel', basicViewModel));
            // You can set name by attribute iv_name or by name option.
            const comp26b = Api_1.BoundComponent.inject('comp-2', { replace: true, type: Api_1.elementType.HTMLDivElement, id: 'comp26b', name: 'comp-2' }, Api_1.kw('viewModel', 'nested'));
            Api_1.assert(comp26a[0].innerHTML.includes('<div id="comp26b">This is <i-v component="comp-2">nested</i-v></div>'), 'I-V tags are restricted to their assigned components');
            // If name is set, elements MUST have a matching name. It can't be blank.
            // This is to prevent comp-2 replacement from matching comp-1 in the following example.
            this.testArea.appendChild(Api_1.div(`
                <comp-1 i5_name="comp-1">
                    Hello <i-v component="comp-1">name</i-v>
                    <comp-2>This is <i-v>.</i-v></comp-2>
                </comp-1>
            `));
            const comp26c = Api_1.BoundComponent.inject('comp-1', { replace: true, type: Api_1.elementType.HTMLDivElement, id: 'comp26c' }, Api_1.kw('viewModel', basicViewModel));
            // This because comp-2 has no name. It's pretty risky, though, so I don't recommend being lazy like this.
            const comp26d = Api_1.BoundComponent.inject('comp-2', { replace: true, type: Api_1.elementType.HTMLDivElement, id: 'comp26d' }, Api_1.kw('viewModel', 'nested'));
            Api_1.assert(comp26c[0].innerHTML.includes('<div id="comp26d">This is <i-v>nested</i-v></div>'), 'Non-scoped I-V tags only match unnamed component');
            // SHORTCUTS
            // To make things quicker, there is a shortcut for the "i5_" prefix on custom attributes: :
            // This makes :attr, :value, :loop, and so forth.
            // : is completely non-standard but it is legal in attribute names.
            const short1 = new Api_1.BoundComponent(basicViewModel, '<div :class="cssClass">Shortcut</div>').appendToParent(this.testArea);
            Api_1.assert(short1.classList.toString() === 'does-nothing', ':class shortcut for i5_class');
            const short2 = new Api_1.BoundComponent(basicViewModel, '<span :style="block">Shortcut</span>').appendToParent(this.testArea);
            Api_1.assert(short2.style.display === 'block', ':style shortcut for i5_style');
            const short3 = new Api_1.BoundComponent(basicViewModel, '<div :text="rawHtml"></div>').appendToParent(this.testArea);
            Api_1.assert(short3.innerHTML === '<i-v>Hello &lt;em&gt;World&lt;/em&gt;</i-v>', ":text shortcut for i5_text");
            const short4 = new Api_1.BoundComponent(basicViewModel, '<div :html="rawHtml"></div>').appendToParent(this.testArea);
            Api_1.assert(short4.content.firstElementChild.innerHTML === 'Hello <em>World</em>', ":html shortcut for i5_html");
            const short5 = new Api_1.BoundComponent(basicViewModel, '<input :style="block" :value="name" />').appendToParent(this.testArea);
            Api_1.assert(short5.value === 'World', ':value shortcut for i5_value');
            const short6 = new Api_1.BoundComponent(basicViewModel, '<input :style="block" :value="name" :attr:disabled="truthiness" />').appendToParent(this.testArea);
            Api_1.assert(short6.content.hasAttribute('disabled'), ':attr shortcut for i5_attr');
            const short7 = new Api_1.BoundComponent(basicViewModel, '<div :if="truthiness">Shortcut seen</div>').appendToParent(this.testArea);
            const short8 = new Api_1.BoundComponent(basicViewModel, '<div :if="trumpiness">Shortcut not seen</div>').appendToParent(this.testArea);
            const short9 = new Api_1.BoundComponent(basicViewModel, '<div :if-="truthiness">Shortcut not seen</div>').appendToParent(this.testArea);
            Api_1.assert(short7.style.display === '', ':if shortcut for i5_if');
            Api_1.assert(short8.style.display === 'none', ':if shortcut for i5_if');
            Api_1.assert(short9.style.display === 'none', ':if- shortcut for i5_if0');
            const short10 = new Api_1.BoundComponent(basicViewModel, '<input :style="block" :input="writable" />').appendToParent(this.testArea);
            short10.value = 'Shortcut 10';
            short10.content.dispatchEvent(new Event('input', { bubbles: true }));
            Api_1.assert(basicViewModel.writable === 'Shortcut 10', ':input shortcut for i5_input');
            const short11 = new Api_1.BoundComponent(basicViewModel, '<input :style="block" :input :target1="writable" :target2="writable2" />').appendToParent(this.testArea);
            short11.value = 'Shortcut 11';
            short11.content.dispatchEvent(new Event('input', { bubbles: true }));
            Api_1.assert(basicViewModel.writable === 'Shortcut 11' && basicViewModel.writable2 === 'Shortcut 11', ':target shortcut can handle multiple targets');
            // The shortcut for i5_input_value is :input: (:input_value will still work but it's still wordy)
            const short12 = new Api_1.BoundComponent(basicViewModel, '<input style="display: block;" :input:="writable" />').appendToParent(this.testArea);
            Api_1.assert(short12.value === 'Shortcut 11', ':input: before');
            short12.value = 'Shortcut 12';
            short12.content.dispatchEvent(new Event('input', { bubbles: true }));
            Api_1.assert(short12.value === 'Shortcut 12', ':input: after');
            // You can shortcut loops
            const short13 = new Api_1.BoundComponent(['Short', 'Shorter', 'Shortest'], `<div :loop="."><span i5_item><i-v>.</i-v></span></div>`).appendToParent(this.testArea);
            // The : shortcut is only intended to replace custom component attributes.
            // But even though :item is just a selector, it's worth shortcutting for the sake of consistency.
            // Handling : was a PITA though. Even though in HTML5, :item is a valid attribute, boy is the selector awful.
            const short14 = new Api_1.BoundComponent(['Short', 'Shorter', 'Shortest'], `<div :loop="."><span :item><i-v>.</i-v></span></div>`).appendToParent(this.testArea);
            // Ichigo makes heavy use of custom attributes, and purists might refuse to use it because all the attributes are
            // technically invalid, not even considering the shortcut character.
            // To make them happy, Ichigo can also be configured using data attributes, which are valid. It didn't take a lot of code.
            const dataset1 = new Api_1.BoundComponent(basicViewModel, '<div data-i5_class="cssClass">Shortcut</div>').appendToParent(this.testArea);
            Api_1.assert(dataset1.classList.toString() === 'does-nothing', 'i5_class in dataset');
            const dataset2 = new Api_1.BoundComponent(basicViewModel, '<span data-i5_style="block">Shortcut</span>').appendToParent(this.testArea);
            Api_1.assert(dataset2.style.display === 'block', 'i5_style in dataset');
            const dataset3 = new Api_1.BoundComponent(basicViewModel, '<div data-i5_text="rawHtml"></div>').appendToParent(this.testArea);
            Api_1.assert(dataset3.innerHTML === '<i-v>Hello &lt;em&gt;World&lt;/em&gt;</i-v>', "i5_text in dataset");
            const dataset4 = new Api_1.BoundComponent(basicViewModel, '<div data-i5_html="rawHtml"></div>').appendToParent(this.testArea);
            Api_1.assert(dataset4.content.firstElementChild.innerHTML === 'Hello <em>World</em>', "i5_html in dataset");
            const dataset5 = new Api_1.BoundComponent(basicViewModel, '<input style="display: block" data-i5_value="name" />').appendToParent(this.testArea);
            Api_1.assert(dataset5.value === 'World', 'i5_value in dataset');
            const dataset6 = new Api_1.BoundComponent(basicViewModel, '<input style="display: block" data-i5_value="name" data-i5_attr_disabled="truthiness" />').appendToParent(this.testArea);
            Api_1.assert(dataset6.content.hasAttribute('disabled'), 'i5_attr in dataset');
            const dataset7 = new Api_1.BoundComponent(basicViewModel, '<div data-i5_if="truthiness">Shortcut seen</div>').appendToParent(this.testArea);
            const dataset8 = new Api_1.BoundComponent(basicViewModel, '<div data-i5_if="trumpiness">Shortcut not seen</div>').appendToParent(this.testArea);
            Api_1.assert(dataset7.style.display === '', 'i5_if in dataset');
            Api_1.assert(dataset8.style.display === 'none', 'i5_if in dataset');
            const dataset9 = new Api_1.BoundComponent(basicViewModel, '<input style="display: block" data-i5_input="writable" />').appendToParent(this.testArea);
            dataset9.value = 'Dataset 9';
            dataset9.content.dispatchEvent(new Event('input', { bubbles: true }));
            Api_1.assert(basicViewModel.writable === 'Dataset 9', 'i5_input in dataset');
            const dataset10 = new Api_1.BoundComponent(basicViewModel, '<input style="display: block" data-i5_input data-i5_target1="writable" data-i5_target2="writable2" />').appendToParent(this.testArea);
            dataset10.value = 'Dataset 10';
            dataset10.content.dispatchEvent(new Event('input', { bubbles: true }));
            Api_1.assert(basicViewModel.writable === 'Dataset 10' && basicViewModel.writable2 === 'Dataset 10', 'data-i5_target shortcut can handle multiple targets');
            const dataset11 = new Api_1.BoundComponent(basicViewModel, '<input style="display: block;" data-i5_input_value="writable"/>').appendToParent(this.testArea);
            Api_1.assert(dataset11.value === 'Dataset 10', 'data-i5_input_value before');
            dataset11.value = 'Dataset 11';
            dataset11.content.dispatchEvent(new Event('input', { bubbles: true }));
            Api_1.assert(dataset11.value === 'Dataset 11', 'data-i5_input_value after');
            const dataset12 = new Api_1.BoundComponent(['Short', 'Shorter', 'Shortest'], `<div data-i5_loop="."><span i5_item><i-v>.</i-v></span></div>`).appendToParent(this.testArea);
            // Again, some extra complexity for the sake of consistency.
            const dataset13 = new Api_1.BoundComponent(['Short', 'Shorter', 'Shortest'], `<div data-i5_loop="."><span data-i5_item><i-v>.</i-v></span></div>`).appendToParent(this.testArea);
            // If you subscribe the render() method of the component to an observable's changes,
            // then when the data is modified, the rendering of that data will be updated.
            // Remember that by default, observables work asynchronously.
            // If the view model is an observable, you can observe it simply by
            // passing observeViewModel: true in the component options.
            class ObservableViewModel extends Api_1.ObservableBase {
                constructor() {
                    super(...arguments);
                    this.name = new Api_1.ObservableProperty("World", { name: "name", forwardTo: this });
                }
            }
            const observableViewModel = new ObservableViewModel({ name: "VM" });
            const observeComp1 = new Api_1.BoundComponent(observableViewModel, {
                innerHtml: 'Hello <i-v>name</i-v>',
                observeViewModel: true
            }).appendToParent(this.testArea);
            Api_1.assert(observeComp1.innerHTML === 'Hello <i-v>World</i-v>', 'Component shows initial value before update');
            setTimeout(() => {
                observableViewModel.name.value = "Neptune";
            }, 500);
            asyncAsserts.then(() => Api_1.assert(observeComp1.innerHTML === 'Hello <i-v>Neptune</i-v>', 'Render() called when observing viewModel, if property is forwarded.'));
            // You can also observe each individual property of a view model, which is useful when the VM itself is a dumb object. Which
            // is generally better, in my opinion. Simpler chain of responsibility.
            class MoreTypicalViewModel {
                constructor() {
                    this.name = new Api_1.ObservableProperty("World");
                }
            }
            const dumbViewModel = new MoreTypicalViewModel();
            const observeComp2 = new Api_1.BoundComponent(dumbViewModel, {
                innerHtml: 'Hello <i-v>name</i-v>',
                observeAllViewModel: true
            }).appendToParent(this.testArea);
            Api_1.assert(observeComp2.innerHTML === 'Hello <i-v>World</i-v>', 'Component shows initial value before update #2');
            setTimeout(() => {
                dumbViewModel.name.value = "Mars";
            }, 600);
            asyncAsserts.then(() => Api_1.assert(observeComp2.innerHTML === 'Hello <i-v>Mars</i-v>', 'Render() called when observing all observable properties of a dumb view model'));
            // Of course, you can manually specify the observers (same as observeViewModel).
            const observeComp3 = new Api_1.BoundComponent(dumbViewModel, {
                innerHtml: 'Hello <i-v>name</i-v> #2',
                observeTargets: [dumbViewModel.name]
            }).appendToParent(this.testArea);
            asyncAsserts.then(() => Api_1.assert(observeComp3.innerHTML === 'Hello <i-v>Mars</i-v> #2', 'Render() called when observing observable properties on a dumb view model explicitly'));
            // Or manually specify the parent of observers (same as observeAllViewModel)
            const observeComp4 = new Api_1.BoundComponent(dumbViewModel, {
                innerHtml: 'Hello <i-v>name</i-v> #3',
                observeAllTargets: [dumbViewModel]
            }).appendToParent(this.testArea);
            asyncAsserts.then(() => Api_1.assert(observeComp4.innerHTML === 'Hello <i-v>Mars</i-v> #3', 'Render() called when observing all observable properties of a list of dumb view models'));
            // Or if complete manual assignment is your thing, you don't need to use the helpers.
            const observeComp5 = new Api_1.BoundComponent(observableViewModel, {
                innerHtml: 'Hello <i-v>name</i-v> #2'
            }).appendToParent(this.testArea);
            // This is the same as calling
            // observeComp5.viewModel.subscribe(observeComp5.render, observeComp5)
            observeComp5.observe();
            asyncAsserts.then(() => Api_1.assert(observeComp5.innerHTML === 'Hello <i-v>Neptune</i-v> #2', 'Render() called when the observe() method is called'));
            const observeComp6 = new Api_1.BoundComponent(dumbViewModel, {
                innerHtml: 'Hello <i-v>name</i-v> #4'
            }).appendToParent(this.testArea);
            // This is the same as calling
            // observeComp6.viewModel.subscribe(observeComp5.render, observeComp5.name)
            observeComp6.observeAll();
            asyncAsserts.then(() => Api_1.assert(observeComp6.innerHTML === 'Hello <i-v>Mars</i-v> #4', 'Render() called when the observeAll() method is called'));
            // The VM doesn't matter as long as it's observable. The process is the same for an array.
            // In this case, the array is the view model, so pass observeViewModel to true.
            const observableArr = Api_1.ObservableProxy.proximate(['One', 'Two']);
            const observeComp7 = new Api_1.BoundComponent(observableArr, {
                outerHtml: `<div :loop="."><span class="observing" :item><i-v>.</i-v> </span></div>`,
                observeViewModel: true
            }).appendToParent(this.testArea);
            Api_1.assert(Array.from(observeComp7.content.querySelectorAll('.observing')).length === 2, 'Array length before updating.');
            observableArr.push('Three');
            asyncAsserts.then(() => Api_1.assert(Array.from(observeComp7.content.querySelectorAll('.observing')).length === 3, 'Array length after updating.'))
                .then(() => Api_1.assert(Array.from(observeComp7.content.querySelectorAll('.observing i-v')).pop().innerHTML === 'Three', 'Last item is the most recent array addition'));
            // Each of the attribute-defined properties in the bound components can be set through fluent methods. You probably wouldn't
            // use this for everything (why use an bound component with no attributes?) but from time to time it's useful.
            const fluency = new Api_1.BoundComponent(basicViewModel, { innerHtml: 'Hellooo, <i-v>name</i-v>' }).appendToParent(this.testArea);
            // Set the update parameter to true on the last change to re-render the component.
            // This is only done when you call it so the number of redraws is minimized.
            fluency.setCssClass('cssClass');
            Api_1.assert(fluency.className === '', 'Simon didnt say (update not true)');
            fluency.addAttributeMapping('bogus', 'cssClass', true);
            Api_1.assert(fluency.className === 'does-nothing', 'Update called forces re-render');
            Api_1.assert(fluency.content.getAttribute('bogus') === 'does-nothing', 'Update called forces a complete re-render');
            // Or call .render() at the end. It's a fluent API.
            fluency.removeAttributeMapping('bogus').setLoop('list', '<div :item :text="."></div>').render();
            Api_1.assert(fluency.innerHTML === '<div :item="" :text="."><i-v>World</i-v></div><div :item="" :text="."><i-v>Underworld</i-v></div>', 'setLoop() replaces content with the provided loop');
            // All these are setting render to true so the output is visible in the test area, but they don't need to be.
            fluency.setVisibility('trumpiness', false, true);
            Api_1.assert(fluency.content.style.display === 'none', 'setVisibility() hides');
            fluency.setVisibility('truthiness', false, true);
            Api_1.assert(fluency.content.style.display === '', 'setVisibility() shows');
            fluency.addAttributeMapping('style', 'bold', true);
            Api_1.assert(fluency.style.cssText === 'font-weight: bold;', 'addAttribute() changes attribute');
            // There's a difference between removeAttribute on the content and removing the dynamic i5_attribute mapping
            fluency.content.removeAttribute('style');
            fluency.render();
            Api_1.assert(fluency.style.cssText === 'font-weight: bold;', 'addAttribute() regenerated during each rendering');
            fluency.content.removeAttribute('style');
            fluency.removeAttributeMapping('style', true);
            Api_1.assert(fluency.style.cssText === '', 'removeAttribute() takes dynamic attribute away');
            fluency.setCssClass('cssClasses', true);
            Api_1.assert(fluency.className === 'class-1 class-2', 'setCssClass() sets className');
            fluency.setCssStyle('bold', true);
            Api_1.assert(fluency.style.cssText === 'font-weight: bold;', 'setCssStyle() changes style');
            fluency.addCssClassSwitch('some-class', 'truthiness', false, true);
            Api_1.assert(fluency.className === 'class-1 class-2 some-class', 'addCssClassSwitch() adds class if property is true');
            // This case is a pain to test without bringing observables into it
            basicViewModel.truthiness = false;
            fluency.render();
            Api_1.assert(fluency.className === 'class-1 class-2', 'class switch still active');
            fluency.removeCssClassSwitch('some-class');
            basicViewModel.truthiness = true;
            fluency.render();
            Api_1.assert(fluency.className === 'class-1 class-2', 'class switch not active');
            // The partial exception  to the rule that update should be true is setTemplate(), and its children setHtmlTemplate()
            // and setTextTemplate(). Full rendering is still delayed, but initial replacements are done before writing.
            // I see pre-replacement values on pages all the time and it's tacky.
            // Note that by default this only replaces text. Any related classes, styles, etc,
            // are not seen until render() is triggered.
            fluency.setHtmlTemplate('rawHtml');
            Api_1.assert(fluency.innerHTML === '<i-v noescape="">Hello <em>World</em></i-v>', 'setHtmlTemplate() sets noescape');
            fluency.setTextTemplate('rawHtml');
            Api_1.assert(fluency.innerHTML === '<i-v>Hello &lt;em&gt;World&lt;/em&gt;</i-v>', 'setTextTemplate() doesnt set noescape');
            fluency.setTemplate('Hiya <i-v>name</i-v>!');
            Api_1.assert(fluency.innerHTML === 'Hiya <i-v>World</i-v>!', 'setTemplate() acts the same as if original innerHTML were set');
            const fluentInput = new Api_1.BoundComponent(basicViewModel, { type: 'input', attributes: { style: 'display: block;', i5_input: 'writable' } }).appendToParent(this.testArea);
            fluentInput.setValueAttribute('name', true);
            Api_1.assert(fluentInput.value === 'World', 'setValueAttribute() sets a value mapping');
            // Re-rendering after this one doesn't actually matter, since this isn't rendered
            fluentInput.addWriteTarget('writable2');
            fluentInput.value = 'Input Test 1';
            fluentInput.content.dispatchEvent(new Event('input', { bubbles: true }));
            Api_1.assert(basicViewModel.writable2 === 'Input Test 1', 'addWriteTarget() adds a form input binding');
            fluentInput.removeWriteTarget('writable2');
            fluentInput.value = 'Input Test 2';
            fluentInput.content.dispatchEvent(new Event('input', { bubbles: true }));
            Api_1.assert(basicViewModel.writable2 === 'Input Test 1', 'removeWriteTarget() removes the input binding');
            // State observables are similar, but keep in mind a few things.
            // Most importantly, you should observe the view model itself, never the sub-objects, which are just parts of the overall state.
            // Also, you are a bit limited in the complexity of your object.
            const stateObservable = new Api_1.ObservableState(basicViewModel);
            const observeComp8 = new Api_1.BoundComponent(stateObservable, {
                innerHtml: 'Hello <i-v>lastListItem</i-v>',
                observeViewModel: true
            }).appendToParent(this.testArea);
            asyncAsserts.then(() => Api_1.assert(observeComp8.innerHTML === 'Hello <i-v>Middle Earth</i-v>', 'Render() called with setState()'));
            stateObservable.setState({ list: ['World', 'Underworld', 'Middle Earth'] });
            // The following shouldn't throw. They won't do anything, but they shouldn't throw.
            const null1 = new Api_1.BoundComponent(undefined, { element: Api_1.createElement(Api_1.elementType.HTMLDivElement, { innerHTML: 'Null-hello <i-v>name</i-v>' }) }).appendToParent(this.testArea);
            const null2 = new LoopComponent2(undefined, {
                outerHtml: `<div id="null2" i5_loop="."><span i5_item><i-v>.</i-v> </span></div>`,
                loopItemClass: LoopComponent3,
                async: false // Not using async render because it makes testing suck (this is default)
            }).appendToParent(this.testArea);
            const null3 = new Api_1.BoundComponent(undefined, {
                innerHtml: 'Null-hello <i-v>name</i-v>',
                observeViewModel: true
            }).appendToParent(this.testArea);
            this.log(`TEST ${this.viewModel.testNumber}: Sync test successful`);
            this.log('Starting async tests');
            asyncAsserts.then(() => this.log(`TEST ${this.viewModel.testNumber}: Async tests succeeded`));
            asyncAsserts.catch(err => {
                this.log('ASYNC TESTS FAILED: ' + err.message);
                throw (err);
            });
            asyncAsserts.resolve();
        }
        catch (err) {
            this.log("ERROR: " + err);
            throw err;
        }
    }
}
exports.Test010 = Test010;

},{"../src/Api":1,"./TestCaseView":79,"./TestCaseViewModel":80}],74:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../src/Api");
const TestCaseView_1 = require("./TestCaseView");
const TestCaseViewModel_1 = require("./TestCaseViewModel");
// tslint:disable:max-classes-per-file
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'Complete Bound Component Examples',
            descriptionHtml: `<p>Part two: more of the same.</p>
            <p>BoundComponents are pretty complex and have lots of options. So much that I'm splitting it up into 2 test cases. And
            to be honest, the first test case is really really long.</p>

            <p>Why are bound components so large (in terms of functionality ... the class is only 800 lines)? Why do they have so many
            options? Well, everyone has a different way of developing, and I don't want to push anyone into 'My Way' ... this isn't Angular
            or something. Especially since My Way changes depending on the project and sometimes the specific functionality. Sometimes
            (usually) a web server pushes the HTML and CSS and the JS just adds on to that. Sometimes, it's an SPA and everything is
            produced in JS. Sometimes I'm building a component that's getting injected into a completely different page.</p>

            <p>There are different ways to do each of these. Interaction with the DOM may be based on a lot of document.getElementById()
            calls. Or it may involve a lot of document.createElement. And even in the latter case, that could involve creating each
            individual elements or pushing a blob of HTML into innerHTML. It all depends.</p>

            <p>This test case implements a VERY simplistic chat component in a variety of different ways, using different features of
            the class in each case.</p>

            <p>I totally do not want to spend the time writing up a serious stylesheet for this, much less pulling in bootstrap, so this
            will look as primitive as heck.</p>

            <h2>Warning</h2>
            <p>Tests are async and will keep running. Wait for tests to complete before leaving page.</p>
            `
        });
    }
}
class Test011 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            // Set up common tests for all these identical components, which are all the same thing, just constructed in different ways.
            // Testing this stuff asynchronously is super difficult, though. Normally with a user, you'd make a change, test it, then continue.
            const asyncAsserts = new Api_1.DeferredPromise(Api_1.delay(1000), true);
            function testMessage1(view) {
                const fromelement = view.content.querySelector('input.chat-from');
                const subelement = view.content.querySelector('input.chat-subject');
                const msgelement = view.content.querySelector('textarea.chat-message');
                const btn = view.content.querySelector('button.chat-submit');
                fromelement.value = view.constructor.name;
                fromelement.dispatchEvent(new Event('input', { bubbles: true }));
                subelement.value = "Hello";
                subelement.dispatchEvent(new Event('input', { bubbles: true }));
                msgelement.value = "Every client is adding the same message.";
                msgelement.dispatchEvent(new Event('input', { bubbles: true }));
                setTimeout(() => btn.click(), 50);
            }
            function testMessage2(view) {
                const fromelement = view.content.querySelector('input.chat-from');
                const subelement = view.content.querySelector('input.chat-subject');
                fromelement.value = 'John Smith on behalf of ' + view.constructor.name;
                fromelement.dispatchEvent(new Event('input', { bubbles: true }));
                subelement.value = 'Your assistance is needed';
                subelement.dispatchEvent(new Event('input', { bubbles: true }));
            }
            function testComponent(view) {
                testMessage1(view);
                setTimeout(() => testMessage2(view), 500);
            }
            function assertComponent(view, list) {
                Api_1.assert(view.content.querySelector('div.chat-closing').innerHTML.includes('John Smith'), 'From field updates closing: ' + view.constructor.name);
                Api_1.assert(!view.content.querySelector('input.chat-from').classList.toString().includes('red'), 'Class switch removed when from filled: ' + view.constructor.name);
                const subelement = view.content.querySelector('div.chat-subject-display');
                Api_1.assert(subelement.innerHTML.includes('Your assistance is needed'), 'Subject display updated by subject field: ' + view.constructor.name);
                Api_1.assert(subelement.style.display !== 'none', 'i5_if allows hidden field to become visible: ' + view.constructor.name);
                Api_1.assert(view.content.querySelector('textarea.chat-message').classList.toString().includes('red'), 'Class switch added when no message: ' + view.constructor.name);
                Api_1.assert(view.content.querySelector('button.chat-submit').hasAttribute('disabled'), 'Disabled boolean attribute added when no message: ' + view.constructor.name);
                Api_1.assert(list.chats.length === 6, 'Chats were added to the viewmodel during each chat submit');
            }
            class ChatViewModel {
                constructor(chat) {
                    this.id = 1;
                    this.created = new Date();
                    this.fromName = 'Anonymous';
                    this.subject = '';
                    this.message = '';
                    this.closing = 'I look forward to hearing from you and I remain meanwhile,';
                    if (chat) {
                        Object.assign(this, chat);
                    }
                }
                stripped() {
                    return `${this.message} ${this.closing} ${this.fromName}`.replace(/[\r\n]/g, '');
                }
                invalid() {
                    return !this.subject || !this.message || !this.fromName;
                }
            }
            class ChatListViewModel {
                constructor() {
                    this.chats = Api_1.ObservableProxy.proximate([]);
                    this.getNewChats()
                        .then(newChats => this.chats.push(...newChats));
                }
                beginChat() {
                    return Api_1.ObservableProxy.proximate(this._newChat());
                }
                addChat(chat) {
                    return this.upload(chat)
                        .then(resp => this.getNewChats(chat))
                        .then(newChats => this.chats.push(...newChats))
                        .then(() => this._newChat());
                }
                getNewChats(chat) {
                    if (chat) {
                        // It's important that we not add a reference to the working copy. If this were to be
                        // pulled down from a service, it would be a new object.
                        return Promise.resolve('Imagine a fetch request here').then(() => [new ChatViewModel(chat)]);
                    }
                    return Promise.resolve([]);
                }
                _newChat() {
                    const maxId = (this.chats[this.chats.length - 1] || { id: 0 }).id;
                    return new ChatViewModel({
                        id: maxId,
                        created: new Date(),
                        fromName: 'Anonymous',
                        subject: '',
                        message: ''
                    });
                }
                upload(chat) {
                    return Promise.resolve('Imagine a fetch request here');
                }
            }
            // For fun, we'll let all our different tests interact with the same view model.
            // But we'll arrange so that they give each component its own current working object.
            const chatlist = new ChatListViewModel();
            // This is a pretty cheap way to produce an inline stylesheet but it works and it doesn't even make dupes.
            // I don't like how scoped stylesheets got removed from the standard, though, forcing weird selectors.
            document.head.appendChild(Api_1.createElement(Api_1.elementType.HTMLStyleElement, {
                id: 'chat-stylesheet',
                innerHTML: `
                    .chat-example {
                        border: 3px solid black;
                        width: 75vw;
                    }
                    /* Probably wouldn't be used in a real test, but for this test, works as emphasis. */
                    .chat-example .component:hover {
                        background-color: gold;
                        transition: ease-in-out background-color 1s;
                    }
                    .chat-example .chat-subject-display {
                        background: powderblue;
                        border: 2px solid blue;
                        border-radius: 4px;
                        font-weight: bold;
                    }
                    .chat-example .chat-submit {
                        margin-right: 0;
                        margin-left: auto;
                        display: block;
                    }
                    .chat-example input,textarea {
                        width: 50vw;
                    }
                    .chat-example .red {
                        background: salmon;
                    }
            `
            }));
            // The first example is your traditional ES6 approach, with full HTML being provided by a web server somewhere,
            // then with logic layered on top in JS. The default BoundComponent will be used, as there's no functionality
            // to be overridden with custom logic.
            const example1html = `
                <div id="chat-example1" class="chat-example">
                    <h4>Example 1</h4> <!-- Misusing heading tags by jumping to H4-->
                    <div :loop="chats" class="component chat-list">
                        <div :item>
                            <div>#<i-v>id</i-v> From:<i-v>fromName</i-v> at <i-v>created</i-v>. <i-v>subject</i-v></div>
                            <div><i-v>stripped</i-v></div>
                        </div>
                    </div>
                    <br />
                    <div class="chat-editor">
                        <form :event (submit)="submit">
                            <div class="component chat-subject-display" :text="subject" :if="subject"></div>
                            <div>
                                <span>From:</span>
                                <input class="component chat-from" :input:="fromName" :switch-:red="fromName" />
                            </div>
                            <div>
                                <span>Subject:</span>
                                <input class="component chat-subject" :input:="subject" :switch-:red="subject" />
                            </div>
                            <div>
                                <textarea class="component chat-message" :input:="message" :switch-:red="message"></textarea>
                            </div>
                            <div class="component chat-closing">
                                <i-v>closing</i-v> <br />
                                <i-v>fromName</i-v>
                            </div>
                            <button class="component chat-submit" type="submit" :bool:disabled="invalid">Submit</button>
                        </form>
                    </div>
                </div>
            `;
            // This is where the "web server" returns a static page
            this.testArea.appendChild(Api_1.createHtml(example1html));
            class ChatView1 extends Api_1.Component {
                constructor(viewModel) {
                    super({ selector: '#chat-example1' });
                    this.viewModel = viewModel;
                    this.current = this.viewModel.beginChat();
                    this.list = new Api_1.BoundComponent(this.viewModel, new Api_1.ExistingLookupBindingOptions({ parent: this.content, selector: '.chat-list' }))
                        .observe(this.viewModel.chats);
                    this.editor = {
                        subjectDisplay: new Api_1.BoundComponent(this.current, new Api_1.ExistingLookupBindingOptions({ parent: this.content, selector: '.chat-subject-display', observeViewModel: true })),
                        subject: new Api_1.BoundComponent(this.current, new Api_1.ExistingLookupBindingOptions({ parent: this.content, selector: '.chat-subject', observeViewModel: true })),
                        from: new Api_1.BoundComponent(this.current, new Api_1.ExistingLookupBindingOptions({ parent: this.content, selector: '.chat-from', observeViewModel: true })),
                        message: new Api_1.BoundComponent(this.current, new Api_1.ExistingLookupBindingOptions({ parent: this.content, selector: '.chat-message', observeViewModel: true })),
                        closing: new Api_1.BoundComponent(this.current, new Api_1.ExistingLookupBindingOptions({ parent: this.content, selector: '.chat-closing', observeViewModel: true })),
                        button: new Api_1.BoundComponent(this.current, new Api_1.ExistingLookupBindingOptions({ parent: this.content, selector: '.chat-submit', observeViewModel: true }))
                    };
                    this.addInlineEventListeners();
                }
                submit(evt) {
                    evt.preventDefault();
                    this.viewModel.addChat(this.current)
                        .then(newchat => {
                        Object.assign(this.current, newchat);
                    })
                        .catch(err => console.error(err));
                }
            }
            const example1View = new ChatView1(chatlist);
            testComponent(example1View);
            asyncAsserts.then(() => assertComponent(example1View, chatlist));
            // Now that was a bit verbose, but it's a good match for the developer who wants to control everything and track
            // every component in the view, or doesn't have a lot of identical components. It does involve a workout for the control-V key.
            // But most, when faced by so much code duplication, would go with something like example 2, which uses the inject method.
            // This one can work with the same HTML provided by the web server.
            class ChatView2 extends Api_1.Component {
                constructor(viewModel) {
                    super({ selector: '#chat-example2' });
                    this.viewModel = viewModel;
                    this.current = this.viewModel.beginChat();
                    this.list = Api_1.BoundComponent.inject('#chat-example2 .chat-list', Api_1.kw('viewModel', this.viewModel))[0]
                        .observe(this.viewModel.chats);
                    // Inject all chat entry components in one go
                    this.components = Api_1.BoundComponent.inject('#chat-example2 .chat-editor .component', { observeViewModel: true }, Api_1.kw('viewModel', this.current));
                    this.addInlineEventListeners();
                }
                submit(evt) {
                    evt.preventDefault();
                    this.viewModel.addChat(this.current)
                        .then(newchat => {
                        Object.assign(this.current, newchat);
                    })
                        .catch(err => console.error(err));
                }
            }
            const example2html = example1html.replace('example1', 'example2').replace('Example 1', 'Example 2');
            this.testArea.appendChild(Api_1.createHtml(example2html));
            const example2View = new ChatView2(chatlist);
            testComponent(example2View);
            asyncAsserts.then(() => assertComponent(example2View, chatlist));
            // Some people don't like the DIV soup that makes up most HTML. It makes more sense to have custom elements that say
            // what they are. It is these people who are giving us web components (which are a neat idea if they can get them working)
            // (though in most cases it would increase my workload many times).  It is to support this style of developing that I wrote
            // the inject() method for. You can write HTML that looks like it's truly componentized.
            // It takes a LOT of classes, however, and is overkill for an example this simple.
            class ChatList3 extends Api_1.BoundComponent {
                // I'd like to call this inject, but TS's restrictions on override naming forces me to avoid the friendliest names.
                static add(viewModel, parentId) {
                    // Generics are the wordiest things in typescript
                    return this.inject(`${parentId} chat-list`, { replace: true }, Api_1.kw('viewModel', viewModel))[0];
                }
                constructor(viewModel) {
                    super(viewModel, {
                        outerHtml: `
                        <div :loop="chats" class="component chat-list">
                            <div :item>
                                <div>#<i-v>id</i-v> From:<i-v>fromName</i-v> at <i-v>created</i-v>. <i-v>subject</i-v></div>
                                <div><i-v>stripped</i-v></div>
                            </div>
                        </div>`,
                        observeTargets: [viewModel.chats]
                    });
                }
            }
            class ChatSubjectDisplay3 extends Api_1.BoundComponent {
                static add(viewModel, parentId) {
                    return this.inject(`${parentId} chat-subject-display`, { replace: true }, Api_1.kw('viewModel', viewModel))[0];
                }
                constructor(viewModel) {
                    super(viewModel, {
                        outerHtml: `<div class="component chat-subject-display" :text="subject" :if="subject"></div>`,
                        observeViewModel: true
                    });
                }
            }
            class ChatSubject3 extends Api_1.BoundComponent {
                static add(viewModel, parentId) {
                    // We can use component (not bound component) injection to fill out static text, like labels.
                    const injected = Api_1.Component.inject(`${parentId} chat-subject`, `
                        <div>
                            <span>Subject:</span>
                            <input class="component chat-subject" :input:="subject" :switch-:red="subject" />
                        </div>
                        `)[0];
                    return new ChatSubject3(viewModel, { parent: injected.content, selector: 'input', observeViewModel: true });
                }
            }
            class ChatFrom3 extends Api_1.BoundComponent {
                static add(viewModel, parentId) {
                    const injected = Api_1.Component.inject(`${parentId} chat-from`, `
                        <div>
                            <span>From:</span>
                            <input class="component chat-from" :input:="fromName" :switch-:red="fromName" />
                        </div>
                        `)[0];
                    return new ChatFrom3(viewModel, { parent: injected.content, selector: 'input', observeViewModel: true });
                }
            }
            class ChatMessage3 extends Api_1.BoundComponent {
                static add(viewModel, parentId) {
                    const injected = Api_1.Component.inject(`${parentId} chat-message`, `
                        <div>
                            <textarea class="component chat-message" :input:="message" :switch-:red="message"></textarea>
                        </div>
                        `)[0];
                    return new ChatMessage3(viewModel, { parent: injected.content, selector: 'textarea', observeViewModel: true });
                }
            }
            class ChatClosing3 extends Api_1.BoundComponent {
                static add(viewModel, parentId) {
                    return this.inject(`${parentId} chat-closing`, { replace: true }, Api_1.kw('viewModel', viewModel))[0];
                }
                constructor(viewModel) {
                    super(viewModel, {
                        outerHtml: `
                            <div class="component chat-closing">
                                <i-v>closing</i-v> <br />
                                <i-v>fromName</i-v>
                            </div>`,
                        observeViewModel: true
                    });
                }
            }
            class ChatSubmit3 extends Api_1.BoundComponent {
                static add(viewModel, parentId) {
                    return this.inject(`${parentId} chat-submit`, { replace: true }, Api_1.kw('viewModel', viewModel))[0];
                }
                constructor(viewModel) {
                    super(viewModel, {
                        outerHtml: `<button class="component chat-submit" type="submit" :bool:disabled="invalid">Submit</button>`,
                        observeViewModel: true
                    });
                }
            }
            class ChatView3 extends Api_1.Component {
                constructor(viewModel) {
                    const parentId = '#chat-example3';
                    super({ selector: parentId });
                    this.viewModel = viewModel;
                    this.current = this.viewModel.beginChat();
                    this.list = ChatList3.add(this.viewModel, parentId);
                    this.editor = {
                        subjectDisplay: ChatSubjectDisplay3.add(this.current, parentId),
                        subject: ChatSubject3.add(this.current, parentId),
                        from: ChatFrom3.add(this.current, parentId),
                        message: ChatMessage3.add(this.current, parentId),
                        closing: ChatClosing3.add(this.current, parentId),
                        button: ChatSubmit3.add(this.current, parentId)
                    };
                    this.addInlineEventListeners();
                }
                submit(evt) {
                    evt.preventDefault();
                    this.viewModel.addChat(this.current)
                        .then(newchat => {
                        Object.assign(this.current, newchat);
                    })
                        .catch(err => console.error(err));
                }
            }
            // This is where the "web server" returns a static page
            const example3html = `
            <div id="chat-example3" class="chat-example">
                <h4>Example 3</h4> <!-- Misusing heading tags by jumping to H4-->
                <chat-list></chat-list>
                <br />
                <div class="chat-editor">
                    <form :event (submit)="submit">
                        <chat-subject-display></chat-subject-display>
                        <chat-from></chat-from>
                        <chat-subject></chat-subject>
                        <chat-message></chat-message>
                        <chat-closing></chat-closing>
                        <chat-submit></chat-submit>
                    </form>
                </div>
            </div>
            `;
            this.testArea.appendChild(Api_1.createHtml(example3html));
            const example3View = new ChatView3(chatlist);
            testComponent(example3View);
            asyncAsserts.then(() => assertComponent(example3View, chatlist));
            // It's not necessary to use custom tags. You can get similar HTML while keeping things vanilla and doing most of the work
            // on the JS side. This example will avoid using injection.  That makes things more verbose.
            class ChatList4 extends Api_1.BoundComponent {
                constructor(viewModel, parent) {
                    super(viewModel, {
                        element: parent.querySelector('.chat-list'),
                        properties: {
                            innerHTML: `
                            <div :item>
                                <div>#<i-v>id</i-v> From:<i-v>fromName</i-v> at <i-v>created</i-v>. <i-v>subject</i-v></div>
                                <div><i-v>stripped</i-v></div>
                            </div>`
                        },
                        attributes: {
                            i5_loop: "chats"
                        },
                        observeTargets: [viewModel.chats]
                    });
                }
            }
            class ChatSubjectDisplay4 extends Api_1.BoundComponent {
                constructor(viewModel, parent) {
                    super(viewModel, {
                        element: parent.querySelector('.chat-subject-display'),
                        attributes: {
                            i5_text: "subject",
                            i5_if: "subject"
                        },
                        observeViewModel: true
                    });
                }
            }
            class ChatSubject4 extends Api_1.BoundComponent {
                constructor(viewModel, parent) {
                    // Because this has wrapper HTML, we need to add it first.
                    // As long as we don't reference this, we can do it before the super() call.
                    const wrapper = Api_1.div(`
                            <span>Subject:</span>
                            <input class="component chat-subject" :input:="subject" :switch-:red="subject" />
                    `);
                    parent.querySelector('.chat-subject').appendChild(wrapper);
                    super(viewModel, {
                        element: wrapper.querySelector('input'),
                        observeViewModel: true
                    });
                }
            }
            class ChatFrom4 extends Api_1.BoundComponent {
                constructor(viewModel, parent) {
                    // Again, wrapper HTML
                    const wrapper = Api_1.div(`
                        <span>From:</span>
                        <input class="component chat-from" :input:="fromName" :switch-:red="fromName" />
                    `);
                    parent.querySelector('.chat-from').appendChild(wrapper);
                    super(viewModel, {
                        element: wrapper.querySelector('input'),
                        observeViewModel: true
                    });
                }
            }
            class ChatMessage4 extends Api_1.BoundComponent {
                constructor(viewModel, parent) {
                    // Again, wrapper HTML
                    const wrapper = Api_1.div(`
                        <textarea class="component chat-message" :input:="message" :switch-:red="message"></textarea>
                    `);
                    parent.querySelector('.chat-message').appendChild(wrapper);
                    super(viewModel, {
                        element: wrapper.querySelector('textarea'),
                        observeViewModel: true
                    });
                }
            }
            class ChatClosing4 extends Api_1.BoundComponent {
                constructor(viewModel, parent) {
                    super(viewModel, {
                        element: parent.querySelector('.chat-closing'),
                        properties: {
                            innerHTML: `
                                <i-v>closing</i-v> <br />
                                <i-v>fromName</i-v>`
                        },
                        observeViewModel: true
                    });
                }
            }
            class ChatSubmit4 extends Api_1.BoundComponent {
                constructor(viewModel, parent) {
                    super(viewModel, {
                        element: parent.querySelector('.chat-submit'),
                        attributes: {
                            type: 'submit',
                            i5_bool_disabled: 'invalid'
                        },
                        observeViewModel: true
                    });
                }
            }
            class ChatView4 extends Api_1.Component {
                constructor(viewModel) {
                    super({ selector: '#chat-example4' });
                    this.viewModel = viewModel;
                    this.current = this.viewModel.beginChat();
                    this.list = new ChatList4(this.viewModel, this.content);
                    this.editor = {
                        subjectDisplay: new ChatSubjectDisplay4(this.current, this.content),
                        subject: new ChatSubject4(this.current, this.content),
                        from: new ChatFrom4(this.current, this.content),
                        message: new ChatMessage4(this.current, this.content),
                        closing: new ChatClosing4(this.current, this.content),
                        button: new ChatSubmit4(this.current, this.content),
                    };
                    this.addInlineEventListeners();
                }
                submit(evt) {
                    evt.preventDefault();
                    this.viewModel.addChat(this.current)
                        .then(newchat => {
                        Object.assign(this.current, newchat);
                    })
                        .catch(err => console.error(err));
                }
            }
            // This is where the "web server" returns a static page
            const example4html = `
            <div id="chat-example4" class="chat-example">
                <h4>Example 4</h4> <!-- Misusing heading tags by jumping to H4-->
                <div class="component chat-list"></div>
                <br />
                <div class="chat-editor">
                    <form :event (submit)="submit">
                        <div class="component chat-subject-display"></div>
                        <div class="chat-from"></div>
                        <div class="chat-subject"></div>
                        <div class="chat-message"></div>
                        <div class="component chat-closing"></div>
                        <button class="component chat-submit">Submit</button>
                    </form>
                </div>
            </div>
            `;
            this.testArea.appendChild(Api_1.createHtml(example4html));
            const example4View = new ChatView4(chatlist);
            testComponent(example4View);
            asyncAsserts.then(() => assertComponent(example4View, chatlist));
            // Some developers may want to add everything in javascript using dom manipulation methods.
            // This coding style produces maximum verbosity, and probably will not be used for a large view,
            // but it might be used for small components here and there.
            class ChatList5 extends Api_1.BoundComponent {
                constructor(viewModel) {
                    super(viewModel, {
                        type: Api_1.elementType.HTMLDivElement,
                        properties: {
                            innerHTML: `
                            <div :item>
                                <div>#<i-v>id</i-v> From:<i-v>fromName</i-v> at <i-v>created</i-v>. <i-v>subject</i-v></div>
                                <div><i-v>stripped</i-v></div>
                            </div>`
                        },
                        attributes: {
                            class: 'component chat-list',
                            i5_loop: "chats"
                        },
                        observeTargets: [viewModel.chats]
                    });
                }
            }
            class ChatSubjectDisplay5 extends Api_1.BoundComponent {
                constructor(viewModel) {
                    super(viewModel, {
                        // Note: type is optional (DIV is default)
                        attributes: {
                            class: 'component chat-subject-display',
                            i5_text: "subject",
                            i5_if: "subject"
                        },
                        observeViewModel: true
                    });
                }
            }
            class ChatSubject5 extends Api_1.Component {
                constructor(viewModel) {
                    super({ properties: { innerHTML: `<span>Subject:</span>` } });
                    // There are two possible ways to handle the wrapper DIV.
                    // One way is to pass the parent into the constructor, and the same as in example 4,
                    // create a wrapper div and insert into it. But just to be different, example 5 will
                    // make the entire div, including the label, into the component.
                    this.bound = new Api_1.BoundComponent(viewModel, new Api_1.InnerHtmlBindingOptions({
                        type: Api_1.elementType.HTMLInputElement,
                        attributes: {
                            class: 'component chat-subject',
                            i5_input_value: "subject",
                            i5_switch0_red: "subject"
                        },
                        observeViewModel: true
                    })).appendToParent(this);
                }
            }
            class ChatFrom5 extends Api_1.Component {
                constructor(viewModel) {
                    super({ properties: { innerHTML: `<span>From:</span>` } });
                    this.bound = new Api_1.BoundComponent(viewModel, new Api_1.InnerHtmlBindingOptions({
                        type: Api_1.elementType.HTMLInputElement,
                        attributes: {
                            class: 'component chat-from',
                            i5_input_value: "fromName",
                            i5_switch0_red: "fromName"
                        },
                        observeViewModel: true
                    })).appendToParent(this);
                }
            }
            class ChatMessage5 extends Api_1.Component {
                constructor(viewModel) {
                    super();
                    this.bound = new Api_1.BoundComponent(viewModel, new Api_1.InnerHtmlBindingOptions({
                        type: Api_1.elementType.HTMLTextAreaElement,
                        attributes: {
                            class: 'component chat-message',
                            i5_input_value: "message",
                            i5_switch0_red: "message"
                        },
                        observeViewModel: true
                    })).appendToParent(this);
                }
            }
            class ChatClosing5 extends Api_1.BoundComponent {
                constructor(viewModel) {
                    super(viewModel, {
                        properties: {
                            // Many properties in HTML can be created either as attributes or properties.
                            // But remember that names may change, as class becomes className.
                            className: 'component chat-closing',
                            innerHTML: `
                                <i-v>closing</i-v> <br />
                                <i-v>fromName</i-v>`
                        },
                        observeViewModel: true
                    });
                }
            }
            class ChatSubmit5 extends Api_1.BoundComponent {
                constructor(viewModel) {
                    super(viewModel, {
                        type: Api_1.elementType.HTMLButtonElement,
                        properties: {
                            innerHTML: 'Submit'
                        },
                        attributes: {
                            type: 'submit',
                            class: 'component chat-submit',
                            i5_bool_disabled: 'invalid'
                        },
                        observeViewModel: true
                    });
                }
            }
            class ChatView5 extends Api_1.Component {
                constructor(viewModel) {
                    super({
                        id: 'chat-example5',
                        properties: {
                            className: 'chat-example'
                        }
                    });
                    this.viewModel = viewModel;
                    this.current = this.viewModel.beginChat();
                    this.list = new ChatList5(this.viewModel);
                    this.editor = {
                        subjectDisplay: new ChatSubjectDisplay5(this.current),
                        subject: new ChatSubject5(this.current),
                        from: new ChatFrom5(this.current),
                        message: new ChatMessage5(this.current),
                        closing: new ChatClosing5(this.current),
                        button: new ChatSubmit5(this.current),
                    };
                    this.append(Api_1.createElement(Api_1.elementType.HTMLHeading4Element, { innerHTML: 'Example 5' }))
                        .append(this.list)
                        .append(Api_1.createElement(Api_1.elementType.HTMLBRElement));
                    const editor = Api_1.div('', {
                        className: 'chat-editor'
                    });
                    const form = Api_1.createElement(Api_1.elementType.HTMLFormElement);
                    form.appendChild(this.editor.subjectDisplay.content);
                    form.appendChild(this.editor.from.content);
                    form.appendChild(this.editor.subject.content);
                    form.appendChild(this.editor.message.content);
                    form.appendChild(this.editor.closing.content);
                    form.appendChild(this.editor.button.content);
                    form.addEventListener('submit', this.submit.bind(this));
                    this.appendChild(editor).appendChild(form);
                }
                submit(evt) {
                    evt.preventDefault();
                    this.viewModel.addChat(this.current)
                        .then(newchat => {
                        Object.assign(this.current, newchat);
                    })
                        .catch(err => console.error(err));
                }
            }
            // Doing everything in javascript, however, means few assumptions about what HTML the web server returns.
            // We find a container, create the view, and drop the view into it.
            const example5View = new ChatView5(chatlist);
            this.testArea.appendChild(example5View.content);
            testComponent(example5View);
            asyncAsserts.then(() => assertComponent(example5View, chatlist));
            // I said example 5 was maximum verbosity, but THIS is maximum verbosity. Say you really liked the fluent interface
            // and wanted to use fluent methods for everything and not do anything in the constructor.
            // To make things even nastier, I'll do it all in a single view, without even encapsulating them in individual
            // component classes ... this is such a pain that no developer would ever make a whole page like this, but
            // doing it for a quick element would be no problem. In fact, VSCode's suggestions are MUCH better for methods as
            // for constructor arguments.
            class ChatView6 extends Api_1.Component {
                constructor(viewModel) {
                    super({
                        id: 'chat-example6',
                        properties: {
                            className: 'chat-example'
                        }
                    });
                    this.viewModel = viewModel;
                    this.current = this.viewModel.beginChat();
                    this.appendChild(Api_1.createElement(Api_1.elementType.HTMLHeading4Element, { innerHTML: 'Example 6' }));
                    this.list = new Api_1.BoundComponent(this.viewModel)
                        .setClass('component chat-list')
                        .setLoop('chats', `<div :item>
                            <div>#<i-v>id</i-v> From:<i-v>fromName</i-v> at <i-v>created</i-v>. <i-v>subject</i-v></div>
                            <div><i-v>stripped</i-v></div>
                        </div>`)
                        .observe(this.viewModel.chats)
                        .render()
                        .appendToParent(this);
                    this.appendChild(Api_1.createElement(Api_1.elementType.HTMLBRElement));
                    const subjectDisplay = new Api_1.BoundComponent(this.current)
                        .setClass('component chat-subject-display')
                        .setTextTemplate('subject')
                        .setVisibility('subject')
                        .observe()
                        .render();
                    const subject = new Api_1.BoundComponent(this.current, { type: Api_1.elementType.HTMLInputElement })
                        .setClass('component chat-subject')
                        .setValueAttribute('subject')
                        .addWriteTarget('subject')
                        .addWriteEvent()
                        .addCssClassSwitch('red', 'subject', true)
                        .observe()
                        .render();
                    const from = new Api_1.BoundComponent(this.current, { type: Api_1.elementType.HTMLInputElement })
                        .setClass('component chat-from')
                        .setValueAttribute('fromName')
                        .addWriteTarget('fromName')
                        .addWriteEvent()
                        .addCssClassSwitch('red', 'fromName', true)
                        .observe()
                        .render();
                    const message = new Api_1.BoundComponent(this.current, { type: Api_1.elementType.HTMLTextAreaElement })
                        .setClass('component chat-message')
                        .setValueAttribute('message')
                        .addWriteTarget('message')
                        .addWriteEvent()
                        .addCssClassSwitch('red', 'message', true)
                        .observe()
                        .render();
                    const closing = new Api_1.BoundComponent(this.current)
                        .setClass('component chat-closing')
                        .setTemplate(`<i-v>closing</i-v> <br /> <i-v>fromName</i-v>`)
                        .observe()
                        .render();
                    const button = new Api_1.BoundComponent(this.current, new Api_1.InnerHtmlBindingOptions({
                        type: Api_1.elementType.HTMLButtonElement,
                        properties: { innerHTML: 'Submit', type: 'submit' }
                    }))
                        .setClass('component chat-submit')
                        .addBooleanAttributeMapping('disabled', 'invalid')
                        .observe()
                        .render();
                    this.editor = {
                        subjectDisplay, subject, from, message, closing, button
                    };
                    const editor = Api_1.div('', {
                        className: 'chat-editor'
                    });
                    const form = Api_1.createElement(Api_1.elementType.HTMLFormElement);
                    form.appendChild(this.editor.subjectDisplay.content);
                    form.appendChild(Api_1.div('<span>From:</span>')).appendChild(this.editor.from.content);
                    form.appendChild(Api_1.div('<span>Subject:</span>')).appendChild(this.editor.subject.content);
                    form.appendChild(Api_1.div()).appendChild(this.editor.message.content);
                    form.appendChild(this.editor.closing.content);
                    form.appendChild(this.editor.button.content);
                    form.addEventListener('submit', this.submit.bind(this));
                    this.appendChild(editor).appendChild(form);
                }
                submit(evt) {
                    evt.preventDefault();
                    this.viewModel.addChat(this.current)
                        .then(newchat => {
                        Object.assign(this.current, newchat);
                    })
                        .catch(err => console.error(err));
                }
            }
            const example6View = new ChatView6(chatlist);
            this.testArea.appendChild(example6View.content);
            testComponent(example6View);
            asyncAsserts.then(() => assertComponent(example6View, chatlist));
            this.log('Starting async tests');
            asyncAsserts.then(() => this.log(`TEST ${this.viewModel.testNumber}: Async tests succeeded`));
            asyncAsserts.catch(err => {
                this.log('ASYNC TESTS FAILED: ' + err.message);
                throw (err);
            });
            asyncAsserts.resolve();
        }
        catch (err) {
            this.log("ERROR: " + err);
            throw err;
        }
    }
}
exports.Test011 = Test011;

},{"../src/Api":1,"./TestCaseView":79,"./TestCaseViewModel":80}],75:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../src/ExtensionLoader");
const Api_1 = require("../src/Api");
const TestCaseView_1 = require("./TestCaseView");
const TestCaseViewModel_1 = require("./TestCaseViewModel");
// tslint:disable:max-classes-per-file
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'Extension Methods',
            descriptionHtml: `<p>In 2017, the original goal was to have one-line binding of HTML elements to dynamic properties, as if
            it were a built-in part of the HTML5 standard. This eventually involved the creation of prototype extension methods. The
            implementation has changed -- now everything uses component binding -- but the original API of extension methods remains. 
            Further extensions were created to do other useful tasks, such as replacing an element.</p>

            <p>To add extension methods to the HTML element prototypes, import ExtensionLoader.ts directly.</p>

            <h2>Usage</h2>

            <p>These are just links to other methods that have already been referenced elsewhere, so I'm just going to list the methods.</p>

            <pre><code>
            interface HTMLElement {
                appendToParent(parent: HTMLElement): this;
                appendChildFluent<T extends Node>(child: T): this;
                appendSibling<T extends Node>(next: T): T;
                appendSiblingFluent<T extends Node>(next: T): this;
                replaceWith<T extends Node>(newElement: T): T;
                swap<T extends Node>(element: T): T;
                extract(): this;
                addEventListenerFluent(eventType: string, event: (evt: Event) => any, options?: AddEventListenerOptions): this;
                addStyle(property: string, value: string): this;
                addClass(classNames: string | string[]): this;
            }
            interface DocumentFragment {
                createElement<TElement extends HTMLElement>(tagName: string, properties?: Record<string, any>, attributes?: Record<string, any>): TElement;
                createElementFluent(tagName: string, properties?: Record<string, any>, attributes?: Record<string, any>): this;
                appendToParent<TElement extends HTMLElement>(parent: TElement): TElement;
            }
            interface HTMLElement {
                getComponent(this: HTMLElement): IContent | undefined;
                bindComponent<TElement extends HTMLElement = HTMLElement, TModel = any>(this: TElement, viewModel: TModel): BoundComponent<TElement, TModel>;
                deleteComponent(): void;
            }
            interface Object {
                toObservable<T>(name?: string): ObservableProperty<T>;
            }
            interface String {
                toObservable(name?: string): ObservableProperty<string>;
            }
            interface Number {
                toObservable(name?: string): ObservableProperty<number>;
            }
            interface Boolean {
                toObservable(name?: string): ObservableProperty<boolean>;
            }
            </code></pre>

            <h2>Warning</h2>
            <p>Tests are async and will keep running. Wait for tests to complete before leaving page.</p>
            `
        });
    }
}
class Test012 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            let clickTest = false;
            const newDiv = Api_1.div("PARENT", { id: "newDiv" });
            const sister = newDiv.appendToParent(this.testArea)
                .appendChildFluent(Api_1.div("CHILD", { id: "child" }))
                .addClass("some-class")
                .addStyle("text-decoration", "underline")
                .appendSiblingFluent(Api_1.div("BROTHER", { id: "brother" }))
                .appendSibling(Api_1.div("SISTER", { id: "sister" }))
                .addEventListenerFluent("click", () => { clickTest = true; });
            Api_1.assert(newDiv.parentElement === this.testArea, "AppendToParent adopts parent element");
            Api_1.assert(document.getElementById("child").parentElement === newDiv, "AppendChildFluent works as appendChild");
            Api_1.assert(newDiv.className === 'some-class', "AddClass adds a class, and appendChildFluent returned reference to fluent object");
            Api_1.assert(newDiv.style.textDecoration === 'underline', "AddStyle adds a style, and addClass returned reference to fluent object");
            Api_1.assert(document.getElementById("brother").parentElement === this.testArea, "AppendSiblingFluent adds a sibling element");
            Api_1.assert(document.getElementById("sister").parentElement === this.testArea, "AppendSibling adds a sibling element and appendSiblingFluent returned reference to fluent object");
            Api_1.assert(document.getElementById("sister") === sister, "AppendSibling returns reference to argument and addEventListenerFluent returned reference to fluent object");
            sister.click();
            Api_1.assert(clickTest, "AddEventListenerFluent adds click handler");
            const exchangeStudent = this.testArea.appendChild(Api_1.div("FAMILY IN ANOTHER COUNTRY", { id: "foreign" }))
                .appendChild(Api_1.div("EXCHANGE STUDENT", { id: "exchange" }));
            exchangeStudent.swap(sister);
            Api_1.assert(document.getElementById("foreign") === sister.parentElement && exchangeStudent.parentElement === this.testArea, "Swap exchanged element locations");
            const puppy = document.getElementById("child").replaceWith(Api_1.div("PUPPY"));
            Api_1.assert(puppy.parentElement === newDiv && document.getElementById("child") === null, "ReplaceWith added replaced the element");
            sister.extract();
            Api_1.assert(document.getElementById("sister") === null, "Extract removed the element");
            const frag = document.createDocumentFragment();
            frag.createElementFluent(Api_1.elementType.HTMLDivElement, { innerHTML: "Frag Brother", id: "frag-brother" })
                .createElement(Api_1.elementType.HTMLDivElement, { innerHTML: "Frag Sister", id: "frag-sister" })
                .appendChild(Api_1.div("Frag Nephew", { id: "frag-nephew" }));
            frag.appendToParent(this.testArea);
            Api_1.assert(document.getElementById("frag-brother").parentElement === this.testArea, "CreateElementFluent created an element and appendToParent added the fragment content");
            Api_1.assert(document.getElementById("frag-sister").parentElement === this.testArea, "CreateElement created an element and CreateReferencFluent returned reference to fluent object");
            Api_1.assert(document.getElementById("frag-nephew").parentElement === document.getElementById("frag-sister"), "CreateElement returned reference to argument");
            const testViewModel = {
                name: "My Name".toObservable(),
                age: (24).toObservable(),
                observed: true.toObservable(),
                friend: exchangeStudent.toObservable(),
                friendsName: function () { return this.friend.value.innerHTML; }
            };
            Api_1.assert(testViewModel.name instanceof Api_1.ObservableProperty, "toObservable made simple string an observable");
            Api_1.assert(testViewModel.age instanceof Api_1.ObservableProperty, "toObservable made simple number an observable");
            Api_1.assert(testViewModel.observed instanceof Api_1.ObservableProperty, "toObservable made simple bool an observable");
            Api_1.assert(testViewModel.friend instanceof Api_1.ObservableProperty, "toObservable made object an observable");
            // Now we put it all together. I don't recommend building a full form like this. Someone will need to maintain it.
            // That person might be you. But for adding a single bound element, it could work.
            const form = this.testArea.appendChild(Api_1.createElement(Api_1.elementType.HTMLFormElement));
            const name = Api_1.createElement(Api_1.elementType.HTMLInputElement, { id: "name" })
                .bindComponent(testViewModel)
                .setValueAttribute("name")
                .addWriteTarget("name")
                .addWriteEvent()
                .observe(testViewModel.name)
                .render()
                .appendToParent(form);
            const age = Api_1.createElement(Api_1.elementType.HTMLInputElement, { type: "number", id: "age" })
                .bindComponent(testViewModel.age)
                .setValueAttribute() // defaults to .
                .addWriteTarget() // defaults to .
                .addWriteEvent()
                .observe()
                .render()
                .appendToParent(form);
            const observed = Api_1.createElement(Api_1.elementType.HTMLInputElement, { id: "observed" }, { readonly: true })
                .bindComponent(testViewModel)
                .setValueAttribute("observed", true)
                .appendToParent(form);
            const friend = Api_1.createElement(Api_1.elementType.HTMLInputElement, { id: "friend" }, { readonly: true })
                .bindComponent(testViewModel)
                .setValueAttribute("friendsName", true)
                .appendToParent(form);
            Api_1.assert(name.value === "My Name", "Element binding is in place");
            Api_1.assert(age.value === 24, "Element binding is in place with default attribute");
            Api_1.assert(document.getElementById('friend').getComponent() === friend, "GetComponent gets the component bound");
            this.log(`TEST ${this.viewModel.testNumber}: Begin Async Test`);
            name.value = "Not My Name";
            name.content.dispatchEvent(new Event('input', { bubbles: true }));
            testViewModel.age.value = 25;
            setTimeout(() => {
                Api_1.assert(age.value === 25, "Two-way binding is reading");
                Api_1.assert(testViewModel.name.value === "Not My Name", "Two-way binding is writing");
                this.log(`TEST ${this.viewModel.testNumber}: Async Test successful`);
            }, 1000);
            this.log(`TEST ${this.viewModel.testNumber}: Sync Test successful`);
        }
        catch (err) {
            this.log("ERROR: " + err);
            throw err;
        }
    }
}
exports.Test012 = Test012;

},{"../src/Api":1,"../src/ExtensionLoader":8,"./TestCaseView":79,"./TestCaseViewModel":80}],76:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../src/Api");
const TestCaseView_1 = require("./TestCaseView");
const TestCaseViewModel_1 = require("./TestCaseViewModel");
// tslint:disable:max-classes-per-file
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'Dedicated Web Worker (Experimental)',
            descriptionHtml: `<p>This is an experimental web worker that can be created on the fly and dedicated
            to heavy tasks that, assuming the user's PC is powerful enough, be run on background threads without
            impacting front-end performance.</p>

            <p>You can type away in the next input to see that the front end is not being blocked.</p>
            <input style="width: 100%;"/>

            <h2>Usage</h2>
            <p>Pass the task and its arguments to taskStart().then(response => wait for the response);</p>
            `
        });
    }
}
class Test013 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            function bigCalculation(iter, mult) {
                const primes = calculatePrimes(iter, mult);
                return primes;
                function calculatePrimes(iterations, multiplier) {
                    // tslint:disable-next-line:no-shadowed-variable
                    const primes = [];
                    for (let i = 0; i < iterations; i++) {
                        const candidate = i * (multiplier * Math.random());
                        let isPrime = true;
                        for (let c = 2; c <= Math.sqrt(candidate); ++c) {
                            if (candidate % c === 0) {
                                isPrime = false;
                                break;
                            }
                        }
                        if (isPrime) {
                            primes.push(candidate);
                        }
                    }
                    return primes;
                }
            }
            this.log(`Test ${this.viewModel.testNumber}: Test start`);
            let calc = [];
            const dyn = new Api_1.DynamicWebWorker();
            dyn.taskStart(bigCalculation, 1000, 1000000000).then(resp => {
                calc = resp;
                // tslint:disable-next-line:no-console
                console.log(resp);
                this.log(resp.length + ' primes calculated');
            }).then(() => {
                Api_1.assert(calc.length === 1000, 'All the primes were calculated');
                this.log(`Test ${this.viewModel.testNumber}: Test successful`);
            });
        }
        catch (err) {
            this.log("ERROR: " + err);
            throw err;
        }
    }
}
exports.Test013 = Test013;

},{"../src/Api":1,"./TestCaseView":79,"./TestCaseViewModel":80}],77:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestCaseView_1 = require("./TestCaseView");
const TestCaseViewModel_1 = require("./TestCaseViewModel");
const Api_1 = require("../src/Api");
const CssStyleSheet_1 = require("../src/Css/CssStyleSheet");
// tslint:disable:max-classes-per-file
class TestViewModel extends TestCaseViewModel_1.TestCaseViewModel {
    constructor() {
        super({
            name: 'JS CSS Classes (Experimental)',
            descriptionHtml: `<p>Here's another experimental model that will be of limited utility, but it's kind
            of neat. It's making CSS classes (any rules, in fact, even those that aren't using class selectors) act
            more like JS classes, with inheritance and traits. Basically similar to SASS/SCSS except at runtime (my
            first version used SCSS syntax even).</p>

            <p>This isn't very useful, the same as SASS isn't very useful. Oh, I know that a number of projects
            use it, but that doesn't mean it's really worth it. The problem with CSS isn't the lack of inheritance ...
            for simple key/value collections, clipboard inheritance is annoying but functional. It isn't the lack of
            variables ... CSS variables now exist. It isn't the way scoping was deleted from the standard ... that
            can be hacked together using selectors ... but it does hurt.</p>

            <p>The problem with CSS is CSS. It's a flaming trainwreck during the Hard Rain. No amount of sugar will make
            the CSS layout model sweeter than a human waste recycling plant. The most powerful tool -- really the only
            tool -- that helps with dealing with CSS is attitude. Specifically, this attitude: "it looks close enough."</p>

            <p>But it was a fun experiment. Except when I had to fight bugs in TypeScript (that still exist in new versions so
            my NPM build issues aren't the issue stressing me).</p>

            <h2>Usage</h2>
            <p>Create classes inheriting from CssClass, with properties that match the class (or other rule) CSS properties. In most
            cases these will need to be quoted. Their values can be strings, instances of the CssVariable class, or nested properties,
            which are simple text maps (for example, font = { weight: "bold" } is the same as setting "font-weight" = "bold"). 
            Call render$() to add the CSS to the page.</p>

            <p>Special properties all end in the $ character.</p>
            <code><pre>
            interface {
                selector$: string;              // selector for the rule. Required.
                media$?: string;                // @media element
                styleSheetParent$: HTMLElement; // A <style> element is created. This is where. Default document.head.
                styleSheetId$: string;          // The ID of the style element created. Autogenerated.
                scopeElement$?: HTMLElement;    // Set this if you want the CSS to apply only to an element or its children
                extends$?: RulesCanExtend | RulesCanExtend[];   // Inherit CSS from these classes. Allows multiple inheritance.
                nested$?: RulesCanNest | RulesCanNest[];        // See the & operator in SASS/LESS.
                revert$: boolean;                               // Set to true as a shortcut for "all" = "initial"
                render$(): void;                                // Add or update the <style> element, adding CSS styling
                remove$(): void;                                // Remove the <style> element, removing CSS styling
            }
            </pre></code>

            <p>When writing the class and using initializers, remember to use equals (=), not colon (:). This is important.
            Remember that this is Typescript. "class CLS { foo: 'bar' } is totally different from "var CLS = { foo: 'bar' }." In the
            first case, new objects look like this {}, and your resulting CSS class is empty.</p>

            <p>The CssStyleSheet is a collection of CssRule objects. CssVariable is a CSS custom property. CssInlineRule is a quick and
            dirty way to create a CssRule inline in code without creating a class.</p>`
        });
    }
}
class Test014 extends TestCaseView_1.TestCaseView {
    constructor() {
        super(new TestViewModel());
    }
    testCase() {
        try {
            // Demo storing styles somewhere other than the HEAD
            const randomStyleDiv = Api_1.div({ id: 'somewhere-for-the-style' });
            this.testArea.appendChild(randomStyleDiv);
            const scopedDiv = Api_1.div({ id: 'scoped', className: 'divparent' });
            scopedDiv.appendChild(Api_1.paragraph('Hello World', { id: 'para' })).appendChild(Api_1.paragraph()); // dummy p tag at end
            scopedDiv.appendChild(Api_1.anchor('Test1', 'https://www.google.com', { id: 'a1' })).appendChild(Api_1.paragraph()); // dummy p at end
            scopedDiv.appendChild(Api_1.anchor('Test2', 'https://www.google.com', { id: 'a2', className: 'nested' })).appendChild(Api_1.paragraph());
            this.testArea.appendChild(scopedDiv);
            const colorVar = new Api_1.CssVariable("primary", "blue");
            class BorderBaseRule extends Api_1.CssSimpleRule {
                constructor() {
                    super(...arguments);
                    this["border-style"] = "solid";
                }
            }
            class BorderColorRule extends BorderBaseRule {
                constructor() {
                    super(...arguments);
                    this["border-color"] = "black";
                    this["border-bottom-width"] = "10px";
                }
            }
            class DivRule extends Api_1.CssRule {
                constructor() {
                    super(randomStyleDiv);
                    this.selector$ = "div";
                    this["color"] = colorVar;
                    this["font-size"] = "20px";
                    this["font"] = {
                        weight: "bold" // Demo nested properties: Only one level of nesting is allowed
                    };
                    this.extends$ = BorderColorRule; // Demo "multiple inheritance"
                    this.nested$ = NestedRule; // Demo nested rules/selectors
                    this.scopeElement$ = scopedDiv; // Demo fake scoping (shouldn't affect all the other divs on the page)
                }
            }
            class NestedRule extends Api_1.CssRule {
                constructor() {
                    super(...arguments);
                    this.selector$ = "& .nested"; // Note the SASS/LESS ampersand that forces a space. You could have also used " .nested" but that would look weird.
                    this["text-decoration"] = "none";
                }
            }
            const cssRule = new DivRule().render$();
            const divStyles = window.getComputedStyle(scopedDiv);
            const testAreaStyles = window.getComputedStyle(this.testArea);
            const textStyles = window.getComputedStyle(document.getElementById('para'));
            const a1styles = window.getComputedStyle(document.getElementById('a1'));
            const a2styles = window.getComputedStyle(document.getElementById('a2'));
            this.log('Beginning tests. Warning: these tests are based on the default setup where I live.');
            this.log('They will fail in browsers with different CSS settings');
            Api_1.assert(textStyles.getPropertyValue('font-size') === '20px', 'Direct string property is applied');
            Api_1.assert(divStyles.getPropertyValue("border-color") === 'rgb(0, 0, 0)', 'Inherited property is applied (1 level deep)');
            Api_1.assert(divStyles.getPropertyValue("border-style") === 'solid', 'Inherited property is applied (2 levels deep)');
            Api_1.assert(a2styles.getPropertyValue('text-decoration').includes('none'), 'Nested rule is applied');
            Api_1.assert(textStyles.getPropertyValue('color') === 'rgb(0, 0, 255)', 'CSS variable (custom property) is applied');
            Api_1.assert(textStyles.getPropertyValue('font-weight') === '700', 'Nested property is applied');
            Api_1.assert(testAreaStyles.getPropertyValue("border-style") === 'none', 'Scoped style stays in scoped element');
            class AllRed extends Api_1.CssRule {
                constructor() {
                    super(...arguments);
                    this.selector$ = 'page-router';
                    this['color'] = 'red';
                }
            }
            class WavyGravy extends Api_1.CssRule {
                constructor() {
                    super(...arguments);
                    this.selector$ = 'h1';
                    this['text-decoration'] = 'wavy underline';
                }
            }
            // A style sheet is little more than a collection of style rules
            const sheet1 = new CssStyleSheet_1.CssStyleSheet([AllRed, WavyGravy], randomStyleDiv);
            sheet1.render();
            Api_1.assert(window.getComputedStyle(document.querySelector('h1')).getPropertyValue('color') === 'rgb(255, 0, 0)', 'Styles in stylesheet are applied and there is no scoping');
            Api_1.assert(window.getComputedStyle(document.querySelector('h1')).getPropertyValue('text-decoration').includes('wavy'), 'Multiple styles in stylesheet are applied');
            sheet1.remove();
            Api_1.assert(window.getComputedStyle(document.querySelector('h1')).getPropertyValue('color') === 'rgb(0, 0, 0)', 'Styles in stylesheet are removed');
            Api_1.assert(!window.getComputedStyle(document.querySelector('h1')).getPropertyValue('text-decoration').includes('wavy'), 'Multiple styles in stylesheet are removed');
            // Finally a more complex test. This resembles something you might actually use this for.
            class BtnBase extends Api_1.CssRule {
                constructor() {
                    super(...arguments);
                    this.selector$ = ".btn";
                    this["display"] = "inline-block";
                    this["font-weight"] = "500";
                    this["text-align"] = "center";
                    this["white-space"] = "nowrap";
                    this["vertical-align"] = "middle";
                    this["user-select"] = "none";
                    this["border"] = "1px solid transparent";
                    this["padding"] = ".46875rem 1rem";
                    this["font-size"] = "1rem";
                    this["line-height"] = "1.5";
                    this["border-radius"] = ".125rem";
                    this["transition"] = "color 0.15s ease-in-out,background-color .15s ease-in-out,border-color 0.15s ease-in-out,box-shadow .15s ease-in-out";
                    this.nested$ = [
                        new Api_1.CssInlineRule("&:hover, &:hover", { "text-decoration": "none" }),
                        new Api_1.CssInlineRule("&:focus, &.focus", { "outline": "none", "box-shadow": "none" }),
                        new Api_1.CssInlineRule("&:disabled, &.disabled", { "opacity": ".65", "box-shadow": "none" }),
                        new Api_1.CssInlineRule("&:not(:disabled):not(.disabled)", { cursor: "pointer" }),
                    ];
                }
            }
            class BtnPrimary extends Api_1.CssRule {
                constructor() {
                    super(...arguments);
                    this.selector$ = "";
                    this["color"] = "#fff";
                    this["background-color"] = "#df382c";
                    this["border-color"] = "#df382c";
                    this["box-shadow"] = "none";
                    this.nested$ = [
                        new Api_1.CssInlineRule("&:hover", { "color": "#fff", "background-color": "#f22112", "border-color": "#ea1c0d" }),
                        new Api_1.CssInlineRule("&.focus", { "box-shadow": "none, 0 0 0 .2rem rgba(244,67,54,.5)" }),
                        new Api_1.CssInlineRule("&.disabled, &:disabled", { "color": "#fff", "background-color": "#df382c", "border-color": "#df382c" }),
                        new Api_1.CssInlineRule("&:not(:disabled):not(.disabled).active, &:not(:disabled):not(.disabled):active", { "color": "#fff", "background-color": "#ea1c0d", "border-color": "#deb1b0c" }),
                        new Api_1.CssInlineRule("&:not(:disabled):not(.disabled).active:focus, &:not(:disabled):not(.disabled):active:focus", { "box-shadow": "none,0 0 0 .2rem rgba(244,67,54,.5)" }),
                    ];
                }
            }
            class BtnSecondary extends Api_1.CssRule {
                constructor() {
                    super(...arguments);
                    this.selector$ = "";
                    this["color"] = "#fff";
                    this["background-color"] = "#aea79f";
                    this["border-color"] = "#aea79f";
                    this["box-shadow"] = "none";
                    this.nested$ = [
                        new Api_1.CssInlineRule("&:hover", { "color": "#fff", "background-color": "#5a6268", "border-color": "#545b62" }),
                        new Api_1.CssInlineRule("&.focus", { "box-shadow": "none, 0 0 0 .2rem rgba(208,7%,46%,.5)" }),
                        new Api_1.CssInlineRule("&.disabled, &:disabled", { "color": "#fff", "background-color": "#aea79f", "border-color": "#aea79f" }),
                        new Api_1.CssInlineRule("&:not(:disabled):not(.disabled).active, &:not(:disabled):not(.disabled):active", { "color": "#fff", "background-color": "#545b62", "border-color": "#4e555b" }),
                        new Api_1.CssInlineRule("&:not(:disabled):not(.disabled).active:focus, &:not(:disabled):not(.disabled):active:focus", { "box-shadow": "none,0 0 0 .2rem rgba(208,7%,46%,.5)" }),
                    ];
                }
            }
            class BtnClass extends BtnBase {
                constructor(className, primary = true, parent) {
                    super(parent);
                    this.selector$ = '.' + className;
                    this.extends$ = this.extends$ || [];
                    if (!Array.isArray(this.extends$)) {
                        this.extends$ = [this.extends$];
                    }
                    if (primary) {
                        this.extends$.push(new BtnPrimary());
                    }
                    else {
                        this.extends$.push(new BtnSecondary());
                    }
                }
            }
            // Now say I imported the BtnClass from some module.
            const buttonTest = this.testArea.appendChild(Api_1.div());
            const btnPrimary = new BtnClass("btn-primary", true, buttonTest).render$();
            const btnSecondary = new BtnClass("btn-secondary", false, buttonTest).render$();
            this.testArea.appendChild(Api_1.createHtml(`<div>
                    <button type="button" class="btn-primary">Ok</button>
                    <button type="button" class="btn-secondary">Not Ok</button>
                </div>
                `));
            const allTheRules = Api_1.getCssRulesInElement(buttonTest);
            this.log(allTheRules);
            this.log(`Test ${this.viewModel.testNumber}: Test successful`);
        }
        catch (err) {
            this.log("ERROR: " + err);
            throw err;
        }
    }
}
exports.Test014 = Test014;

},{"../src/Api":1,"../src/Css/CssStyleSheet":5,"./TestCaseView":79,"./TestCaseViewModel":80}],78:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../src/Api");
class ConsoleViewModel {
    constructor() {
        this.output = Api_1.ObservableProxy.proximate([]);
    }
}
// tslint:disable-next-line:max-classes-per-file
class ConsoleView extends Api_1.Component {
    constructor() {
        super({
            innerHtml: `
                <h2>Log</h2>
                <div id="consoleLog" :loop="output">
                    <div :item><i-v>.</i-v></div>
                </div>`
        });
        this.viewModel = new ConsoleViewModel();
        this.entries = new Api_1.BoundComponent(this.viewModel, {
            parent: this.content,
            selector: '#consoleLog',
            observeAllViewModel: true
        });
    }
    /**
     * Log to the dev console but also to the output observable, where it can be used for display.
     *
     * @param {*} thing
     * @memberof ConsoleView
     */
    log(thing) {
        // tslint:disable-next-line:no-console
        console.log(thing);
        this.viewModel.output.push(clean(thing));
        function clean(val) {
            if (Api_1.isNone(val)) {
                return '';
            }
            if (typeof val === 'string') {
                return val;
            }
            return JSON.stringify(val);
        }
    }
}
exports.ConsoleView = ConsoleView;

},{"../src/Api":1}],79:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:max-classes-per-file
const Api_1 = require("../src/Api");
const TestCaseConsole_1 = require("./TestCaseConsole");
class TestCaseView extends Api_1.Component {
    constructor(viewModel) {
        super();
        this.viewModel = viewModel;
        // Multiple ways of appending new components
        this.appendChild(new TestHeader(viewModel));
        this.console = new TestCaseConsole_1.ConsoleView().appendToParent(this);
        this.testAreaHeader = this.appendChild(Api_1.createElement(Api_1.elementType.HTMLHeading2Element, {
            innerHTML: 'Test Area',
            style: 'cursor: pointer;'
        }));
        this.testArea = this.appendChild(Api_1.div('', { id: 'testArea' }));
        // Need to add a small delay, because this component is added to the DOM by the PageRouter immediately
        // after construction. document.getElementById(), used in many test cases, won't find anything until after
        // the closing brace.
        setTimeout(() => this.testCase(), 150);
        // Make the test area collapsable and collapse it after 3s.
        this.testAreaHeader.addEventListener('click', this.toggleTestArea.bind(this));
        this.toggleId = setTimeout(() => this.toggleTestArea(), 3000);
    }
    log(thing) {
        this.console.log(thing);
    }
    toggleTestArea(evt) {
        // Don't toggle after user clicks the header
        if (evt && this.toggleId) {
            clearTimeout(this.toggleId);
            this.toggleId = undefined;
        }
        if (this.testArea.style.display !== 'none') {
            this.testArea.style.display = 'none';
            this.testAreaHeader.style.color = 'lightgray';
            this.testAreaHeader.innerHTML = 'Test Area (hidden)';
        }
        else {
            this.testArea.style.display = 'block';
            this.testAreaHeader.style.color = 'black';
            this.testAreaHeader.innerHTML = 'Test Area';
        }
    }
}
exports.TestCaseView = TestCaseView;
class TestHeader extends Api_1.Component {
    constructor(vm) {
        super();
        if (vm.name) {
            this.appendChild(Api_1.paragraph(`<h1>Test ${vm.testNumber}: ${vm.name}</h1>`));
        }
        if (vm.description) {
            this.appendChild(Api_1.span(vm.description));
        }
    }
}
exports.TestHeader = TestHeader;

},{"../src/Api":1,"./TestCaseConsole":78}],80:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../src/Api");
class TestCaseViewModel {
    constructor({ name, descriptionHtml } = {}) {
        this.name = Api_1.escapeHtml(name);
        this.description = descriptionHtml;
        this.testNumber = Api_1.PageRouter.params.get('id') || '?';
    }
}
exports.TestCaseViewModel = TestCaseViewModel;

},{"../src/Api":1}],81:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Api_1 = require("../src/Api");
class TestbenchView extends Api_1.Component {
    constructor() {
        super({
            id: 'test-bench',
            innerHtml: `<div>
                <a href="#" class="test-link">Previous Test</a>
                <span id="testHeader">Test #0</span>
                <a href="#" class="test-link" data-next="1">Next Test</a>
            </div>
            <br />
            <layout-body></layout-body>`
        });
        const hdr = this.content.querySelector('#testHeader');
        if (hdr) {
            hdr.innerHTML = "Test #" + Api_1.PageRouter.matchedRoute.params.get('id') || '0';
        }
        // Initialize pager to go through tests.
        for (const l of this.content.querySelectorAll('.test-link')) {
            l.addEventListener('click', this.gotoNextTest.bind(this));
        }
    }
    gotoNextTest(evt) {
        evt.preventDefault();
        const id = Number(Api_1.PageRouter.matchedRoute.params.get('id') || '0');
        let nextid;
        if (evt.currentTarget.dataset.next) {
            nextid = id + 1;
            // At the moment, there's exactly one route per test, so we can cheaply know we're at the end
            // even without any configuration for the tests being in this class. This is a cheat, though,
            // because we could easily have added some other routes.
            if (nextid >= Api_1.PageRouter.allRoutes.length) {
                nextid = 0;
            }
        }
        else {
            nextid = id - 1;
            if (nextid < 0) {
                nextid = Api_1.PageRouter.allRoutes.length - 1;
            }
        }
        const hdr = this.content.querySelector('#testHeader');
        if (hdr) {
            hdr.innerHTML = "Test #" + nextid;
        }
        Api_1.PageRouter.route('test/' + nextid);
    }
}
exports.TestbenchView = TestbenchView;

},{"../src/Api":1}]},{},[62])