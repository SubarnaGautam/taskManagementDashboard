const admin = document.getElementById('admin');
const team = document.getElementById('team');
const result = document.getElementById('result');
const emailInput = document.getElementById('ademail');
const passwordInput = document.getElementById('adpassword');
const teamEmailInput = document.getElementById('tmemail');
const teamPasswordInput = document.getElementById('tmpassword');
const loginadmin = document.getElementById('login');
const loginResult = document.getElementById('loginResult');
const teamLoginResult = document.getElementById('teamLoginResult');
const backTag = document.getElementById('back');
function selectOnlyThis(id) {
    var checkboxes = document.getElementsByName("team");
    checkboxes.forEach(function (checkbox) {
        if (checkbox.id !== id) {
            checkbox.checked = false;
        }
    });
}
function openTeamPage(button){
    if(team.checked){
        window.location.href ="teamlogin.html";
    } else if(admin.checked){
        window.location.href ="admin.html";

    }

    else{
       result.innerText = "Please select user type";

    }

}
function adminLogin(){
    if (emailInput.value === 'admin@gmail.com' && passwordInput.value === '1234'){
        window.location.href = "welcomeadmin.html";
    }
    else{
        loginResult.innerText = "Incorrect Either email or password";
    }
}

function teamLogin(){
    if (teamEmailInput.value === 'team@gmail.com' && teamPasswordInput.value === '1234'){
        window.location.href = "team.html";
    }
    else{
        teamLoginResult.innerText = "Incorrect Either email or password";
    }
}
function clickBack(){
    window.location.href ="teamlogin.css";
}



