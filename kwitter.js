function addUser(){
    username_id=document.getElementById("username_input").value;
    localStorage.setItem("username" , username_id);
window.location="kwitter_page.html";
}