const admin = document.getElementById('admin');
const teammember = document.getElementById('team');
const result = document.getElementById('result');

function selectOnlyThis(id) {
    var checkboxes = document.getElementsByName("teamm");
    checkboxes.forEach(function (checkbox) {
        if (checkbox.id !== id) {
            checkbox.checked = false;
        }
    });
}
function openTeamPage(){
    if(team.checked){
        window.location.href ="team.html";
    }else{
        document.getElementById("result").innerText = "Please select Team Member.";

    }

}