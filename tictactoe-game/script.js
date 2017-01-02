var player = 1;
var moves = 0;

function play(square) {
		var result = checkGameOver();
		
		if( result!==false ) {
			return result;
		}
		if(square.innerHTML==='') {
				moves++;

				if(player===1) {
				square.innerHTML = 'X';
				player = 2;
				}
				else {
				square.innerHTML = 'O';
				player = 1;
				}
		result = checkGameOver();
		if( result!==false ) {
				document.getElementById('message').innerHTML = 'Game Over: '+result;
				}
		else {
				document.getElementById('message').innerHTML = 'Keep playing';
		}
				
		
		}
}


function checkGameOver() {
	// 1st: check if theres less 5 moves
	if(moves<5) {
		return false;
	}
	// 2nd: check for winner lines
	var winner =checkForWinner();
	if(winner){
		return winner ;
	}  
	// 3rd: check if board is full
	else if(moves>8){
		return "It's a tie";
	}
	// continue game
	else
		return false;
}
	
	function checkForWinner(){
		var row1 = document.getElementsByClassName('r1');
		var row2 = document.getElementsByClassName('r2');
		var row3 = document.getElementsByClassName('r3');

		//row1   
	if( row1[0].innerHTML!=='' &&
			row1[0].innerHTML===row1[1].innerHTML &&
			row1[0].innerHTML===row1[2].innerHTML) {
					row1[0].style.color = "red";
					row1[1].style.color = "red";
					row1[2].style.color = "red";
			return row1[0].innerHTML + ' is the winner.';
	}
	//row2
	else if( row2[0].innerHTML!=='' &&
			row2[0].innerHTML===row2[1].innerHTML &&
			row2[0].innerHTML===row2[2].innerHTML) {
					row2[0].style.color = "red";
					row2[1].style.color = "red";
					row2[2].style.color = "red";
		return row2[0].innerHTML + ' is the winner.';
	}
	//row3
	else if( row3[0].innerHTML!=='' &&
			row3[0].innerHTML===row3[1].innerHTML &&
			row3[0].innerHTML===row3[2].innerHTML) {
					row3[0].style.color = "red";
					row3[1].style.color = "red";
					row3[2].style.color = "red";
		return row3[0].innerHTML + ' is the winner.';
	}
	//col1
	else if( row1[0].innerHTML!=='' &&
			row1[0].innerHTML===row2[0].innerHTML &&
			row1[0].innerHTML===row3[0].innerHTML) {
					row1[0].style.color = "red";
					row2[0].style.color = "red";
					row3[0].style.color = "red";
		return row1[0].innerHTML + ' is the winner.';
	}
	//col2
	else if( row1[1].innerHTML!=='' &&
			row1[1].innerHTML===row2[1].innerHTML &&
			row1[1].innerHTML===row3[1].innerHTML) {
					row1[1].style.color = "red";
					row2[1].style.color = "red";
					row3[1].style.color = "red";
		return row1[1].innerHTML + ' is the winner.';
	}
	//col3
	else if( row1[2].innerHTML!=='' &&
			row1[2].innerHTML===row2[2].innerHTML &&
			row1[2].innerHTML===row3[2].innerHTML) {
					row1[2].style.color = "red";
					row2[2].style.color = "red";
					row3[2].style.color = "red";
		return row1[2].innerHTML + ' is the winner.';
	}
	//diagnol1
	else if( row1[0].innerHTML!=='' &&
			row1[0].innerHTML===row2[1].innerHTML &&
			row1[0].innerHTML===row3[2].innerHTML) {
					row1[0].style.color = "red";
					row2[1].style.color = "red";
					row3[2].style.color = "red";
		return row1[0].innerHTML + ' is the winner.';
	}
	//diagnal2
	else if( row1[2].innerHTML!=='' &&
			row1[2].innerHTML===row2[1].innerHTML &&
			row1[2].innerHTML===row3[0].innerHTML) {
					row1[2].style.color = "red";
					row2[1].style.color = "red";
					row3[0].style.color = "red";
		return row1[2].innerHTML + ' is the winner.';
	}
	}

	function playAgain(){
			location.reload(true);
	}
		
		document.addEventListener("mouseover", function(){
		document.getElementById("heading").innerHTML = "TIC TAC TOE";
	});
