class Collision {
    constructor(bulletsPlayer, bulletsBoss, hpplayer, hpboss) {
        this.bulletPositions = bulletsPlayer.map(bullet => ({ x: bullet.x, y: bullet.y }));
        this.bullBoss = bulletsBoss.map(bullet => ({ x: bullet.x, y: bullet.y }));
        this.hpplayer = hpplayer;
        this.hpboss = hpboss;
    }

    checkBulletCollision(boss) {
        this.bulletPositions = this.bulletPositions.filter(position => {
            const distance = Math.sqrt((position.x - boss.x) ** 2 + (position.y - boss.y) ** 2);
            if (distance < (boss.rad + 5)) { // Giả sử bán kính của viên đạn là 5
                this.hpboss -= 1; // Giảm HP của boss
                return false; // Xóa viên đạn khỏi danh sách
            }
            return true; // Giữ lại viên đạn nếu không va chạm
        });
    }
    checkBulletBoss(player) {
        this.bullBoss = this.bullBoss.filter(position => {
            const distance = Math.sqrt((position.x - player.x) ** 2 + (position.y - player.y) ** 2);
            if (distance < (player.rad + 10)) { // Giả sử bán kính của viên đạn là 5
                this.hpplayer -= 1; // Giảm HP của player
                return false; // Xóa viên đạn khỏi danh sách
            }
            return true; // Giữ lại viên đạn nếu không va chạm
        });
    }
    checkSkillPlayer(boss,player) {
        if(player.x - 70 < boss.x + 50 && player.y - 450 < boss.y + 50 && player.x - 70 + 150 > boss.x  ) {
            this.hpboss -= 2; 
        }
    }
    checkSkillBoss(player) {
        const points = [
            {x: 100, y: 270},
            {x: 100, y: 470},
            {x: 400, y: 270},
            {x: 400, y: 470},
            {x: 250, y: 270},
            {x: 250, y: 420}
        ];
        const pointrad = 65;
        for ( const point of points) {
            const distance = Math.sqrt((point.x - player.x) ** 2 + (point.y - player.y) ** 2);
            if (distance < (pointrad + player.rad)) {
                this.hpplayer -= 0.1;
            }
        }
    }
    checkBulletCrep(bullet,crep){
        let xc = crep.x - 35;
        let yc = crep.y - 35;
        const distance = Math.sqrt((bullet.x - xc) ** 2 + (bullet.y - yc) ** 2);
        if (distance < (crep.rad + 5)) {
            return true;
        }
        return false;
    }
    hpPlayer() {
        return this.hpplayer;
    }
    hpBoss() {
        return this.hpboss;
    }
        // Hàm để lấy danh sách viên đạn còn lại
    getRemainingBullets() {        
        return this.bulletPositions; // Trả về danh sách viên đạn còn lại
    }
}