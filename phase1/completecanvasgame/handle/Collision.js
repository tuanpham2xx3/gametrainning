class Collision {
    constructor(player, boss, bulletsPlayer, bulletsBoss) {
        this.xp = player.x;
        this.yp = player.y;
        this.xb = boss.x;
        this.yp = boss.y;
        this.xbp = bulletsPlayer.x;
        this.ybp = bulletsPlayer.y;
        this.xbb = bulletsBoss.x;
        this.ybb = bulletsBoss.y
        this.hpplayer = player.hp;
        this.hpboss = boss.hp
    }
    
    isPlayerbulletBoss() {

    }
    isPlayerBoss() {

    }
    isBossbulletPlayer() {

    }

    checkCollison() {
        
    }

}