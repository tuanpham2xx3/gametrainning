class GameManager {
    constructor(hpplayer, hpboss, p , b) {
        this.xp = p.x;
        this.yp = p.y;
        this.xb = b.x;
        this.yb = b.y;
        this.score = 0;
        this.hpPlayer = hpplayer;
        this.hpBoss = hpboss;
        this.sate = 'playing';
    }
    setState(newState) {
        this.state = newState;
    }

    updateScore(points) {
        this.score += points;
        this.updateHUD(); // Cập nhật HUD khi điểm thay đổi
    }

    resetGame() {
        this.score = 0;
        this.lives = 3;
        this.state = 'playing';
        document.getElementById('restartButton').style.display = 'none'; // Ẩn nút khi khởi động lại
        this.updateHUD(); // Cập nhật HUD khi khởi động lại
    }

    draw(context) {
        context.fillStyle = 'red';
        context.font = '30px Arial';
        context.fillText('HP PLAYER: ' + this.hpPlayer, 550, 100);
        context.fillText('HP BOSS: ' + this.hpBoss, 550, 150);
        context.fillText('X PLAYER: ' + this.xp, 550, 200);
        context.fillText('Y PLAYER: ' + this.yp, 550, 250);
        if(this.xp > 250) {
            this.hpPlayer -= 1;
        }
    }
    hpplayer() {
        return this.hpPlayer;
    }
}