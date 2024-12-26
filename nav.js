function home(){
    window.location.replace("https://www.wdwoodlandschool.org");
}
function contact(){
    window.location.replace("https://www.wdwoodlandschool.org/contact");
}
function enrollment(){
    window.location.replace("https://www.wdwoodlandschool.org/enrollment");
}



let buttonv = 0;

function btnpress() {
    if (buttonv === 0) {
        document.getElementById('dropdown-box').style.display = "block";

        document.getElementById('toggle-button').innerHTML = "<span style='transform: rotate(135deg); margin-top: 10px;' class='bar'></span>";
    } else {
        document.getElementById('dropdown-box').style.display = "none";

        document.getElementById('toggle-button').innerHTML = "<span class='bar'></span><span class='bar'></span><span class='bar'></span>";
    }

    // Toggle between 0 and 1
    buttonv = 1 - buttonv;
}

function donate(){
    document.getElementById('dropdown-box').style.display = "none";

    document.getElementById('toggle-button').innerHTML = "<span class='bar'></span><span class='bar'></span><span class='bar'></span>";
}