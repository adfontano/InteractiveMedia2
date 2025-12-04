(function(){
    'use strict';
    console.log('reading js');

    const startGame = document.querySelector('#startgame');

    const gameData = {
        dice: ['1die.jpg', '2die.jpg', '3die.jpg', 
            '4die.jpg', '5die.jpg', '6die.jpg'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };
})();