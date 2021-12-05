var player_1Name = localStorage.getItem("player1");
var player_2Name = localStorage.getItem("player2");

document.getElementById("player1_name").innerHTML = player_1Name + " : ";
document.getElementById("player2_name").innerHTML = player_2Name +" : ";

player_1Score = 0;
player_2Score = 0;

document.getElementById("player1_score").innerHTML = player_1Score;
document.getElementById("player2_score").innerHTML = player_2Score;

//abcdefghijklmnopqrstuvwxyz

document.getElementById("questionTurn").innerHTML = "Questioner: " + player_1Name;
document.getElementById("answerTurn").innerHTML = "Answerer: " + player_2Name;

function send() {
    get_word = document.getElementById("wordInput").value;
    word =  get_word.toLowerCase();
    console.log(word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    halfLength = Math.floor(word.length/2);

    charAt2 = word.charAt(halfLength);
    console.log(charAt2);

    last_pos = word.length - 1;
    charAt3 = word.charAt(last_pos);
    console.log(charAt3);

    remove1 = word.replace(charAt1, "_");
    remove2 = remove1.replace(charAt2, "_");
    remove3 = remove2.replace(charAt3, "_");
    console.log(remove3);
}
//                                                     _                     -
// underscore = _ ; middlescore = - ; overunderscore =   ; overmiddlescore =   ; 

