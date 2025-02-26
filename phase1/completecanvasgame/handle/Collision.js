class Collision {
    constructor(bulletsPlayer, bulletsBoss, hpplayer, hpboss) {
        this.bulletPositions = bulletsPlayer.map(bullet => ({ x: bullet.x, y: bullet.y }));
        this.bullBoss = bulletsBoss.map(bullet => ({ x: bullet.x, y: bullet.y }));
        this.hpplayer = hpplayer;
        this.hpboss = hpboss;
        this.bulletCollisionPlayer = [];
        this.bulletCollisionBoss = [];
    }
    // updateBossBullets(bulletsBoss) {
    //     this.bullBoss = bulletsBoss.map(bullet => ({ x: bullet.x, y: bullet.y }));
    // }
    listBulletCollisionPlayer() {
        return this.bulletCollisionPlayer;
    }
    listBulletCollisionBoss() {
        return this.bulletCollisionBoss;
    }
    checkBulletCollision(boss) {
        let collision = false;
        this.bulletPositions = this.bulletPositions.filter(position => {
            const distance = Math.sqrt((position.x - boss.x) ** 2 + (position.y - boss.y) ** 2);
            if (distance < (boss.rad + 5)) { // Giả sử bán kính của viên đạn là 5
                this.hpboss -= 1; // Giảm HP của boss
                collision = true;
                this.bulletCollisionPlayer.push({x: position.x, y: position.y});
            }
        });
        return collision;
    }
    checkBulletBoss(player) {
        let collision = false;
        this.bullBoss = this.bullBoss.filter(position => {
            const distance = Math.sqrt((position.x - player.x) ** 2 + (position.y - player.y) ** 2);
            if (distance < (player.rad + 10)) { // Giả sử bán kính của viên đạn là 5
                this.hpplayer -= 1; // Giảm HP của player
                collision = true;
                console.log("đạn va chạm:", position) ;
                this.bulletCollisionBoss.push({x: position.x, y: position.y});
                console.log(this.bulletCollisionBoss);
            }
        });
        return collision;
    }
    checkSkillPlayer(boss,player) {
        if(player.x - 70 < boss.x + 50 && player.y - 450 < boss.y + 50 && player.x - 70 + 150 > boss.x  ) {
            this.hpboss -= 2; 
        }
    }
    checkSkillBoss(player) {
        const points = [
            {x: 300, y: 320},
            {x: 500, y: 520},
            {x: 700, y: 320},
            {x: 900, y: 520},
            {x: 1100, y: 320},
            {x: 1300, y: 520}
        ];
        const pointrad = 65;
        for ( const point of points) {
            const distance = Math.sqrt((point.x - player.x) ** 2 + (point.y - player.y) ** 2);
            if (distance < (pointrad 
                + player.rad)) {
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
    checkBulletCrepPlayer(bullet,crep){
        let xc = crep.x - 15;
        let yc = crep.y - 15;
        const distance = Math.sqrt((bullet.x - xc) ** 2 + (bullet.y - yc) ** 2);
        if (distance < (crep.rad + 5)) {
            //console.log("đạn va chạm:", bullet) ;
            this.hpplayer -= 1;
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