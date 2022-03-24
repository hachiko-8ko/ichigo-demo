mi5.using (mi5.util.Kwarg, 'Kwarg');
mi5.using (mi5.util.kw, 'kw');
mi5.using (mi5.util.html.div, 'div');
const demoArea = document.getElementById('demoArea');

function log(str) {
    demoArea.appendChild(div(str));
}

// Functions can be called using keyword arguments using the kw() function. For instance, consider the following function:

function parrot(voltage, state = 'a stiff', action = 'voom', type = 'Norwegian Blue') {
    // Three redundant items here.
    // This redundantly has to list the parameters (in JS, a simple copy/paste from above) at the start.
    // It then has to list the parameters again, on the right.
    // On the left, the default values need to be repeated.
    ({ voltage, state = 'a stiff', action = 'voom', type = 'Norwegian Blue' } = Kwarg.parseArgs({ voltage, state, action, type }));

    log("-- This parrot wouldn't " + action + " ");
    log("if you put " + voltage + " volts through it.");
    log("-- Lovely plumage, the " + type);
    log("-- It's " + state + "!");
    log('---------------------------------------');
}

// Parrot() could be called in any of the following ways:
// (The function kw() takes an one-key object, a 2 element array, or a string and a value.)

parrot(1000);
parrot(kw({ action: 'VOOOOOM' }), kw('voltage', 1000000));
parrot('a thousand', kw(['state', 'pushing up the daisies']));
parrot('a million', 'bereft of life', 'jump');

// When Kwargs.parseArgs() is called, a property named $$kw$$ receives an object containing all keyword arguments except for
// those corresponding to a formal parameter. But if allowUnknownKeyword is false, an error is thrown instead.

// When Kwargs.parseArgs() is called with rest parameters included in the argument list, a property named $rest$ contains the
// non-keyword rest arguments. Note that there is no way to indicate in the function signature that keyword
// arguments are allowed to be included in the rest paramete, so they arer.
// In JS, rest parameters must appear last.

function cheeseshop(kind, ...rest) {
    let $rest$;
    let $$kw$$;
    ({ kind, $rest$, $$kw$$ } = Kwarg.parseArgs({ kind, ...rest }, true));
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
cheeseshop("Limburger", "It's very runny, sir.", "It's really very, VERY runny, sir.",
    kw({ shopkeeper: "Michael Palin" }),
    kw({ client: "John Cleese" }),
    kw({ sketch: "Cheese Shop Sketch" }));

// Arbitrary argument lists are supported in JavaScript by ...rest parameters, so do not need special handling.
// In the same fashion, objects can deliver keyword arguments with the ...spread operator and the Kwarg.unpack() function:
const dict = { action: "VOOM", voltage: "four million", state: "bleedin' demised" };
parrot(...Kwarg.unpack(dict));
