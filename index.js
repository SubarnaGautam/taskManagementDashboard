const admin = document.getElementById('admin');
const team = document.getElementById('team');
const result = document.getElementById('result');

function selectOnlyThis(id) {
    var checkboxes = document.getElementsByName("team");
    checkboxes.forEach(function (checkbox) {
        if (checkbox.id !== id) {
            checkbox.checked = false;
        }
    });
}
function openTeamPage(){
    if(team.checked){
        window.location.href ="team.html";
    } else if(admin.checked){
        window.location.href ="admin.html";

    }

    else{
       result.innerText = "Please select user type";

    }

}

