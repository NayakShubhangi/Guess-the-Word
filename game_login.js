function AddUser()
{
    Player_1_name = document.getElementById("Player_1_name").value;
    Player_2_name = document.getElementById("Player_2_name").value;
    localStorage.setItem("Player_1_name", Player_1_name);
    localStorage.setItem("Player_2_name", Player_2_name);
    window.location = "game_page.html";
}