// **GAME REGISTRY**
//arrays to hold cells that players have claimed
var xCells = [];
var oCells = [];

//string to hold which player is active, either X or O
var activePlayer;

//init for start and reset
var init = function(){
	$('.cell').empty();
	xCells = [];
	oCells = [];
	activePlayer = 'X';
}

// **GAME FUNCTIONS**
//check for victory, toggle active player
var endTurn = function(){
	victoryCheck();
	//Toggle Active Player
	if(activePlayer === 'X'){
		activePlayer = 'O';
	}else if(activePlayer === 'O'){
		activePlayer = 'X';
	}
}

//function to register the cells that are claimed, and marks the board
var claimCell = function(id){
	if($('#'+id).html() == ''){
		$('#'+id).html(activePlayer); //mark the board
		//register in the active players array
		if(activePlayer === "X"){
			xCells.push(id);
		}else if(activePlayer === "O"){
			oCells.push(id);
		}
	}
}

//victory check
var victoryCheck = function(){
	if(activePlayer === "X"){
		if(xCheck(1, 2, 3)){
			alert('X Player Wins!');
		}
		if(xCheck(4, 5, 6)){
			alert('X Player Wins!');
		}
		if(xCheck(7, 8, 9)){
			alert('X Player Wins!');
		}
		if(xCheck(1, 4, 7)){
			alert('X Player Wins!');
		}
		if(xCheck(2, 5, 8)){
			alert('X Player Wins!');
		}
		if(xCheck(3, 6, 9)){
			alert('X Player Wins!');
		}
		if(xCheck(1, 5, 9)){
			alert('X Player Wins!');
		}
		if(xCheck(3, 5, 7)){
			alert('X Player Wins!');
		}
	}else if(activePlayer === "O"){
		if(oCheck(1, 2, 3)){
			alert('O Player Wins!');
		}
		if(oCheck(4, 5, 6)){
			alert('O Player Wins!');
		}
		if(oCheck(7, 8, 9)){
			alert('O Player Wins!');
		}
		if(oCheck(1, 4, 7)){
			alert('O Player Wins!');
		}
		if(oCheck(2, 5, 8)){
			alert('O Player Wins!');
		}
		if(oCheck(3, 6, 9)){
			alert('O Player Wins!');
		}
		if(oCheck(1, 5, 9)){
			alert('O Player Wins!');
		}
		if(oCheck(3, 5, 7)){
			alert('O Player Wins!');
		}
	}else if(xCells.length + oCells.length == 9){
		console.log('draw');
		alert('The Game is a Draw');
	}
}

//check the three numbers passed to see if they are in the xCells array
var xCheck = function(one, two, three){
	if($.inArray(one+'', xCells) != -1 && $.inArray(two+'', xCells) != -1 && $.inArray(three+'', xCells) != -1){
		return true;
	}else{
		return false;
	}
}

//check the three numbers passed to see if they are in the yCells array
var oCheck = function(one, two, three){
	if($.inArray(one+'', oCells) != -1 && $.inArray(two+'', oCells) != -1 && $.inArray(three+'', oCells) != -1){
		return true;
	}else{
		return false;
	}
}

// **GAME SETUP**
// setup the registry
init();

// attach the click handlers
$(document).ready(function() {
    $('.cell').click(function(event) {
      claimCell(event.currentTarget.id);
      endTurn();
    });

    $('#reset').click(function(){
    	init();
    });
});