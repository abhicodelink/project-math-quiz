
window.onload = function() {

player1_name = localStorage.getItem("user_input1");
    player2_name = localStorage.getItem("user_input2");

    player1_score = 0;
    player2_score = 0;

document.getElementById("user1_name").innerHTML = player1_name + " : ";
document.getElementById("user2_name").innerHTML = player2_name + " : ";
document.getElementById("user1_score").innerHTML = player1_score;
document.getElementById("user2_score").innerHTML = player2_score;
document.getElementById("question_name").innerHTML =  player1_name;
document.getElementById("answer_name").innerHTML =  player2_name;
};
 
function send() {
     num_1 = document.getElementById("num_input1").value;
     num_2 = document.getElementById("num_input2").value;
     actual_answer =  parseInt(num_1) * parseInt(num_2);
     question_number = "<h4>" + num_1   + "  X   " + num_2 + "</h4>";
     input_box =  "<br>Answer  :  <input type='text' id='input_cb' class='form-control'>";
          check_button = "<br><br><button onclick='check();'  id='check'>Check</button>";
          row = question_number + input_box + check_button;
          document.getElementById("output").innerHTML = row;
          document.getElementById("num_input1").value = "";
          document.getElementById("num_input2").value = "";


}