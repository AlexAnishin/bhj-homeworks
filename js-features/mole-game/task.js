function killer() {
    let x = document.getElementById("dead").textContent;
    let y = document.getElementById("lost").textContent;
    let moleInLink = hole.className.includes('hole_has-mole').textContent;
    if (moleInLink) {
        x++;
    } else {
        y++;
    }
}
let index = 1;
let hole = document.getElementById(`hole${index}`);


hole.onclick = killer;