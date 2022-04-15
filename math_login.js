function addUser() {
     player1_name =  document.getElementById("user_input1").value;
     player2_name = document.getElementById("user_input2").value;
     localStorage.setItem("user_input1", player1_name);
     localStorage.setItem("user_input2", player2_name);
     window.location = "math_page.html";
}