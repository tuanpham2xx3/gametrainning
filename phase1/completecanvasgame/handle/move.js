let keys = {};

window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});
window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

function handleMovement(player) {
    // Kiểm tra tổ hợp phím để di chuyển chéo
    if (keys['ArrowUp'] && keys['ArrowLeft']) {
        player.movex(-1); // Di chuyển sang trái
        player.movey(-1); // Di chuyển lên
    }
    if (keys['ArrowUp'] && keys['ArrowRight']) {
        player.movex(1); // Di chuyển sang phai
        player.movey(-1); // Di chuyển lên
    }
    if (keys['ArrowDown'] && keys['ArrowLeft']) {
        player.movex(-1); // Di chuyển sang trái
        player.movey(1); // Di chuyển xun
    }
    if (keys['ArrowDown'] && keys['ArrowRight']) {
        player.movex(5); // Di chuyển sang fai
        player.movey(5); // Di chuyển xun
    } else {
        if (keys['ArrowLeft']) player.movex(-4); // Di chuyển sang trái
        if (keys['ArrowRight']) player.movex(4); // Di chuyển sang phải
        if (keys['ArrowUp']) player.movey(-4); // Di chuyển lên
        if (keys['ArrowDown']) player.movey(4); // Di chuyển xuống    
    }
}