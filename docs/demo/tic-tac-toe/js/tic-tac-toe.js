mi5.using (mi5.component.BoundComponent, 'BoundComponent');
mi5.using (mi5.observable.ObservableProperty, 'ObservableProperty');
mi5.using (mi5.util.array.range, 'range');

class GameModel {
    constructor() {

        this.won = false;
        this.moves = 0;

        // Two simple observable properties
        this.status = new ObservableProperty('PLAY ON');
        this.playerX = new ObservableProperty(true);

        // Create a DB of 9 boxes.
        this.db = new Map();
        for (const y of range(3)) {
            for (const x of range(3)) {
                this.db.set(x + ',' + y, new BoxModel());
            }
        }

        // Simple array of all the winning cases.
        this.winning = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ];
    }

    set(x, y, val) {
        // Return false (not a good move) if the game is already ended
        if (this.won || this.moves >= 9) {
            return;
        }

        const key = x + ',' + y;
        const box = this.db.get(key);

        // Return false if it already has a value
        if (box.value) {
            this.status.value = 'INVALID MOVE';
            return;
        }
        box.value = val;

        this.checkWin(val);
    }

    checkWin(val) {
        // Assumed: The parent has found the game hasn't been won already
        for (const row of this.winning) {
            // Assume the user has won
            let won = true;
            for (const t of row) {
                // If any value doesn't match, the user hasn't won. We can stop checking this row
                if (this.db.get(t[0] + ',' + t[1]).value !== val) {
                    won = false;
                    break;
                }
            }
            if (won) {
                this.won = true;
                this.status.value = 'GAME WON';
                for (const t of row) {
                    this.db.get(t[0] + ',' + t[1]).winningMove.value = true;
                }
                return;
            }
        }

        this.moves++;

        if (!this.won) {
            // It is now the other player's turn.
            this.playerX.value = !this.playerX.value;
            if (this.moves === 9) {
                this.status.value = 'THE ONLY WINNING MOVE IS NOT TO PLAY';
            } else {
                this.status.value = 'KEEP PLAYING';
            }
        }
    }

    currentPlayer() {
        // This is so simple, it's a shame lambda methods don't work in JS like they do in C#
        return this.playerX.value ? 'X' : 'O';
    }

    clear() {
        this.won = false;
        for (const row of this.db.entries()) {
            row[1].value = '';
            row[1].winningMove.value = false;
        }
        this.playerX.value = true;
        this.status.value = 'PLAY ON';
        this.moves = 0;
    }
}

class BoxModel {
    constructor() {
        this.xy = new ObservableProperty('');
        this.winningMove = new ObservableProperty(false);
    }
    get value() {
        return this.xy.value;
    }
    set value(val) {
        this.xy.value = val;
    }
}

class GameView extends BoundComponent {
    constructor() {
        super(new GameModel(), {
            outerHtml: `
            <div class="container game">
                <div class="row" :loop="db">
                    <div class="col-4"></div>
                </div>
                <div>Current Player: <i-v>currentPlayer</i-v></div>
                <div>Status: <i-v>status</i-v>
                <div><button class="btn btn-secondary w-100" type="button" :event (click)="reset" component="reset">Reset</button></div>
            </div>
            `,
            observeAllViewModel: true
        });

        // Create a generic component to manage the loop
        BoundComponent.injectBind(this.viewModel, '.row', { parent: this.content, loopItemClass: BoxView });

        // We have nested click events so the component filter is needed. Is this cleaner than document.getElementById('resetButton').addEventListener()?
        // Not really.
        this.addInlineEventListeners('reset');
    }

    reset() {
        this.viewModel.clear();
    }
}

class BoxView extends BoundComponent {
    constructor(loopItem, options) {
        // This is called by the loopPostProcess method, which calls the constructor with two inputs:
        // First: ViewModel, which in this case is one entry of the JS Map class, which is a key/value pair
        // Second: { element, parent, (stuff that doesn't matter) }

        // A box INSIDE the component element. This allows some nice looking margins without breaking bootstrap's column flow.
        options.innerHtml = '<div class="box" :event (click)="onClick" component="box"><i-v>value</i-v></div>';
        options.observeAllViewModel = true;

        // The custom switch CSS class needs to be stored at this level, but it looks nicer if the visible element is at the box class.
        // Many ways to do this: custom inner component (because of nesting, you need to tie the i-v to the parent, making it
        // very verbose) or limiting the background using CSS and either using setAttribute on this.content, using options itself, using 
        // fluent methods, or filling this in inside GameView. 
        // Let's go with CSS + options.
        options.attributes = { ':switch:success': 'winningMove' };

        super(loopItem[1], options);

        const [x, y] = loopItem[0].split(',');
        this.x = x;
        this.y = y;

        this.game = options.loopParent.viewModel;

        this.addInlineEventListeners('box');
    }

    onClick() {
        const val = this.game.currentPlayer();
        this.game.set(this.x, this.y, val);
    }
}

const game = new GameView().appendToParent(document.getElementById('demoArea'));
