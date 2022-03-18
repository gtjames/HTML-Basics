var gameBoard = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];
var gameBoardDisplayIDs = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight" ];


function makePlay( divID, n ) {
  document.getElementById( divID ).style.backgroundImage = "url(./images/X.jpg)";
  gameBoard[ n ] = 'X';

  if ( isWinnerOrCat() ) {
    document.getElementById( "divDeclareWinner" ).innerHTML = "You Win";
    return;
  } else if ( isBoardFull() ) {
    document.getElementById( "divDeclareWinner" ).innerHTML = "Cat Game";
    return;
  }
  cpuPlay();
  if ( isWinnerOrCat() ) {
    document.getElementById( "divDeclareWinner" ).innerHTML = "You Lose...";
    return;
  } else if ( isBoardFull() ) {
    document.getElementById( "divDeclareWinner" ).innerHTML = "Cat Game";
    return;
  }
}

function cpuPlay() {
  do {
    var randNum = Math.round( Math.random() * 7 + 1, 0 );

  } while ( isNaN( gameBoard[ randNum ] ) );

  gameBoard[ randNum ] = 'O';
  document.getElementById( gameBoardDisplayIDs[ randNum ] ).style.backgroundImage = "url(./images/O.jpg)";
}

function newGame() {
  gameBoard = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];

  for ( var i = 0; i < gameBoard.length; i++ ) {
    document.getElementById( gameBoardDisplayIDs[ i ] ).style.backgroundImage = "url(./images/blank.jpg)";
  }
  document.getElementById( "divDeclareWinner" ).innerHTML = "";
  document.getElementById( "divDeclareWinner" ).style.display = "none";
}

function isWinner() {
  if ( ( gameBoard[ 0 ] == gameBoard[ 1 ] && gameBoard[ 0 ] == gameBoard[ 2 ] ) ||
    ( gameBoard[ 3 ] == gameBoard[ 4 ] && gameBoard[ 3 ] == gameBoard[ 5 ] ) ||
    ( gameBoard[ 6 ] == gameBoard[ 7 ] && gameBoard[ 6 ] == gameBoard[ 8 ] ) ) {
    return true;
  } else if ( (gameBoard[ 0 ] == gameBoard[ 3 ] && gameBoard[ 0 ] == gameBoard[ 6 ] ) ||
    ( gameBoard[ 1 ] == gameBoard[ 4 ] && gameBoard[ 1 ] == gameBoard[ 7 ] ) ||
    ( gameBoard[ 2 ] == gameBoard[ 5 ] && gameBoard[ 2 ] == gameBoard[ 8 ] ) ) {
  return true;
} else if ( (gameBoard[ 0 ] == gameBoard[ 4 ] && gameBoard[ 0 ] == gameBoard[ 8 ] ) ||
  ( gameBoard[ 2 ] == gameBoard[ 4 ] && gameBoard[ 2 ] == gameBoard[ 6 ] ) ) {
  return true;
} else {
  return false;
}
}

function isWinnerOrCat( strMessage ) {
  if ( isWinner() ) {
    document.getElementById( "divDeclareWinner" ).innerHTML = strMessage;
    document.getElementById( "btnPlayAgain" ).style.display = 'block';
    return true;
  } else if ( isBoardFull() ) {
    document.getElementById( "divDeclareWinner" ).innerHTML = "Cat Game";
    document.getElementById( "btnPlayAgain" ).style.display = 'block';
    return true;
  }
  return false;
}

function isBoardFull() {
  for ( var i = 0; i < gameBoard.length; i++ ) {
    if ( gameBoard[ i ] != 'X' && gameBoard[ i ] != 'O' ) {
      return false;
    }
  }
  return true;
}

function isSpotEmpty( i ) {
  if ( gameBoard[ i ] != 'X' && gameBoard[ i ] != 'O' ) {
  return ture;
}
}
