class GameManager {
    constructor(hpplayer, hpboss, p , b) {
        this.xp = p.x;
        this.yp = p.y;
        this.xb = b.x;
        this.yb = b.y;
        this.score = 0;
        this.hpPlayer = hpplayer;
        this.hpBoss = hpboss;
        this.state = 'playing';
    }
    setState(newState) {
        this.state = newState;
    }
    state() {
        return this.state;
    }

    resetGame() {
        this.state = 'playing';
        document.getElementById('button').style.display = 'none'; // Ẩn nút khi khởi động lại

    }

    draw(context,score,bps,lvboss) {
        context.fillStyle = 'red';
        context.font = '30px Arial';
        context.fillText('SCORE: ' + score, 550, 100);
        context.fillText('POWER: ' + bps, 550, 150);
        context.fillText('LV BOSS: ' + lvboss, 550, 200);
        context.fillText('HP PLAYER: ' + this.hpPlayer, 550, 250);
        context.fillText('HP BOSS: ' + this.hpBoss, 550, 300);
    }
}