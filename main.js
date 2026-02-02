// Crea un oggetto bowling con le seguenti caratteristiche:
// una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi
// diverse funzionalità tra cui:
// creare 10 punteggi casuali per ogni giocatore:
// Suggerimento: questo metodo dovra’ ciclare tutti i giocatori, presenti nell’oggetto bowling, e aggiungere ad ogni proprieta’ scores, dieci punteggi casuali ad ogni giocatore
// Per generare un punteggio casuale da 1 a 10 → Math.floor(Math.random() * (10 - 1 +1) + 1)
// trovare il punteggio finale per ogni giocatore:
// Suggerimento: ordinare l’array in ordine Decrescente (Attenzione! E’ un array di oggetti: Array.prototype.sort() - JavaScript | MDN )
// aggiungere un nuovo giocatore e creare 10 punti casuali anche per lui
// determinare il vincitore

// EXTRA:
// Crea un metodo per stilare la classifica finale dei giocatori

// DATI DI PARTENZA:
// let bowling = {
//     'players': [
//         {'name': 'Livio', 'scores': []},
//         {'name': 'Paola', 'scores': []},
//         {'name': 'Filippo', 'scores': []},
//         {'name': 'Giuseppe', 'scores': []}
//     ],
//     ...
// }





let bowling = {
    players: [
        { name: "Livio", scores: [] },
        { name: "Paola", scores: [] },
        { name: "Filippo", scores: [] },
        { name: "Giuseppe", scores: [] },
    ],
    
    //metodo che aggiunge 10 tiri casuali a testa con valori compresi fra 1 e 10
    
    addPoints: function () {
        this.players.forEach((giocatore) => {
            for (let i = 0; i < 10; i++) {
                giocatore.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
            }
            giocatore.finalScores = giocatore.scores.reduce((acc, n) => acc + n, 0);
        });
    },
    
    //metodo che ordina ogni array scores , mette in ordine decrescente i punti di ogni giocatore

    sortArray: function () {
        this.players.forEach((el) => {
            el.scores.sort((a, b) => b - a);
        });
    },
    
    //metodo per aggiungere un giocatore e assegnarli 10 tiri casuali

    addPlayer: function (nome) {
        let newpoints = [];
        for (let i = 0; i < 10; i++) {
            newpoints.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
        }
        let total = newpoints.reduce((acc, n) => acc + n, 0);
        
        this.players.push({ name: nome, scores: newpoints, finalScores: total });
    },
    
    //metodo per trovare il vincitore ordinando in ordine decrescente i valori della somma di tutti i punti di ogni giocatore;

    findWinner: function(){
        this.players.sort((a, b) => b.finalScores - a.finalScores);
        return `Il vincitore di questo torneo è ${this.players[0].name} con il totale di ${this.players[0].finalScores}`;
    },

    //metodo per stampare la classifica

    ranking: function(){
       for(i = 0; i < this.players.length; i ++){
        console.log(`Al posto numero ${[i+1]} c'è ${this.players[i].name} con ${this.players[i].finalScores} punti totali!`);
       }
    }
};

bowling.addPoints();
bowling.addPlayer(`mario`)
bowling.findWinner();
bowling.ranking();