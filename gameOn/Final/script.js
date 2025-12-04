(function(){
    'use strict';
    console.log('reading js');
     
    const startGame = document.querySelector('#startgame');
    const intro = document.querySelector('#intro')
    const playArea = document.querySelector('#play-area');
    const playerTurn = document.querySelector('#playerTurn');
    const game = document.querySelector('#game');
    const dice = document.querySelector('#dice');
    const actions = document.querySelector('#actions');
    const rollButton = document.querySelector('#roll');
    const winner = document.querySelector('#winner');
    const whoWon = document.querySelector('#whoWon');
    const winCake = ['mari-cake.png', 'lila-cake.png'];

    intro.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    const gameData = {
        dice: ['one.PNG', 'two.PNG', 'three.PNG', 
            'four.PNG', 'five.PNG', 'six.PNG'],
        players: ['Mari', 'Lila'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        turnRollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener('click', function(){ //add transition??
        /* intro.style.display = 'none';
        playArea.style.display = 'inline'; */
        playArea.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        
        document.querySelector('#quit').addEventListener('click', function(){
            location.reload();
        });
        gameData.index = Math.round(Math.random());
        // console.log(gameData.index);
        //console.log('set up the turn');

        setUpTurn();
    });

    function setUpTurn(){
        playerTurn.innerHTML = `${gameData.players[gameData.index]}'s Turn`;
        actions.innerHTML = '<h3 id="roll">Roll!</h3>'
        game.innerHTML = '';
        gameData.turnRollSum = 0;
        document.querySelector('#roll').addEventListener('click', function(){
            //console.log('Roll the Dice!');
            throwDice();
        });
        console.log(gameData.index)
        if(gameData.index == 0){
            document.querySelector('#lilaSleeping').style.display = 'block';
            document.querySelector('#mariCooking').style.display = 'block';
            document.querySelector('#lilaCooking').style.display = 'none';
            document.querySelector('#mariReading').style.display = 'none';
        } else if (gameData.index == 1){
            document.querySelector('#lilaCooking').style.display = 'block';
            document.querySelector('#mariReading').style.display = 'block';
            document.querySelector('#lilaSleeping').style.display = 'none';
            document.querySelector('#mariCooking').style.display = 'none';
        }

    }
        
    function throwDice(){
        gameData.roll1 = Math.floor(Math.random()*6) + 1;
        gameData.roll2 = Math.floor(Math.random()*6) + 1;
        playerTurn.innerHTML = `${gameData.players[gameData.index]}'s Turn`;
        dice.innerHTML = `<img src= "images/${gameData.dice[gameData.roll1-1]}" width=150> <img src= "images/${gameData.dice[gameData.roll2-1]}" width=150>`;
        const die = document.querySelectorAll('#dice img');
        for(const eachdie of die){
            eachdie.classList.add('spin');
            /* eachdie.addEventListener('animationend', function(){
                eachdie.classList.remove('spin');
            }); */
        }
        
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        
        console.log(gameData.turnRollSum);

        //if statements 
        if(gameData.rollSum === 2){
            game.innerHTML += 'Snake Eyes! Score Reset!';
            gameData.score[gameData.index] = 0;
            if (gameData.index == 1) {
                gameData.index = 0;
            } else {
                gameData.index = 1;
            }
            // gameData.index = 1 ? (gameData.index == 0) : (gameData.index == 1); 
            setTimeout(setUpTurn, 2000);
            showCurrentScore();
        } 
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            gameData.score[gameData.index] = gameData.score[gameData.index] - gameData.turnRollSum;
            gameData.turnRollSum = 0;
             if (gameData.index == 1) {
                gameData.index = 0;
            } else {
                gameData.index = 1;
            }
            // gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML = `Rolled a one! Points lost, switching to ${gameData.players[gameData.index]}`;
            setTimeout(setUpTurn, 2000);
            showCurrentScore();
        }
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            gameData.turnRollSum = gameData.turnRollSum + gameData.rollSum;
            rollButton.style.display = 'none'
            actions.innerHTML = '<h3 id="rollAgain">Roll!</h3> <h3 id="pass">Pass</h3>'
            document.querySelector('#rollAgain').addEventListener('click', function(){
                throwDice();
            });
            document.querySelector('#pass').addEventListener('click', function(){
                 if (gameData.index == 1) {
                    gameData.index = 0;
                } else {
                    gameData.index = 1;
                }
                /* gameData.index ? (gameData.index = 0) : (gameData.index = 1); */
                setUpTurn();
            });
            checkWinningCondition();
        }

    }

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            document.querySelector('#cake').innerHTML = `<img src="images/${winCake[gameData.index]}" width="500">`;
            whoWon.innerHTML = `${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!`;
            winner.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            document.querySelector('#startOver').addEventListener('click', function(){ //reset score here
                gameData.score[0] = 0;
                gameData.score[1] = 0;
                scoreOne.innerHTML = `${gameData.score[0]}`;
                scoreTwo.innerHTML = `${gameData.score[1]}`;
                intro.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
            });
        } else {
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        scoreOne.innerHTML = `${gameData.score[0]}`;
        scoreTwo.innerHTML = `${gameData.score[1]}`;
    }

    const rulesOverlay = document.querySelectorAll('.rules');
    for(const eachrulesOverlay of rulesOverlay){
        eachrulesOverlay.addEventListener('click', function(){
            document.querySelector('#howPlay').style.display = 'block';
        
            const closeButton = document.querySelector('#closeRules');
            closeButton.addEventListener('click', function(){
                document.querySelector('#howPlay').style.display = 'none';
            });
        });
    }
    
})();