function killer(hole) {
    return () => {
        let x = document.getElementById("dead").textContent;
        let y = document.getElementById("lost").textContent;
        let moleInLink = hole.className.includes('hole_has-mole');
        if (moleInLink) {
            x++;
        } else {
            y++;
        }
        document.getElementById("dead").textContent = x;
        document.getElementById("lost").textContent = y;
    }
}
for (let i = 1; i <= 9; i++) {
    let hole = document.getElementById(`hole${i}`);
    hole.onclick = killer(hole);
}