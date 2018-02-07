/*---------- Deck class ----------*/
class Deck {
    constructor() {
        this.deck = [];
    }

    //Fisher–Yates Shuffle
    shuffle(deck) {
        var m = this.deck.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return deck;
    }

    //reset
    reset() {
        let suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
        let pips = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
        
        for(let suit in suits) {
            // console.log(suits[suit]);
            for(let pip in pips) {
                // console.log(`${pips[pip]} of ${suits[suit]}`);
                this.deck.push(`${pips[pip]} of ${suits[suit]}`);
            }
        }
        return this;
    }

    //deal
    deal() {
        return this.deck.pop();
    }
}

/*---------- Player class ----------*/
class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    take(deck) {
        this.hand.push(deck.deal()); //pushes card delt from deck into player's hand
        return this;
    }

    discard() {
        this.hand.pop();
        return this;
    }
};

/*---------- Example Output ----------*/
let deck1 = new Deck();
deck1.reset().shuffle();
console.log(deck1);
deck1.deal();
let deck2 = new Deck();
deck2.reset().shuffle();
console.log(deck2);

let player1 = new Player("Jane Doe");
player1.take(deck1).take(deck1).take(deck1);
console.log(player1.hand);
let player2 = new Player("John Doe");
player2.take(deck2).take(deck2).take(deck2);
console.log(player2.hand);