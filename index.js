const admin = document.getElementById('admin');
const teammember = document.getElementById('teammember');
const result = document.getElementById('result');

function openTeamPage() {
    if (admin.checked || teammember.checked) {
        window.open('./resources/team.html', '_blank');
    } else {
        result.textContent = `Please select user type`;
    }
}
